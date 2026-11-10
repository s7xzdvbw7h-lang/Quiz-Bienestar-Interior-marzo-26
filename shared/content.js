// Contenido del quiz (edición noviembre 2026). Fuente única: la usan el quiz (src/App.jsx) y el mail (api/subscribe.js).
export const EDITION = "Edición 2026";

export const AREAS = [
  {
    id: "sueno", name: "Sueño Reparador", short: "Sueño", icon: "🌙",
    science: "Dormir bien no es solo cuántas horas: la regularidad de tus horarios también cuenta. En estudios de seguimiento de más de 15 años, dormir poco y a horarios cambiantes se asoció con peor salud a largo plazo. Son estudios observacionales: muestran una relación, no una causa.",
    source: "Estudios de cohorte sobre regularidad y duración del sueño (2023–2025)",
    question: "¿Qué tan regular y reparador es tu sueño?",
    anchors: ["Duermo menos de 6 h o muy desordenado/a, y casi todos los días me despierto agotado/a","Duermo 6–7 h y mis horarios cambian mucho de un día al otro","Duermo unas 7 h, pero me acuesto y levanto a horas muy distintas","Duermo 7–8 h y mis horarios varían menos de 1 h la mayoría de los días","Duermo 7–8 h con horarios estables, también los fines de semana, y me levanto descansado/a"],
  },
  {
    id: "alimentacion", name: "Alimentación Consciente", short: "Alimentación", icon: "🥗",
    science: "Lo que comés pesa más que el reloj. Sobre ayuno y 'autofagia' en personas la evidencia todavía es preliminar: los ensayos son chicos y de corto plazo. Lo que sí tiene consenso: comida real, proteína suficiente, vegetales y horarios ordenados.",
    source: "Ensayos de alimentación con horario (2025) y guías de nutrición",
    question: "¿Cómo es tu alimentación en una semana normal?",
    anchors: ["Casi todo ultraprocesado, salteo comidas o como por impulso","Mitad comida real, mitad procesada, con horarios desordenados","Cocino bastante, pero me cuesta sumar proteína y vegetales todos los días","Comida real la mayoría de los días, con proteína y vegetales en casi todas las comidas","Alimentación variada y real, con proteína suficiente, horarios ordenados y sin culpa en los desvíos"],
  },
  {
    id: "movimiento", name: "Movimiento y Fuerza", short: "Movimiento", icon: "🏃",
    science: "Un meta-análisis de 24 estudios (The Lancet Public Health) asoció caminar alrededor de 7.000 pasos por día con menos riesgo de mortalidad, enfermedad cardiovascular y diabetes tipo 2, y el beneficio sigue creciendo, más despacio, hasta unos 10.000–12.000. Y en más de 5.000 mujeres de 63 a 99 años (JAMA Network Open, 2026), más fuerza de agarre y levantarse más rápido de una silla se asociaron con menor mortalidad.",
    source: "The Lancet Public Health (meta-análisis) · JAMA Network Open, feb. 2026",
    question: "¿Cuánto te movés y cuánta fuerza trabajás?",
    anchors: ["Casi no camino ni entreno; paso la mayor parte del día sentado/a","Camino poco (menos de 5.000 pasos) y hago ejercicio solo de vez en cuando","Camino bastante o entreno 2 veces por semana, pero sin trabajo de fuerza","Camino cerca de 7.000 pasos y hago fuerza 1–2 veces por semana","Camino a diario, hago fuerza 2–3 veces por semana y sumo movilidad"],
  },
  {
    id: "estres", name: "Gestión del Estrés", short: "Estrés", icon: "🧘‍♀️",
    science: "El estrés sostenido se asocia con peor sueño, más tensión corporal y más dificultad para sostener hábitos. Lo que sí podés entrenar son prácticas que bajan la activación en el momento: respiración lenta, pausas, caminar, contacto con otras personas.",
    source: "Investigación en regulación del estrés y respiración lenta",
    question: "¿Cómo gestionás el estrés del día a día?",
    anchors: ["Vivo acelerado/a y casi nunca logro bajar el ritmo, ni al final del día","Me supera seguido y no tengo una herramienta clara","Tengo alguna práctica (respirar, caminar), pero la uso recién cuando ya exploté","Uso una práctica de regulación varias veces por semana y noto la diferencia","Tengo prácticas diarias y me recupero rápido después de un día difícil"],
  },
  {
    id: "emocional", name: "Salud Emocional", short: "Emocional", icon: "💜",
    science: "Poner en palabras lo que sentís es una de las herramientas de regulación emocional más estudiadas: ayuda a que la emoción pierda intensidad y a decidir mejor. Si esta área te mueve algo fuerte, mirala con calma y, si lo necesitás, con acompañamiento profesional.",
    source: "Investigación sobre regulación emocional y 'etiquetado' de emociones",
    question: "¿Cómo está tu relación con tus emociones?",
    anchors: ["Me cuesta ponerle nombre a lo que siento; suelo aguantar o desconectarme","Reconozco lo que siento, pero reacciono antes de poder frenar","Puedo nombrar lo que siento y a veces lo expreso","Registro, nombro y expreso mis emociones, y pido ayuda cuando hace falta","Tengo un trabajo emocional sostenido (escritura, terapia, práctica) y me siento acompañado/a"],
  },
  {
    id: "naturaleza", name: "Conexión con la Naturaleza", short: "Naturaleza", icon: "🌿",
    science: "Pasar tiempo en espacios verdes se asocia con menos estrés y mejor ánimo, y la luz natural de la mañana ayuda a ordenar tu reloj biológico. No hace falta un viaje: pequeñas dosis repetidas suman.",
    source: "Revisiones sobre exposición a espacios verdes y luz natural",
    question: "¿Cuánto contacto tenés con la naturaleza y la luz natural?",
    anchors: ["Paso casi todo el día en interiores","Salgo poco, casi solo de mi casa al trabajo","Salgo al aire libre un par de veces por semana","Tengo contacto con la naturaleza o el aire libre casi todos los días","Es parte de mi rutina: luz de la mañana y tiempo afuera que me recarga"],
  },
  {
    id: "vinculos", name: "Vínculos y Propósito", short: "Vínculos", icon: "🤝",
    science: "El Estudio de Desarrollo Adulto de Harvard sigue desde 1938 a 724 personas y hoy a sus descendientes: la satisfacción con las relaciones a los 50 predijo la salud a los 80 mejor que el colesterol. Es una asociación, no una prueba de causa, pero se repite en otras investigaciones.",
    source: "Harvard Study of Adult Development (desde 1938)",
    question: "¿Cómo están tus vínculos y tu sentido de dirección?",
    anchors: ["Me faltan vínculos cercanos y siento poca claridad de hacia dónde voy","Tengo algunas personas, pero me cuesta profundizar o pedir apoyo","Tengo gente cercana; podría conectar más y con más dirección","Tengo al menos una persona a quien llamar en una crisis y cierta claridad de rumbo","Relaciones profundas y un propósito que me da energía"],
  },
  {
    id: "suplementacion", name: "Suplementación Consciente", short: "Suplementos", icon: "💊",
    science: "Los suplementos sirven cuando cubren una carencia confirmada. En el ensayo VITAL, la vitamina D3 redujo el acortamiento de telómeros en un subgrupo de 1.054 personas, pero eso es un marcador, no prueba de menos enfermedad; con omega-3 no se vio ese efecto. Por eso el punto de partida es siempre un análisis y un profesional.",
    source: "Ensayo VITAL (vitamina D y omega-3), subestudio de telómeros, 2025",
    question: "¿Cómo es tu enfoque con la suplementación?",
    anchors: ["No tomo nada, o tomo cosas sin saber si las necesito","Tomo algo básico sin haberme hecho análisis","Tomo algunos suplementos según lo que investigué por mi cuenta","Tengo un protocolo con orientación profesional","Mi protocolo se basa en análisis de sangre y seguimiento profesional"],
  },
  {
    id: "digital", name: "Higiene Digital", short: "Digital", icon: "📱",
    science: "Lo más consistente en la investigación sobre pantallas es la relación entre uso nocturno y peor sueño, sobre todo en adolescentes; en adultos depende de cómo y para qué las usás. No se trata de culparte: se trata de decidir cuándo y para qué.",
    source: "Revisiones sistemáticas sobre pantallas, sueño y salud mental",
    question: "¿Cómo es tu relación con las pantallas?",
    anchors: ["El celular es lo último que miro de noche y lo primero al despertar, y pierdo la noción del tiempo","Uso mucho las pantallas y me cuesta soltarlas, incluso cuando quiero","Intento poner límites, pero no siempre los sostengo","Tengo límites claros la mayor parte del tiempo, también a la noche","Uso las pantallas con intención, con horarios y zonas libres de pantalla"],
  },
];

