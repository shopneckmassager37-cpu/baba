import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import ChatWidget from "./ChatWidget";

const LOGO = "https://media.base44.com/images/public/69caab40b61d6ee7c5b75332/9d7fead75_generated_image.png";
const NAV = [["HOME","/"],["EVENTS","/events"],["HOW WE WORK","/process"],["ABOUT","/about"],["CONTACT","/contact"]];

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function Navbar({ active }) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#111]/95 backdrop-blur-md border-b border-[#c9a84c]/20">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3">
          <img src={LOGO} alt="logo" className="h-11 w-11 object-contain" />
          <span className="text-lg tracking-[0.3em] text-[#c9a84c] font-light hidden sm:block">AVICAM GITLIN</span>
        </Link>
        <div className="hidden md:flex gap-8 text-xs tracking-[0.2em] text-gray-300">
          {NAV.map(([l,h]) => <Link key={l} to={h} className={`hover:text-[#c9a84c] transition-colors ${active===l?"text-[#c9a84c]":""}`}>{l}</Link>)}
        </div>
        <Link to="/contact" className="hidden md:block px-5 py-2 border border-[#c9a84c] text-[#c9a84c] text-xs tracking-[0.2em] hover:bg-[#c9a84c]/10 transition-colors">INQUIRE</Link>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="bg-[#111] border-t border-[#c9a84c]/15 pt-14 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={LOGO} alt="logo" className="h-10 w-10 object-contain" />
              <span className="text-[#c9a84c] text-base tracking-[0.3em] font-light">AVICAM GITLIN</span>
            </div>
            <p className="text-gray-400 text-sm font-light leading-relaxed">Bespoke private events and extraordinary celebrations, crafted for discerning individuals worldwide.</p>
          </div>
          <div>
            <p className="text-gray-400 text-xs tracking-[0.3em] mb-4">NAVIGATION</p>
            <div className="flex flex-col gap-2">
              {NAV.map(([l,h]) => <Link key={l} to={h} className="text-gray-400 text-sm font-light hover:text-[#c9a84c] transition-colors">{l}</Link>)}
              <Link to="/terms" className="text-gray-400 text-sm font-light hover:text-[#c9a84c] transition-colors">Terms & Policies</Link>
            </div>
          </div>
          <div>
            <p className="text-gray-400 text-xs tracking-[0.3em] mb-4">CONNECT</p>
            <div className="space-y-2 text-gray-400 text-sm font-light mb-5">
              <p>+1 (347) 994-9284</p>
              <p className="text-xs break-all">avicam@kosherculinarytravel.com</p>
            </div>
            <div className="flex gap-3">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 border border-[#c9a84c]/30 px-3 py-2 text-gray-400 hover:border-[#c9a84c] hover:text-[#c9a84c] transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                <span className="text-xs">INSTAGRAM</span>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 border border-[#c9a84c]/30 px-3 py-2 text-gray-400 hover:border-[#c9a84c] hover:text-[#c9a84c] transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                <span className="text-xs">FACEBOOK</span>
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-[#c9a84c]/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-2">
          <p className="text-gray-500 text-xs">© 2025 Avicam Gitlin Private Events. All rights reserved.</p>
          <Link to="/terms" className="text-gray-500 text-xs hover:text-[#c9a84c] transition-colors">Terms & Cancellation Policy</Link>
        </div>
      </div>
    </footer>
  );
}

const steps = [
  { number: "01", title: "The First Conversation", icon: "💬", description: "Everything begins with a personal conversation — no forms, no templates. Avicam listens to your vision, your story, and what you want your event to feel like. Whether you have a clear idea or just a feeling, this is where it starts." },
  { number: "02", title: "Vision & Concept", icon: "✦", description: "We develop a bespoke concept document — a creative direction capturing the mood, aesthetic, flow, and experience. A tailored vision with venue suggestions, design direction, and programming ideas." },
  { number: "03", title: "Venue & Destination", icon: "🌍", description: "We source and secure the right venue anywhere in the world — private estates, island retreats, alpine chalets, or urban landmarks. For destination events, we handle all guest logistics too." },
  { number: "04", title: "Design & Production", icon: "◆", description: "We build the full event experience — décor, florals, lighting, entertainment, and every creative detail that transforms a space. Nothing generic. Nothing off-the-shelf." },
  { number: "05", title: "The Day Itself", icon: "🥂", description: "Avicam and his team are there on the day, managing every detail so you can be fully present. You won't be fielding calls — you'll be living the experience we built together." },
  { number: "06", title: "After the Event", icon: "♾", description: "Our relationship doesn't end when the event does. We follow up personally and begin planning the next extraordinary moment. Many clients come back year after year." }
];

