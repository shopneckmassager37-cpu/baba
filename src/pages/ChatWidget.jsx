import { useState, useEffect, useRef } from "react";

const OPENING_MESSAGE = {
  role: "assistant",
  content: "Hi there! Welcome to Avicam Gitlin Private Events.\n\nI'm here to help — tell me about the event you're dreaming of, and I'll do my best to answer any questions you have."
};

const DEFAULT_SUGGESTIONS = [
  "What types of events do you plan?",
  "How do I get started?",
  "Which destinations do you work in?",
  "What is your minimum budget?"
];

const KNOWLEDGE_BASE = [
  { keywords: ["event", "type", "plan", "what do you", "kinds"], answer: "We specialize in destination weddings, fundraising galas, corporate & executive events, VIP milestone celebrations, heritage & cultural journeys, and private dining experiences. Every event is fully bespoke and tailored to your vision." },
  { keywords: ["start", "begin", "book", "get started", "how do i"], answer: "It all begins with a personal conversation. Simply reach out via our contact page, WhatsApp (+1 347-994-9284), or email avicam@kosherculinarytravel.com. Avicam reads every inquiry personally and will be in touch within 24 hours." },
  { keywords: ["destination", "where", "country", "location", "work in"], answer: "We produce events in 30+ countries worldwide — from Tuscany and the Greek Islands to the Swiss Alps, Morocco, Croatia, the Caribbean, and beyond. If you can dream it, we can make it happen." },
  { keywords: ["budget", "cost", "price", "minimum", "how much"], answer: "Our events typically start from $15,000 for intimate gatherings. Every event is custom-quoted based on your vision, guest count, destination, and level of detail. We'll provide a transparent proposal after our first conversation." },
  { keywords: ["wedding", "marry", "bride", "groom"], answer: "Destination weddings are one of our signature specialties. From intimate ceremonies in Tuscan villas to grand celebrations on Greek island estates — every wedding we produce is a masterclass in beauty, precision, and emotion." },
  { keywords: ["kosher", "dietary", "food"], answer: "Absolutely. Our roots are in kosher culinary travel, and we have deep expertise in producing exceptional kosher events worldwide. We work with top kosher caterers and chefs in every destination." },
  { keywords: ["process", "how", "work", "steps"], answer: "Our process is simple: 1) A personal conversation to understand your vision, 2) We develop a bespoke concept and proposal, 3) Full design and production planning, 4) Flawless execution on the day. Avicam is personally involved at every stage." },
  { keywords: ["corporate", "company", "business", "executive"], answer: "We produce executive retreats, product launches, incentive trips, and corporate galas at the highest level. Our corporate events combine impeccable production with inspiring destinations to create unforgettable experiences for your team and clients." },
];

function getResponse(message) {
  const lower = message.toLowerCase();
  for (const entry of KNOWLEDGE_BASE) {
    if (entry.keywords.some(kw => lower.includes(kw))) {
      return entry.answer;
    }
  }
  return "Thank you for your interest! For the most detailed and personal answer, I'd recommend reaching out to Avicam directly. You can contact us via WhatsApp at +1 (347) 994-9284 or email avicam@kosherculinarytravel.com. We respond within 24 hours.";
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([OPENING_MESSAGE]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [suggested, setSuggested] = useState(DEFAULT_SUGGESTIONS);
  const [showBubble, setShowBubble] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    const t1 = setTimeout(() => setShowBubble(true), 4000);
    const t2 = setTimeout(() => setShowBubble(false), 12000);
    return () => { clearTimeout(t1); clearTimeout(t2); };
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
    setMessages(prev => [...prev, { role: "user", content }]);
    setLoading(true);
    setSuggested([]);

    // Simulate a brief thinking delay
    await new Promise(r => setTimeout(r, 600 + Math.random() * 800));

    const reply = getResponse(content);
    setMessages(prev => [...prev, { role: "assistant", content: reply }]);
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
            Planning something special? I can help.
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
            <span className="w-8 h-8 flex items-center justify-center border border-[#c9a84c]/40 text-[#c9a84c] text-xs font-light tracking-wider">AG</span>
            <div className="flex-1">
              <p className="text-[#c9a84c] text-xs tracking-[0.2em] font-light">AVICAM ASSISTANT</p>
              <div className="flex items-center gap-1.5 mt-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                <span className="text-gray-500 text-xs">Online — Here to help</span>
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
