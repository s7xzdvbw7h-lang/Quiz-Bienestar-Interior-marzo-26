import { AREAS, TIPS, LABELS } from "../shared/content.js";

const COLORS = ["#E8738A", "#F4A7B4", "#E8D87A", "#7FD6C9", "#3BC4B2"];
const TXT_COLORS = ["#B8455E", "#B8455E", "#7A6A10", "#1F7F72", "#1F7F72"];
const BG_COLORS = ["#FFF0F3", "#FFF0F3", "#FFFBE6", "#F0FAF7", "#F0FAF7"];

const MAILERLITE_GROUP_ID = "182793529890702703";
const IG_URL = "https://www.instagram.com/daninavarro.bienestar";
const ALLOWED_ORIGINS = [
  "https://quiz-bienestar-interior-marzo-26.vercel.app",
  "https://daninavarro.com.ar",
  "https://www.daninavarro.com.ar",
];
const esc = (v) => String(v ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const clampScore = (v) => { const n = Math.round(Number(v)); return Number.isFinite(n) ? Math.min(5, Math.max(0, n)) : 0; };
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function getMotivationalMsg(avg) {
  if (avg <= 2)   return "Tu bienestar necesita atención consciente. Pero el primer paso es darte cuenta — y ya lo diste.";
  if (avg <= 3)   return "Hay áreas importantes que necesitan tu atención. Cambios pequeños y consistentes generan transformaciones grandes.";
  if (avg <= 3.5) return "Tenés una base con oportunidades claras. Trabajar tus puntos más bajos puede elevar todo tu bienestar.";
  if (avg <= 4)   return "Estás en buen camino. Tu compromiso con el autoconocimiento ya te diferencia.";
  if (avg <= 4.5) return "Muy buen nivel de bienestar. Tenés bases sólidas, podés enfocarte en pulir los detalles.";
  return "Resultados excepcionales. Tu dedicación al bienestar integral se refleja en cada área.";
}

function buildEmailHtml(name, scores, avgScore) {
  const sorted = [...AREAS].sort((a, b) => (scores[a.id] || 0) - (scores[b.id] || 0));
  const priorities = sorted.slice(0, 3);
  const strengths = AREAS.filter(a => (scores[a.id] || 0) >= 4);

  const priorityCards = priorities.map((area, idx) => {
    const sc = scores[area.id] || 1;
    const tip = TIPS[area.id]?.[sc - 1] || "";
    const color = COLORS[sc - 1];
    const bgColor = BG_COLORS[sc - 1];
    const label = LABELS[sc - 1];
    return `
      <div style="background:#ffffff;border:1.5px solid #F6D9DF;border-radius:14px;padding:18px 20px;margin-bottom:12px;border-left:4px solid ${color}">
        <div style="font-size:10px;font-weight:700;color:#B8455E;text-transform:uppercase;letter-spacing:0.08em;margin-bottom:8px">Prioridad ${idx + 1}</div>
        <div style="display:flex;align-items:center;gap:10px;margin-bottom:10px">
          <span style="font-size:22px">${area.icon}</span>
          <div>
            <div style="font-family:'Playfair Display',Georgia,serif;font-size:16px;font-weight:600;color:#1A1A1A;margin-bottom:4px">${area.name}</div>
            <span style="font-size:11px;font-weight:600;padding:2px 10px;border-radius:20px;background:${bgColor};color:${TXT_COLORS[sc - 1]}">${label} &middot; ${sc}/5</span>
          </div>
        </div>
        <div style="background:#FFF8FA;border-radius:10px;padding:12px 14px;display:flex;gap:10px">
          <span style="font-size:16px;flex-shrink:0">💡</span>
          <p style="font-size:13px;line-height:1.6;color:#4A4742;margin:0">${tip}</p>
        </div>
      </div>`;
  }).join("");

  const strengthItems = strengths.length > 0
    ? strengths.map(a => `<span style="display:inline-flex;align-items:center;gap:6px;background:#ffffff;border:1.5px solid #BFE9E2;border-radius:20px;padding:5px 14px;margin:4px;font-size:13px;color:#1A1A1A">${a.icon} ${a.name} <strong style="color:#E8738A">${scores[a.id]}/5</strong></span>`).join("")
    : `<p style="font-size:13px;color:#555555;margin:0">Seguí trabajando — ¡las fortalezas se construyen con constancia!</p>`;

  return `<!DOCTYPE html>
<html lang="es">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Tu Mapa de Bienestar Interior</title></head>
<body style="margin:0;padding:0;background:#FFF0F3;font-family:'Poppins',Helvetica,Arial,sans-serif;color:#1A1A1A">
  <div style="max-width:560px;margin:0 auto;padding:32px 16px 48px">

    <!-- Header -->
    <div style="text-align:center;margin-bottom:28px">
      <div style="display:inline-block;background:#FFE3E9;color:#555555;font-size:10px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;padding:5px 16px;border-radius:40px;margin-bottom:16px">Autoconocimiento y longevidad · Edición 2026</div>
      <h1 style="font-family:'Playfair Display',Georgia,serif;font-size:30px;font-weight:600;color:#1A1A1A;margin:0 0 6px;line-height:1.2">Mapa de Bienestar Interior</h1>
      <p style="font-size:14px;color:#6F6A66;margin:0">by <strong style="color:#555555">Dani Navarro</strong></p>
    </div>

    <!-- Greeting -->
    <p style="font-size:15px;line-height:1.65;color:#4A4742;margin:0 0 24px">Hola <strong>${esc(name)}</strong>! 👋 Completaste tu Mapa de Bienestar Interior. Acá están tus resultados y un primer paso concreto para esta semana.</p>

    <!-- Score -->
    <div style="background:#ffffff;border:1.5px solid #F6D9DF;border-radius:16px;padding:28px 20px;text-align:center;margin-bottom:20px">
      <p style="font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:#6F6A66;margin:0 0 14px">Tu puntaje general</p>
      <div style="display:inline-block;background:#F0FAF7;border:2px solid #BFE9E2;border-radius:50%;width:88px;height:88px;line-height:88px;text-align:center">
        <span style="font-family:'Playfair Display',Georgia,serif;font-size:34px;font-weight:700;color:#E8738A">${avgScore}</span><span style="font-size:13px;color:#6F6A66">/5</span>
      </div>
      <p style="font-size:14px;line-height:1.6;color:#555555;max-width:380px;margin:14px auto 0">${getMotivationalMsg(parseFloat(avgScore))}</p>
    </div>

    <!-- Scores grid -->
    <div style="background:#ffffff;border:1.5px solid #F6D9DF;border-radius:16px;padding:20px;margin-bottom:20px">
      <p style="font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:#6F6A66;margin:0 0 14px">Resultados por área</p>
      <table style="width:100%;border-collapse:collapse">
        ${AREAS.map(area => {
          const sc = scores[area.id] || 1;
          const color = COLORS[sc - 1];
          const pct = (sc / 5) * 100;
          return `<tr style="border-bottom:1px solid #F2F0EB">
            <td style="padding:8px 0;width:36px;font-size:16px">${area.icon}</td>
            <td style="padding:8px 8px 8px 0;font-size:13px;color:#1A1A1A">${area.name}</td>
            <td style="padding:8px 0;width:120px">
              <div style="height:5px;border-radius:3px;background:#F2F0EB;overflow:hidden">
                <div style="height:100%;border-radius:3px;background:${color};width:${pct}%"></div>
              </div>
            </td>
            <td style="padding:8px 0 8px 10px;width:36px;text-align:right;font-size:12px;font-weight:700;color:${color}">${sc}/5</td>
          </tr>`;
        }).join("")}
      </table>
    </div>

    <!-- Priorities -->
    <h2 style="font-family:'Playfair Display',Georgia,serif;font-size:20px;font-weight:600;color:#1A1A1A;margin:0 0 6px">Tus 3 áreas prioritarias</h2>
    <p style="font-size:13px;color:#6F6A66;margin:0 0 14px">Con el primer paso concreto para esta semana</p>
    ${priorityCards}

    <!-- Strengths -->
    ${strengths.length > 0 ? `
    <div style="background:#F0FAF7;border:1.5px solid #BFE9E2;border-radius:14px;padding:18px 20px;margin-top:8px;margin-bottom:24px">
      <p style="font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:#E8738A;margin:0 0 10px">✨ Tus fortalezas (${strengths.length > 1 ? "áreas" : "área"} con puntaje ≥ 4)</p>
      <div>${strengthItems}</div>
      <p style="font-size:12.5px;color:#1F6F64;margin:10px 0 0;line-height:1.5">Estas áreas son un pilar sólido de tu bienestar. Usalas como base para trabajar en las demás.</p>
    </div>` : `<div style="margin-bottom:24px"></div>`}

    <!-- What's next -->
    <div style="background:#ffffff;border:2px solid #E8738A;border-radius:16px;padding:22px 20px;text-align:center;margin-bottom:24px">
      <span style="font-size:26px">📬</span>
      <h3 style="font-family:'Playfair Display',Georgia,serif;font-size:17px;font-weight:600;color:#1A1A1A;margin:8px 0 8px">Esto recién empieza</h3>
      <p style="font-size:13px;line-height:1.6;color:#555555;margin:0">En los próximos días te llegan micro-acciones para tus áreas prioritarias. Revisá tu bandeja (y spam, por las dudas) y marcalos como <strong>"no es spam"</strong> para que lleguen siempre.</p>
    </div>

    <!-- CTA -->
    <div style="text-align:center;margin-bottom:28px">
      <p style="font-size:13px;line-height:1.6;color:#555555;margin:0 0 14px">¿Querés acompañamiento paso a paso? Escribime y te cuento cómo es el Reto REPARA de 7 días.</p>
      <a href="${IG_URL}" style="display:inline-block;background:#E8738A;color:#ffffff;text-decoration:none;font-weight:600;font-size:14px;padding:13px 28px;border-radius:12px">Escribime por Instagram</a>
      <p style="font-size:12px;color:#6F6A66;margin:10px 0 0">@daninavarro.bienestar</p>
    </div>

    <!-- Sign off -->
    <p style="font-size:14px;line-height:1.7;color:#4A4742;margin:0 0 4px">Con cariño,</p>
    <p style="font-family:'Playfair Display',Georgia,serif;font-size:18px;font-weight:600;color:#1A1A1A;margin:0 0 32px">Dani Navarro 🌿</p>

    <!-- Footer -->
    <div style="border-top:1px solid #F6D9DF;padding-top:16px;text-align:center">
      <p style="font-size:11px;color:#8A8480;margin:0">Mapa de Bienestar Interior &middot; by Dani Navarro</p>
      <p style="font-size:10.5px;line-height:1.5;color:#6F6A66;margin:8px 0 0">Este mapa es una herramienta de autoconocimiento. No es un diagnóstico ni reemplaza la atención médica, nutricional o psicológica.</p>
      <p style="font-size:10.5px;line-height:1.5;color:#6F6A66;margin:8px 0 0">Recibís este mail porque completaste el quiz y aceptaste recibir contenido de Dani Navarro. Podés darte de baja cuando quieras desde los mails de la secuencia, o respondiendo "baja" a este mensaje.</p>
      <p style="font-size:10px;color:#8A8480;opacity:0.8;margin:6px 0 0">Herramienta de autoconocimiento, no reemplaza la atención profesional</p>
    </div>

  </div>
</body>
</html>`;
}

export default async function handler(req, res) {
  const origin = req.headers.origin;
  if (origin && ALLOWED_ORIGINS.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
    res.setHeader('Vary', 'Origin');
  }
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(204).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  if (origin && !ALLOWED_ORIGINS.includes(origin)) return res.status(403).json({ error: 'Forbidden' });

  const MAILERSEND_KEY = process.env.MAILERSEND_API_KEY;
  const MAILERLITE_KEY = process.env.MAILERLITE_API_KEY;
  if (!MAILERSEND_KEY || !MAILERLITE_KEY) return res.status(500).json({ error: 'Server not configured' });

  const body = req.body || {};
  // Honeypot: bots fill the hidden field. Pretend success, do nothing.
  if (body.website) return res.status(200).json({ success: true });

  const email = String(body.email || '').trim().toLowerCase();
  const name = String(body.name || '').replace(/[<>]/g, '').trim().slice(0, 60);
  if (!email || email.length > 254 || !EMAIL_RE.test(email)) return res.status(400).json({ error: 'Invalid email' });
  if (!name) return res.status(400).json({ error: 'Name is required' });

  const f = body.fields || {};
  const scores = {
    sueno: clampScore(f.quiz_sueno), alimentacion: clampScore(f.quiz_alimentacion),
    movimiento: clampScore(f.quiz_movimiento), estres: clampScore(f.quiz_estres),
    emocional: clampScore(f.quiz_emocional), naturaleza: clampScore(f.quiz_naturaleza),
    vinculos: clampScore(f.quiz_vinculos), suplementacion: clampScore(f.quiz_suplementacion),
    digital: clampScore(f.quiz_digital),
  };
  const vals = Object.values(scores);
  if (vals.some((v) => v < 1)) return res.status(400).json({ error: 'Incomplete quiz' });
  const avgScore = (vals.reduce((a, b) => a + b, 0) / vals.length).toFixed(1);

  const safeFields = {
    name,
    quiz_sueno: scores.sueno, quiz_alimentacion: scores.alimentacion, quiz_movimiento: scores.movimiento,
    quiz_estres: scores.estres, quiz_emocional: scores.emocional, quiz_naturaleza: scores.naturaleza,
    quiz_vinculos: scores.vinculos, quiz_suplementacion: scores.suplementacion, quiz_digital: scores.digital,
    quiz_promedio: parseFloat(avgScore),
  };

  // 1. MailerLite: subscriber + group (triggers the welcome automation)
  let mlOk = false;
  try {
    const mlRes = await fetch('https://connect.mailerlite.com/api/subscribers', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${MAILERLITE_KEY}`, 'Accept': 'application/json' },
      body: JSON.stringify({ email, fields: safeFields, groups: [MAILERLITE_GROUP_ID] }),
    });
    mlOk = mlRes.ok;
    if (!mlRes.ok) console.error('MailerLite error:', mlRes.status, await mlRes.text());
  } catch (e) { console.error('MailerLite fetch error:', e.message); }

  // 2. MailerSend: results email
  let msOk = false;
  try {
    const textBody = `Hola ${name}!\n\nTu puntaje general: ${avgScore}/5\n\n${getMotivationalMsg(parseFloat(avgScore))}\n\nResultados:\n${AREAS.map(a => `${a.name}: ${scores[a.id]}/5`).join('\n')}\n\nSi querés acompañamiento: ${IG_URL}\n\nEste mapa es una herramienta de autoconocimiento y no reemplaza la atención profesional.\n\nCon cariño,\nDani Navarro`;
    const msRes = await fetch('https://api.mailersend.com/v1/email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${MAILERSEND_KEY}` },
      body: JSON.stringify({
        from: { email: 'hola@daninavarro.com.ar', name: 'Dani Navarro' },
        reply_to: { email: 'hola@daninavarro.com.ar', name: 'Dani Navarro' },
        to: [{ email, name }],
        subject: '🌿 Tu Mapa de Bienestar Interior está listo',
        html: buildEmailHtml(name, scores, avgScore),
        text: textBody,
      }),
    });
    msOk = msRes.ok;
    if (!msRes.ok) console.error('MailerSend error:', msRes.status, await msRes.text());
  } catch (e) { console.error('MailerSend fetch error:', e.message); }

  // Only report failure when nothing reached the person
  if (!mlOk && !msOk) return res.status(502).json({ error: 'Delivery failed' });
  return res.status(200).json({ success: true });
}
