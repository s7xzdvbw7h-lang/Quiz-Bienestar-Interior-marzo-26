const AREAS = [
  { id: "sueno",          name: "Sueño",          icon: "🌙" },
  { id: "alimentacion",   name: "Alimentación",    icon: "🥗" },
  { id: "movimiento",     name: "Movimiento",      icon: "🏃" },
  { id: "estres",         name: "Estrés",          icon: "🧘‍♀️" },
  { id: "emocional",      name: "Emociones",       icon: "💜" },
  { id: "naturaleza",     name: "Naturaleza",       icon: "🌿" },
  { id: "vinculos",       name: "Vínculos",         icon: "🤝" },
  { id: "suplementacion", name: "Suplementación",   icon: "💊" },
  { id: "digital",        name: "Digital",          icon: "📱" },
];

const COLORS = { 1: "#C75B4A", 2: "#D4895A", 3: "#D4A84A", 4: "#6BAF7B", 5: "#3D9060" };
const LABELS = { 1: "Necesita atención", 2: "En riesgo", 3: "En desarrollo", 4: "Buen camino", 5: "Fortaleza" };

const TIPS = {
  sueno: [
    "Elegí una hora fija para acostarte y mantenela toda la semana — incluyendo fines de semana. La consistencia importa más que la cantidad.",
    "Creá una rutina pre-sueño: 60 min antes empezá a bajar luces y dejá el celular fuera del cuarto.",
    "Sumá el 'protocolo de luz': exponete a sol natural en los primeros 30 min del día para sincronizar tu reloj biológico.",
    "Optimizá tu ambiente: cuarto oscuro, temperatura 18-20°C, sin pantallas en la habitación.",
    "Experimentá con un diario de sueño para identificar qué hábitos mejoran tu descanso y cuáles lo sabotean.",
  ],
  alimentacion: [
    "Sumá una porción de vegetales verdes a una comida por día. Un solo cambio sostenido ya genera impacto real.",
    "Reemplazá un ultraprocesado por día con comida real: fruta, frutos secos, huevo o legumbres.",
    "Probá definir una ventana de alimentación de 12hs (ej: desayunás a las 8 → cenás antes de las 20).",
    "Sumá más proteína de calidad y grasas saludables: palta, aceite de oliva, frutos secos.",
    "Seguí escuchando a tu cuerpo. Podés experimentar con nuevos alimentos o recetas que te nutran más.",
  ],
  movimiento: [
    "Empezá caminando 15 min al día. Es la intervención con mejor relación esfuerzo-resultado según la evidencia.",
    "Sumá una actividad que disfrutes 2 veces por semana. No tiene que ser el gym: bailar, nadar o bici cuentan.",
    "Incorporá algo de fuerza: sentadillas, flexiones o bandas elásticas. Tu masa muscular es clave para la longevidad.",
    "Agregá 10 min de movilidad y estiramientos post-entreno. Previene lesiones y mejora la recuperación.",
    "Desafiate: ¿podés subir 4 pisos sin agitarte? ¿Levantarte del piso sin manos? Tests funcionales reales.",
  ],
  estres: [
    "Probá la respiración 4-7-8 (inhalar 4s, retener 7s, exhalar 8s) tres veces antes de cada comida. Son 60 segundos.",
    "Elegí UNA práctica de regulación y dedicale 5 min diarios: respiración, journaling o caminata sin celular.",
    "Identificá tus 3 mayores fuentes de estrés y anotá una pequeña acción para cada una esta semana.",
    "Sumá prácticas de recuperación activa: tiempo en naturaleza, meditación guiada o contacto con agua fría.",
    "Compartí lo que aprendiste. Enseñar una técnica consolida el hábito y multiplica el impacto.",
  ],
  emocional: [
    "Empezá un mini-diario emocional: 3 min al día escribiendo qué sentiste y qué lo disparó.",
    "Practicá nombrar tus emociones en voz alta. Ponerle nombre reduce su intensidad automáticamente.",
    "Explorá un espacio de acompañamiento (terapia, coaching) como lugar seguro para profundizar.",
    "Sumá prácticas somáticas: yoga, breathwork o meditación con foco en las sensaciones corporales.",
    "Tu inteligencia emocional es un activo enorme. Podés usarla para acompañar a otros en su proceso.",
  ],
  naturaleza: [
    "Salí a caminar 20 min en un espacio verde esta semana. Suficiente para reducir cortisol mediblemente.",
    "Almorzá afuera cuando puedas o caminá descalzo/a en pasto. Las dosis pequeñas cuentan.",
    "Convertí una actividad semanal en outdoor: caminata, lectura en un parque, mate al sol.",
    "Llevá tu práctica de ejercicio o meditación al aire libre cuando el clima lo permita.",
    "Probá una inmersión larga en naturaleza (2+ horas) al menos una vez al mes.",
  ],
  vinculos: [
    "Esta semana escribile a una persona que valorás. No un 'hola qué tal' — algo genuino y personal.",
    "Priorizá una conversación profunda por semana con alguien importante. Sin celular en la mesa.",
    "Considerá sumarte a un grupo o comunidad alineada con algo que te interese.",
    "Profundizá con más vulnerabilidad y presencia. Son el combustible de las relaciones reales.",
    "Seguí nutriendo tu red con intención. Tus relaciones son tu mayor activo de salud según la ciencia.",
  ],
  suplementacion: [
    "Antes de tomar suplementos, hacete un análisis de sangre completo. Sin datos, estás adivinando.",
    "Los 3 con más evidencia: vitamina D (si no tomás sol), magnesio y omega-3. Consultá dosis con un profesional.",
    "Revisá lo que tomás con un profesional para validar si realmente lo necesitás según tus niveles.",
    "Actualizá tu protocolo cada 6 meses con nuevos análisis. Tu cuerpo cambia constantemente.",
    "Tu enfoque basado en datos es excelente. Seguí ajustando con información real y profesional.",
  ],
  digital: [
    "Sacá el celular del cuarto a la noche. Si lo usás como alarma, invertí en un reloj despertador.",
    "Desactivá notificaciones no esenciales. Cada interrupción te saca del foco por hasta 23 minutos.",
    "Definí una 'zona libre de pantallas' en tu casa: la mesa de comer, tu cuarto, o ambos.",
    "Sumá momentos sin estímulo digital: tu cerebro necesita esos espacios para entrar en modo reparación.",
    "Tu relación con la tecnología es saludable. Compartí tus estrategias con alguien que lo necesite.",
  ],
};

