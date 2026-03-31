import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChatbotConfig } from "@/api/entities";

const LOGO = "https://media.base44.com/images/public/69caab40b61d6ee7c5b75332/9d7fead75_generated_image.png";

export default function Admin() {
  const [config, setConfig] = useState(null);
  const [configId, setConfigId] = useState(null);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [testMsg, setTestMsg] = useState("");
  const [testReply, setTestReply] = useState("");
  const [testing, setTesting] = useState(false);
  const [tab, setTab] = useState("general"); // general | qa | model | test

  useEffect(() => {
    ChatbotConfig.list().then(configs => {
      if (configs?.[0]) {
        setConfig(configs[0]);
        setConfigId(configs[0].id);
      }
    });
  }, []);

  const handleSave = async () => {
    setSaving(true);
    try {
      if (configId) {
        await ChatbotConfig.update(configId, config);
      } else {
        const created = await ChatbotConfig.create(config);
        setConfigId(created.id);
      }
      setSaved(true);
      setTimeout(() => setSaved(false), 3000);
    } catch (e) {
      alert("Error saving: " + e.message);
    }
    setSaving(false);
  };

  const handleTest = async () => {
    if (!testMsg.trim()) return;
    setTesting(true);
    setTestReply("");
    try {
      const res = await fetch("https://app-c5b75332.base44.app/functions/chatbot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: [{ role: "user", content: testMsg }] }),
      });
      const data = await res.json();
      setTestReply(data.reply || data.error || "No response");
    } catch (e) {
      setTestReply("Error: " + e.message);
    }
    setTesting(false);
  };

  const set = (field, value) => setConfig(prev => ({ ...prev, [field]: value }));

  if (!config) return (
    <div className="min-h-screen bg-[#161616] flex items-center justify-center">
      <div className="text-[#c9a84c] text-sm tracking-widest animate-pulse">LOADING...</div>
    </div>
  );

  const tabs = [
    { id: "general", label: "General" },
    { id: "qa", label: "Custom Q&A" },
    { id: "model", label: "Model Settings" },
    { id: "test", label: "Test Bot" },
  ];

  return (
    <div className="min-h-screen bg-[#161616] text-white" style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}>
      {/* Top bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#111]/95 backdrop-blur-md border-b border-[#c9a84c]/20">
        <div className="max-w-5xl mx-auto px-6 py-3 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img src={LOGO} alt="logo" className="h-9 w-9 object-contain" />
            <div>
              <span className="text-[#c9a84c] text-sm tracking-[0.3em] font-light">AVICAM GITLIN</span>
              <span className="text-gray-600 text-xs ml-2 tracking-widest">/ ADMIN</span>
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <Link to="/" className="text-gray-500 text-xs hover:text-[#c9a84c] transition-colors">← Back to site</Link>
            <button onClick={handleSave} disabled={saving}
              className="px-5 py-2 bg-[#c9a84c] text-black text-xs tracking-[0.2em] hover:bg-[#e0c070] transition-colors font-semibold disabled:opacity-50">
              {saving ? "SAVING..." : saved ? "✓ SAVED" : "SAVE CHANGES"}
            </button>
          </div>
        </div>
      </nav>

      <div className="max-w-5xl mx-auto px-6 pt-24 pb-20">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-light text-white mb-1">Chatbot Configuration</h1>
          <p className="text-gray-500 text-sm font-light">Manage your AI assistant's behaviour, knowledge, and custom answers.</p>
        </div>

        {/* Active toggle — always visible */}
        <div className="bg-[#1d1d1d] border border-[#c9a84c]/15 p-5 mb-6 flex items-center justify-between">
          <div>
            <h3 className="text-white font-light text-sm mb-0.5">Chatbot Status</h3>
            <p className="text-gray-500 text-xs">Enable or disable the chat widget across the site</p>
          </div>
          <button onClick={() => set("is_active", !config.is_active)}
            className={`relative w-12 h-6 rounded-full transition-colors ${config.is_active ? "bg-[#c9a84c]" : "bg-gray-700"}`}>
            <span className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-all ${config.is_active ? "left-7" : "left-1"}`} />
          </button>
        </div>

        {/* Tab navigation */}
        <div className="flex gap-1 mb-6 border-b border-[#c9a84c]/10">
          {tabs.map(t => (
            <button key={t.id} onClick={() => setTab(t.id)}
              className={`px-5 py-3 text-xs tracking-[0.2em] transition-colors border-b-2 -mb-px ${
                tab === t.id
                  ? "text-[#c9a84c] border-[#c9a84c]"
                  : "text-gray-500 border-transparent hover:text-gray-300"
              }`}>
              {t.label.toUpperCase()}
            </button>
          ))}
        </div>

        {/* GENERAL TAB */}
        {tab === "general" && (
          <div className="space-y-5">
            <div className="bg-[#1d1d1d] border border-[#c9a84c]/15 p-6">
              <label className="block text-xs tracking-[0.3em] text-gray-500 mb-3">BOT NAME</label>
              <input value={config.bot_name || ""} onChange={e => set("bot_name", e.target.value)}
                className="w-full bg-[#252525] border border-[#333] text-white px-4 py-3 focus:outline-none focus:border-[#c9a84c]/60 transition-colors font-light text-sm"
                placeholder="e.g. Avicam Assistant" />
            </div>

            <div className="bg-[#1d1d1d] border border-[#c9a84c]/15 p-6">
              <label className="block text-xs tracking-[0.3em] text-gray-500 mb-2">OPENING MESSAGE</label>
              <p className="text-gray-600 text-xs mb-3">The first message shown when someone opens the chat.</p>
              <textarea value={config.welcome_message || ""} onChange={e => set("welcome_message", e.target.value)}
                rows={4} className="w-full bg-[#252525] border border-[#333] text-white px-4 py-3 focus:outline-none focus:border-[#c9a84c]/60 transition-colors font-light resize-none text-sm"
                placeholder="Hi there! I'm here to help you plan something extraordinary..." />
            </div>

            <div className="bg-[#1d1d1d] border border-[#c9a84c]/15 p-6">
              <label className="block text-xs tracking-[0.3em] text-gray-500 mb-2">SYSTEM PROMPT</label>
              <p className="text-gray-600 text-xs mb-3">The core instructions that define the bot's personality, knowledge, and tone.</p>
              <textarea value={config.system_prompt || ""} onChange={e => set("system_prompt", e.target.value)}
                rows={12} className="w-full bg-[#252525] border border-[#333] text-white px-4 py-3 focus:outline-none focus:border-[#c9a84c]/60 transition-colors font-light resize-none text-sm leading-relaxed"
                placeholder="You are a luxury event concierge for Avicam Gitlin..." />
            </div>

            <div className="bg-[#1d1d1d] border border-[#c9a84c]/15 p-6">
              <label className="block text-xs tracking-[0.3em] text-gray-500 mb-2">SUGGESTED QUESTIONS</label>
              <p className="text-gray-600 text-xs mb-3">One per line. Shown as quick-tap buttons when chat opens (max 4 displayed).</p>
              <textarea value={config.suggested_questions || ""} onChange={e => set("suggested_questions", e.target.value)}
                rows={5} className="w-full bg-[#252525] border border-[#333] text-white px-4 py-3 focus:outline-none focus:border-[#c9a84c]/60 transition-colors font-light resize-none text-sm"
                placeholder={"What types of events do you plan?\nHow do I get started?\nWhich destinations do you work in?"} />
            </div>
          </div>
        )}

        {/* CUSTOM Q&A TAB */}
        {tab === "qa" && (
          <div className="space-y-5">
            <div className="bg-[#1d1d1d] border border-[#c9a84c]/15 p-6">
              <label className="block text-xs tracking-[0.3em] text-gray-500 mb-2">SPECIFIC QUESTION & ANSWER PAIRS</label>
              <p className="text-gray-600 text-xs mb-1">
                Define exact answers to specific questions. The bot will always use these when someone asks something related.
              </p>
              <p className="text-gray-600 text-xs mb-4">
                Format — one pair per block, separated by a blank line:
              </p>
              <div className="bg-[#111] border border-[#c9a84c]/10 px-4 py-3 mb-4 text-xs text-gray-400 font-mono leading-relaxed">
                <p>Q: What is the minimum budget for an event?</p>
                <p>A: Our events typically start from $15,000 for intimate gatherings.</p>
                <br />
                <p>Q: Do you work in Israel?</p>
                <p>A: Yes, we produce events across Israel including Tel Aviv, Jerusalem, and the Galilee.</p>
              </div>
              <textarea
                value={config.custom_qa || ""}
                onChange={e => set("custom_qa", e.target.value)}
                rows={18}
                className="w-full bg-[#252525] border border-[#333] text-white px-4 py-3 focus:outline-none focus:border-[#c9a84c]/60 transition-colors font-light resize-none text-sm leading-relaxed"
                placeholder={"Q: What is your minimum budget?\nA: Our events start from $15,000 for intimate gatherings.\n\nQ: Do you work in Israel?\nA: Yes, we produce events across Israel including Tel Aviv and Jerusalem.\n\nQ: How quickly do you respond?\nA: Avicam personally responds to every inquiry within 24 hours."}
              />
              <p className="text-gray-600 text-xs mt-3">
                💡 Tip: The more specific your questions, the better the bot will match them. Use natural language as if a real client is asking.
              </p>
            </div>

            {/* Preview */}
            {config.custom_qa && (
              <div className="bg-[#1d1d1d] border border-[#c9a84c]/15 p-6">
                <p className="text-xs tracking-[0.3em] text-gray-500 mb-4">PREVIEW — LOADED Q&A PAIRS</p>
                <div className="space-y-3">
                  {config.custom_qa.split(/\n\s*\n/).filter(Boolean).map((block, i) => {
                    const lines = block.trim().split("\n");
                    const q = lines.find(l => l.startsWith("Q:"))?.replace("Q:", "").trim();
                    const a = lines.find(l => l.startsWith("A:"))?.replace("A:", "").trim();
                    if (!q || !a) return null;
                    return (
                      <div key={i} className="border border-[#c9a84c]/10 p-4">
                        <p className="text-[#c9a84c] text-xs mb-1">Q: {q}</p>
                        <p className="text-gray-400 text-sm font-light">A: {a}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        )}

        {/* MODEL SETTINGS TAB */}
        {tab === "model" && (
          <div className="space-y-5 max-w-lg">
            <div className="bg-[#1d1d1d] border border-[#c9a84c]/15 p-6">
              <label className="block text-xs tracking-[0.3em] text-gray-500 mb-3">AI MODEL</label>
              <select value={config.model || "gpt-4o-mini"} onChange={e => set("model", e.target.value)}
                className="w-full bg-[#252525] border border-[#333] text-white px-4 py-3 focus:outline-none focus:border-[#c9a84c]/60 transition-colors font-light text-sm">
                <option value="gpt-4o-mini">GPT-4o Mini — Fast & affordable (recommended)</option>
                <option value="gpt-4o">GPT-4o — Most capable, slower</option>
                <option value="gpt-3.5-turbo">GPT-3.5 Turbo — Fastest, basic</option>
              </select>
            </div>

            <div className="bg-[#1d1d1d] border border-[#c9a84c]/15 p-6">
              <label className="block text-xs tracking-[0.3em] text-gray-500 mb-2">
                CREATIVITY — <span className="text-[#c9a84c]">{config.temperature ?? 0.7}</span>
              </label>
              <p className="text-gray-600 text-xs mb-4">0 = very consistent · 1 = more varied & creative</p>
              <input type="range" min="0" max="1" step="0.1" value={config.temperature ?? 0.7}
                onChange={e => set("temperature", parseFloat(e.target.value))}
                className="w-full accent-[#c9a84c]" />
              <div className="flex justify-between text-xs text-gray-600 mt-1">
                <span>0 — Precise</span><span>1 — Creative</span>
              </div>
            </div>

            <div className="bg-[#1d1d1d] border border-[#c9a84c]/15 p-6">
              <label className="block text-xs tracking-[0.3em] text-gray-500 mb-2">
                MAX RESPONSE LENGTH — <span className="text-[#c9a84c]">{config.max_tokens ?? 500} tokens</span>
              </label>
              <p className="text-gray-600 text-xs mb-4">~1 token ≈ 1 word. 300–600 is ideal for most responses.</p>
              <input type="range" min="100" max="1500" step="50" value={config.max_tokens ?? 500}
                onChange={e => set("max_tokens", parseInt(e.target.value))}
                className="w-full accent-[#c9a84c]" />
              <div className="flex justify-between text-xs text-gray-600 mt-1">
                <span>100</span><span>1500</span>
              </div>
            </div>
          </div>
        )}

        {/* TEST BOT TAB */}
        {tab === "test" && (
          <div className="max-w-2xl space-y-5">
            <div className="bg-[#1d1d1d] border border-[#c9a84c]/15 p-6">
              <label className="block text-xs tracking-[0.3em] text-gray-500 mb-3">SEND A TEST MESSAGE</label>
              <p className="text-gray-600 text-xs mb-4">Tests the bot with current saved settings. Save changes first for accurate results.</p>
              <textarea value={testMsg} onChange={e => setTestMsg(e.target.value)}
                rows={4} placeholder="Ask the bot something..."
                className="w-full bg-[#252525] border border-[#333] text-white px-4 py-3 focus:outline-none focus:border-[#c9a84c]/60 transition-colors font-light resize-none text-sm mb-4" />
              <button onClick={handleTest} disabled={testing || !testMsg.trim()}
                className="px-8 py-3 bg-[#c9a84c] text-black text-xs tracking-[0.2em] hover:bg-[#e0c070] transition-colors font-semibold disabled:opacity-40">
                {testing ? "TESTING..." : "SEND TEST →"}
              </button>
            </div>

            {testReply && (
              <div className="bg-[#1d1d1d] border border-[#c9a84c]/20 p-6">
                <p className="text-[#c9a84c] text-xs tracking-[0.3em] mb-4">BOT REPLY</p>
                <div className="flex gap-3">
                  <div className="w-7 h-7 rounded-full bg-[#c9a84c]/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-[#c9a84c] text-xs">A</span>
                  </div>
                  <div className="bg-[#252525] border border-[#c9a84c]/10 px-4 py-3 text-gray-200 text-sm font-light leading-relaxed flex-1 whitespace-pre-line"
                    style={{ borderRadius: "0 12px 12px 12px" }}>
                    {testReply}
                  </div>
                </div>
              </div>
            )}

            <div className="bg-[#1d1d1d] border border-[#c9a84c]/15 p-5">
              <p className="text-xs tracking-[0.3em] text-gray-500 mb-3">QUICK TEST IDEAS</p>
              <div className="flex flex-wrap gap-2">
                {["What events do you plan?","What's your minimum budget?","Do you work in Italy?","How do I book?","Tell me about the process"].map((q,i) => (
                  <button key={i} onClick={() => setTestMsg(q)}
                    className="text-xs text-gray-400 border border-[#333] px-3 py-1.5 hover:border-[#c9a84c]/40 hover:text-[#c9a84c] transition-colors">
                    {q}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Bottom save */}
        <div className="mt-8 pt-6 border-t border-[#c9a84c]/10 flex justify-end">
          <button onClick={handleSave} disabled={saving}
            className="px-10 py-3 bg-[#c9a84c] text-black text-xs tracking-[0.3em] hover:bg-[#e0c070] transition-colors font-semibold disabled:opacity-50">
            {saving ? "SAVING..." : saved ? "✓ ALL CHANGES SAVED" : "SAVE ALL CHANGES"}
          </button>
        </div>
      </div>
    </div>
  );
}
