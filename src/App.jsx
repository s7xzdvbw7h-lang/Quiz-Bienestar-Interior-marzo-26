import { useState, useRef } from "react";

const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbw5OM2TukvtEeqYj7a2Mw40ETWVSimu4WoQCrYMaqC-GVsXZwntG3y7xqbgDLarlSYThQ/exec";

const AREAS = [
  {
    id: "sueno", name: "Sueño Reparador", icon: "🌙",
    science: "Mientras dormís profundamente, tu cerebro activa el sistema glinfático: una red que elimina proteínas tóxicas acumuladas durante el día. Estudios en UC Berkeley muestran que dormir menos de 6 horas de forma crónica debilita las defensas y acelera el deterioro cognitivo.",
    researcher: "Dr. Matthew Walker — neurocientífico, UC Berkeley",
    question: "¿Cómo es tu sueño habitualmente?",
    anchors: ["Duermo poco y mal, sin rutina de horarios","Irregular: algunas noches descanso, otras no","Generalmente bien, pero me cuesta ser constante","Duermo 7-8hs la mayoría de las noches","Sueño profundo y consistente, con rutina estable"],
  },
  {
    id: "alimentacion", name: "Alimentación Consciente", icon: "🥗",
    science: "Lo que comés es información directa para tus genes. Períodos sin comer activan la autofagia — un proceso de limpieza celular que elimina componentes dañados. No solo importa qué comés, sino cuándo: el horario influye en tu metabolismo e inflamación.",
    researcher: "Dr. Valter Longo — Instituto de Longevidad, USC",
    question: "¿Cómo es tu relación con la alimentación?",
    anchors: ["Bastante procesada, como por impulso o sin horarios","Mezclo comida real con bastante procesado","Intento comer bien pero no logro ser constante","Buena base de alimentación, con algún desliz puntual","Alimentos reales, horarios definidos, como con consciencia"],
  },
  {
    id: "movimiento", name: "Movimiento Diario", icon: "🏃",
    science: "El ejercicio libera BDNF, una proteína que estimula el crecimiento de nuevas neuronas. Estudios asocian caminar de forma regular con menor riesgo cardiovascular. Después de los 40, la masa muscular es uno de los mejores predictores de longevidad.",
    researcher: "Dr. Peter Attia — médico, especialista en longevidad",
    question: "¿Cuánto movimiento hacés por semana?",
    anchors: ["Muy poco, paso la mayor parte del día sentado/a","Algún movimiento esporádico, sin rutina definida","Me muevo 2-3 veces por semana con cierta regularidad","Activo/a, entreno o camino 4+ veces por semana","Combino fuerza, cardio y movilidad con regularidad"],
  },
  {
    id: "estres", name: "Gestión del Estrés", icon: "🧘‍♀️",
    science: "El estrés crónico acorta los telómeros — los protectores de tu ADN — acelerando el envejecimiento celular. Pero la investigación de Blackburn y Epel demostró que prácticas de regulación como la meditación pueden proteger y preservar los telómeros con el tiempo.",
    researcher: "Dra. Elizabeth Blackburn y Dra. Elissa Epel — Premio Nobel 2009",
    question: "¿Cómo gestionás el estrés del día a día?",
    anchors: ["Me siento desbordado/a con frecuencia","El estrés me afecta bastante, intento pero me cuesta","Lo manejo más o menos, a veces me supera","Tengo herramientas que uso con bastante regularidad","Gestiono bien el estrés, me recupero rápido"],
  },
  {
    id: "emocional", name: "Salud Emocional", icon: "💜",
    science: "Las emociones no procesadas generan tensión crónica e inflamación sistémica. Nombrar lo que sentimos activa la corteza prefrontal, reduciendo la reactividad de la amígdala y mejorando decisiones y relaciones.",
    researcher: "Dr. Gabor Maté — médico, experto en trauma y estrés",
    question: "¿Cómo está tu relación con tus emociones?",
    anchors: ["Me cuesta conectar con lo que siento","Reconozco algunas emociones pero me cuesta gestionarlas","Voy aprendiendo, a veces bien y a veces no tanto","Proceso bastante bien mis emociones, me conozco","Tengo un trabajo interior activo y constante"],
  },
  {
    id: "naturaleza", name: "Conexión con la Naturaleza", icon: "🌿",
    science: "Un estudio publicado en Frontiers in Psychology (2019) mostró que pasar tiempo en espacios verdes se asocia con menores niveles de cortisol. La exposición a luz solar matutina es una de las intervenciones más efectivas para sincronizar el ritmo circadiano.",
    researcher: "Dr. Andrew Huberman — neurocientífico, Stanford",
    question: "¿Cuánto contacto tenés con la naturaleza?",
    anchors: ["Paso casi todo el día en interiores","Salgo poco, mayormente de mi casa al trabajo","Trato de salir al aire libre un par de veces por semana","Tengo contacto regular, disfruto estar afuera","Es parte de mi rutina, me recarga cada día"],
  },
  {
    id: "vinculos", name: "Vínculos y Propósito", icon: "🤝",
    science: "El estudio de Harvard sobre Desarrollo Adulto — con 85 años de seguimiento — concluyó que la calidad de las relaciones es el predictor #1 de salud y longevidad. Más que la dieta, el ejercicio o la genética.",
    researcher: "Dr. Robert Waldinger — Harvard Study of Adult Development",
    question: "¿Cómo están tus relaciones y tu sentido de dirección?",
    anchors: ["Siento que me faltan vínculos cercanos y claridad","Tengo algunas personas pero me cuesta profundizar","Tengo gente, podría conectar más y con más dirección","Buenos vínculos y cierta claridad de hacia dónde voy","Relaciones profundas y un propósito que me da energía"],
  },
  {
    id: "suplementacion", name: "Suplementación Inteligente", icon: "💊",
    science: "La suplementación sin análisis previos es adivinar. La deficiencia de vitamina D es frecuente y se confirma solo con análisis. Los suplementos tienen sentido cuando un profesional detecta un déficit real.",
    researcher: "Dra. Rhonda Patrick — bioquímica, FoundMyFitness",
    question: "¿Cómo es tu enfoque con la suplementación?",
    anchors: ["No tomo nada o tomo cosas sin saber si las necesito","Tomo algo básico sin haberme hecho análisis","Algunos suplementos con cierta investigación propia","Tengo un protocolo con alguna orientación profesional","Protocolo con análisis de sangre y seguimiento"],
  },
  {
    id: "digital", name: "Higiene Digital", icon: "📱",
    science: "El scroll infinito activa el mismo circuito de dopamina que una máquina tragamonedas: recompensa variable que genera dependencia. La luz azul nocturna suprime la producción de melatonina, afectando directamente la calidad del sueño.",
    researcher: "Dra. Anna Lembke — Stanford Addiction Medicine",
    question: "¿Cómo es tu relación con las pantallas?",
    anchors: ["Estoy mucho en el celular, incluso de noche en la cama","Uso bastante las pantallas, me cuesta soltar","Intento poner límites pero no siempre lo logro","Tengo límites claros la mayor parte del tiempo","Uso intencional con zonas y horarios libres de pantallas"],
  },
];