const AREA_DESC = {
  sueno: {
    bajo: "Tu descanso es una prioridad urgente. Sin sueño reparador, ningún otro hábito puede funcionar bien. Trabajaremos en tu higiene del sueño desde la primera sesión.",
    medio: "Tu sueño tiene margen de mejora importante. Pequeños cambios en tu rutina nocturna pueden transformar tu energía y estado de ánimo diario.",
    alto: "Tu descanso es una base sólida. Vamos a cuidarlo y optimizarlo para que siga siendo un pilar de tu bienestar.",
  },
  alimentacion: {
    bajo: "Tu alimentación es un área clave a transformar. Lo que comés impacta directamente en tu energía, humor y claridad mental. Construiremos un plan realista y sostenible para vos.",
    medio: "Tu alimentación tiene buenas bases pero hay oportunidades concretas de mejora. Con ajustes simples y personalizados podés notar cambios importantes.",
    alto: "Tu relación con la alimentación es una fortaleza. Seguiremos potenciándola con enfoque funcional y antiinflamatorio.",
  },
  movimiento: {
    bajo: "Tu cuerpo necesita más movimiento. No hablamos de sacrificio, sino de encontrar la forma de moverse que te nutra y te genere energía.",
    medio: "Tenés un vínculo con el movimiento que podemos profundizar. Veremos qué tipo de actividad física te energiza y te sostiene en el tiempo.",
    alto: "El movimiento es una de tus fortalezas. Nos aseguraremos de que esté alineado con tus objetivos y que tu cuerpo tenga la recuperación que necesita.",
  },
  estres: {
    bajo: "Tu nivel de estrés es una señal de alerta importante. El sistema nervioso necesita atención urgente. Trabajaremos herramientas concretas para regularlo.",
    medio: "El estrés está presente y está afectando tu calidad de vida. Exploraremos qué lo dispara y cómo respondés, para darte herramientas reales.",
    alto: "Gestionás bien el estrés. Seguiremos fortaleciendo tu capacidad de regulación y resiliencia.",
  },
  emocional: {
    bajo: "Tu mundo emocional necesita espacio y atención. Aprenderemos a identificar, validar y canalizar tus emociones de manera saludable.",
    medio: "Tu vida emocional tiene potencial para ganar profundidad y equilibrio. Trabajaremos en tu autoconocimiento y en herramientas para procesar lo que sentís.",
    alto: "Tu inteligencia emocional es una fortaleza genuina. Seguiremos desarrollando tu capacidad de conexión con vos misma y con los demás.",
  },
  naturaleza: {
    bajo: "La reconexión con la naturaleza puede ser más poderosa de lo que imaginás para tu bienestar. Encontraremos formas prácticas de incorporarla en tu día a día.",
    medio: "Te exponés a la naturaleza con cierta frecuencia, pero hay espacio para profundizar este hábito y aprovechar todos sus beneficios.",
    alto: "Tu contacto con la naturaleza es un recurso valioso. Seguiremos aprovechándolo como ancla de bienestar.",
  },
  vinculos: {
    bajo: "Tus vínculos y red de apoyo merecen atención. Las conexiones significativas son esenciales para la salud integral. Exploraremos cómo nutrirlas.",
    medio: "Tus relaciones tienen un buen potencial. Veremos cómo fortalecer tu red de apoyo y mejorar la calidad de tus conexiones.",
    alto: "Tus vínculos son una fuente real de fortaleza. Seguiremos cultivando relaciones que te nutran y te sostengan.",
  },
  suplementacion: {
    bajo: "La suplementación inteligente puede ser una herramienta poderosa para tu bienestar. Evaluaremos qué necesita tu cuerpo según tus resultados.",
    medio: "Tenés una base de suplementación pero hay margen para optimizarla. Revisaremos qué ajustes pueden potenciar tus resultados.",
    alto: "Tu suplementación está bien encaminada. Seguiremos ajustándola según tus necesidades y objetivos.",
  },
  digital: {
    bajo: "Tu relación con la tecnología está afectando tu bienestar de forma significativa. Trabajaremos en establecer límites saludables y recuperar presencia en tu vida.",
    medio: "Existe una oportunidad importante de mejorar tu higiene digital. Pequeños cambios en cómo usás la tecnología pueden tener un gran impacto.",
    alto: "Tenés una buena relación con la tecnología. Seguiremos cuidando ese equilibrio.",
  },
};

