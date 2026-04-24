const AREAS = [
  { id: "sueno",         name: "Sueño Reparador",             icon: "🌙" },
  { id: "alimentacion",  name: "Alimentación Consciente",     icon: "🥗" },
  { id: "movimiento",    name: "Movimiento Diario",           icon: "🏃" },
  { id: "estres",        name: "Gestión del Estrés",          icon: "🧘‍♀️" },
  { id: "emocional",     name: "Salud Emocional",             icon: "💜" },
  { id: "naturaleza",    name: "Conexión con la Naturaleza",  icon: "🌿" },
  { id: "vinculos",      name: "Vínculos y Propósito",        icon: "🤝" },
  { id: "suplementacion",name: "Suplementación Inteligente",  icon: "💊" },
  { id: "digital",       name: "Higiene Digital",             icon: "📱" },
];

const TIPS = {
  sueno:         ["Elegí una hora fija para acostarte y mantenela toda la semana — incluyendo fines de semana. La consistencia importa más que la cantidad.","Creá una rutina pre-sueño: 60 min antes empezá a bajar luces y dejá el celular fuera del cuarto.","Sumá el 'protocolo de luz': exponete a sol natural en los primeros 30 min del día para sincronizar tu reloj biológico.","Optimizá tu ambiente: cuarto oscuro, temperatura 18-20°C, sin pantallas en la habitación.","Experimentá con un diario de sueño para identificar qué hábitos mejoran tu descanso y cuáles lo sabotean."],
  alimentacion:  ["Sumá una porción de vegetales verdes a una comida por día. Un solo cambio sostenido ya genera impacto real.","Reemplazá un ultraprocesado por día con comida real: fruta, frutos secos, huevo o legumbres.","Probá definir una ventana de alimentación de 12hs (ej: desayunás a las 8 → cenás antes de las 20).","Sumá más proteína de calidad y grasas saludables: palta, aceite de oliva, frutos secos.","Seguí escuchando a tu cuerpo. Podés experimentar con nuevos alimentos o recetas que te nutran más."],
  movimiento:    ["Empezá caminando 15 min al día. Es la intervención con mejor relación esfuerzo-resultado según la evidencia.","Sumá una actividad que disfrutes 2 veces por semana. No tiene que ser el gym: bailar, nadar o bici cuentan.","Incorporá algo de fuerza: sentadillas, flexiones o bandas elásticas. Tu masa muscular es clave para la longevidad.","Agregá 10 min de movilidad y estiramientos post-entreno. Previene lesiones y mejora la recuperación.","Desafiate: ¿podés subir 4 pisos sin agitarte? ¿Levantarte del piso sin manos? Tests funcionales reales."],
  estres:        ["Probá la respiración 4-7-8 (inhalar 4s, retener 7s, exhalar 8s) tres veces antes de cada comida. Son 60 segundos.","Elegí UNA práctica de regulación y dedicale 5 min diarios: respiración, journaling o caminata sin celular.","Identificá tus 3 mayores fuentes de estrés y anotá una pequeña acción para cada una esta semana.","Sumá prácticas de recuperación activa: tiempo en naturaleza, meditación guiada o contacto con agua fría.","Compartí lo que aprendiste. Enseñar una técnica consolida el hábito y multiplica el impacto."],
  emocional:     ["Empezá un mini-diario emocional: 3 min al día escribiendo qué sentiste y qué lo disparó.","Practicá nombrar tus emociones en voz alta. Ponerle nombre reduce su intensidad automáticamente.","Explorá un espacio de acompañamiento (terapia, coaching) como lugar seguro para profundizar.","Sumá prácticas somáticas: yoga, breathwork o meditación con foco en las sensaciones corporales.","Tu inteligencia emocional es un activo enorme. Podés usarla para acompañar a otros en su proceso."],
  naturaleza:    ["Salí a caminar 20 min en un espacio verde esta semana. Suficiente para reducir cortisol mediblemente.","Almorzá afuera cuando puedas o caminá descalzo/a en pasto. Las dosis pequeñas cuentan.","Convertí una actividad semanal en outdoor: caminata, lectura en un parque, mate al sol.","Llevá tu práctica de ejercicio o meditación al aire libre cuando el clima lo permita.","Probá una inmersión larga en naturaleza (2+ horas) al menos una vez al mes."],
  vinculos:      ["Esta semana escribile a una persona que valorás. No un 'hola qué tal' — algo genuino y personal.","Priorizá una conversación profunda por semana con alguien importante. Sin celular en la mesa.","Considerá sumarte a un grupo o comunidad alineada con algo que te interese.","Profundizá con más vulnerabilidad y presencia. Son el combustible de las relaciones reales.","Seguí nutriendo tu red con intención. Tus relaciones son tu mayor activo de salud según la ciencia."],
  suplementacion:["Antes de tomar suplementos, hacete un análisis de sangre completo. Sin datos, estás adivinando.","Los 3 con más evidencia: vitamina D (si no tomás sol), magnesio y omega-3. Consultá dosis con un profesional.","Revisá lo que tomás con un profesional para validar si realmente lo necesitás según tus niveles.","Actualizá tu protocolo cada 6 meses con nuevos análisis. Tu cuerpo cambia constantemente.","Tu enfoque basado en datos es excelente. Seguí ajustando con información real y profesional."],
  digital:       ["Sacá el celular del cuarto a la noche. Si lo usás como alarma, invertí en un reloj despertador.","Desactivá notificaciones no esenciales. Cada interrupción te saca del foco por hasta 23 minutos.","Definí una 'zona libre de pantallas' en tu casa: la mesa de comer, tu cuarto, o ambos.","Sumá momentos sin estímulo digital: tu cerebro necesita esos espacios para entrar en modo reparación.","Tu relación con la tecnología es saludable. Compartí tus estrategias con alguien que lo necesite."],
};