export default function Process() {
  return (
    <div className="min-h-screen bg-[#161616] text-white" style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}>
      <ScrollToTop />
      <Navbar active="HOW WE WORK" />

      {/* Hero */}
      <section className="relative overflow-hidden" style={{ minHeight: "55vh" }}>
        <img src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1920&q=80" alt="hero" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-[#161616]" />
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-6" style={{ minHeight: "55vh" }}>
          <p className="text-[#c9a84c] tracking-[0.6em] text-xs mb-4">THE PROCESS</p>
          <h1 className="text-5xl md:text-6xl font-light leading-none mb-4">How We Work</h1>
          <div className="w-12 h-px bg-[#c9a84c] mb-6" />
          <p className="text-gray-300 text-base font-light leading-relaxed max-w-xl">
            From first conversation to final moment — every step, handled personally.
          </p>
        </div>
      </section>

      {/* Steps — card grid, much cleaner */}
      <section className="py-20 px-6 bg-[#161616]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {steps.map((step, i) => (
              <div key={i} className="bg-[#1d1d1d] border border-[#c9a84c]/10 p-7 hover:border-[#c9a84c]/30 transition-all duration-300 group">
                <div className="flex items-start justify-between mb-5">
                  <span className="text-4xl font-light text-[#c9a84c]/20 group-hover:text-[#c9a84c]/40 transition-colors leading-none">{step.number}</span>
                  <span className="text-2xl">{step.icon}</span>
                </div>
                <h3 className="text-lg font-light text-white mb-3 tracking-wide">{step.title}</h3>
                <div className="w-6 h-px bg-[#c9a84c]/40 mb-4" />
                <p className="text-gray-400 font-light leading-relaxed text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-6 bg-[#1a1a1a]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#c9a84c] tracking-[0.4em] text-xs mb-3">WHAT WE STAND FOR</p>
            <h2 className="text-3xl font-light">Our Commitments to You</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#c9a84c]/10">
            {[
              { title: "Absolute Discretion", text: "Our clients trust us with their most personal moments. We operate with complete confidentiality — always." },
              { title: "Genuinely Personal", text: "Avicam is personally involved in every event from concept to execution. You will never be handed off to a junior team member." },
              { title: "No Compromises", text: "We do not cut corners or settle for 'good enough'. Every detail is held to the same standard of excellence." },
              { title: "Global Reach", text: "15+ years, 30+ countries. We have the relationships and network to create extraordinary events anywhere." }
            ].map((v,i) => (
              <div key={i} className="bg-[#1a1a1a] p-8 hover:bg-[#1f1f1f] transition-colors">
                <div className="text-[#c9a84c] mb-4">◆</div>
                <h3 className="text-lg font-light mb-3">{v.title}</h3>
                <div className="w-6 h-px bg-[#c9a84c]/30 mb-4" />
                <p className="text-gray-400 font-light text-sm leading-relaxed">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="relative py-24 px-6 text-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=1920&q=80')", backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="absolute inset-0 bg-black/78" />
        <div className="relative z-10 max-w-2xl mx-auto">
          <div className="text-[#c9a84c] text-5xl font-light mb-4">"</div>
          <p className="text-xl md:text-2xl font-light text-gray-200 leading-relaxed italic mb-6">
            I read every inquiry personally. I will not rest until the event we've built together exceeds everything you imagined.
          </p>
          <div className="w-8 h-px bg-[#c9a84c] mx-auto mb-4" />
          <p className="text-[#c9a84c] tracking-[0.4em] text-xs">— AVICAM GITLIN</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 bg-[#161616]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#c9a84c] tracking-[0.4em] text-xs mb-3">COMMON QUESTIONS</p>
            <h2 className="text-2xl font-light">What You Want to Know</h2>
          </div>
          {[
            { q: "How far in advance should I reach out?", a: "For destination events and large celebrations, 6–12 months in advance is ideal. For smaller events, 2–3 months is usually sufficient. That said, we've pulled off extraordinary events on shorter timelines — just ask." },
            { q: "Do you handle events outside of the US?", a: "Absolutely. Many of our most celebrated events have taken place in Italy, Greece, Morocco, Switzerland, Croatia, and beyond. We have trusted partners in every destination." },
            { q: "How do you approach budgets?", a: "Transparently. Once we understand your vision, we'll share an honest picture of what it costs. We work within your budget to maximise impact where it matters most." },
            { q: "Is our event truly confidential?", a: "Completely. We never share details about our clients or events without explicit permission. Discretion is fundamental to how we operate." }
          ].map((faq,i) => (
            <div key={i} className="border-b border-[#c9a84c]/10 py-6">
              <h3 className="text-base font-light text-white mb-3">{faq.q}</h3>
              <p className="text-gray-500 font-light text-sm leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-[#1a1a1a] text-center">
        <div className="max-w-lg mx-auto">
          <p className="text-[#c9a84c] tracking-[0.4em] text-xs mb-4">READY TO BEGIN?</p>
          <h2 className="text-3xl font-light mb-6">Start With a Conversation</h2>
          <div className="w-8 h-px bg-[#c9a84c] mx-auto mb-6" />
          <p className="text-gray-400 font-light mb-8 text-sm">You don't need a full brief. Just reach out — Avicam will handle the rest.</p>
          <Link to="/contact" className="inline-block px-12 py-4 bg-[#c9a84c] text-black text-xs tracking-[0.3em] hover:bg-[#e0c070] transition-colors font-semibold">GET IN TOUCH</Link>
        </div>
      </section>

      <Footer />
      <ChatWidget />
    </div>
  );
}
