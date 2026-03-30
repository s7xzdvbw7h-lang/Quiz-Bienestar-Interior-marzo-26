export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' });

  const { key } = req.query;
  const SECRET = process.env.DASHBOARD_KEY || 'menteviva2026';
  if (key !== SECRET) return res.status(401).json({ error: 'No autorizado' });

  const API_KEY = process.env.MAILERLITE_API_KEY;
  if (!API_KEY) return res.status(500).json({ error: 'API key not configured' });

  try {
    const groupId = '182793529890702703';
    const response = await fetch(
      `https://connect.mailerlite.com/api/groups/${groupId}/subscribers?limit=100`,
      { headers: { 'Authorization': `Bearer ${API_KEY}`, 'Content-Type': 'application/json' } }
    );
    const data = await response.json();
    if (!response.ok) return res.status(response.status).json({ error: data.message });

    const pacientes = (data.data || [])
      .filter(s => s.email !== 'test@test.com')
      .map(s => ({
        id: s.id, nombre: s.fields?.name || '—', email: s.email, fecha: s.subscribed_at,
        scores: {
          sueno: parseInt(s.fields?.quiz_sueno) || 0,
          alimentacion: parseInt(s.fields?.quiz_alimentacion) || 0,
          movimiento: parseInt(s.fields?.quiz_movimiento) || 0,
          estres: parseInt(s.fields?.quiz_estres) || 0,
          emocional: parseInt(s.fields?.quiz_emocional) || 0,
          naturaleza: parseInt(s.fields?.quiz_naturaleza) || 0,
          vinculos: parseInt(s.fields?.quiz_vinculos) || 0,
          suplementacion: parseInt(s.fields?.quiz_suplementacion) || 0,
          digital: parseInt(s.fields?.quiz_digital) || 0,
        },
        promedio: parseFloat(s.fields?.quiz_promedio) || 0,
        emails_sent: s.sent || 0, opens: s.opens_count || 0, status: s.status,
      }));
    return res.status(200).json({ success: true, total: pacientes.length, pacientes });
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ error: 'Error interno' });
  }
}