function getLevel(score) {
  if (score <= 2) return "bajo";
  if (score <= 3) return "medio";
  return "alto";
}

function getDesc(areaId, score) {
  return AREA_DESC[areaId]?.[getLevel(score)] || "";
}

function getLevelLabel(score) {
  if (score <= 2) return score === 1 ? "Necesita atención" : "En riesgo";
  if (score === 3) return "En desarrollo";
  if (score === 4) return "Buen camino";
  return "Fortaleza";
}

function getColor(score) {
  return COLORS[Math.min(Math.max(score, 1), 5)];
}

function getTip(areaId, score) {
  const tips = TIPS[areaId];
  if (!tips) return "";
  const idx = Math.min(Math.max(Math.round(score) - 1, 0), 4);
  return tips[idx];
}

// ─── EMAIL 1: Para Dani (resumen interno profesional) ────────────────────────
function buildEmailDani(nombre, email, scores, promedio) {
  const sorted = [...AREAS].sort((a, b) => (scores[a.id] || 0) - (scores[b.id] || 0));
  const prioritarias = sorted.slice(0, 3);
  const fortalezas = sorted.slice(-3).reverse().filter(a => (scores[a.id] || 0) >= 4);

  const areaRows = AREAS.map(a => {
    const v = scores[a.id] || 0;
    const color = getColor(v);
    const barWidth = Math.round((v / 5) * 100);
    return `
      <tr>
        <td style="padding:10px 0;border-bottom:1px solid #F2F0EB">
          <table width="100%" cellpadding="0" cellspacing="0">
            <tr>
              <td style="font-size:14px;color:#2C2A25;font-weight:500">${a.icon} ${a.name}</td>
              <td align="right" style="font-size:13px;font-weight:700;color:${color}">${v}/5 — ${getLevelLabel(v)}</td>
            </tr>
            <tr>
              <td colspan="2" style="padding-top:6px">
                <div style="background:#F2F0EB;border-radius:4px;height:6px;width:100%">
                  <div style="background:${color};border-radius:4px;height:6px;width:${barWidth}%"></div>
                </div>
              </td>
            </tr>
          </table>
        </td>
      </tr>`;
  }).join("");

  const prioRows = prioritarias.map((a, i) => {
    const v = scores[a.id] || 0;
    const color = getColor(v);
    return `
      <tr>
        <td style="padding:10px 14px;background:${i === 0 ? "#FEF2F0" : "#FAFAF7"};border-radius:10px;margin-bottom:6px;display:block">
          <span style="font-size:11px;font-weight:700;color:#C75B4A">#${i + 1}</span>
          &nbsp;<span style="font-size:16px">${a.icon}</span>
          &nbsp;<span style="font-size:14px;font-weight:600;color:#2C2A25">${a.name}</span>
          <span style="float:right;font-size:13px;font-weight:700;color:${color}">${v}/5</span>
        </td>
      </tr>
      <tr><td style="height:6px"></td></tr>`;
  }).join("");

  const fortRows = fortalezas.length > 0 ? fortalezas.map(a => {
    const v = scores[a.id] || 0;
    return `
      <tr>
        <td style="padding:10px 14px;background:#F0F8F2;border-radius:10px;display:block;margin-bottom:6px">
          <span style="font-size:16px">${a.icon}</span>
          &nbsp;<span style="font-size:14px;font-weight:600;color:#2C2A25">${a.name}</span>
          <span style="float:right;font-size:13px;font-weight:700;color:#3D9060">${v}/5</span>
        </td>
      </tr>
      <tr><td style="height:6px"></td></tr>`;
  }).join("") : `<tr><td style="font-size:13px;color:#9B9590">Sin fortalezas destacadas aún (score ≥ 4)</td></tr>`;

  const promedioColor = getColor(Math.round(parseFloat(promedio)));

  return `<!DOCTYPE html>
<html lang="es">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"></head>
<body style="margin:0;padding:0;background:#FAF9F6;font-family:'Helvetica Neue',Arial,sans-serif;color:#2C2A25">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#FAF9F6;padding:32px 16px">
  <tr><td align="center">
    <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%">

      <!-- Header -->
      <tr><td style="background:#fff;border:1.5px solid #EBE8E2;border-radius:18px 18px 0 0;padding:28px 32px 20px">
        <p style="margin:0 0 4px;font-size:13px;color:#9B9590;letter-spacing:.5px;text-transform:uppercase">Mente Viva · Quiz Bienestar</p>
        <h1 style="margin:0;font-size:26px;font-weight:700;color:#2C2A25;font-family:Georgia,serif">🔔 Nueva paciente completó el Quiz</h1>
      </td></tr>

      <!-- Nombre + Email + Score -->
      <tr><td style="background:#fff;border-left:1.5px solid #EBE8E2;border-right:1.5px solid #EBE8E2;padding:0 32px 24px">
        <table width="100%" cellpadding="0" cellspacing="0">
          <tr>
            <td>
              <p style="margin:0;font-size:22px;font-weight:700;color:#2C2A25">${nombre}</p>
              <p style="margin:4px 0 0;font-size:14px;color:#9B9590">${email}</p>
            </td>
            <td align="right" valign="middle">
              <div style="display:inline-block;background:#F0F8F2;border:2px solid #D0E8D6;border-radius:50%;width:64px;height:64px;text-align:center;line-height:64px">
                <span style="font-size:22px;font-weight:700;color:${promedioColor}">${promedio}</span><span style="font-size:11px;color:#9B9590">/5</span>
              </div>
            </td>
          </tr>
        </table>
      </td></tr>

      <!-- Todas las áreas -->
      <tr><td style="background:#fff;border-left:1.5px solid #EBE8E2;border-right:1.5px solid #EBE8E2;padding:0 32px 24px">
        <p style="font-size:16px;font-weight:700;color:#2C2A25;margin:0 0 12px;font-family:Georgia,serif">Resultados por área</p>
        <table width="100%" cellpadding="0" cellspacing="0">${areaRows}</table>
      </td></tr>

      <!-- Áreas prioritarias -->
      <tr><td style="background:#fff;border-left:1.5px solid #EBE8E2;border-right:1.5px solid #EBE8E2;padding:0 32px 24px">
        <p style="font-size:16px;font-weight:700;color:#2C2A25;margin:0 0 12px;font-family:Georgia,serif">🎯 Áreas prioritarias</p>
        <table width="100%" cellpadding="0" cellspacing="0">${prioRows}</table>
      </td></tr>

      <!-- Fortalezas -->
      <tr><td style="background:#fff;border-left:1.5px solid #EBE8E2;border-right:1.5px solid #EBE8E2;padding:0 32px 28px">
        <p style="font-size:16px;font-weight:700;color:#2C2A25;margin:0 0 12px;font-family:Georgia,serif">✨ Fortalezas</p>
        <table width="100%" cellpadding="0" cellspacing="0">${fortRows}</table>
      </td></tr>

      <!-- Footer -->
      <tr><td style="background:#F5FBF7;border:1.5px solid #C8E6D4;border-radius:0 0 18px 18px;padding:20px 32px;text-align:center">
        <p style="margin:0;font-size:13px;color:#5A7A65">Podés ver el perfil completo en el <strong>Panel de Pacientes</strong>.</p>
        <p style="margin:6px 0 0;font-size:12px;color:#9B9590">Mente Viva · hola@daninavarro.com.ar</p>
      </td></tr>

    </table>
  </td></tr>
</table>
</body></html>`;
}