export const TIPS = {
  sueno: [
    "Empecemos por lo más simple: elegí una hora fija para levantarte y sostenela toda la semana. Ordenar el despertar ordena todo lo demás.",
    "Probá fijar un rango de 1 hora para acostarte y dejá el celular cargando fuera de la cama. Un cambio chiquito, sostenido.",
    "Ya dormís lo suficiente: ahora ganás con la regularidad. Intentá que tu hora de levantarte no cambie más de 1 hora, ni en fin de semana.",
    "Sumá luz natural en la primera hora del día y una rutina de bajada de 30 minutos antes de dormir.",
    "Tu sueño es un pilar. Anotá qué hábitos lo cuidan y compartilos con alguien que lo necesite.",
  ],
  alimentacion: [
    "Elegí una sola comida del día para hacerla con comida real y proteína (huevo, legumbres, pescado, carne o lácteos). Una, no todas.",
    "Sumá una porción de vegetales a dos comidas por día y reemplazá un ultraprocesado por una opción simple.",
    "Armá tus platos con una base fija: proteína + vegetal + algo de carbohidrato real. Cocinar dos veces por semana para varios días ayuda.",
    "Ya tenés buena base. Cuidá la proteína en el desayuno y ordená el horario de la cena para dormir mejor.",
    "Sostené lo que funciona y probá una receta nueva por semana. Si una comida se sale del plan, seguís igual, sin culpa.",
  ],
  movimiento: [
    "Empezá con una caminata de 10 a 15 minutos, una vez al día. No hace falta más para empezar.",
    "Sumá un día fijo para moverte con algo que disfrutes (bailar, nadar, bici) y subí de a poco tu caminata diaria.",
    "Sumá fuerza 1 vez por semana: sentadillas, empujes y remos con tu propio peso o bandas. Si tenés alguna condición, empezá con orientación profesional.",
    "Llevá la fuerza a 2 veces por semana y sumá 10 minutos de movilidad. Probá levantarte de una silla 5 veces seguidas sin usar las manos.",
    "Tu base es sólida. Variá estímulos (fuerza, caminata rápida, movilidad) y cuidá la recuperación.",
  ],
  estres: [
    "Probá respirar lento 2 minutos: inhalá por la nariz, exhalá más largo que la inhalación. Hacelo hoy, una sola vez.",
    "Elegí UNA práctica de 5 minutos (respirar, caminar sin celular o escribir) y atala a algo que ya hacés todos los días.",
    "Usá tu práctica antes del pico de estrés, no después. Poné una alarma suave en el momento del día que más te acelera.",
    "Sumá una pausa de recuperación en tu semana: tiempo afuera, un rato sin pantallas o una charla que te baje el ritmo.",
    "Tu regulación es una fortaleza. Compartí lo que te funciona con alguien cercano.",
  ],
  emocional: [
    "Empecemos suave: tres veces por semana, escribí en una línea qué sentiste y dónde lo sentiste en el cuerpo.",
    "Al sentir algo fuerte, frená 10 segundos y ponele nombre: 'estoy sintiendo…'. Nombrarlo ayuda a bajarle intensidad.",
    "Sumá un mini-registro diario de 3 minutos y elegí a una persona de confianza con quien hablar de lo importante.",
    "Considerá sumar un espacio de acompañamiento (terapia o coaching) para profundizar lo que ya venís trabajando.",
    "Tu trabajo emocional es un recurso. Cuidalo con descanso y comunidad.",
  ],
  naturaleza: [
    "Salí 10 minutos afuera, con la luz del día, sin celular. Una vez al día alcanza para empezar.",
    "Llevá una actividad que ya hacés (el mate, una llamada, una caminata) al aire libre, dos veces por semana.",
    "Buscá tu dosis de luz de la mañana: unos minutos afuera en la primera hora del día, y un paseo por un espacio verde en el fin de semana.",
    "Sumá un rato más largo (una hora o más) en un lugar verde o con agua, una vez por semana.",
    "Seguí cuidando tu vínculo con la naturaleza y animá a alguien a acompañarte.",
  ],
  vinculos: [
    "Escribile hoy a una persona que valorás, algo genuino y breve. Un vínculo, un mensaje.",
    "Elegí una conversación por semana, sin pantallas, con alguien importante. Y animate a pedir un apoyo concreto.",
    "Sumá un espacio de comunidad (un grupo, un curso, una actividad) y mantené una cita fija con una persona cercana.",
    "Profundizá con presencia: preguntá una cosa más, escuchá sin resolver. Y revisá qué te da dirección esta etapa.",
    "Tus vínculos son un pilar. Cuidalos con intención y contá qué te da propósito.",
  ],
  suplementacion: [
    "Antes de tomar nada nuevo, consultá con tu médico/a qué análisis te corresponden. Sin datos, es adivinar.",
    "Hacé una lista de lo que tomás hoy y llevala a tu próxima consulta para revisar si lo necesitás.",
    "Contrastá lo que investigaste con un profesional de salud y con tus análisis, antes de seguir sumando.",
    "Revisá tu protocolo con tu profesional cada tanto y actualizalo según tus análisis.",
    "Tu enfoque basado en datos es excelente. Seguí ajustando con tu profesional.",
  ],
  digital: [
    "Esta noche, dejá el celular cargando fuera de la cama. Si lo usás de alarma, probá un despertador simple.",
    "Apagá las notificaciones que no son esenciales y elegí 2 momentos del día para revisar redes.",
    "Definí una zona o un horario sin pantallas (la mesa, la última hora antes de dormir) y sostenelo una semana.",
    "Sumá momentos sin estímulo digital en tu día: caminar, cocinar, mirar por la ventana. Tu mente también necesita pausa.",
    "Tu uso es intencional. Compartí tus estrategias con alguien que quiera ordenar el suyo.",
  ],
};

export const LABELS = ["Necesita cuidado", "En construcción", "En desarrollo", "Buen camino", "Fortaleza"];
