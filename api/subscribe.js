export default async function handler(req, res) {
  // CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const API_KEY = process.env.MAILERLITE_API_KEY;
  if (!API_KEY) return res.status(500).json({ error: 'MailerLite API key not configured' });

  try {
    const { email, name, group_id, fields } = req.body;
    if (!email) return res.status(400).json({ error: 'Email is required' });

    // 1. Create/update subscriber with fields
    const subRes = await fetch('https://connect.mailerlite.com/api/subscribers', {
      method: 'POST',
      headers: {
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${API_KEY}`,
},
body: JSON.stringify({
  email,
  fields: { name: name || '', ...fields },
  groups: [],
}),    const subData = await subRes.json();

    if (!subRes.ok) {
      return res.status(subRes.status).json({ error: subData.message || 'MailerLite error' });
    }

    return res.status(200).json({ success: true, subscriber_id: subData.data?.id });
  } catch (error) {
    console.error('MailerLite error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