// ─── EMAIL 2: Bienvenida + resumen del quiz ───────────────────────────────────
function buildEmailPaciente(nombre, scores, promedio) {
  const nombrePrimero = nombre.split(" ")[0];
  const sorted = [...AREAS].sort((a, b) => (scores[a.id] || 0) - (scores[b.id] || 0));
  const prioritarias = sorted.slice(0, 3);
  const fortalezas = AREAS.filter(a => (scores[a.id] || 0) >= 4)
    .sort((a, b) => (scores[b.id] || 0) - (scores[a.id] || 0));

  const promedioNum = parseFloat(promedio);
  const promedioColor = getColor(Math.round(promedioNum));

  // Mensaje debajo del score según nivel
  const scoreMensaje = promedioNum <= 2
    ? "Hay mucho por construir. Y el hecho de que estés acá ya es el primer paso real."
    : promedioNum <= 3
    ? "Hay áreas que piden atención. Con foco y micro-acciones concretas, todo puede cambiar."
    : promedioNum <= 4
    ? "Tenés bases sólidas. Con algunos ajustes clave, podés llegar a otro nivel de bienestar."
    : "Tu nivel de bienestar es muy bueno. Vamos a afinarlo todavía más juntas.";

  // Bloques de áreas prioritarias
  const numColors  = ["#C75B4A", "#D4895A", "#D4A84A"];
  const numBgColors = ["#FEF2F0", "#FFF5EE", "#FFF9EC"];
  const cardBgColors = ["#FFFAF9", "#FFFBF7", "#FAFAF7"];
  const cardBorders  = ["#F5C5BC", "#F5DEC5", "#E8E4DC"];

  const prioBlocks = prioritarias.map((a, i) => {
    const v     = scores[a.id] || 0;
    const color = getColor(v);
    const tip   = getTip(a.id, v);
    return `
      <tr><td style="padding-bottom:12px">
        <table width="100%" cellpadding="0" cellspacing="0" style="background:${cardBgColors[i]};border:1.5px solid ${cardBorders[i]};border-radius:14px">
          <tr>
            <td style="padding:16px 20px 10px">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td valign="middle">
                    <table cellpadding="0" cellspacing="0"><tr>
                      <td style="background:${numBgColors[i]};border-radius:50%;width:22px;height:22px;text-align:center;line-height:22px;font-size:11px;font-weight:800;color:${numColors[i]};font-family:Arial,sans-serif">${i + 1}</td>
                      <td style="padding-left:9px;font-size:17px;font-weight:700;color:#2C2A25;font-family:Georgia,serif">${a.icon} ${a.name}</td>
                    </tr></table>
                  </td>
                  <td align="right" valign="middle">
                    <span style="display:inline-block;background:#fff;border:1.5px solid ${color};border-radius:20px;padding:3px 10px;font-size:12px;font-weight:700;color:${color}">${v}/5</span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style="padding:0 20px 16px">
              <table width="100%" cellpadding="0" cellspacing="0" style="background:#fff;border-left:3px solid ${color};border-radius:0 10px 10px 0">
                <tr><td style="padding:11px 14px">
                  <p style="margin:0 0 4px;font-size:10px;font-weight:700;color:${color};letter-spacing:.7px;text-transform:uppercase">Tu acción para esta semana</p>
                  <p style="margin:0;font-size:14px;color:#2C2A25;line-height:1.6">${tip}</p>
                </td></tr>
              </table>
            </td>
          </tr>
        </table>
      </td></tr>`;
  }).join("");

  // Bloques de fortalezas
  const fortBlocks = fortalezas.map(a => {
    const v     = scores[a.id] || 0;
    const color = getColor(v);
    const label = v === 5 ? "Fortaleza" : "Buen camino";
    return `
      <tr><td style="padding-bottom:8px">
        <table width="100%" cellpadding="0" cellspacing="0" style="background:#F3FAF6;border:1.5px solid #C8E6D4;border-radius:12px">
          <tr>
            <td style="padding:12px 16px;font-size:14px;font-weight:600;color:#2C2A25">${a.icon} ${a.name}</td>
            <td align="right" style="padding:12px 16px;white-space:nowrap">
              <span style="font-size:12px;font-weight:700;color:${color}">${v}/5 · ${label}</span>
            </td>
          </tr>
        </table>
      </td></tr>`;
  }).join("");

  return `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1.0">
  <meta name="color-scheme" content="light">
</head>
<body style="margin:0;padding:0;background:#FAF9F6;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','Helvetica Neue',Arial,sans-serif;color:#2C2A25;-webkit-font-smoothing:antialiased">

<table width="100%" cellpadding="0" cellspacing="0" style="background:#FAF9F6;padding:24px 12px 48px">
<tr><td align="center">
<table width="100%" cellpadding="0" cellspacing="0" style="max-width:580px">

  <!-- ░░ HEADER ░░ -->
  <tr><td style="background:#3D9060;border-radius:18px 18px 0 0;padding:36px 32px 32px;text-align:center">
    <p style="margin:0 0 10px;font-size:11px;color:rgba(255,255,255,0.6);letter-spacing:1.4px;text-transform:uppercase;font-weight:600">Mente Viva · Bienestar Interior</p>
    <h1 style="margin:0;font-size:28px;font-weight:700;color:#fff;font-family:Georgia,'Times New Roman',serif;line-height:1.3">Tu Mapa de Bienestar Interior 🌿</h1>
  </td></tr>

  <!-- ░░ APERTURA ░░ -->
  <tr><td style="background:#fff;border-left:1.5px solid #EBE8E2;border-right:1.5px solid #EBE8E2;padding:30px 32px 26px">
    <p style="margin:0 0 10px;font-size:18px;font-weight:700;color:#2C2A25;font-family:Georgia,serif">Hola ${nombrePrimero},</p>
    <p style="margin:0 0 12px;font-size:16px;font-weight:600;color:#2C2A25;line-height:1.5">Qué bueno que estés acá.</p>
    <p style="margin:0 0 12px;font-size:15px;color:#5A5650;line-height:1.7">
      Tomarte 3 minutos para mirarte honestamente ya es un acto de amor propio. Gracias por animarte.
    </p>
    <p style="margin:0;font-size:15px;color:#5A5650;line-height:1.7">
      Acá va tu <strong style="color:#2C2A25">Mapa de Bienestar Interior</strong> — un retrato de cómo están hoy las 9 áreas fundamentales de tu vida según la ciencia de longevidad.
    </p>
  </td></tr>

  <!-- ░░ SCORE GENERAL ░░ -->
  <tr><td style="background:#fff;border-left:1.5px solid #EBE8E2;border-right:1.5px solid #EBE8E2;padding:0 32px 28px">
    <table width="100%" cellpadding="0" cellspacing="0" style="background:#FAF9F6;border:1.5px solid #EBE8E2;border-radius:14px">
      <tr><td style="padding:24px;text-align:center">
        <p style="margin:0 0 16px;font-size:11px;color:#9B9590;letter-spacing:.9px;text-transform:uppercase;font-weight:700">Tu puntaje general de bienestar</p>
        <table cellpadding="0" cellspacing="0" style="margin:0 auto">
          <tr><td style="background:#fff;border:3px solid ${promedioColor};border-radius:50%;width:80px;height:80px;text-align:center;vertical-align:middle">
            <p style="margin:0;font-size:30px;font-weight:800;color:${promedioColor};font-family:Georgia,serif;line-height:1">${promedio}</p>
            <p style="margin:0;font-size:11px;color:#9B9590;line-height:1.4">/5</p>
          </td></tr>
        </table>
        <p style="margin:16px 0 0;font-size:14px;color:#5A5650;line-height:1.6;max-width:360px;margin:16px auto 0">${scoreMensaje}</p>
      </td></tr>
    </table>
  </td></tr>

  <!-- ░░ DIVISOR ░░ -->
  <tr><td style="background:#fff;border-left:1.5px solid #EBE8E2;border-right:1.5px solid #EBE8E2;padding:0 32px">
    <div style="border-top:1.5px solid #F0EDE7"></div>
  </td></tr>

  <!-- ░░ ÁREAS PRIORITARIAS ░░ -->
  <tr><td style="background:#fff;border-left:1.5px solid #EBE8E2;border-right:1.5px solid #EBE8E2;padding:28px 32px 16px">
    <p style="margin:0 0 4px;font-size:11px;color:#9B9590;letter-spacing:1px;text-transform:uppercase;font-weight:700">Por dónde empezar</p>
    <h2 style="margin:0 0 6px;font-size:21px;font-weight:700;color:#2C2A25;font-family:Georgia,serif">Tus 3 áreas prioritarias</h2>
    <p style="margin:0 0 20px;font-size:14px;color:#5A5650;line-height:1.6">Cada una viene con una acción concreta. Una cosa a la vez.</p>
    <table width="100%" cellpadding="0" cellspacing="0">${prioBlocks}</table>
  </td></tr>

  ${fortalezas.length > 0 ? `
  <!-- ░░ DIVISOR ░░ -->
  <tr><td style="background:#fff;border-left:1.5px solid #EBE8E2;border-right:1.5px solid #EBE8E2;padding:0 32px">
    <div style="border-top:1.5px solid #F0EDE7"></div>
  </td></tr>

  <!-- ░░ FORTALEZAS ░░ -->
  <tr><td style="background:#fff;border-left:1.5px solid #EBE8E2;border-right:1.5px solid #EBE8E2;padding:24px 32px 20px">
    <p style="margin:0 0 4px;font-size:11px;color:#3D9060;letter-spacing:1px;text-transform:uppercase;font-weight:700">Lo que ya funciona</p>
    <h2 style="margin:0 0 6px;font-size:21px;font-weight:700;color:#2C2A25;font-family:Georgia,serif">✨ Tus fortalezas</h2>
    <p style="margin:0 0 16px;font-size:14px;color:#5A5650;line-height:1.6">Estas áreas son tu base. No las abandones.</p>
    <table width="100%" cellpadding="0" cellspacing="0">${fortBlocks}</table>
  </td></tr>` : ""}

  <!-- ░░ CIERRE ░░ -->
  <tr><td style="background:#fff;border-left:1.5px solid #EBE8E2;border-right:1.5px solid #EBE8E2;padding:8px 32px 28px">
    <div style="background:linear-gradient(135deg,#F5FBF7,#EDF7F1);border:1.5px solid #C8E6D4;border-radius:14px;padding:22px 24px">
      <p style="margin:0 0 12px;font-size:15px;color:#2C2A25;line-height:1.75">
        En los próximos 7 días te voy a acompañar con <strong>4 micro-acciones basadas en ciencia</strong>. Pequeñas. Concretas. Imposibles de no hacer.
      </p>
      <p style="margin:0 0 12px;font-size:15px;color:#2C2A25;line-height:1.75">
        Porque el bienestar no se construye con cambios gigantes — se construye con micro-decisiones repetidas en el tiempo.
      </p>
      <p style="margin:0;font-size:15px;color:#3D9060;font-weight:600;font-style:italic;line-height:1.6">
        Recordá: todo lo que necesitás ya está dentro tuyo. Mi trabajo es solo ayudarte a recordarlo.
      </p>
    </div>
  </td></tr>

  <!-- ░░ FIRMA ░░ -->
  <tr><td style="background:#fff;border:1.5px solid #EBE8E2;border-radius:0 0 18px 18px;padding:24px 32px 28px">
    <table cellpadding="0" cellspacing="0"><tr>
      <td style="padding-right:18px;border-right:2px solid #EBE8E2">
        <p style="margin:0;font-size:13px;color:#9B9590">Con cariño,</p>
        <p style="margin:4px 0 2px;font-size:20px;font-weight:700;color:#2C2A25;font-family:Georgia,serif">Dani</p>
        <p style="margin:0;font-size:12px;color:#3D9060;font-weight:600;letter-spacing:.3px">Mente Viva</p>
      </td>
      <td style="padding-left:18px">
        <p style="margin:0 0 4px;font-size:13px;color:#9B9590">hola@daninavarro.com.ar</p>
        <p style="margin:0;font-size:11px;color:#C0BDB8;line-height:1.5">Si no querés recibir más emails,<br>respondé "darme de baja".</p>
      </td>
    </tr></table>
  </td></tr>

  <!-- ░░ ESPACIO FINAL ░░ -->
  <tr><td style="height:28px"></td></tr>

</table>
</td></tr>
</table>

</body></html>`;
}

