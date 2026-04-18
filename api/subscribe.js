export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const API_KEY = process.env.MAILERSEND_API_KEY;
  if (!API_KEY) return res.status(500).json({ error: 'MailerSend API key not configured' });

  const { email, name } = req.body || {};
  if (!email) return res.status(400).json({ error: 'Email is required' });

  try {
    const msRes = await fetch('https://api.mailersend.com/v1/email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`,
      },
      body: JSON.stringify({
        from: { email: 'hola@daninavarro.com.ar', name: 'Dani Navarro' },
        to: [{ email, name: name || '' }],
        subject: '🌿 Tu Mapa de Bienestar Interior está listo',
        html: `
<div style="font-family:sans-serif;max-width:560px;margin:0 auto;color:#2C2A25">
  <h2 style="color:#4A6B52">Hola${name ? ` ${name}` : ''}! 👋</h2>
  <p>Gracias por completar el <strong>Mapa de Bienestar Interior</strong>.</p>
  <p>En los próximos días vas a recibir en este email micro-acciones basadas en ciencia para trabajar tus áreas prioritarias. Pequeñas, concretas y accionables.</p>
  <p>Si no ves los próximos mails, revisá la carpeta de spam o promos y marcalos como "no es spam" para que lleguen directo.</p>
  <p style="margin-top:32px">Con cariño,<br><strong>Dani Navarro</strong></p>
</div>`,
        text: `Hola${name ? ` ${name}` : ''}!\n\nGracias por completar el Mapa de Bienestar Interior.\n\nEn los próximos días vas a recibir micro-acciones basadas en ciencia para tus áreas prioritarias.\n\nSi no ves los próximos mails, revisá spam y marcalos como "no es spam".\n\nCon cariño,\nDani Navarro`,
      }),
    });

    const responseText = await msRes.text();

    if (!msRes.ok) {
      console.error('MailerSend error:', msRes.status, responseText);
      return res.status(msRes.status).json({ error: responseText });
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('MailerSend error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