const COLORS = ["#E8738A","#F4A7B4","#E8D87A","#7FD6C9","#3BC4B2"];
const TXT_COLORS = ["#B8455E","#B8455E","#7A6A10","#1F7F72","#1F7F72"];
const LABELS = ["Necesita atención","En riesgo","En desarrollo","Buen camino","Fortaleza"];
const BG_COLORS = ["#FFF0F3","#FFF0F3","#FFFBE6","#F0FAF7","#F0FAF7"];

const TIPS = {
  sueno: ["Elegí una hora fija para acostarte y mantenela toda la semana — incluyendo fines de semana. La consistencia importa más que la cantidad.","Creá una rutina pre-sueño: 60 min antes empezá a bajar luces y dejá el celular fuera del cuarto.","Sumá luz natural: exponete a sol natural en los primeros 30 min del día para sincronizar tu reloj biológico.","Optimizá tu ambiente: cuarto oscuro, temperatura 18-20°C, sin pantallas en la habitación.","Experimentá con un diario de sueño para identificar qué hábitos mejoran tu descanso y cuáles lo sabotean."],
  alimentacion: ["Sumá una porción de vegetales verdes a una comida por día. Un solo cambio sostenido ya genera impacto real.","Reemplazá un ultraprocesado por día con comida real: fruta, frutos secos, huevo o legumbres.","Probá ordenar tus horarios de comida: una cena más temprana y un descanso nocturno sin picoteo suelen ayudar.","Sumá más proteína de calidad y grasas saludables: palta, aceite de oliva, frutos secos.","Seguí escuchando a tu cuerpo. Podés experimentar con nuevos alimentos o recetas que te nutran más."],
  movimiento: ["Empezá caminando 15 min al día. Es la intervención con mejor relación esfuerzo-resultado según la evidencia.","Sumá una actividad que disfrutes 2 veces por semana. No tiene que ser el gym: bailar, nadar o bici cuentan.","Incorporá algo de fuerza: sentadillas, flexiones o bandas elásticas. Tu masa muscular es clave para la longevidad.","Agregá 10 min de movilidad y estiramientos post-entreno. Previene lesiones y mejora la recuperación.","Desafiate: ¿podés subir 4 pisos sin agitarte? ¿Levantarte del piso sin manos? Tests funcionales reales."],
  estres: ["Probá la respiración 4-7-8 (inhalar 4s, retener 7s, exhalar 8s) tres veces antes de cada comida. Son 60 segundos.","Elegí UNA práctica de regulación y dedicale 5 min diarios: respiración, journaling o caminata sin celular.","Identificá tus 3 mayores fuentes de estrés y anotá una pequeña acción para cada una esta semana.","Sumá prácticas de recuperación activa: tiempo en naturaleza, meditación guiada o una pausa de respiración consciente.","Compartí lo que aprendiste. Enseñar una técnica consolida el hábito y multiplica el impacto."],
  emocional: ["Empezá un mini-diario emocional: 3 min al día escribiendo qué sentiste y qué lo disparó.","Practicá nombrar tus emociones en voz alta. Ponerle nombre suele ayudar a que pierdan intensidad.","Considerá un espacio de acompañamiento profesional (terapia, coaching) como lugar seguro para profundizar.","Sumá prácticas somáticas: yoga, breathwork o meditación con foco en las sensaciones corporales.","Tu inteligencia emocional es un activo enorme. Podés usarla para acompañar a otros en su proceso."],
  naturaleza: ["Salí a caminar 20 min en un espacio verde esta semana. Suficiente para reducir cortisol mediblemente.","Almorzá afuera cuando puedas o caminá descalzo/a en pasto. Las dosis pequeñas cuentan.","Convertí una actividad semanal en outdoor: caminata, lectura en un parque, mate al sol.","Llevá tu práctica de ejercicio o meditación al aire libre cuando el clima lo permita.","Probá una inmersión larga en naturaleza (2+ horas) al menos una vez al mes."],
  vinculos: ["Esta semana escribile a una persona que valorás. No un 'hola qué tal' — algo genuino y personal.","Priorizá una conversación profunda por semana con alguien importante. Sin celular en la mesa.","Considerá sumarte a un grupo o comunidad alineada con algo que te interese.","Profundizá con más vulnerabilidad y presencia. Son el combustible de las relaciones reales.","Seguí nutriendo tu red con intención. Tus relaciones son tu mayor activo de salud según la ciencia."],
  suplementacion: ["Antes de tomar suplementos, hacete un análisis de sangre completo. Sin datos, estás adivinando.","Hablá con tu médico/a o nutricionista sobre qué análisis te convienen antes de sumar cualquier suplemento.","Revisá lo que tomás con un profesional para validar si realmente lo necesitás según tus niveles.","Actualizá tu protocolo cada 6 meses con nuevos análisis. Tu cuerpo cambia constantemente.","Tu enfoque basado en datos es excelente. Seguí ajustando con información real y profesional."],
  digital: ["Sacá el celular del cuarto a la noche. Si lo usás como alarma, invertí en un reloj despertador.","Desactivá notificaciones no esenciales. Cada interrupción te saca del foco por hasta 23 minutos.","Definí una 'zona libre de pantallas' en tu casa: la mesa de comer, tu cuarto, o ambos.","Sumá momentos sin estímulo digital: tu cerebro necesita esos espacios para entrar en modo reparación.","Tu relación con la tecnología es saludable. Compartí tus estrategias con alguien que lo necesite."],
};