// ─── Helper: enviar email transaccional via MailerSend ───────────────────────
// MailerLite (connect.mailerlite.com) es para email marketing (campañas, grupos).
// Para emails transaccionales 1-a-1 se usa MailerSend (api.mailersend.com),
// el producto hermano de Tipe/MailerLite. Requiere MAILERSEND_API_KEY separada.
async function sendEmail(to, toName, subject, html) {
  const MS_KEY = process.env.MAILERSEND_API_KEY;

  if (!MS_KEY) {
    console.error("[EMAIL] ❌ MAILERSEND_API_KEY no está configurada en las variables de entorno");
    return { ok: false, error: "MAILERSEND_API_KEY missing" };
  }

  console.log(`[EMAIL] 📤 Intentando enviar email a: ${to} | Asunto: ${subject}`);

  const payload = {
    from: { email: "hola@daninavarro.com.ar", name: "Dani · Mente Viva" },
    to: [{ email: to, name: toName || to }],
    subject,
    html,
  };

  let res;
  try {
    res = await fetch("https://api.mailersend.com/v1/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${MS_KEY}`,
      },
      body: JSON.stringify(payload),
    });
  } catch (networkErr) {
    console.error("[EMAIL] ❌ Error de red al llamar a MailerSend:", networkErr.message);
    return { ok: false, error: networkErr.message };
  }

  // MailerSend devuelve 202 Accepted en éxito (sin body)
  if (res.status === 202) {
    console.log(`[EMAIL] ✅ Email enviado correctamente a ${to} (202 Accepted)`);
    return { ok: true };
  }

  // Cualquier otro status es error — loguear el body completo
  let body = "";
  try { body = await res.text(); } catch (_) {}
  console.error(`[EMAIL] ❌ MailerSend respondió ${res.status} para ${to}:`, body);
  return { ok: false, status: res.status, body };
}

