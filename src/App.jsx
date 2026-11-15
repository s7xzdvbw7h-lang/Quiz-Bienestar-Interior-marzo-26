import { useState, useRef } from "react";

const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbw5OM2TukvtEeqYj7a2Mw40ETWVSimu4WoQCrYMaqC-GVsXZwntG3y7xqbgDLarlSYThQ/exec";

import { AREAS, TIPS, LABELS, EDITION } from "../shared/content.js";

const COLORS = ["#8E4E52","#AD8079","#C2A878","#8A7365","#5F7A55"];
const TXT_COLORS = ["#4A3B33","#4A3B33","#4A3B33","#4A3B33","#4A3B33"];
const BG_COLORS = ["#E4D3CD","#E4D3CD","#E4D3CD","#E4D3CD","#E4D3CD"];

function RadarChart({ scores, size = 290 }) {
  const cx = size/2, cy = size/2, r = size*0.29, n = AREAS.length, angleStep = (2*Math.PI)/n, angleOff = -Math.PI/2;
  const pt = (i,v) => { const a=angleOff+i*angleStep; return [cx+((v/5)*r)*Math.cos(a), cy+((v/5)*r)*Math.sin(a)]; };
  return (
    <svg viewBox={`0 0 ${size} ${size}`} style={{width:"100%",maxWidth:size}}>
      {[1,2,3,4,5].map(l=><polygon key={l} points={Array.from({length:n},(_,i)=>pt(i,l).join(",")).join(" ")} fill="none" stroke="#E2D5C8" strokeWidth={l===5?"1.2":"0.6"}/>)}
      {AREAS.map((_,i)=>{const[x,y]=pt(i,5);return <line key={i} x1={cx} y1={cy} x2={x} y2={y} stroke="#E2D5C8" strokeWidth="0.5"/>})}
      <polygon points={AREAS.map((a,i)=>pt(i,scores[a.id]||0).join(",")).join(" ")} fill="rgba(142,78,82,0.15)" stroke="#8E4E52" strokeWidth="2.2" strokeLinejoin="round"/>
      {AREAS.map((a,i)=>{const[dx,dy]=pt(i,scores[a.id]||0);const[lx,ly]=pt(i,5.85);const sc=scores[a.id]||1;return(
        <g key={a.id}><circle cx={dx} cy={dy} r="4.5" fill={COLORS[sc-1]} stroke="#FDFAF5" strokeWidth="2"/>
        <text x={lx} y={ly-4} textAnchor="middle" dominantBaseline="middle" fill="#4A3B33" fontSize="11.5">{a.icon}</text>
        <text x={lx} y={ly+8} textAnchor="middle" dominantBaseline="middle" fill="#4A3B33" fontSize="7.5" fontFamily="'Manrope',sans-serif" fontWeight="500">{a.short}</text></g>
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
  const g = "#8E4E52", bd = "#E2D5C8", sn = "'Manrope',-apple-system,sans-serif", sf = "'Fraunces',Georgia,serif";
  const btn = {width:"100%",padding:"15px 24px",background:g,color:"#F7F1E9",border:"none",borderRadius:12,fontSize:15,fontWeight:600,fontFamily:sn,cursor:"pointer",transition:"all 0.2s"};

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
    <div style={{minHeight:"100vh",background:"linear-gradient(180deg,#FDFAF5 0%,#F7F1E9 45%,#EFE5DD 100%)",fontFamily:sn,color:"#4A3B33",padding:"0 16px 48px"}}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300..600;1,9..144,400&family=Manrope:wght@400;500;600;700&display=swap');*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}body{background:#F7F1E9}@keyframes fadeUp{from{opacity:0;transform:translateY(18px)}to{opacity:1;transform:translateY(0)}}::selection{background:#8E4E5235}input:focus{outline:none;border-color:#8E4E52!important;box-shadow:0 0 0 3px rgba(142,78,82,0.12)!important}`}</style>
      <div ref={topRef}/><div style={{maxWidth:520,margin:"0 auto",paddingTop:28}}>

      {phase==="landing"&&<div style={{animation:"fadeUp 0.6s ease"}}>
        <div style={{textAlign:"center",marginBottom:30}}>
          <div style={{display:"inline-block",background:"#E4D3CD",color:"#4A3B33",fontSize:10,fontWeight:700,letterSpacing:"0.07em",textTransform:"uppercase",padding:"6px 16px",borderRadius:40,marginBottom:20}}>{EDITION} · Autoconocimiento y longevidad</div>
          <h1 style={{fontFamily:sf,fontSize:36,fontWeight:600,lineHeight:1.1}}>Mapa de<br/>Bienestar Interior</h1>
          <p style={{fontSize:14,color:"#4A3B33",marginTop:10}}>by <strong style={{color:"#4A3B33"}}>Dani Navarro</strong></p>
          <div style={{width:36,height:2.5,background:g,margin:"18px auto",borderRadius:2}}/>
          <p style={{fontSize:15,lineHeight:1.65,color:"#4A3B33",maxWidth:400,margin:"0 auto"}}>Descubrí en <strong style={{color:"#4A3B33"}}>3 minutos</strong> cómo están las 9 áreas fundamentales de tu bienestar y recibí <strong style={{color:"#4A3B33"}}>primeros pasos concretos</strong> para tus áreas prioritarias.</p>
        </div>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:10,marginBottom:22}}>
          {[["🔬","Ciencia actual","Estudios publicados, 2023–2026"],["⏱️","3 minutos","9 preguntas, resultados al instante"],["🎯","Primeros pasos","Acciones simples para vos"]].map(([ic,t,d])=><div key={t} style={{background:"#FDFAF5",border:`1.5px solid ${bd}`,borderRadius:14,padding:"16px 10px",textAlign:"center"}}><span style={{fontSize:22,display:"block",marginBottom:6}}>{ic}</span><span style={{fontSize:12,fontWeight:700,display:"block",marginBottom:3}}>{t}</span><span style={{fontSize:10.5,lineHeight:1.4,color:"#4A3B33"}}>{d}</span></div>)}
        </div>
        <div style={{background:"#FDFAF5",border:`1.5px solid ${bd}`,borderRadius:14,padding:"14px 18px",textAlign:"center",marginBottom:26}}>
          <p style={{fontSize:9.5,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.08em",color:"#4A3B33",marginBottom:5}}>Basado en estudios publicados</p>
          <p style={{fontFamily:sf,fontSize:13,fontStyle:"italic",color:"#4A3B33",lineHeight:1.5}}>The Lancet Public Health · JAMA Network Open · Harvard Study of Adult Development · ensayo VITAL</p>
        </div>
        <button onClick={()=>{setPhase("questions");scrollTop()}} style={btn}>Comenzar mi mapa</button>
        <p style={{textAlign:"center",fontSize:12,color:"#4A3B33",marginTop:12}}>100% gratuito · Resultados inmediatos · Tu información es privada</p>
      </div>}

      {phase==="questions"&&<div style={{animation:"fadeUp 0.35s ease",opacity:fading?0:1,transform:fading?"translateX(20px)":"none",transition:"all 0.28s ease"}}>
        <div style={{marginBottom:18}}><div style={{display:"flex",justifyContent:"space-between",marginBottom:6}}><span style={{fontSize:12,fontWeight:600,color:"#4A3B33"}}>Pregunta {step+1} de {AREAS.length}</span><span style={{fontSize:12,fontWeight:600,color:g}}>{Math.round(pct)}%</span></div><div style={{height:4,borderRadius:2,background:"#E4D3CD",overflow:"hidden"}}><div style={{height:"100%",borderRadius:2,background:`linear-gradient(90deg,#C2A878,${g})`,transition:"width 0.4s",width:`${pct}%`}}/></div></div>
        <div style={{background:"#FDFAF5",border:`1.5px solid ${bd}`,borderRadius:18,padding:"26px 20px"}}>
          <div style={{textAlign:"center",marginBottom:14}}><span style={{fontSize:30}}>{area.icon}</span><h2 style={{fontFamily:sf,fontSize:21,fontWeight:600,marginTop:4}}>{area.name}</h2></div>
          <div style={{background:"#F7F1E9",border:`1px solid ${bd}`,borderRadius:12,padding:"13px 15px",marginBottom:18,borderLeft:`3px solid ${g}`}}><p style={{fontSize:12.5,lineHeight:1.6,color:"#4A3B33"}}>{area.science}</p><p style={{fontSize:10.5,color:"#4A3B33",marginTop:6,fontStyle:"italic"}}>— {area.source}</p></div>
          <p style={{fontSize:15.5,fontWeight:600,textAlign:"center",marginBottom:14}}>{area.question}</p>
          <div style={{display:"flex",flexDirection:"column",gap:7,marginBottom:18}}>
            {area.anchors.map((t,i)=>{const v=i+1,a=sel===v;return <button key={v} onClick={()=>setSel(v)} style={{display:"flex",alignItems:"center",gap:11,padding:"11px 13px",borderRadius:11,borderStyle:"solid",cursor:"pointer",transition:"all 0.2s",fontFamily:sn,textAlign:"left",background:a?BG_COLORS[i]:"#FDFAF5",borderColor:a?COLORS[i]:bd,borderWidth:a?"2px":"1.5px"}}><span style={{minWidth:28,height:28,borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",fontSize:11.5,fontWeight:700,flexShrink:0,background:a?COLORS[i]:"#E4D3CD",color:a?"#FDFAF5":"#4A3B33"}}>{v}</span><span style={{fontSize:13.5,lineHeight:1.4,color:a?"#4A3B33":"#4A3B33"}}>{t}</span></button>})}
          </div>
          <button onClick={goNext} disabled={sel===null} style={{...btn,opacity:sel===null?0.35:1,cursor:sel===null?"default":"pointer"}}>{step<AREAS.length-1?"Siguiente":"Ver mis resultados"}</button>
        </div>
      </div>}

      {phase==="email"&&<div style={{animation:"fadeUp 0.5s ease"}}>
        <div style={{background:"#FDFAF5",border:`1.5px solid ${bd}`,borderRadius:18,padding:"36px 22px",textAlign:"center"}}>
          <span style={{fontSize:38}}>📊</span>
          <h2 style={{fontFamily:sf,fontSize:24,fontWeight:600,marginTop:12,marginBottom:8}}>Tu mapa está listo</h2>
          <p style={{fontSize:14,lineHeight:1.6,color:"#4A3B33",maxWidth:350,margin:"0 auto 8px"}}>Ingresá tu nombre y email para ver tu mapa completo con tus primeros pasos.</p>
          <p style={{fontSize:12.5,color:g,fontWeight:600,marginBottom:22}}>+ Recibís gratis micro-acciones basadas en ciencia</p>
          <div style={{maxWidth:330,margin:"0 auto"}}>
            <input type="text" placeholder="Tu nombre" value={nombre} onChange={e=>setNombre(e.target.value)} style={{width:"100%",padding:"13px 16px",background:"#F7F1E9",border:`1.5px solid ${bd}`,borderRadius:10,fontSize:15,fontFamily:sn,color:"#4A3B33",marginBottom:10}}/>
            <input type="email" placeholder="Tu mejor email" value={email} onChange={e=>setEmail(e.target.value)} style={{width:"100%",padding:"13px 16px",background:"#F7F1E9",border:`1.5px solid ${bd}`,borderRadius:10,fontSize:15,fontFamily:sn,color:"#4A3B33",marginBottom:10}}/>
            <input type="text" name="website" tabIndex={-1} autoComplete="off" value={hp} onChange={e=>setHp(e.target.value)} aria-hidden="true" style={{position:"absolute",left:"-9999px",width:1,height:1,opacity:0}}/>
            <label style={{display:"flex",gap:9,alignItems:"flex-start",textAlign:"left",fontSize:12,lineHeight:1.5,color:"#4A3B33",marginBottom:12,cursor:"pointer"}}><input type="checkbox" checked={consent} onChange={e=>setConsent(e.target.checked)} style={{marginTop:3,accentColor:"#8E4E52",flexShrink:0}}/><span>Acepto recibir mi mapa y mails de Dani Navarro con micro-acciones de bienestar. Puedo darme de baja cuando quiera.</span></label>
            {err&&<p style={{color:"#8E4E52",fontSize:13,marginBottom:8}}>{err}</p>}
            <button onClick={submitForm} disabled={sending} style={btn}>{sending?"Preparando tu mapa...":"Ver mi mapa"}</button>
          </div>
          <p style={{fontSize:10.5,color:"#4A3B33",marginTop:14}}>Usamos tus datos solo para enviarte tu mapa y contenido de bienestar. No los compartimos.</p>
        </div>
      </div>}

      {phase==="results"&&<div style={{animation:"fadeUp 0.6s ease"}}>
        <div style={{textAlign:"center",marginBottom:22}}>
          <div style={{display:"inline-block",background:"#E4D3CD",color:"#4A3B33",fontSize:10,fontWeight:700,letterSpacing:"0.07em",textTransform:"uppercase",padding:"5px 14px",borderRadius:40,marginBottom:12}}>Tu mapa personalizado</div>
          <h1 style={{fontFamily:sf,fontSize:26,fontWeight:600}}>Mapa de Bienestar</h1>
          <p style={{fontSize:14,color:"#4A3B33",marginTop:4}}>{nombre}</p>
        </div>

        <div style={{background:"#FDFAF5",border:`1.5px solid ${bd}`,borderRadius:18,padding:"26px 20px",marginBottom:20}}>
          <div style={{textAlign:"center"}}>
            <div style={{display:"inline-flex",alignItems:"baseline",justifyContent:"center",background:"#E4D3CD",border:"2px solid #C2A878",borderRadius:"50%",width:84,height:84}}><span style={{fontFamily:sf,fontSize:32,fontWeight:700,color:g}}>{avgScore}</span><span style={{fontSize:13,color:"#4A3B33",marginLeft:2}}>/5</span></div>
            <p style={{fontSize:13.5,lineHeight:1.6,color:"#4A3B33",maxWidth:380,margin:"14px auto 0"}}>{getMsg()}</p>
          </div>
          <div style={{display:"flex",justifyContent:"center",margin:"16px 0 10px"}}><RadarChart scores={allScores} size={285}/></div>
          <div style={{display:"flex",flexWrap:"wrap",justifyContent:"center",gap:10}}>{LABELS.map((l,i)=><div key={i} style={{display:"flex",alignItems:"center",gap:4,fontSize:10,color:"#4A3B33"}}><div style={{width:7,height:7,borderRadius:"50%",background:COLORS[i]}}/><span>{l}</span></div>)}</div>
        </div>

        <h2 style={{fontFamily:sf,fontSize:19,fontWeight:600,marginBottom:12}}>Resultados por área</h2>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10,marginBottom:24}}>
          {sorted.map(a=>{const sc=allScores[a.id]||1;return <div key={a.id} style={{background:"#FDFAF5",border:`1.5px solid ${bd}`,borderRadius:12,padding:"13px 13px 11px",borderLeft:`4px solid ${COLORS[sc-1]}`}}><div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:7}}><div style={{display:"flex",alignItems:"center",gap:5}}><span style={{fontSize:14}}>{a.icon}</span><span style={{fontSize:11,fontWeight:600}}>{a.short}</span></div><span style={{fontSize:11.5,fontWeight:700,padding:"2px 9px",borderRadius:20,background:BG_COLORS[sc-1],color:TXT_COLORS[sc-1]}}>{sc}/5</span></div><div style={{height:4,borderRadius:2,background:"#E4D3CD",overflow:"hidden",marginBottom:5}}><div style={{height:"100%",borderRadius:2,background:COLORS[sc-1],width:`${(sc/5)*100}%`,transition:"width 0.5s"}}/></div><p style={{fontSize:10.5,color:"#4A3B33"}}>{LABELS[sc-1]}</p></div>})}
        </div>

        <div style={{marginBottom:12}}><h2 style={{fontFamily:sf,fontSize:19,fontWeight:600}}>Tus primeros pasos</h2><p style={{fontSize:12.5,color:"#4A3B33",marginTop:3}}>Tus 3 áreas prioritarias, con un paso concreto para esta semana</p></div>
        {w3.map((a,idx)=>{const sc=allScores[a.id]||1,tip=TIPS[a.id]?.[sc-1]||"";return <div key={a.id} style={{background:"#FDFAF5",border:`1.5px solid ${bd}`,borderRadius:14,padding:"17px 17px 14px",marginBottom:10}}><span style={{fontSize:9.5,fontWeight:700,letterSpacing:"0.08em",color:"#8E4E52",textTransform:"uppercase"}}>Prioridad {idx+1}</span><div style={{display:"flex",alignItems:"center",gap:10,margin:"8px 0 10px"}}><span style={{fontSize:22}}>{a.icon}</span><div><h3 style={{fontFamily:sf,fontSize:16,fontWeight:600,margin:0}}>{a.name}</h3><span style={{fontSize:10.5,fontWeight:600,padding:"2px 9px",borderRadius:20,background:BG_COLORS[sc-1],color:TXT_COLORS[sc-1]}}>{LABELS[sc-1]} · {sc}/5</span></div></div><div style={{display:"flex",gap:9,background:"#F7F1E9",borderRadius:10,padding:"12px 13px"}}><span style={{fontSize:16,flexShrink:0}}>💡</span><p style={{fontSize:12.5,lineHeight:1.55,color:"#4A3B33",margin:0}}>{tip}</p></div></div>})}

        <div style={{background:"#E4D3CD",border:"1.5px solid #C2A878",borderRadius:14,padding:"15px 17px",margin:"14px 0 22px"}}><div style={{display:"flex",alignItems:"center",gap:8,marginBottom:5}}><span style={{fontSize:20}}>{best?.icon}</span><strong style={{fontSize:14}}>Tu mayor fortaleza: {best?.name}</strong></div><p style={{fontSize:12.5,color:"#4A3B33",lineHeight:1.5}}>Esta área es un pilar sólido de tu bienestar. Usala como base para trabajar en las demás.</p></div>

        <div style={{background:"#FDFAF5",border:`2px solid ${g}`,borderRadius:18,padding:"24px 22px",textAlign:"center",marginBottom:14}}><span style={{fontSize:26}}>📬</span><h3 style={{fontFamily:sf,fontSize:18,fontWeight:600,marginTop:8,marginBottom:6}}>Revisá tu correo</h3><p style={{fontSize:13,lineHeight:1.6,color:"#4A3B33",maxWidth:370,margin:"0 auto"}}>{mailOk?<>Te enviamos tu mapa a <strong style={{color:"#4A3B33"}}>{email}</strong>, y en los próximos días te llegan micro-acciones para tus áreas prioritarias. Si no lo ves, mirá en spam o promociones.</>:<>No pudimos enviarte el mail ahora. Sacale captura a esta pantalla para guardar tu mapa y escribime por Instagram si no te llega nada.</>}</p></div>

        <div style={{background:"linear-gradient(180deg,#FDFAF5,#E4D3CD)",borderTop:"3px solid #C2A878",borderRadius:18,padding:"28px 22px",textAlign:"center",marginBottom:20}}>
          <h2 style={{fontFamily:sf,fontSize:20,fontWeight:600,color:"#4A3B33",marginBottom:8}}>¿Querés ir más allá?</h2><p style={{fontSize:13,lineHeight:1.6,color:"#4A3B33",maxWidth:360,margin:"0 auto 16px"}}>Estoy terminando el <strong style={{color:"#8E4E52"}}>Reset</strong>, mi programa de 7 días para acompañarte paso a paso. Escribime por Instagram y te aviso apenas esté disponible.</p><a href="https://ig.me/m/daninavarro.bienestar" target="_blank" rel="noopener noreferrer" style={{...btn,maxWidth:320,margin:"0 auto",display:"block",textDecoration:"none",textAlign:"center"}}>Escribime por Instagram</a>
        </div>

        <p style={{fontSize:11,lineHeight:1.5,color:"#4A3B33",textAlign:"center",maxWidth:400,margin:"0 auto 14px"}}>Este mapa es una herramienta de autoconocimiento. No es un diagnóstico ni reemplaza la atención médica, nutricional o psicológica.</p>
        <div style={{textAlign:"center",padding:"14px 0 4px"}}><p style={{fontSize:12,color:"#4A3B33"}}>Mapa de Bienestar Interior · by Dani Navarro</p><p style={{fontSize:10.5,color:"#4A3B33",opacity:0.6,marginTop:3}}>Herramienta de autoconocimiento inspirada en ciencia de longevidad</p></div>
      </div>}

      </div></div>
  );
}