const SHORT={sueno:"Sueño",alimentacion:"Alimentación",movimiento:"Movimiento",estres:"Estrés",emocional:"Emocional",naturaleza:"Naturaleza",vinculos:"Vínculos",suplementacion:"Suplementos",digital:"Digital"};

function RadarChart({ scores, size = 290 }) {
  const cx = size/2, cy = size/2, r = size*0.32, n = AREAS.length, angleStep = (2*Math.PI)/n, angleOff = -Math.PI/2;
  const pt = (i,v) => { const a=angleOff+i*angleStep; return [cx+((v/5)*r)*Math.cos(a), cy+((v/5)*r)*Math.sin(a)]; };
  return (
    <svg viewBox={`0 0 ${size} ${size}`} style={{width:"100%",maxWidth:size}}>
      {[1,2,3,4,5].map(l=><polygon key={l} points={Array.from({length:n},(_,i)=>pt(i,l).join(",")).join(" ")} fill="none" stroke="#E5E0D8" strokeWidth={l===5?"1.2":"0.6"}/>)}
      {AREAS.map((_,i)=>{const[x,y]=pt(i,5);return <line key={i} x1={cx} y1={cy} x2={x} y2={y} stroke="#E5E0D8" strokeWidth="0.5"/>})}
      <polygon points={AREAS.map((a,i)=>pt(i,scores[a.id]||0).join(",")).join(" ")} fill="rgba(232,115,138,0.15)" stroke="#E8738A" strokeWidth="2.2" strokeLinejoin="round"/>
      {AREAS.map((a,i)=>{const[dx,dy]=pt(i,scores[a.id]||0);const[lx,ly]=pt(i,5.85);const sc=scores[a.id]||1;return(
        <g key={a.id}><circle cx={dx} cy={dy} r="4.5" fill={COLORS[sc-1]} stroke="#fff" strokeWidth="2"/>
        <text x={lx} y={ly-4} textAnchor="middle" dominantBaseline="middle" fill="#555555" fontSize="11.5">{a.icon}</text>
        <text x={lx} y={ly+8} textAnchor="middle" dominantBaseline="middle" fill="#6F6A66" fontSize="7.5" fontFamily="'Poppins',sans-serif" fontWeight="500">{SHORT[a.id]}</text></g>
      )})}
    </svg>
  );
}