// ─── Handler principal ────────────────────────────────────────────────────────
export default async function handler(req, res) {
  console.log("[SUBSCRIBE] 🔔 Nueva request:", req.method);

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const API_KEY = process.env.MAILERLITE_API_KEY;
  if (!API_KEY) {
    console.error("[SUBSCRIBE] ❌ MAILERLITE_API_KEY no configurada");
    return res.status(500).json({ error: "API key not configured" });
  }

  console.log("[SUBSCRIBE] ✅ MAILERLITE_API_KEY presente");
  console.log("[SUBSCRIBE] ✅ MAILERSEND_API_KEY presente:", !!process.env.MAILERSEND_API_KEY);

  const { email, name, group_id, fields } = req.body;
  if (!email) {
    console.error("[SUBSCRIBE] ❌ Email no recibido en el body");
    return res.status(400).json({ error: "Email is required" });
  }

  console.log(`[SUBSCRIBE] 📥 Datos recibidos — email: ${email} | nombre: ${name} | referencia: ${fields?.referencia || "(ninguna)"}`);

  // 1. Crear/actualizar subscriber en MailerLite
  console.log("[SUBSCRIBE] 📝 Creando subscriber en MailerLite...");
  try {
    const body = {
      email,
      fields: { name: name || "", ...fields },
    };
    if (group_id) body.groups = [group_id];

    const mlRes = await fetch("https://connect.mailerlite.com/api/subscribers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
      body: JSON.stringify(body),
    });

    const mlData = await mlRes.json();

    if (!mlRes.ok) {
      console.error(`[SUBSCRIBE] ❌ MailerLite respondió ${mlRes.status}:`, JSON.stringify(mlData));
      return res.status(mlRes.status).json(mlData);
    }

    console.log(`[SUBSCRIBE] ✅ Subscriber creado/actualizado en MailerLite (${mlRes.status})`);
  } catch (err) {
    console.error("[SUBSCRIBE] ❌ Error de red con MailerLite:", err.message);
    return res.status(500).json({ error: "Error creando subscriber" });
  }

  // 2. Calcular scores
  const scores = {};
  for (const a of AREAS) {
    scores[a.id] = parseFloat(fields?.[`quiz_${a.id}`]) || 0;
  }
  const promedio = fields?.quiz_promedio
    ? parseFloat(fields.quiz_promedio).toFixed(1)
    : (Object.values(scores).reduce((s, v) => s + v, 0) / AREAS.length).toFixed(1);

  console.log(`[SUBSCRIBE] 📊 Scores calculados — promedio: ${promedio}`);

  // 3. Email de bienvenida a quien completó el quiz — SIEMPRE
  console.log("[SUBSCRIBE] 📨 Enviando email de bienvenida al usuario...");
  const resultPaciente = await sendEmail(
    email,
    name,
    "Qué bueno que estés acá 🌿 Tu Mapa de Bienestar",
    buildEmailPaciente(name, scores, promedio)
  );
  console.log("[SUBSCRIBE] Resultado email usuario:", JSON.stringify(resultPaciente));

  // 4. Notificación interna a Dani — solo si referencia === "paciente"
  if (fields?.referencia === "paciente") {
    console.log("[SUBSCRIBE] 📨 Referencia=paciente → enviando notificación a Dani...");
    const resultDani = await sendEmail(
      "hola@daninavarro.com.ar",
      "Dani Navarro",
      `🔔 Nueva paciente completó el Quiz: ${name}`,
      buildEmailDani(name, email, scores, promedio)
    );
    console.log("[SUBSCRIBE] Resultado email Dani:", JSON.stringify(resultDani));
  } else {
    console.log("[SUBSCRIBE] ℹ️ Referencia no es 'paciente' → no se envía notificación interna");
  }

  console.log("[SUBSCRIBE] ✅ Handler finalizado correctamente");
  return res.status(200).json({ success: true });
}
