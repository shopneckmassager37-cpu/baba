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
    <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center">
      <div className="text-[#c9a84c] text-sm tracking-widest animate-pulse">LOADING...</div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white" style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}>
      {/* Top bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/95 backdrop-blur-md border-b border-[#c9a84c]/20">
        <div className="max-w-6xl mx-auto px-6 py-3 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img src={LOGO} alt="logo" className="h-10 w-10 object-contain" />
            <div>
              <span className="text-[#c9a84c] text-sm tracking-[0.3em] font-light">AVICAM GITLIN</span>
              <span className="text-gray-600 text-xs ml-3 tracking-widest">/ ADMIN</span>
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <Link to="/" className="text-gray-500 text-xs tracking-[0.2em] hover:text-[#c9a84c] transition-colors">← BACK TO SITE</Link>
            <button
              onClick={handleSave}
              disabled={saving}
              className="px-6 py-2 bg-[#c9a84c] text-black text-xs tracking-[0.2em] hover:bg-[#e0c070] transition-colors font-semibold disabled:opacity-50"
            >
              {saving ? "SAVING..." : saved ? "✓ SAVED" : "SAVE CHANGES"}
            </button>
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-6 pt-28 pb-20">
        <div className="mb-12">
          <h1 className="text-3xl font-light text-white mb-2">Chatbot Configuration</h1>
          <p className="text-gray-500 text-sm font-light">Manage your AI assistant's personality, knowledge, and behaviour.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left — main settings */}
          <div className="lg:col-span-2 space-y-6">

            {/* Active toggle */}
            <div className="bg-[#0d0d0d] border border-[#c9a84c]/15 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-white font-light tracking-wide mb-1">Chatbot Status</h3>
                  <p className="text-gray-500 text-xs">Enable or disable the chat widget on your site</p>
                </div>
                <button
                  onClick={() => set("is_active", !config.is_active)}
                  className={`relative w-12 h-6 rounded-full transition-colors ${config.is_active ? "bg-[#c9a84c]" : "bg-gray-700"}`}
                >
                  <span className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-transform ${config.is_active ? "left-7" : "left-1"}`} />
                </button>
              </div>
            </div>

            {/* Bot name */}
            <div className="bg-[#0d0d0d] border border-[#c9a84c]/15 p-6">
              <label className="block text-xs tracking-[0.3em] text-gray-500 mb-3">BOT NAME</label>
              <input
                value={config.bot_name || ""}
                onChange={e => set("bot_name", e.target.value)}
                className="w-full bg-[#111] border border-[#c9a84c]/20 text-white px-4 py-3 focus:outline-none focus:border-[#c9a84c] transition-colors font-light"
                placeholder="e.g. Avicam Assistant"
              />
            </div>

            {/* Welcome message */}
            <div className="bg-[#0d0d0d] border border-[#c9a84c]/15 p-6">
              <label className="block text-xs tracking-[0.3em] text-gray-500 mb-3">WELCOME MESSAGE</label>
              <textarea
                value={config.welcome_message || ""}
                onChange={e => set("welcome_message", e.target.value)}
                rows={4}
                className="w-full bg-[#111] border border-[#c9a84c]/20 text-white px-4 py-3 focus:outline-none focus:border-[#c9a84c] transition-colors font-light resize-none text-sm"
                placeholder="The first message the bot sends when chat opens..."
              />
            </div>

            {/* System prompt */}
            <div className="bg-[#0d0d0d] border border-[#c9a84c]/15 p-6">
              <label className="block text-xs tracking-[0.3em] text-gray-500 mb-2">SYSTEM PROMPT</label>
              <p className="text-gray-600 text-xs mb-3">This is the core instruction set that defines how the bot behaves, what it knows, and its tone.</p>
              <textarea
                value={config.system_prompt || ""}
                onChange={e => set("system_prompt", e.target.value)}
                rows={14}
                className="w-full bg-[#111] border border-[#c9a84c]/20 text-white px-4 py-3 focus:outline-none focus:border-[#c9a84c] transition-colors font-light resize-none text-sm leading-relaxed"
                placeholder="You are a luxury event concierge for Avicam Gitlin..."
              />
            </div>

            {/* Suggested questions */}
            <div className="bg-[#0d0d0d] border border-[#c9a84c]/15 p-6">
              <label className="block text-xs tracking-[0.3em] text-gray-500 mb-2">SUGGESTED QUESTIONS</label>
              <p className="text-gray-600 text-xs mb-3">One question per line. Shown as quick-tap buttons when the chat first opens (max 4 shown).</p>
              <textarea
                value={config.suggested_questions || ""}
                onChange={e => set("suggested_questions", e.target.value)}
                rows={6}
                className="w-full bg-[#111] border border-[#c9a84c]/20 text-white px-4 py-3 focus:outline-none focus:border-[#c9a84c] transition-colors font-light resize-none text-sm"
                placeholder={"What types of events do you plan?\nHow do I get started?\nWhich destinations do you work in?"}
              />
            </div>
          </div>

          {/* Right — model settings + test */}
          <div className="space-y-6">

            {/* Model */}
            <div className="bg-[#0d0d0d] border border-[#c9a84c]/15 p-6">
              <label className="block text-xs tracking-[0.3em] text-gray-500 mb-3">AI MODEL</label>
              <select
                value={config.model || "gpt-4o-mini"}
                onChange={e => set("model", e.target.value)}
                className="w-full bg-[#111] border border-[#c9a84c]/20 text-white px-4 py-3 focus:outline-none focus:border-[#c9a84c] transition-colors font-light text-sm"
              >
                <option value="gpt-4o-mini">GPT-4o Mini (Fast, affordable)</option>
                <option value="gpt-4o">GPT-4o (Most capable)</option>
                <option value="gpt-3.5-turbo">GPT-3.5 Turbo (Fastest)</option>
              </select>
            </div>

            {/* Temperature */}
            <div className="bg-[#0d0d0d] border border-[#c9a84c]/15 p-6">
              <label className="block text-xs tracking-[0.3em] text-gray-500 mb-2">
                CREATIVITY (TEMPERATURE): <span className="text-[#c9a84c]">{config.temperature ?? 0.7}</span>
              </label>
              <p className="text-gray-600 text-xs mb-3">0 = precise & consistent · 1 = creative & varied</p>
              <input
                type="range" min="0" max="1" step="0.1"
                value={config.temperature ?? 0.7}
                onChange={e => set("temperature", parseFloat(e.target.value))}
                className="w-full accent-[#c9a84c]"
              />
              <div className="flex justify-between text-xs text-gray-600 mt-1">
                <span>0 Precise</span><span>1 Creative</span>
              </div>
            </div>

            {/* Max tokens */}
            <div className="bg-[#0d0d0d] border border-[#c9a84c]/15 p-6">
              <label className="block text-xs tracking-[0.3em] text-gray-500 mb-2">
                MAX RESPONSE LENGTH: <span className="text-[#c9a84c]">{config.max_tokens ?? 500}</span>
              </label>
              <p className="text-gray-600 text-xs mb-3">~1 token ≈ 1 word. 300–600 is recommended.</p>
              <input
                type="range" min="100" max="1500" step="50"
                value={config.max_tokens ?? 500}
                onChange={e => set("max_tokens", parseInt(e.target.value))}
                className="w-full accent-[#c9a84c]"
              />
              <div className="flex justify-between text-xs text-gray-600 mt-1">
                <span>100</span><span>1500</span>
              </div>
            </div>

            {/* Test panel */}
            <div className="bg-[#0d0d0d] border border-[#c9a84c]/20 p-6">
              <h3 className="text-xs tracking-[0.3em] text-gray-400 mb-4">TEST YOUR BOT</h3>
              <textarea
                value={testMsg}
                onChange={e => setTestMsg(e.target.value)}
                rows={3}
                placeholder="Ask the bot something..."
                className="w-full bg-[#111] border border-[#c9a84c]/20 text-white px-3 py-2.5 focus:outline-none focus:border-[#c9a84c] transition-colors font-light resize-none text-sm mb-3"
              />
              <button
                onClick={handleTest}
                disabled={testing || !testMsg.trim()}
                className="w-full py-2.5 bg-[#c9a84c]/20 border border-[#c9a84c]/30 text-[#c9a84c] text-xs tracking-[0.2em] hover:bg-[#c9a84c]/30 transition-colors disabled:opacity-40"
              >
                {testing ? "TESTING..." : "SEND TEST"}
              </button>
              {testReply && (
                <div className="mt-4 p-4 bg-[#111] border border-[#c9a84c]/10 text-gray-300 text-sm font-light leading-relaxed">
                  <p className="text-[#c9a84c] text-xs tracking-wide mb-2">BOT REPLY:</p>
                  {testReply}
                </div>
              )}
            </div>

            {/* Save button */}
            <button
              onClick={handleSave}
              disabled={saving}
              className="w-full py-4 bg-[#c9a84c] text-black text-xs tracking-[0.3em] hover:bg-[#e0c070] transition-colors font-semibold disabled:opacity-50"
            >
              {saving ? "SAVING..." : saved ? "✓ CHANGES SAVED" : "SAVE ALL CHANGES"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