export default function App() {
  const [phase, setPhase] = useState("landing");
  const [step, setStep] = useState(0);
  const [scores, setScores] = useState({});
  const [sel, setSel] = useState(null);
  const [fading, setFading] = useState(false);
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [err, setErr] = useState("");
  const [sending, setSending] = useState(false);
  const [consent, setConsent] = useState(false);
  const [hp, setHp] = useState("");
  const [mailOk, setMailOk] = useState(true);
  const topRef = useRef(null);
  const area = AREAS[step];
  const pct = (step/AREAS.length)*100;
  const scrollTop = () => setTimeout(()=>topRef.current?.scrollIntoView({behavior:"smooth"}),60);
  const g = "#E8738A", bd = "#F6D9DF", sn = "'Poppins',-apple-system,sans-serif", sf = "'Playfair Display',Georgia,serif";
  const btn = {width:"100%",padding:"15px 24px",background:g,color:"#fff",border:"none",borderRadius:12,fontSize:15,fontWeight:600,fontFamily:sn,cursor:"pointer",transition:"all 0.2s"};

  const goNext = () => { if(sel===null)return; setFading(true); setTimeout(()=>{ const ns={...scores,[area.id]:sel}; setScores(ns); if(step<AREAS.length-1){setStep(step+1);setSel(null)} else setPhase("email"); setFading(false); scrollTop(); },280); };

  const submitForm = async (ev) => {
    ev.preventDefault();
    setErr("");
    if (!nombre.trim()) { setErr("Ingresá tu nombre"); return; }
    if (!email.trim()) { setErr("Ingresá tu email"); return; }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) { setErr("Revisá que tu email esté bien"); return; }
    if (!consent) { setErr("Necesitamos tu OK para enviarte tu mapa"); return; }
    setSending(true);
    const finalScores = { ...scores };
    const finalAvg = (Object.values(finalScores).reduce((x, y) => x + y, 0) / Object.values(finalScores).length).toFixed(1);
    const payload = {
      timestamp: new Date().toISOString(),
      nombre: nombre.trim(),
      email: email.trim(),
      puntaje_promedio: finalAvg,
      ...Object.fromEntries(AREAS.map(ar => [ar.id, finalScores[ar.id] || 0]))
    };
    try {
      await fetch(SCRIPT_URL, { method: "POST", mode: "no-cors", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
    } catch (err1) { console.error("GAS:", err1); }
    try {
      const r = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email.trim(),
          name: nombre.trim(),
          website: hp,
          fields: {
            quiz_sueno: finalScores.sueno || 0,
            quiz_alimentacion: finalScores.alimentacion || 0,
            quiz_movimiento: finalScores.movimiento || 0,
            quiz_estres: finalScores.estres || 0,
            quiz_emocional: finalScores.emocional || 0,
            quiz_naturaleza: finalScores.naturaleza || 0,
            quiz_vinculos: finalScores.vinculos || 0,
            quiz_suplementacion: finalScores.suplementacion || 0,
            quiz_digital: finalScores.digital || 0,
            quiz_promedio: parseFloat(finalAvg),
          },
        }),
      });
      if (!r.ok) setMailOk(false);
    } catch (err2) { console.error("ML:", err2); setMailOk(false); }
    setSending(false);
    setPhase("results");
    scrollTop();
  };

  const allScores={...scores};
  const avgScore=Object.values(allScores).length>0?(Object.values(allScores).reduce((x,y)=>x+y,0)/Object.values(allScores).length).toFixed(1):0;
  const sorted=[...AREAS].sort((a,b)=>(allScores[a.id]||0)-(allScores[b.id]||0)), w3=sorted.slice(0,3), best=sorted[sorted.length-1];
  const getMsg=()=>{const v=parseFloat(avgScore);if(v<=2)return"Tu bienestar necesita atención consciente. Pero el primer paso es darte cuenta — y ya lo diste.";if(v<=3)return"Hay áreas importantes que necesitan tu atención. Cambios pequeños y consistentes generan transformaciones grandes.";if(v<=3.5)return"Tenés una base con oportunidades claras. Trabajar tus puntos más bajos puede elevar todo tu bienestar.";if(v<=4)return"Estás en buen camino. Tu compromiso con el autoconocimiento ya te diferencia.";if(v<=4.5)return"Muy buen nivel de bienestar. Tenés bases sólidas, podés enfocarte en pulir los detalles.";return"Resultados excepcionales. Tu dedicación al bienestar integral se refleja en cada área."};

  return (
    <div style={{minHeight:"100vh",background:"#FFF0F3",fontFamily:sn,color:"#1A1A1A",padding:"0 16px 48px"}}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;0,600;0,700;1,400&family=Poppins:wght@300;400;500;600;700&display=swap');*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}body{background:#FFF0F3}@keyframes fadeUp{from{opacity:0;transform:translateY(18px)}to{opacity:1;transform:translateY(0)}}::selection{background:#E8738A35}input:focus{outline:none;border-color:#E8738A!important;box-shadow:0 0 0 3px rgba(61,144,96,0.08)!important}`}</style>
      <div ref={topRef}/><div style={{maxWidth:520,margin:"0 auto",paddingTop:28}}>

      {phase==="landing"&&<div style={{animation:"fadeUp 0.6s ease"}}>
        <div style={{textAlign:"center",marginBottom:30}}>
          <div style={{display:"inline-block",background:"#FFE3E9",color:"#555555",fontSize:10,fontWeight:700,letterSpacing:"0.07em",textTransform:"uppercase",padding:"6px 16px",borderRadius:40,marginBottom:20}}>Autoconocimiento inspirado en ciencia de longevidad</div>
          <h1 style={{fontFamily:sf,fontSize:38,fontWeight:600,lineHeight:1.1}}>Mapa de<br/>Bienestar Interior</h1>
          <p style={{fontSize:14,color:"#6F6A66",marginTop:10}}>by <strong style={{color:"#555555"}}>Dani Navarro</strong></p>
          <div style={{width:36,height:2.5,background:g,margin:"18px auto",borderRadius:2}}/>
          <p style={{fontSize:15,lineHeight:1.65,color:"#555555",maxWidth:400,margin:"0 auto"}}>Descubrí en <strong style={{color:"#1A1A1A"}}>3 minutos</strong> cómo están las 9 áreas fundamentales de tu bienestar y recibí <strong style={{color:"#1A1A1A"}}>primeros pasos concretos</strong> para tus áreas prioritarias.</p>
        </div>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:10,marginBottom:22}}>
          {[["🔬","Ciencia","Harvard, Stanford y UC Berkeley"],["⏱️","3 minutos","9 preguntas, resultados al instante"],["🎯","Primeros pasos","Acciones simples para vos"]].map(([ic,t,d])=><div key={t} style={{background:"#fff",border:`1.5px solid ${bd}`,borderRadius:14,padding:"16px 10px",textAlign:"center"}}><span style={{fontSize:22,display:"block",marginBottom:6}}>{ic}</span><span style={{fontSize:12,fontWeight:700,display:"block",marginBottom:3}}>{t}</span><span style={{fontSize:10.5,lineHeight:1.4,color:"#6F6A66"}}>{d}</span></div>)}
        </div>
        <div style={{background:"#fff",border:`1.5px solid ${bd}`,borderRadius:14,padding:"14px 18px",textAlign:"center",marginBottom:26}}>
          <p style={{fontSize:9.5,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.08em",color:"#6F6A66",marginBottom:5}}>Inspirado en la investigación de</p>
          <p style={{fontFamily:sf,fontSize:13,fontStyle:"italic",color:"#555555",lineHeight:1.5}}>Peter Attia · Matthew Walker · Valter Longo · Gabor Maté · Andrew Huberman · Elizabeth Blackburn · Robert Waldinger</p>
        </div>
        <button onClick={()=>{setPhase("questions");scrollTop()}} style={btn}>Comenzar mi mapa</button>
        <p style={{textAlign:"center",fontSize:12,color:"#8A8480",marginTop:12}}>100% gratuito · Resultados inmediatos · Tu información es privada</p>
      </div>}

      {phase==="questions"&&<div style={{animation:"fadeUp 0.35s ease",opacity:fading?0:1,transform:fading?"translateX(20px)":"none",transition:"all 0.28s ease"}}>
        <div style={{marginBottom:18}}><div style={{display:"flex",justifyContent:"space-between",marginBottom:6}}><span style={{fontSize:12,fontWeight:600,color:"#6F6A66"}}>Pregunta {step+1} de {AREAS.length}</span><span style={{fontSize:12,fontWeight:600,color:g}}>{Math.round(pct)}%</span></div><div style={{height:4,borderRadius:2,background:"#FFE3E9",overflow:"hidden"}}><div style={{height:"100%",borderRadius:2,background:`linear-gradient(90deg,#6BAF7B,${g})`,transition:"width 0.4s",width:`${pct}%`}}/></div></div>
        <div style={{background:"#fff",border:`1.5px solid ${bd}`,borderRadius:18,padding:"26px 20px"}}>
          <div style={{textAlign:"center",marginBottom:14}}><span style={{fontSize:30}}>{area.icon}</span><h2 style={{fontFamily:sf,fontSize:21,fontWeight:600,marginTop:4}}>{area.name}</h2></div>
          <div style={{background:"#FFF8FA",border:`1px solid ${bd}`,borderRadius:12,padding:"13px 15px",marginBottom:18,borderLeft:`3px solid ${g}`}}><p style={{fontSize:12.5,lineHeight:1.6,color:"#555555"}}>{area.science}</p><p style={{fontSize:10.5,color:"#6F6A66",marginTop:6,fontStyle:"italic"}}>— {area.researcher}</p></div>
          <p style={{fontSize:15.5,fontWeight:600,textAlign:"center",marginBottom:14}}>{area.question}</p>
          <div style={{display:"flex",flexDirection:"column",gap:7,marginBottom:18}}>
            {area.anchors.map((t,i)=>{const v=i+1,a=sel===v;return <button key={v} onClick={()=>setSel(v)} style={{display:"flex",alignItems:"center",gap:11,padding:"11px 13px",borderRadius:11,borderStyle:"solid",cursor:"pointer",transition:"all 0.2s",fontFamily:sn,textAlign:"left",background:a?BG_COLORS[i]:"#fff",borderColor:a?COLORS[i]:bd,borderWidth:a?"2px":"1.5px"}}><span style={{minWidth:28,height:28,borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",fontSize:11.5,fontWeight:700,flexShrink:0,background:a?COLORS[i]:"#F2F0EB",color:a?"#fff":"#6F6A66"}}>{v}</span><span style={{fontSize:13.5,lineHeight:1.4,color:a?"#1A1A1A":"#555555"}}>{t}</span></button>})}
          </div>
          <button onClick={goNext} disabled={sel===null} style={{...btn,opacity:sel===null?0.35:1,cursor:sel===null?"default":"pointer"}}>{step<AREAS.length-1?"Siguiente":"Ver mis resultados"}</button>
        </div>
      </div>}

      {phase==="email"&&<div style={{animation:"fadeUp 0.5s ease"}}>
        <div style={{background:"#fff",border:`1.5px solid ${bd}`,borderRadius:18,padding:"36px 22px",textAlign:"center"}}>
          <span style={{fontSize:38}}>📊</span>
          <h2 style={{fontFamily:sf,fontSize:24,fontWeight:600,marginTop:12,marginBottom:8}}>Tu mapa está listo</h2>
          <p style={{fontSize:14,lineHeight:1.6,color:"#555555",maxWidth:350,margin:"0 auto 8px"}}>Ingresá tu nombre y email para ver tu mapa completo con tus primeros pasos.</p>
          <p style={{fontSize:12.5,color:g,fontWeight:600,marginBottom:22}}>+ Recibís gratis micro-acciones basadas en ciencia</p>
          <div style={{maxWidth:330,margin:"0 auto"}}>
            <input type="text" placeholder="Tu nombre" value={nombre} onChange={e=>setNombre(e.target.value)} style={{width:"100%",padding:"13px 16px",background:"#FFF8FA",border:`1.5px solid ${bd}`,borderRadius:10,fontSize:15,fontFamily:sn,color:"#1A1A1A",marginBottom:10}}/>
            <input type="email" placeholder="Tu mejor email" value={email} onChange={e=>setEmail(e.target.value)} style={{width:"100%",padding:"13px 16px",background:"#FFF8FA",border:`1.5px solid ${bd}`,borderRadius:10,fontSize:15,fontFamily:sn,color:"#1A1A1A",marginBottom:10}}/>
            <input type="text" name="website" tabIndex={-1} autoComplete="off" value={hp} onChange={e=>setHp(e.target.value)} aria-hidden="true" style={{position:"absolute",left:"-9999px",width:1,height:1,opacity:0}}/>
            <label style={{display:"flex",gap:9,alignItems:"flex-start",textAlign:"left",fontSize:12,lineHeight:1.5,color:"#555555",marginBottom:12,cursor:"pointer"}}><input type="checkbox" checked={consent} onChange={e=>setConsent(e.target.checked)} style={{marginTop:3,accentColor:"#E8738A",flexShrink:0}}/><span>Acepto recibir mi mapa y mails de Dani Navarro con micro-acciones de bienestar. Puedo darme de baja cuando quiera.</span></label>
            {err&&<p style={{color:"#B8455E",fontSize:13,marginBottom:8}}>{err}</p>}
            <button onClick={submitForm} disabled={sending} style={btn}>{sending?"Preparando tu mapa...":"Ver mi mapa"}</button>
          </div>
          <p style={{fontSize:10.5,color:"#8A8480",marginTop:14}}>Usamos tus datos solo para enviarte tu mapa y contenido de bienestar. No los compartimos.</p>
        </div>
      </div>}

      {phase==="results"&&<div style={{animation:"fadeUp 0.6s ease"}}>
        <div style={{textAlign:"center",marginBottom:22}}>
          <div style={{display:"inline-block",background:"#FFE3E9",color:"#555555",fontSize:10,fontWeight:700,letterSpacing:"0.07em",textTransform:"uppercase",padding:"5px 14px",borderRadius:40,marginBottom:12}}>Tu mapa personalizado</div>
          <h1 style={{fontFamily:sf,fontSize:26,fontWeight:600}}>Mapa de Bienestar</h1>
          <p style={{fontSize:14,color:"#6F6A66",marginTop:4}}>{nombre}</p>
        </div>

        <div style={{background:"#fff",border:`1.5px solid ${bd}`,borderRadius:18,padding:"26px 20px",marginBottom:20}}>
          <div style={{textAlign:"center"}}>
            <div style={{display:"inline-flex",alignItems:"baseline",justifyContent:"center",background:"#F0FAF7",border:"2px solid #BFE9E2",borderRadius:"50%",width:84,height:84}}><span style={{fontFamily:sf,fontSize:32,fontWeight:700,color:g}}>{avgScore}</span><span style={{fontSize:13,color:"#6F6A66",marginLeft:2}}>/5</span></div>
            <p style={{fontSize:13.5,lineHeight:1.6,color:"#555555",maxWidth:380,margin:"14px auto 0"}}>{getMsg()}</p>
          </div>
          <div style={{display:"flex",justifyContent:"center",margin:"16px 0 10px"}}><RadarChart scores={allScores} size={285}/></div>
          <div style={{display:"flex",flexWrap:"wrap",justifyContent:"center",gap:10}}>{LABELS.map((l,i)=><div key={i} style={{display:"flex",alignItems:"center",gap:4,fontSize:10,color:"#6F6A66"}}><div style={{width:7,height:7,borderRadius:"50%",background:COLORS[i]}}/><span>{l}</span></div>)}</div>
        </div>

        <h2 style={{fontFamily:sf,fontSize:19,fontWeight:600,marginBottom:12}}>Resultados por área</h2>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10,marginBottom:24}}>
          {sorted.map(a=>{const sc=allScores[a.id]||1;return <div key={a.id} style={{background:"#fff",border:`1.5px solid ${bd}`,borderRadius:12,padding:"13px 13px 11px",borderLeft:`4px solid ${COLORS[sc-1]}`}}><div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:7}}><div style={{display:"flex",alignItems:"center",gap:5}}><span style={{fontSize:14}}>{a.icon}</span><span style={{fontSize:11,fontWeight:600}}>{SHORT[a.id]}</span></div><span style={{fontSize:11.5,fontWeight:700,padding:"2px 9px",borderRadius:20,background:BG_COLORS[sc-1],color:TXT_COLORS[sc-1]}}>{sc}/5</span></div><div style={{height:4,borderRadius:2,background:"#F2F0EB",overflow:"hidden",marginBottom:5}}><div style={{height:"100%",borderRadius:2,background:COLORS[sc-1],width:`${(sc/5)*100}%`,transition:"width 0.5s"}}/></div><p style={{fontSize:10.5,color:"#6F6A66"}}>{LABELS[sc-1]}</p></div>})}
        </div>

        <div style={{marginBottom:12}}><h2 style={{fontFamily:sf,fontSize:19,fontWeight:600}}>Tu plan de acción</h2><p style={{fontSize:12.5,color:"#6F6A66",marginTop:3}}>Tus 3 áreas prioritarias con el primer paso concreto para esta semana</p></div>
        {w3.map((a,idx)=>{const sc=allScores[a.id]||1,tip=TIPS[a.id]?.[sc-1]||"";return <div key={a.id} style={{background:"#fff",border:`1.5px solid ${bd}`,borderRadius:14,padding:"17px 17px 14px",marginBottom:10}}><span style={{fontSize:9.5,fontWeight:700,letterSpacing:"0.08em",color:"#B8455E",textTransform:"uppercase"}}>Prioridad {idx+1}</span><div style={{display:"flex",alignItems:"center",gap:10,margin:"8px 0 10px"}}><span style={{fontSize:22}}>{a.icon}</span><div><h3 style={{fontFamily:sf,fontSize:16,fontWeight:600,margin:0}}>{a.name}</h3><span style={{fontSize:10.5,fontWeight:600,padding:"2px 9px",borderRadius:20,background:BG_COLORS[sc-1],color:TXT_COLORS[sc-1]}}>{LABELS[sc-1]} · {sc}/5</span></div></div><div style={{display:"flex",gap:9,background:"#FFF8FA",borderRadius:10,padding:"12px 13px"}}><span style={{fontSize:16,flexShrink:0}}>💡</span><p style={{fontSize:12.5,lineHeight:1.55,color:"#4A4742",margin:0}}>{tip}</p></div></div>})}

        <div style={{background:"#F0FAF7",border:"1.5px solid #BFE9E2",borderRadius:14,padding:"15px 17px",margin:"14px 0 22px"}}><div style={{display:"flex",alignItems:"center",gap:8,marginBottom:5}}><span style={{fontSize:20}}>{best?.icon}</span><strong style={{fontSize:14}}>Tu mayor fortaleza: {best?.name}</strong></div><p style={{fontSize:12.5,color:"#1F6F64",lineHeight:1.5}}>Esta área es un pilar sólido de tu bienestar. Usala como base para trabajar en las demás.</p></div>

        <div style={{background:"#fff",border:`2px solid ${g}`,borderRadius:18,padding:"24px 22px",textAlign:"center",marginBottom:14}}><span style={{fontSize:26}}>📬</span><h3 style={{fontFamily:sf,fontSize:18,fontWeight:600,marginTop:8,marginBottom:6}}>Revisá tu correo</h3><p style={{fontSize:13,lineHeight:1.6,color:"#555555",maxWidth:370,margin:"0 auto"}}>{mailOk?<>Te enviamos tu mapa a <strong style={{color:"#1A1A1A"}}>{email}</strong>, y en los próximos días te llegan micro-acciones para tus áreas prioritarias. Si no lo ves, mirá en spam o promociones.</>:<>No pudimos enviarte el mail ahora. Sacale captura a esta pantalla para guardar tu mapa y escribime por Instagram si no te llega nada.</>}</p></div>

        <div style={{background:"#1A1A1A",borderRadius:18,padding:"28px 22px",textAlign:"center",marginBottom:20}}>
          <h2 style={{fontFamily:sf,fontSize:20,fontWeight:600,color:"#FFF0F3",marginBottom:8}}>¿Querés ir más allá?</h2><p style={{fontSize:13,lineHeight:1.6,color:"#D9D4D0",maxWidth:360,margin:"0 auto 16px"}}>Si querés un acompañamiento paso a paso, el <strong style={{color:"#BFE9E2"}}>Reto REPARA de 7 días</strong> es el siguiente paso. Escribime por Instagram y te cuento cómo es.</p><a href="https://ig.me/m/daninavarrocoach" target="_blank" rel="noopener noreferrer" style={{...btn,maxWidth:320,margin:"0 auto",display:"block",textDecoration:"none",textAlign:"center"}}>Escribime por Instagram</a>
        </div>

        <p style={{fontSize:11,lineHeight:1.5,color:"#6F6A66",textAlign:"center",maxWidth:400,margin:"0 auto 14px"}}>Este mapa es una herramienta de autoconocimiento. No es un diagnóstico ni reemplaza la atención médica, nutricional o psicológica.</p>
        <div style={{textAlign:"center",padding:"14px 0 4px"}}><p style={{fontSize:12,color:"#8A8480"}}>Mapa de Bienestar Interior · by Dani Navarro</p><p style={{fontSize:10.5,color:"#8A8480",opacity:0.6,marginTop:3}}>Herramienta de autoconocimiento inspirada en ciencia de longevidad</p></div>
      </div>}

      </div></div>
  );
}
