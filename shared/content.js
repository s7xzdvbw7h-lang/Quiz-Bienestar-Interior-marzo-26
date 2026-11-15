// Contenido del quiz (versión de abril, restaurada y con novedades). Compartido entre la app y el mail.
export const EDITION = "Edición 2026";

export const AREAS = [
  {
    "id": "sueno",
    "name": "Sueño Reparador",
    "short": "Sueño",
    "icon": "🌙",
    "science": "Mientras dormís profundamente, tu cerebro activa el sistema glinfático: una red que elimina proteínas tóxicas acumuladas durante el día. Estudios en UC Berkeley muestran que dormir menos de 6 horas de forma crónica debilita las defensas y acelera el deterioro cognitivo. Y la regularidad de tus horarios importa casi tanto como las horas.",
    "source": "Dr. Matthew Walker — neurocientífico, UC Berkeley",
    "question": "¿Cómo es tu sueño habitualmente?",
    "anchors": [
      "Duermo poco y mal, sin rutina de horarios",
      "Irregular: algunas noches descanso, otras no",
      "Generalmente bien, pero me cuesta ser constante",
      "Duermo 7-8hs la mayoría de las noches",
      "Sueño profundo y consistente, con rutina estable"
    ]
  },
  {
    "id": "alimentacion",
    "name": "Alimentación Consciente",
    "short": "Alimentación",
    "icon": "🥗",
    "science": "Lo que comés es información directa para tus genes. Y no solo importa qué comés, sino cuándo: dejar al menos 12 horas entre la cena y el desayuno le da un descanso a tu sistema digestivo. Otra cosa distinta es la autofagia, la limpieza celular que elimina componentes dañados. Se estudia con ayunos más largos y con dietas que imitan el ayuno, como las del equipo del Dr. Valter Longo (USC), con resultados prometedores en personas.",
    "source": "Dr. Valter Longo — Instituto de Longevidad, USC",
    "question": "¿Cómo es tu relación con la alimentación?",
    "anchors": [
      "Bastante procesada, como por impulso o sin horarios",
      "Mezclo comida real con bastante procesado",
      "Intento comer bien pero no logro ser constante",
      "Buena base de alimentación, con algún desliz puntual",
      "Alimentos reales, horarios definidos, como con consciencia"
    ]
  },
  {
    "id": "movimiento",
    "name": "Movimiento Diario",
    "short": "Movimiento",
    "icon": "🏃",
    "science": "El ejercicio libera BDNF, una proteína que estimula el crecimiento de nuevas neuronas. Un metaanálisis en The Lancet Public Health muestra que los beneficios de caminar se estabilizan cerca de los 7.000 pasos diarios. Después de los 40, la fuerza muscular es uno de los mejores predictores de longevidad.",
    "source": "Dr. Peter Attia — médico, especialista en longevidad",
    "question": "¿Cuánto movimiento hacés por semana?",
    "anchors": [
      "Muy poco, paso la mayor parte del día sentado/a",
      "Algún movimiento esporádico, sin rutina definida",
      "Me muevo 2-3 veces por semana con cierta regularidad",
      "Activo/a, entreno o camino 4+ veces por semana",
      "Combino fuerza, cardio y movilidad con regularidad"
    ]
  },
  {
    "id": "estres",
    "name": "Gestión del Estrés",
    "short": "Estrés",
    "icon": "🧘‍♀️",
    "science": "El estrés crónico acorta los telómeros — los protectores de tu ADN — acelerando el envejecimiento celular. Pero la investigación de Blackburn y Epel asoció prácticas de regulación como la meditación con telómeros mejor conservados.",
    "source": "Dra. Elizabeth Blackburn y Dra. Elissa Epel — Premio Nobel 2009",
    "question": "¿Cómo gestionás el estrés del día a día?",
    "anchors": [
      "Me siento desbordado/a con frecuencia",
      "El estrés me afecta bastante, intento pero me cuesta",
      "Lo manejo más o menos, a veces me supera",
      "Tengo herramientas que uso con bastante regularidad",
      "Gestiono bien el estrés, me recupero rápido"
    ]
  },
  {
    "id": "emocional",
    "name": "Salud Emocional",
    "short": "Emocional",
    "icon": "💜",
    "science": "Las emociones no procesadas generan tensión crónica e inflamación sistémica. Nombrar lo que sentimos activa la corteza prefrontal, reduciendo la reactividad de la amígdala y mejorando decisiones y relaciones.",
    "source": "Dr. Gabor Maté — médico, experto en trauma y estrés",
    "question": "¿Cómo está tu relación con tus emociones?",
    "anchors": [
      "Me cuesta conectar con lo que siento",
      "Reconozco algunas emociones pero me cuesta gestionarlas",
      "Voy aprendiendo, a veces bien y a veces no tanto",
      "Proceso bastante bien mis emociones, me conozco",
      "Tengo un trabajo interior activo y constante"
    ]
  },
  {
    "id": "naturaleza",
    "name": "Conexión con la Naturaleza",
    "short": "Naturaleza",
    "icon": "🌿",
    "science": "Un estudio publicado en Frontiers in Psychology (2019) demostró que 20 minutos en un espacio verde reducen el cortisol. La exposición a luz solar matutina es una de las intervenciones más efectivas para sincronizar el ritmo circadiano.",
    "source": "Dr. Andrew Huberman — neurocientífico, Stanford",
    "question": "¿Cuánto contacto tenés con la naturaleza?",
    "anchors": [
      "Paso casi todo el día en interiores",
      "Salgo poco, mayormente de mi casa al trabajo",
      "Trato de salir al aire libre un par de veces por semana",
      "Tengo contacto regular, disfruto estar afuera",
      "Es parte de mi rutina, me recarga cada día"
    ]
  },
  {
    "id": "vinculos",
    "name": "Vínculos y Propósito",
    "short": "Vínculos",
    "icon": "🤝",
    "science": "El estudio de Harvard sobre Desarrollo Adulto, en marcha desde 1938, mostró que la calidad de las relaciones es uno de los predictores más fuertes de salud y longevidad.",
    "source": "Dr. Robert Waldinger — Harvard Study of Adult Development",
    "question": "¿Cómo están tus relaciones y tu sentido de dirección?",
    "anchors": [
      "Siento que me faltan vínculos cercanos y claridad",
      "Tengo algunas personas pero me cuesta profundizar",
      "Tengo gente, podría conectar más y con más dirección",
      "Buenos vínculos y cierta claridad de hacia dónde voy",
      "Relaciones profundas y un propósito que me da energía"
    ]
  },
  {
    "id": "suplementacion",
    "name": "Suplementación Inteligente",
    "short": "Suplementos",
    "icon": "💊",
    "science": "La suplementación sin análisis previos es adivinar. Un ensayo con 1.054 personas (VITAL) mostró que la vitamina D3 ayudó a proteger los telómeros. Los suplementos funcionan cuando cubren un déficit real.",
    "source": "Dra. Rhonda Patrick — bioquímica, FoundMyFitness",
    "question": "¿Cómo es tu enfoque con la suplementación?",
    "anchors": [
      "No tomo nada o tomo cosas sin saber si las necesito",
      "Tomo algo básico sin haberme hecho análisis",
      "Algunos suplementos con cierta investigación propia",
      "Tengo un protocolo con alguna orientación profesional",
      "Protocolo con análisis de sangre y seguimiento"
    ]
  },
  {
    "id": "digital",
    "name": "Higiene Digital",
    "short": "Digital",
    "icon": "📱",
    "science": "El scroll infinito activa el mismo circuito de dopamina que una máquina tragamonedas: recompensa variable que genera dependencia. La luz azul nocturna suprime la producción de melatonina, afectando directamente la calidad del sueño.",
    "source": "Dra. Anna Lembke — Stanford Addiction Medicine",
    "question": "¿Cómo es tu relación con las pantallas?",
    "anchors": [
      "Estoy mucho en el celular, incluso de noche en la cama",
      "Uso bastante las pantallas, me cuesta soltar",
      "Intento poner límites pero no siempre lo logro",
      "Tengo límites claros la mayor parte del tiempo",
      "Uso intencional con zonas y horarios libres de pantallas"
    ]
  }
];