const LABELS = ["Necesita atención", "En riesgo", "En desarrollo", "Buen camino", "Fortaleza"];
const COLORS = ["#C75B4A", "#D4895A", "#D4A84A", "#6BAF7B", "#3D9060"];
const BG_COLORS = ["#FEF2F0", "#FFF5EE", "#FFF9EC", "#F0F8F2", "#E8F5EC"];

const MAILERLITE_GROUP_ID = "182793529890702703";

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
      <div style="background:#ffffff;border:1.5px solid #EBE8E2;border-radius:14px;padding:18px 20px;margin-bottom:12px;border-left:4px solid ${color}">
        <div style="font-size:10px;font-weight:700;color:#C75B4A;text-transform:uppercase;letter-spacing:0.08em;margin-bottom:8px">Prioridad ${idx + 1}</div>
        <div style="display:flex;align-items:center;gap:10px;margin-bottom:10px">
          <span style="font-size:22px">${area.icon}</span>
          <div>
            <div style="font-family:Georgia,serif;font-size:16px;font-weight:600;color:#2C2A25;margin-bottom:4px">${area.name}</div>
            <span style="font-size:11px;font-weight:600;padding:2px 10px;border-radius:20px;background:${bgColor};color:${color}">${label} &middot; ${sc}/5</span>
          </div>
        </div>
        <div style="background:#FAFAF7;border-radius:10px;padding:12px 14px;display:flex;gap:10px">
          <span style="font-size:16px;flex-shrink:0">💡</span>
          <p style="font-size:13px;line-height:1.6;color:#4A4742;margin:0">${tip}</p>
        </div>
      </div>`;
  }).join("");

  const strengthItems = strengths.length > 0
    ? strengths.map(a => `<span style="display:inline-flex;align-items:center;gap:6px;background:#ffffff;border:1.5px solid #D0E8D6;border-radius:20px;padding:5px 14px;margin:4px;font-size:13px;color:#2C2A25">${a.icon} ${a.name} <strong style="color:#3D9060">${scores[a.id]}/5</strong></span>`).join("")
    : `<p style="font-size:13px;color:#6B6560;margin:0">Seguí trabajando — ¡las fortalezas se construyen con constancia!</p>`;

  return `<!DOCTYPE html>
