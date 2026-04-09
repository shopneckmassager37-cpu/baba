import { useState, useEffect, useRef } from "react";

const APP_URL = "https://app-c5b75332.base44.app";
const LOGO = "/logo.svg";

const OPENING_MESSAGE = {
  role: "assistant",
  content: "Hi there! 👋 Welcome to Avicam Gitlin Private Events.\n\nI'm here to help — tell me about the event you're dreaming of, and I'll do my best to answer any questions you have. 🥂"
};

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([OPENING_MESSAGE]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [config, setConfig] = useState(null);
  const [suggested, setSuggested] = useState([]);
  const [showBubble, setShowBubble] = useState(false);
  const messagesEndRef = useRef(null);
  const didInit = useRef(false);

  useEffect(() => {
    if (didInit.current) return;
    didInit.current = true;

    import("@/api/entities").then(({ ChatbotConfig }) => {
      ChatbotConfig.list().then(configs => {
        const cfg = configs?.[0];
        if (cfg) {
          setConfig(cfg);
          if (cfg.suggested_questions) {
            setSuggested(cfg.suggested_questions.split("\n").filter(Boolean).slice(0, 4));
          }
        }
      }).catch(() => {});
    }).catch(() => {});

    setTimeout(() => setShowBubble(true), 4000);
    setTimeout(() => setShowBubble(false), 12000);
  }, []);

  useEffect(() => {
    if (open) {
      setShowBubble(false);
      setTimeout(() => messagesEndRef.current?.scrollIntoView({ behavior: "smooth" }), 100);
    }
  }, [open, messages]);

  const send = async (text) => {
    const content = text || input.trim();
    if (!content || loading) return;
    setInput("");
    const chatHistory = messages.filter(m => m !== OPENING_MESSAGE);
    const newMessages = [...chatHistory, { role: "user", content }];
    setMessages(prev => [...prev, { role: "user", content }]);
    setLoading(true);
    setSuggested([]);

    try {
      const res = await fetch(`${APP_URL}/functions/chatbot`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newMessages }),
      });
      const data = await res.json();
      setMessages(prev => [...prev, { role: "assistant", content: data.reply || "I'm sorry, I couldn't process that. Please try again." }]);
    } catch {
      setMessages(prev => [...prev, { role: "assistant", content: "Something went wrong. Please try again." }]);
    }
    setLoading(false);
  };

  return (
    <>
      {/* Welcome bubble */}
      {showBubble && !open && (
        <div onClick={() => setOpen(true)} className="fixed bottom-24 right-6 z-[9997] cursor-pointer"
          style={{ animation: "fadeInUp 0.4s ease" }}>
          <div className="bg-white text-gray-800 px-4 py-3 shadow-2xl max-w-[210px] text-sm font-light leading-relaxed relative"
            style={{ borderRadius: "12px 12px 0 12px", fontFamily: "'Georgia', serif" }}>
            ✨ Planning something special? I can help.
            <div className="absolute bottom-[-7px] right-4 w-0 h-0"
              style={{ borderLeft: "7px solid transparent", borderTop: "7px solid white" }} />
          </div>
        </div>
      )}

      {/* Floating button */}
      <button onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-[9999] w-14 h-14 bg-[#c9a84c] rounded-full shadow-2xl flex items-center justify-center hover:bg-[#e0c070] transition-all duration-300 hover:scale-110"
        style={{ boxShadow: "0 4px 30px rgba(201,168,76,0.4)" }}>
        {open ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2.5">
            <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
          </svg>
        )}
      </button>

      {/* Chat window */}
      {open && (
        <div className="fixed bottom-24 right-6 z-[9998] w-[360px] flex flex-col shadow-2xl overflow-hidden"
          style={{ background: "#111", border: "1px solid rgba(201,168,76,0.3)", boxShadow: "0 8px 60px rgba(0,0,0,0.7)", maxHeight: "560px", animation: "slideUp 0.25s ease", borderRadius: "20px" }}>

          {/* Header */}
          <div className="border-b border-[#c9a84c]/20 px-4 py-3 flex items-center gap-3" style={{ background: "#0d0d0d" }}>
            <img src={LOGO} alt="logo" className="w-8 h-8 object-contain" />
            <div className="flex-1">
              <p className="text-[#c9a84c] text-xs tracking-[0.2em] font-light">{config?.bot_name || "AVICAM ASSISTANT"}</p>
              <div className="flex items-center gap-1.5 mt-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                <span className="text-gray-500 text-xs">Online · Here to help</span>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3" style={{ maxHeight: "360px" }}>
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                {m.role === "assistant" && (
                  <div className="w-6 h-6 rounded-full bg-[#c9a84c]/20 flex items-center justify-center mr-2 flex-shrink-0 mt-1">
                    <span className="text-[#c9a84c] text-xs font-light">A</span>
                  </div>
                )}
                <div className={`max-w-[80%] px-4 py-3 text-sm font-light leading-relaxed whitespace-pre-line ${
                    m.role === "user" ? "bg-[#c9a84c] text-black" : "bg-[#1d1d1d] text-gray-200 border border-[#c9a84c]/10"
                  }`}
                  style={{ fontFamily: "'Georgia', serif", borderRadius: m.role === "user" ? "12px 12px 0 12px" : "12px 12px 12px 0" }}>
                  {m.content}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-[#c9a84c]/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-[#c9a84c] text-xs">A</span>
                </div>
                <div className="bg-[#1d1d1d] border border-[#c9a84c]/10 px-4 py-3 flex gap-1.5" style={{ borderRadius: "12px 12px 12px 0" }}>
                  {[0,1,2].map(j => (
                    <span key={j} className="w-1.5 h-1.5 rounded-full bg-[#c9a84c]/50 animate-bounce" style={{ animationDelay: `${j*0.15}s` }} />
                  ))}
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Suggested questions */}
          {suggested.length > 0 && (
            <div className="px-4 pb-3 flex flex-wrap gap-2 border-t border-[#c9a84c]/10 pt-3">
              {suggested.map((q, i) => (
                <button key={i} onClick={() => send(q)}
                  className="text-xs text-[#c9a84c] border border-[#c9a84c]/30 px-3 py-1.5 hover:bg-[#c9a84c]/10 transition-colors font-light text-left"
                  style={{ borderRadius: "20px" }}>
                  {q}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <div className="border-t border-[#c9a84c]/15 p-3 flex gap-2" style={{ background: "#0d0d0d" }}>
            <input value={input} onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === "Enter" && !e.shiftKey && send()}
              placeholder="Tell me what's on your mind..."
              className="flex-1 bg-[#1a1a1a] border border-[#c9a84c]/20 text-white text-sm px-3 py-2.5 focus:outline-none focus:border-[#c9a84c]/50 font-light placeholder-gray-600"
              style={{ fontFamily: "'Georgia', serif", borderRadius: "8px" }} />
            <button onClick={() => send()} disabled={loading || !input.trim()}
              className="bg-[#c9a84c] text-black px-4 py-2 hover:bg-[#e0c070] transition-colors disabled:opacity-40"
              style={{ borderRadius: "8px" }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
              </svg>
            </button>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeInUp { from { opacity:0; transform:translateY(12px); } to { opacity:1; transform:translateY(0); } }
        @keyframes slideUp { from { opacity:0; transform:translateY(16px); } to { opacity:1; transform:translateY(0); } }
      `}</style>
    </>
  );
}