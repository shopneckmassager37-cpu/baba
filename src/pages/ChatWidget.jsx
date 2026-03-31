import { useState, useEffect, useRef } from "react";

const APP_URL = "https://app-c5b75332.base44.app";
const LOGO = "https://media.base44.com/images/public/69caab40b61d6ee7c5b75332/9d7fead75_generated_image.png";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [config, setConfig] = useState(null);
  const [suggested, setSuggested] = useState([]);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    fetch(`${APP_URL}/functions/chatbot`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ messages: [{ role: "user", content: "__init__" }] }),
    })
      .then(r => r.json())
      .catch(() => {});

    // Load config for welcome message & suggestions
    import("@/api/entities").then(({ ChatbotConfig }) => {
      ChatbotConfig.list().then(configs => {
        const cfg = configs?.[0];
        if (cfg) {
          setConfig(cfg);
          if (cfg.welcome_message) {
            setMessages([{ role: "assistant", content: cfg.welcome_message }]);
          }
          if (cfg.suggested_questions) {
            setSuggested(cfg.suggested_questions.split("\n").filter(Boolean).slice(0, 4));
          }
        }
      }).catch(() => {});
    }).catch(() => {});
  }, []);

  useEffect(() => {
    if (open) messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, open]);

  const send = async (text) => {
    const content = text || input.trim();
    if (!content || loading) return;
    setInput("");
    const newMessages = [...messages, { role: "user", content }];
    setMessages(newMessages);
    setLoading(true);
    setSuggested([]);

    try {
      const res = await fetch(`${APP_URL}/functions/chatbot`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newMessages.filter(m => m.role !== "__init__") }),
      });
      const data = await res.json();
      setMessages(prev => [...prev, { role: "assistant", content: data.reply || "Sorry, I couldn't process that." }]);
    } catch {
      setMessages(prev => [...prev, { role: "assistant", content: "Something went wrong. Please try again." }]);
    }
    setLoading(false);
  };

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-[9999] w-14 h-14 bg-[#c9a84c] rounded-full shadow-2xl flex items-center justify-center hover:bg-[#e0c070] transition-all duration-300 hover:scale-110"
        style={{ boxShadow: "0 4px 30px rgba(201,168,76,0.4)" }}
      >
        {open ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
        )}
      </button>

      {/* Chat window */}
      {open && (
        <div
          className="fixed bottom-24 right-6 z-[9998] w-[360px] max-h-[560px] flex flex-col rounded-none shadow-2xl overflow-hidden"
          style={{ background: "#0d0d0d", border: "1px solid rgba(201,168,76,0.3)", boxShadow: "0 8px 60px rgba(0,0,0,0.8)" }}
        >
          {/* Header */}
          <div className="bg-[#0a0a0a] border-b border-[#c9a84c]/20 px-4 py-3 flex items-center gap-3">
            <img src={LOGO} alt="logo" className="w-8 h-8 object-contain" />
            <div>
              <p className="text-[#c9a84c] text-xs tracking-[0.2em] font-light">{config?.bot_name || "AVICAM ASSISTANT"}</p>
              <div className="flex items-center gap-1.5 mt-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                <span className="text-gray-500 text-xs">Online</span>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3" style={{ maxHeight: "380px" }}>
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[85%] px-4 py-2.5 text-sm font-light leading-relaxed ${
                    m.role === "user"
                      ? "bg-[#c9a84c] text-black"
                      : "bg-[#1a1a1a] text-gray-300 border border-[#c9a84c]/10"
                  }`}
                  style={{ fontFamily: "'Georgia', serif" }}
                >
                  {m.content}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-[#1a1a1a] border border-[#c9a84c]/10 px-4 py-3 flex gap-1.5">
                  {[0,1,2].map(i => (
                    <span key={i} className="w-1.5 h-1.5 rounded-full bg-[#c9a84c]/50 animate-bounce" style={{ animationDelay: `${i*0.15}s` }} />
                  ))}
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Suggested questions */}
          {suggested.length > 0 && (
            <div className="px-4 pb-2 flex flex-wrap gap-2">
              {suggested.map((q, i) => (
                <button key={i} onClick={() => send(q)} className="text-xs text-[#c9a84c] border border-[#c9a84c]/30 px-3 py-1.5 hover:bg-[#c9a84c]/10 transition-colors font-light text-left">
                  {q}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <div className="border-t border-[#c9a84c]/15 p-3 flex gap-2">
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === "Enter" && !e.shiftKey && send()}
              placeholder="Ask us anything..."
              className="flex-1 bg-[#1a1a1a] border border-[#c9a84c]/20 text-white text-sm px-3 py-2.5 focus:outline-none focus:border-[#c9a84c]/50 font-light placeholder-gray-600"
              style={{ fontFamily: "'Georgia', serif" }}
            />
            <button
              onClick={() => send()}
              disabled={loading || !input.trim()}
              className="bg-[#c9a84c] text-black px-4 py-2 hover:bg-[#e0c070] transition-colors disabled:opacity-40"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