<html lang="es">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Tu Mapa de Bienestar Interior</title></head>
<body style="margin:0;padding:0;background:#FAF9F6;font-family:'DM Sans',Helvetica,Arial,sans-serif;color:#2C2A25">
  <div style="max-width:560px;margin:0 auto;padding:32px 16px 48px">

    <!-- Header -->
    <div style="text-align:center;margin-bottom:28px">
      <div style="display:inline-block;background:#EDEAE4;color:#6B6560;font-size:10px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;padding:5px 16px;border-radius:40px;margin-bottom:16px">Diagnóstico basado en ciencia de longevidad</div>
      <h1 style="font-family:Georgia,serif;font-size:30px;font-weight:600;color:#2C2A25;margin:0 0 6px;line-height:1.2">Mapa de Bienestar Interior</h1>
      <p style="font-size:14px;color:#9B9590;margin:0">by <strong style="color:#6B6560">Dani Navarro</strong></p>
    </div>

    <!-- Greeting -->
    <p style="font-size:15px;line-height:1.65;color:#4A4742;margin:0 0 24px">Hola <strong>${name}</strong>! 👋 Completaste tu diagnóstico. Acá están tus resultados personalizados con el plan de acción concreto para esta semana.</p>

    <!-- Score -->
    <div style="background:#ffffff;border:1.5px solid #EBE8E2;border-radius:16px;padding:28px 20px;text-align:center;margin-bottom:20px">
      <p style="font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:#9B9590;margin:0 0 14px">Tu puntaje general</p>
      <div style="display:inline-block;background:#E8F5EC;border:2px solid #D0E8D6;border-radius:50%;width:88px;height:88px;line-height:88px;text-align:center">
        <span style="font-family:Georgia,serif;font-size:34px;font-weight:700;color:#3D9060">${avgScore}</span><span style="font-size:13px;color:#9B9590">/5</span>
      </div>
      <p style="font-size:14px;line-height:1.6;color:#6B6560;max-width:380px;margin:14px auto 0">${getMotivationalMsg(parseFloat(avgScore))}</p>
    </div>

    <!-- Scores grid -->
    <div style="background:#ffffff;border:1.5px solid #EBE8E2;border-radius:16px;padding:20px;margin-bottom:20px">
      <p style="font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:#9B9590;margin:0 0 14px">Resultados por área</p>
      <table style="width:100%;border-collapse:collapse">
        ${AREAS.map(area => {
          const sc = scores[area.id] || 1;
          const color = COLORS[sc - 1];
          const pct = (sc / 5) * 100;
          return `<tr style="border-bottom:1px solid #F2F0EB">
            <td style="padding:8px 0;width:36px;font-size:16px">${area.icon}</td>
            <td style="padding:8px 8px 8px 0;font-size:13px;color:#2C2A25">${area.name}</td>
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
    <h2 style="font-family:Georgia,serif;font-size:20px;font-weight:600;color:#2C2A25;margin:0 0 6px">Tus 3 áreas prioritarias</h2>
    <p style="font-size:13px;color:#9B9590;margin:0 0 14px">Con el primer paso concreto para esta semana</p>
    ${priorityCards}

    <!-- Strengths -->
    ${strengths.length > 0 ? `
    <div style="background:#E8F5EC;border:1.5px solid #D0E8D6;border-radius:14px;padding:18px 20px;margin-top:8px;margin-bottom:24px">
      <p style="font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:#3D9060;margin:0 0 10px">✨ Tus fortalezas (${strengths.length > 1 ? "áreas" : "área"} con puntaje ≥ 4)</p>
      <div>${strengthItems}</div>
      <p style="font-size:12.5px;color:#4A6B52;margin:10px 0 0;line-height:1.5">Estas áreas son un pilar sólido de tu bienestar. Usalas como base para trabajar en las demás.</p>
    </div>` : `<div style="margin-bottom:24px"></div>`}

    <!-- What's next -->
    <div style="background:#ffffff;border:2px solid #3D9060;border-radius:16px;padding:22px 20px;text-align:center;margin-bottom:24px">
      <span style="font-size:26px">📬</span>
      <h3 style="font-family:Georgia,serif;font-size:17px;font-weight:600;color:#2C2A25;margin:8px 0 8px">Tu desafío de bienestar ya empezó</h3>
      <p style="font-size:13px;line-height:1.6;color:#6B6560;margin:0">En los próximos días vas a recibir micro-acciones basadas en ciencia para tus áreas prioritarias. Revisá tu bandeja (y spam, por las dudas) y marcalos como <strong>"no es spam"</strong> para que lleguen siempre.</p>
    </div>

    <!-- Sign off -->
    <p style="font-size:14px;line-height:1.7;color:#4A4742;margin:0 0 4px">Con cariño,</p>
    <p style="font-family:Georgia,serif;font-size:18px;font-weight:600;color:#2C2A25;margin:0 0 32px">Dani Navarro 🌿</p>

    <!-- Footer -->
    <div style="border-top:1px solid #EBE8E2;padding-top:16px;text-align:center">
      <p style="font-size:11px;color:#B5B0A8;margin:0">Mapa de Bienestar Interior &middot; by Dani Navarro</p>
      <p style="font-size:10px;color:#B5B0A8;opacity:0.6;margin:4px 0 0">Diagnóstico basado en ciencia de longevidad y bienestar</p>
    </div>

  </div>
</body>
</html>`;
}

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const MAILERSEND_KEY = process.env.MAILERSEND_API_KEY;
  const MAILERLITE_KEY = process.env.MAILERLITE_API_KEY;

  if (!MAILERSEND_KEY) return res.status(500).json({ error: 'MailerSend API key not configured' });
  if (!MAILERLITE_KEY) return res.status(500).json({ error: 'MailerLite API key not configured' });

  const { email, name, fields } = req.body || {};
  if (!email) return res.status(400).json({ error: 'Email is required' });

  const scores = {
    sueno:          fields?.quiz_sueno          || 0,
    alimentacion:   fields?.quiz_alimentacion   || 0,
    movimiento:     fields?.quiz_movimiento     || 0,
    estres:         fields?.quiz_estres         || 0,
    emocional:      fields?.quiz_emocional      || 0,
    naturaleza:     fields?.quiz_naturaleza     || 0,
    vinculos:       fields?.quiz_vinculos       || 0,
    suplementacion: fields?.quiz_suplementacion || 0,
    digital:        fields?.quiz_digital        || 0,
  };
  const avgScore = fields?.quiz_promedio
    ? parseFloat(fields.quiz_promedio).toFixed(1)
    : (Object.values(scores).reduce((a, b) => a + b, 0) / Object.values(scores).length).toFixed(1);

  // --- 1. MailerLite: create/update subscriber and assign to group ---
  try {
    const mlRes = await fetch('https://connect.mailerlite.com/api/subscribers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${MAILERLITE_KEY}`,
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        email,
        fields: {
          name: name || '',
          ...fields,
        },
        groups: [MAILERLITE_GROUP_ID],
      }),
    });
    if (!mlRes.ok) {
      const mlBody = await mlRes.text();
      console.error('MailerLite error:', mlRes.status, mlBody);
    }
  } catch (mlErr) {
    console.error('MailerLite fetch error:', mlErr);
  }

  // --- 2. MailerSend: send rich results email (non-fatal) ---
  try {
    const htmlBody = buildEmailHtml(name || '', scores, avgScore);
    const textBody = `Hola ${name || ''}!\n\nTu puntaje general: ${avgScore}/5\n\n${getMotivationalMsg(parseFloat(avgScore))}\n\nResultados:\n${AREAS.map(a => `${a.name}: ${scores[a.id] || 0}/5`).join('\n')}\n\nCon cariño,\nDani Navarro`;

    const msRes = await fetch('https://api.mailersend.com/v1/email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${MAILERSEND_KEY}`,
      },
      body: JSON.stringify({
        from: { email: 'hola@daninavarro.com.ar', name: 'Dani Navarro' },
        to: [{ email, name: name || '' }],
        subject: '🌿 Tu Mapa de Bienestar Interior está listo',
        html: htmlBody,
        text: textBody,
      }),
    });

    if (!msRes.ok) {
      const msBody = await msRes.text();
      console.error('MailerSend error:', msRes.status, msBody);
      // Non-fatal: MailerLite automation handles the email sequence
    } else {
      console.log('MailerSend OK: results email sent to', email);
    }
  } catch (msErr) {
    console.error('MailerSend fetch error:', msErr.message);
    // Non-fatal: continue anyway
  }

  return res.status(200).json({ success: true });
}
