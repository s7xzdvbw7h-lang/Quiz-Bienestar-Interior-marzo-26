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

// ─── EMAIL 2: Para la persona que completó el quiz ───────────────────────────
function buildEmailPaciente(nombre, scores, promedio) {
  const nombrePrimero = nombre.split(" ")[0];
  const sorted = [...AREAS].sort((a, b) => (scores[a.id] || 0) - (scores[b.id] || 0));
  const prioritarias = sorted.slice(0, 3);
  const fortalezas = AREAS.filter(a => (scores[a.id] || 0) >= 4)
    .sort((a, b) => (scores[b.id] || 0) - (scores[a.id] || 0));

  const promedioNum = parseFloat(promedio);
  const promedioColor = getColor(Math.round(promedioNum));

  // Apertura personalizada según puntaje
  const apertura = promedioNum <= 2
    ? `Hacer este quiz requiere honestidad. Y eso, ${nombrePrimero}, ya dice mucho de vos.`
    : promedioNum <= 3
    ? `Completar este quiz es el primer gesto real de cuidado hacia vos misma. Me alegra que estés acá.`
    : promedioNum <= 4
    ? `Tenés más bases de las que creés. Este mapa te va a ayudar a ver exactamente dónde enfocar la energía.`
    : `Tu mapa de bienestar muestra una base muy sólida. Lo que viene ahora es seguir afinando.`;

  const cierre = promedioNum <= 2
    ? `En los próximos días te voy a ir mandando micro-acciones para cada una de tus áreas prioritarias. Una por una. Sin abrumar. Porque el cambio real se construye de a poco, con constancia.`
    : promedioNum <= 3
    ? `En los próximos días te comparto micro-acciones concretas para empezar a mover las agujas en tus áreas clave. Cosas que podés hacer hoy, con lo que tenés.`
    : `En los próximos días te mando tips específicos para potenciar todavía más tu bienestar. Pequeños ajustes que generan un impacto real.`;

  // Bloques de áreas prioritarias
  const prioBlocks = prioritarias.map((a, i) => {
    const v = scores[a.id] || 0;
    const color = getColor(v);
    const tip = getTip(a.id, v);
    const numColors = ["#C75B4A", "#D4895A", "#D4A84A"];
    const numBg = ["#FEF2F0", "#FFF5EE", "#FFF9EC"];
    const cardBg = i === 0 ? "#FFFAF9" : i === 1 ? "#FFFBF7" : "#FAFAF7";
    const borderColor = i === 0 ? "#F5C5BC" : i === 1 ? "#F5DEC5" : "#E8E4DC";
    return `
      <tr><td style="padding-bottom:14px">
        <table width="100%" cellpadding="0" cellspacing="0" style="background:${cardBg};border:1.5px solid ${borderColor};border-radius:16px;overflow:hidden">
          <!-- Cabecera del área -->
          <tr>
            <td style="padding:16px 20px 12px">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td valign="middle">
                    <table cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="background:${numBg[i]};border-radius:50%;width:24px;height:24px;text-align:center;line-height:24px;font-size:11px;font-weight:800;color:${numColors[i]};font-family:Arial,sans-serif">${i + 1}</td>
                        <td style="padding-left:10px;font-size:18px;font-weight:700;color:#2C2A25;font-family:Georgia,serif">${a.icon} ${a.name}</td>
                      </tr>
                    </table>
                  </td>
                  <td align="right" valign="middle">
                    <span style="display:inline-block;background:#fff;border:1.5px solid ${color};border-radius:20px;padding:3px 10px;font-size:12px;font-weight:700;color:${color}">${v}/5 · ${getLevelLabel(v)}</span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <!-- Acción concreta -->
          <tr>
            <td style="padding:0 20px 16px">
              <table width="100%" cellpadding="0" cellspacing="0" style="background:#fff;border-left:3px solid ${color};border-radius:0 10px 10px 0">
                <tr>
                  <td style="padding:12px 14px">
                    <p style="margin:0 0 5px;font-size:10px;font-weight:700;color:${color};letter-spacing:.7px;text-transform:uppercase">Tu acción para esta semana</p>
                    <p style="margin:0;font-size:14px;color:#2C2A25;line-height:1.6">${tip}</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </td></tr>`;
  }).join("");

  // Bloques de fortalezas
  const fortBlocks = fortalezas.map(a => {
    const v = scores[a.id] || 0;
    const color = getColor(v);
    const label = v === 5 ? "Fortaleza" : "Buen camino";
    return `
      <tr><td style="padding-bottom:8px">
        <table width="100%" cellpadding="0" cellspacing="0" style="background:#F3FAF6;border:1.5px solid #C8E6D4;border-radius:12px">
          <tr>
            <td style="padding:12px 16px;font-size:15px;color:#2C2A25;font-weight:600">${a.icon} ${a.name}</td>
            <td align="right" style="padding:12px 16px">
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
  <tr><td style="background:#2C2A25;border-radius:18px 18px 0 0;padding:36px 32px 30px;text-align:center">
    <p style="margin:0 0 10px;font-size:12px;color:rgba(255,255,255,0.45);letter-spacing:1.2px;text-transform:uppercase;font-weight:600">Mente Viva · Bienestar Interior</p>
    <h1 style="margin:0;font-size:30px;font-weight:700;color:#fff;font-family:Georgia,'Times New Roman',serif;line-height:1.25">Tu Mapa de<br>Bienestar Interior 🌿</h1>
    <p style="margin:16px 0 0;font-size:15px;color:rgba(255,255,255,0.7);line-height:1.5">Hola <strong style="color:#fff">${nombrePrimero}</strong> — completaste tu evaluación.</p>
  </td></tr>

  <!-- ░░ APERTURA ░░ -->
  <tr><td style="background:#fff;border-left:1.5px solid #EBE8E2;border-right:1.5px solid #EBE8E2;padding:28px 32px 24px">
    <p style="margin:0;font-size:16px;color:#2C2A25;line-height:1.7">${apertura}</p>
    <p style="margin:14px 0 0;font-size:15px;color:#5A5650;line-height:1.7">
      Acá abajo encontrás tu mapa completo: dónde estás parada hoy, qué áreas necesitan más atención y una acción concreta para empezar esta semana.
    </p>
    <p style="margin:14px 0 0;font-size:13px;color:#9B9590;font-style:italic">
      Recordá: todo lo que necesitás ya está dentro tuyo. Este mapa solo te ayuda a verlo más claro.
    </p>
  </td></tr>

  <!-- ░░ SCORE GENERAL ░░ -->
  <tr><td style="background:#fff;border-left:1.5px solid #EBE8E2;border-right:1.5px solid #EBE8E2;padding:0 32px 28px">
    <div style="background:#FAF9F6;border:1.5px solid #EBE8E2;border-radius:16px;padding:22px 24px;text-align:center">
      <p style="margin:0 0 14px;font-size:12px;color:#9B9590;letter-spacing:.8px;text-transform:uppercase;font-weight:600">Tu puntaje general</p>
      <table cellpadding="0" cellspacing="0" style="margin:0 auto 16px">
        <tr>
          <td style="background:#fff;border:2.5px solid ${promedioColor};border-radius:50%;width:72px;height:72px;text-align:center;vertical-align:middle">
            <span style="font-size:26px;font-weight:800;color:${promedioColor};font-family:Georgia,serif">${promedio}</span>
            <span style="font-size:12px;color:#9B9590;display:block;margin-top:-4px">/5</span>
          </td>
        </tr>
      </table>
      <p style="margin:0;font-size:14px;color:#5A5650;line-height:1.65;max-width:380px;display:block;margin:0 auto">${apertura}</p>
    </div>
  </td></tr>

  <!-- ░░ DIVISOR ░░ -->
  <tr><td style="background:#fff;border-left:1.5px solid #EBE8E2;border-right:1.5px solid #EBE8E2;padding:0 32px">
    <div style="border-top:1.5px solid #F0EDE7"></div>
  </td></tr>

  <!-- ░░ ÁREAS PRIORITARIAS ░░ -->
  <tr><td style="background:#fff;border-left:1.5px solid #EBE8E2;border-right:1.5px solid #EBE8E2;padding:28px 32px 12px">
    <p style="margin:0 0 4px;font-size:11px;color:#9B9590;letter-spacing:1px;text-transform:uppercase;font-weight:700">Por dónde empezar</p>
    <h2 style="margin:0 0 6px;font-size:22px;font-weight:700;color:#2C2A25;font-family:Georgia,serif">Tus 3 áreas prioritarias</h2>
    <p style="margin:0 0 22px;font-size:14px;color:#5A5650;line-height:1.6">Cada una viene con una acción concreta. Una cosa a la vez.</p>
    <table width="100%" cellpadding="0" cellspacing="0">${prioBlocks}</table>
  </td></tr>

  ${fortalezas.length > 0 ? `
  <!-- ░░ DIVISOR ░░ -->
  <tr><td style="background:#fff;border-left:1.5px solid #EBE8E2;border-right:1.5px solid #EBE8E2;padding:0 32px">
    <div style="border-top:1.5px solid #F0EDE7"></div>
  </td></tr>

  <!-- ░░ FORTALEZAS ░░ -->
  <tr><td style="background:#fff;border-left:1.5px solid #EBE8E2;border-right:1.5px solid #EBE8E2;padding:28px 32px 20px">
    <p style="margin:0 0 4px;font-size:11px;color:#3D9060;letter-spacing:1px;text-transform:uppercase;font-weight:700">Lo que ya funciona</p>
    <h2 style="margin:0 0 6px;font-size:22px;font-weight:700;color:#2C2A25;font-family:Georgia,serif">✨ Tus fortalezas</h2>
    <p style="margin:0 0 18px;font-size:14px;color:#5A5650;line-height:1.6">Estas áreas son tu base. No las abandones.</p>
    <table width="100%" cellpadding="0" cellspacing="0">${fortBlocks}</table>
  </td></tr>` : ""}

  <!-- ░░ CIERRE ░░ -->
  <tr><td style="background:#fff;border-left:1.5px solid #EBE8E2;border-right:1.5px solid #EBE8E2;padding:8px 32px 32px">
    <div style="background:linear-gradient(135deg,#F5FBF7,#EDF7F1);border:1.5px solid #C8E6D4;border-radius:16px;padding:22px 24px">
      <p style="margin:0 0 12px;font-size:15px;color:#2C2A25;line-height:1.7">${cierre}</p>
      <p style="margin:0;font-size:15px;color:#2C2A25;line-height:1.7">
        Si algo de lo que encontraste acá te resuena o querés contarme cómo estás, respondé este email. Leo cada uno personalmente.
      </p>
    </div>
  </td></tr>

  <!-- ░░ FIRMA ░░ -->
  <tr><td style="background:#fff;border:1.5px solid #EBE8E2;border-radius:0 0 18px 18px;padding:24px 32px 28px">
    <table cellpadding="0" cellspacing="0">
      <tr>
        <td style="padding-right:16px;border-right:2px solid #EBE8E2">
          <p style="margin:0;font-size:14px;color:#9B9590;line-height:1.3">Con cariño,</p>
          <p style="margin:4px 0 0;font-size:20px;font-weight:700;color:#2C2A25;font-family:Georgia,serif">Dani</p>
          <p style="margin:2px 0 0;font-size:12px;color:#3D9060;font-weight:600;letter-spacing:.3px">Mente Viva</p>
        </td>
        <td style="padding-left:16px">
          <p style="margin:0;font-size:13px;color:#9B9590;line-height:1.8">hola@daninavarro.com.ar</p>
          <p style="margin:0;font-size:11px;color:#C0BDB8">Si no querés recibir más emails,<br>respondé "darme de baja".</p>
        </td>
      </tr>
    </table>
  </td></tr>

  <!-- ░░ ESPACIO FINAL ░░ -->
  <tr><td style="height:24px"></td></tr>

</table>
</td></tr>
</table>

</body></html>`;
}

// ─── Handler principal ────────────────────────────────────────────────────────
export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const API_KEY = process.env.MAILERLITE_API_KEY;
  if (!API_KEY) {
    return res.status(500).json({ error: "API key not configured" });
  }

  const { email, name, group_id, fields } = req.body;
  if (!email) {
    return res.status(400).json({ error: "Email is required" });
  }

  // 1. Crear/actualizar subscriber en MailerLite
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
      return res.status(mlRes.status).json(mlData);
    }
  } catch (err) {
    return res.status(500).json({ error: "Error creando subscriber" });
  }

  // 2. Calcular scores para los emails
  const scores = {};
  for (const a of AREAS) {
    scores[a.id] = parseFloat(fields?.[`quiz_${a.id}`]) || 0;
  }
  const promedio = fields?.quiz_promedio
    ? parseFloat(fields.quiz_promedio).toFixed(1)
    : (Object.values(scores).reduce((s, v) => s + v, 0) / AREAS.length).toFixed(1);

  const mlHeaders = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${API_KEY}`,
  };

  // Email a la paciente — SIEMPRE
  try {
    await fetch("https://connect.mailerlite.com/api/emails", {
      method: "POST",
      headers: mlHeaders,
      body: JSON.stringify({
        from: { email: "hola@daninavarro.com.ar", name: "Dani Navarro · Mente Viva" },
        to: [{ email, name }],
        subject: "Tu Mapa de Bienestar Interior 🌿",
        html: buildEmailPaciente(name, scores, promedio),
      }),
    });
  } catch (err) {
    console.error("Error enviando email a paciente:", err);
  }

  // Email a Dani — solo si referencia === "paciente"
  if (fields?.referencia === "paciente") {
    try {
      await fetch("https://connect.mailerlite.com/api/emails", {
        method: "POST",
        headers: mlHeaders,
        body: JSON.stringify({
          from: { email: "hola@daninavarro.com.ar", name: "Mente Viva · Quiz" },
          to: [{ email: "hola@daninavarro.com.ar" }],
          subject: `🔔 Nueva paciente completó el Quiz: ${name}`,
          html: buildEmailDani(name, email, scores, promedio),
        }),
      });
    } catch (err) {
      console.error("Error enviando email a Dani:", err);
    }
  }

  return res.status(200).json({ success: true });
}