export const TIPS = {
  "sueno": [
    "Elegí una hora fija para acostarte y mantenela toda la semana — incluyendo fines de semana. La consistencia importa más que la cantidad.",
    "Creá una rutina pre-sueño: 60 min antes empezá a bajar luces y dejá el celular fuera del cuarto.",
    "Sumá el 'protocolo de luz': exponete a sol natural en los primeros 30 min del día para sincronizar tu reloj biológico.",
    "Optimizá tu ambiente: cuarto oscuro, temperatura 18-20°C, sin pantallas en la habitación.",
    "Experimentá con un diario de sueño para identificar qué hábitos mejoran tu descanso y cuáles lo sabotean."
  ],
  "alimentacion": [
    "Sumá una porción de vegetales verdes a una comida por día. Un solo cambio sostenido ya genera impacto real.",
    "Reemplazá un ultraprocesado por día con comida real: fruta, frutos secos, huevo o legumbres.",
    "Probá definir una ventana de alimentación de 12hs (ej: desayunás a las 8 → cenás antes de las 20).",
    "Sumá más proteína de calidad y grasas saludables: palta, aceite de oliva, frutos secos.",
    "Seguí escuchando a tu cuerpo. Podés experimentar con nuevos alimentos o recetas que te nutran más."
  ],
  "movimiento": [
    "Empezá caminando 15 min al día. Es la intervención con mejor relación esfuerzo-resultado según la evidencia.",
    "Sumá una actividad que disfrutes 2 veces por semana. No tiene que ser el gym: bailar, nadar o bici cuentan.",
    "Incorporá algo de fuerza: sentadillas, flexiones o bandas elásticas. Tu masa muscular es clave para la longevidad.",
    "Agregá 10 min de movilidad y estiramientos post-entreno. Previene lesiones y mejora la recuperación.",
    "Desafiate: ¿podés subir 4 pisos sin agitarte? ¿Levantarte del piso sin manos? Tests funcionales reales."
  ],
  "estres": [
    "Probá la respiración 4-7-8 (inhalar 4s, retener 7s, exhalar 8s) tres veces antes de cada comida. Son 60 segundos.",
    "Elegí UNA práctica de regulación y dedicale 5 min diarios: respiración, journaling o caminata sin celular.",
    "Identificá tus 3 mayores fuentes de estrés y anotá una pequeña acción para cada una esta semana.",
    "Sumá prácticas de recuperación activa: tiempo en naturaleza, meditación guiada o contacto con agua fría.",
    "Compartí lo que aprendiste. Enseñar una técnica consolida el hábito y multiplica el impacto."
  ],
  "emocional": [
    "Empezá un mini-diario emocional: 3 min al día escribiendo qué sentiste y qué lo disparó.",
    "Practicá nombrar tus emociones en voz alta. Ponerle nombre reduce su intensidad automáticamente.",
    "Explorá un espacio de acompañamiento (terapia, coaching) como lugar seguro para profundizar.",
    "Sumá prácticas somáticas: yoga, breathwork o meditación con foco en las sensaciones corporales.",
    "Tu inteligencia emocional es un activo enorme. Podés usarla para acompañar a otros en su proceso."
  ],
  "naturaleza": [
    "Salí a caminar 20 min en un espacio verde esta semana. Suficiente para reducir cortisol mediblemente.",
    "Almorzá afuera cuando puedas o caminá descalzo/a en pasto. Las dosis pequeñas cuentan.",
    "Convertí una actividad semanal en outdoor: caminata, lectura en un parque, mate al sol.",
    "Llevá tu práctica de ejercicio o meditación al aire libre cuando el clima lo permita.",
    "Probá una inmersión larga en naturaleza (2+ horas) al menos una vez al mes."
  ],
  "vinculos": [
    "Esta semana escribile a una persona que valorás. No un 'hola qué tal' — algo genuino y personal.",
    "Priorizá una conversación profunda por semana con alguien importante. Sin celular en la mesa.",
    "Considerá sumarte a un grupo o comunidad alineada con algo que te interese.",
    "Profundizá con más vulnerabilidad y presencia. Son el combustible de las relaciones reales.",
    "Seguí nutriendo tu red con intención. Tus relaciones son tu mayor activo de salud según la ciencia."
  ],
  "suplementacion": [
    "Antes de tomar suplementos, hacete un análisis de sangre completo. Sin datos, estás adivinando.",
    "Los 3 con más evidencia: vitamina D (si no tomás sol), magnesio y omega-3. Consultá dosis con un profesional.",
    "Revisá lo que tomás con un profesional para validar si realmente lo necesitás según tus niveles.",
    "Actualizá tu protocolo cada 6 meses con nuevos análisis. Tu cuerpo cambia constantemente.",
    "Tu enfoque basado en datos es excelente. Seguí ajustando con información real y profesional."
  ],
  "digital": [
    "Sacá el celular del cuarto a la noche. Si lo usás como alarma, invertí en un reloj despertador.",
    "Desactivá notificaciones no esenciales. Cada interrupción te saca del foco por hasta 23 minutos.",
    "Definí una 'zona libre de pantallas' en tu casa: la mesa de comer, tu cuarto, o ambos.",
    "Sumá momentos sin estímulo digital: tu cerebro necesita esos espacios para entrar en modo reparación.",
    "Tu relación con la tecnología es saludable. Compartí tus estrategias con alguien que lo necesite."
  ]
};

export const LABELS = ["Necesita atención","En riesgo","En desarrollo","Buen camino","Fortaleza"];
