import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChatbotConfig, ContactInquiry } from "@/api/entities";

const LOGO = "https://media.base44.com/images/public/69caab40b61d6ee7c5b75332/9d7fead75_generated_image.png";
const STATUS_COLORS = {"New":"text-yellow-400 border-yellow-400/40 bg-yellow-400/10","In Review":"text-blue-400 border-blue-400/40 bg-blue-400/10","Responded":"text-green-400 border-green-400/40 bg-green-400/10"};

export default function Admin() {
  const [tab, setTab] = useState("inquiries");
  const [config, setConfig] = useState(null);
  const [configId, setConfigId] = useState(null);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [testMsg, setTestMsg] = useState("");
  const [testReply, setTestReply] = useState("");
  const [testing, setTesting] = useState(false);
  const [inquiries, setInquiries] = useState([]);
  const [loadingInq, setLoadingInq] = useState(true);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    ChatbotConfig.list().then(configs => {
      if (configs?.[0]) { setConfig(configs[0]); setConfigId(configs[0].id); }
      else setConfig({bot_name:"Avicam Assistant",is_active:true,model:"gpt-4o-mini",temperature:0.7,max_tokens:500,system_prompt:"You are a luxury private event concierge for Avicam Gitlin. You help clients learn about private events, destinations, and the planning process. Be warm, professional, and speak in a refined tone. Always encourage inquiries via the contact form.",welcome_message:"",suggested_questions:"What types of events do you plan?\nHow do I get started?\nWhere do you work?\nWhat's the planning process?",custom_qa:""});
    });
    loadInquiries();
  }, []);

  const loadInquiries = () => {
    setLoadingInq(true);
    ContactInquiry.list({sort:"-created_date"}).then(data => { setInquiries(data||[]); setLoadingInq(false); }).catch(()=>setLoadingInq(false));
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      if (configId) await ChatbotConfig.update(configId, config);
      else { const c = await ChatbotConfig.create(config); setConfigId(c.id); }
      setSaved(true); setTimeout(()=>setSaved(false),3000);
    } catch(e) { alert("Error saving: "+e.message); }
    setSaving(false);
  };

  const handleTest = async () => {
    if (!testMsg.trim()) return;
    setTesting(true); setTestReply("");
    try {
      const res = await fetch("https://app-d7d68057.base44.app/functions/chatbot",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({messages:[{role:"user",content:testMsg}]})});
      const data = await res.json();
      setTestReply(data.reply||data.error||"No response");
    } catch(e) { setTestReply("Error: "+e.message); }
    setTesting(false);
  };

  const updateStatus = async (id, status) => {
    await ContactInquiry.update(id,{status});
    setInquiries(prev=>prev.map(i=>i.id===id?{...i,status}:i));
    if (selected?.id===id) setSelected(prev=>({...prev,status}));
  };

  const set = (field,value) => setConfig(prev=>({...prev,[field]:value}));

  const tabs = [{id:"inquiries",label:"📥 Inquiries"},{id:"general",label:"General"},{id:"qa",label:"Custom Q&A"},{id:"model",label:"Model"},{id:"test",label:"Test Bot"}];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white" style={{fontFamily:"'Georgia','Times New Roman',serif"}}>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/95 backdrop-blur-md border-b border-[#c9a84c]/20">
        <div className="max-w-6xl mx-auto px-6 py-3 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img src={LOGO} className="h-9 w-9 object-contain"/>
            <span className="text-[#c9a84c] text-sm tracking-[0.3em] font-light">AVICAM GITLIN</span>
            <span className="text-gray-600 text-xs ml-1 tracking-widest">/ ADMIN</span>
          </div>
          <div className="flex gap-4 items-center">
            <Link to="/" className="text-gray-500 text-xs hover:text-[#c9a84c] transition-colors">← Back to site</Link>
            {tab!=="inquiries" && <button onClick={handleSave} disabled={saving} className="px-5 py-2 bg-[#c9a84c] text-black text-xs tracking-[0.2em] hover:bg-[#e0c070] transition-colors font-semibold disabled:opacity-50">{saving?"SAVING...":saved?"✓ SAVED":"SAVE"}</button>}
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-6 pt-24 pb-20">
        <div className="mb-6">
          <h1 className="text-2xl font-light mb-1">Admin Dashboard</h1>
          <p className="text-gray-500 text-sm font-light">Manage inquiries and chatbot configuration.</p>
        </div>

        <div className="flex gap-1 mb-6 border-b border-[#c9a84c]/10">
          {tabs.map(t=>(
            <button key={t.id} onClick={()=>setTab(t.id)} className={`px-5 py-3 text-xs tracking-[0.15em] transition-colors border-b-2 -mb-px ${tab===t.id?"text-[#c9a84c] border-[#c9a84c]":"text-gray-500 border-transparent hover:text-gray-300"}`}>{t.label.toUpperCase()}</button>
          ))}
        </div>

        {/* INQUIRIES */}
        {tab==="inquiries" && (
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            <div className="lg:col-span-2 space-y-2">
              <div className="flex justify-between items-center mb-3">
                <p className="text-xs tracking-[0.3em] text-gray-500">ALL INQUIRIES ({inquiries.length})</p>
                <button onClick={loadInquiries} className="text-xs text-gray-500 hover:text-[#c9a84c] transition-colors">↻ Refresh</button>
              </div>
              {loadingInq ? <div className="text-center py-10 text-gray-600 text-sm animate-pulse">Loading...</div>
              : inquiries.length===0 ? (
                <div className="text-center py-16 border border-[#c9a84c]/10 bg-[#0d0d0d]">
                  <p className="text-gray-500 text-sm font-light">No inquiries yet.</p>
                  <p className="text-gray-600 text-xs mt-1">They'll appear here when someone submits the contact form.</p>
                </div>
              ) : inquiries.map(inq=>(
                <div key={inq.id} onClick={()=>setSelected(inq)} className={`p-4 border cursor-pointer transition-all ${selected?.id===inq.id?"border-[#c9a84c]/50 bg-[#c9a84c]/5":"border-[#c9a84c]/10 bg-[#0d0d0d] hover:border-[#c9a84c]/30"}`}>
                  <div className="flex justify-between items-start mb-1">
                    <p className="text-white text-sm font-light">{inq.name}</p>
                    <span className={`text-xs px-2 py-0.5 border ${STATUS_COLORS[inq.status]||STATUS_COLORS["New"]}`}>{inq.status||"New"}</span>
                  </div>
                  <p className="text-gray-500 text-xs">{inq.event_type||"No event type"}</p>
                  <p className="text-gray-600 text-xs mt-1">{new Date(inq.created_date).toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"})}</p>
                </div>
              ))}
            </div>
            <div className="lg:col-span-3">
              {!selected ? (
                <div className="flex items-center justify-center h-64 border border-[#c9a84c]/10 bg-[#0d0d0d]">
                  <p className="text-gray-600 text-sm font-light">Select an inquiry to view details</p>
                </div>
              ) : (
                <div className="bg-[#0d0d0d] border border-[#c9a84c]/15 p-6 space-y-5">
                  <div className="flex justify-between items-start">
                    <div>
                      <h2 className="text-xl font-light">{selected.name}</h2>
                      <p className="text-gray-500 text-xs mt-0.5">{new Date(selected.created_date).toLocaleString("en-US",{dateStyle:"medium",timeStyle:"short"})}</p>
                    </div>
                    <div className="flex gap-2">
                      {["New","In Review","Responded"].map(s=>(
                        <button key={s} onClick={()=>updateStatus(selected.id,s)} className={`text-xs px-3 py-1 border transition-colors ${selected.status===s?STATUS_COLORS[s]:"border-gray-700 text-gray-500 hover:border-gray-500"}`}>{s}</button>
                      ))}
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 border-t border-[#c9a84c]/10 pt-4">
                    {[["Email",selected.email],["Phone",selected.phone||"—"],["Event Type",selected.event_type||"—"],["Destination",selected.destination||"—"],["Date",selected.date||"—"],["Guests",selected.guests||"—"]].map(([label,val])=>(
                      <div key={label}><p className="text-xs tracking-[0.25em] text-gray-600 mb-1">{label.toUpperCase()}</p><p className="text-gray-300 text-sm font-light">{val}</p></div>
                    ))}
                  </div>
                  {selected.message && <div className="border-t border-[#c9a84c]/10 pt-4"><p className="text-xs tracking-[0.25em] text-gray-600 mb-2">MESSAGE</p><p className="text-gray-300 text-sm font-light leading-relaxed">{selected.message}</p></div>}
                  <div className="border-t border-[#c9a84c]/10 pt-4 flex gap-3">
                    <a href={`mailto:${selected.email}`} className="px-5 py-2 bg-[#c9a84c] text-black text-xs tracking-[0.2em] hover:bg-[#e0c070] transition-colors font-semibold">REPLY BY EMAIL</a>
                    {selected.phone && <a href={`https://wa.me/${selected.phone.replace(/\D/g,"")}`} target="_blank" rel="noopener noreferrer" className="px-5 py-2 border border-[#c9a84c]/40 text-[#c9a84c] text-xs tracking-[0.2em] hover:bg-[#c9a84c]/10 transition-colors">WHATSAPP</a>}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* GENERAL */}
        {tab==="general" && config && (
          <div className="space-y-5 max-w-3xl">
            <div className="bg-[#0d0d0d] border border-[#c9a84c]/15 p-5 flex items-center justify-between">
              <div><h3 className="text-white font-light text-sm mb-0.5">Chatbot Active</h3><p className="text-gray-500 text-xs">Enable or disable the chat widget</p></div>
              <button onClick={()=>set("is_active",!config.is_active)} className={`relative w-12 h-6 rounded-full transition-colors ${config.is_active?"bg-[#c9a84c]":"bg-gray-700"}`}>
                <span className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-all ${config.is_active?"left-7":"left-1"}`}/>
              </button>
            </div>
            <div className="bg-[#0d0d0d] border border-[#c9a84c]/15 p-5">
              <label className="block text-xs tracking-[0.3em] text-gray-500 mb-3">BOT NAME</label>
              <input value={config.bot_name||""} onChange={e=>set("bot_name",e.target.value)} className="w-full bg-[#111] border border-[#c9a84c]/20 text-white px-4 py-3 focus:outline-none focus:border-[#c9a84c] transition-colors font-light text-sm" placeholder="e.g. Avicam Assistant"/>
            </div>
            <div className="bg-[#0d0d0d] border border-[#c9a84c]/15 p-5">
              <label className="block text-xs tracking-[0.3em] text-gray-500 mb-2">SYSTEM PROMPT</label>
              <p className="text-gray-600 text-xs mb-3">Defines the bot's personality, knowledge, and tone.</p>
              <textarea value={config.system_prompt||""} onChange={e=>set("system_prompt",e.target.value)} rows={10} className="w-full bg-[#111] border border-[#c9a84c]/20 text-white px-4 py-3 focus:outline-none focus:border-[#c9a84c] transition-colors font-light resize-none text-sm leading-relaxed" placeholder="You are a luxury event concierge for Avicam Gitlin..."/>
            </div>
            <div className="bg-[#0d0d0d] border border-[#c9a84c]/15 p-5">
              <label className="block text-xs tracking-[0.3em] text-gray-500 mb-2">SUGGESTED QUESTIONS</label>
              <p className="text-gray-600 text-xs mb-3">One per line. Shown as quick-reply buttons in the chat.</p>
              <textarea value={config.suggested_questions||""} onChange={e=>set("suggested_questions",e.target.value)} rows={5} className="w-full bg-[#111] border border-[#c9a84c]/20 text-white px-4 py-3 focus:outline-none focus:border-[#c9a84c] transition-colors font-light resize-none text-sm" placeholder={"What types of events do you plan?\nHow do I get started?"}/>
            </div>
          </div>
        )}

        {/* CUSTOM Q&A */}
        {tab==="qa" && config && (
          <div className="space-y-5 max-w-3xl">
            <div className="bg-[#0d0d0d] border border-[#c9a84c]/15 p-6">
              <label className="block text-xs tracking-[0.3em] text-gray-500 mb-2">SPECIFIC Q&A PAIRS</label>
              <p className="text-gray-600 text-xs mb-3">The bot will always use these exact answers when asked about these topics.</p>
              <div className="bg-[#111] border border-[#c9a84c]/10 px-4 py-3 mb-4 text-xs text-gray-400 font-mono leading-relaxed">
                Q: What is the minimum budget?<br/>
                A: Our events typically start from $15,000.<br/><br/>
                Q: Do you work in Israel?<br/>
                A: Yes, we produce events across Israel and the Middle East.
              </div>
              <textarea value={config.custom_qa||""} onChange={e=>set("custom_qa",e.target.value)} rows={16} className="w-full bg-[#111] border border-[#c9a84c]/20 text-white px-4 py-3 focus:outline-none focus:border-[#c9a84c] transition-colors font-light resize-none text-sm leading-relaxed" placeholder={"Q: What is your minimum budget?\nA: Our events start from $15,000.\n\nQ: How quickly do you respond?\nA: Avicam personally responds within 24 hours."}/>
            </div>
            {config.custom_qa && (
              <div className="bg-[#0d0d0d] border border-[#c9a84c]/15 p-5">
                <p className="text-xs tracking-[0.3em] text-gray-500 mb-4">PREVIEW</p>
                <div className="space-y-3">
                  {config.custom_qa.split(/\n\s*\n/).filter(Boolean).map((block,i)=>{
                    const lines=block.trim().split("\n");
                    const q=lines.find(l=>l.startsWith("Q:"))?.replace("Q:","").trim();
                    const a=lines.find(l=>l.startsWith("A:"))?.replace("A:","").trim();
                    if (!q||!a) return null;
                    return (<div key={i} className="border border-[#c9a84c]/10 p-4"><p className="text-[#c9a84c] text-xs mb-1">Q: {q}</p><p className="text-gray-400 text-sm font-light">A: {a}</p></div>);
                  })}
                </div>
              </div>
            )}
          </div>
        )}

        {/* MODEL */}
        {tab==="model" && config && (
          <div className="space-y-5 max-w-md">
            <div className="bg-[#0d0d0d] border border-[#c9a84c]/15 p-5">
              <label className="block text-xs tracking-[0.3em] text-gray-500 mb-3">AI MODEL</label>
              <select value={config.model||"gpt-4o-mini"} onChange={e=>set("model",e.target.value)} className="w-full bg-[#111] border border-[#c9a84c]/20 text-white px-4 py-3 focus:outline-none focus:border-[#c9a84c] font-light text-sm">
                <option value="gpt-4o-mini">GPT-4o Mini — Fast & affordable</option>
                <option value="gpt-4o">GPT-4o — Most capable</option>
                <option value="gpt-3.5-turbo">GPT-3.5 Turbo — Fastest</option>
              </select>
            </div>
            <div className="bg-[#0d0d0d] border border-[#c9a84c]/15 p-5">
              <label className="block text-xs tracking-[0.3em] text-gray-500 mb-2">CREATIVITY — <span className="text-[#c9a84c]">{config.temperature??0.7}</span></label>
              <input type="range" min="0" max="1" step="0.1" value={config.temperature??0.7} onChange={e=>set("temperature",parseFloat(e.target.value))} className="w-full accent-[#c9a84c]"/>
              <div className="flex justify-between text-xs text-gray-600 mt-1"><span>0 Precise</span><span>1 Creative</span></div>
            </div>
            <div className="bg-[#0d0d0d] border border-[#c9a84c]/15 p-5">
              <label className="block text-xs tracking-[0.3em] text-gray-500 mb-2">MAX TOKENS — <span className="text-[#c9a84c]">{config.max_tokens??500}</span></label>
              <input type="range" min="100" max="1500" step="50" value={config.max_tokens??500} onChange={e=>set("max_tokens",parseInt(e.target.value))} className="w-full accent-[#c9a84c]"/>
              <div className="flex justify-between text-xs text-gray-600 mt-1"><span>100</span><span>1500</span></div>
            </div>
          </div>
        )}

        {/* TEST */}
        {tab==="test" && (
          <div className="max-w-2xl space-y-5">
            <div className="bg-[#0d0d0d] border border-[#c9a84c]/15 p-6">
              <label className="block text-xs tracking-[0.3em] text-gray-500 mb-3">SEND A TEST MESSAGE</label>
              <textarea value={testMsg} onChange={e=>setTestMsg(e.target.value)} rows={4} placeholder="Ask the bot something..." className="w-full bg-[#111] border border-[#c9a84c]/20 text-white px-4 py-3 focus:outline-none focus:border-[#c9a84c] transition-colors font-light resize-none text-sm mb-4"/>
              <button onClick={handleTest} disabled={testing||!testMsg.trim()} className="px-8 py-3 bg-[#c9a84c] text-black text-xs tracking-[0.2em] hover:bg-[#e0c070] transition-colors font-semibold disabled:opacity-40">{testing?"TESTING...":"SEND →"}</button>
            </div>
            {testReply && (
              <div className="bg-[#0d0d0d] border border-[#c9a84c]/15 p-6">
                <p className="text-[#c9a84c] text-xs tracking-[0.3em] mb-3">BOT REPLY</p>
                <p className="text-gray-300 text-sm font-light leading-relaxed whitespace-pre-line">{testReply}</p>
              </div>
            )}
          </div>
        )}

        {tab!=="inquiries" && (
          <div className="mt-8 pt-6 border-t border-[#c9a84c]/10 flex justify-end">
            <button onClick={handleSave} disabled={saving} className="px-10 py-3 bg-[#c9a84c] text-black text-xs tracking-[0.3em] hover:bg-[#e0c070] transition-colors font-semibold disabled:opacity-50">{saving?"SAVING...":saved?"✓ SAVED":"SAVE ALL CHANGES"}</button>
          </div>
        )}
      </div>
    </div>
  );
}
