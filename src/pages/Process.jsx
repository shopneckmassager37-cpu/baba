import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import ChatWidget from "./ChatWidget";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";



function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {window.scrollTo(0, 0);}, [pathname]);
  return null;
}

const steps = [
{ number: "01", title: "The First Conversation", icon: "💬", description: "Everything begins with a personal conversation — no forms, no templates. Avicam listens to your vision, your story, and what you want your event to feel like. Whether you have a clear idea or just a feeling, this is where it starts." },
{ number: "02", title: "Vision & Concept", icon: "✦", description: "We develop a bespoke concept document — a creative direction capturing the mood, aesthetic, flow, and experience. A tailored vision with venue suggestions, design direction, and programming ideas." },
{ number: "03", title: "Venue & Destination", icon: "🌍", description: "We source and secure the right venue anywhere in the world — private estates, island retreats, alpine chalets, or urban landmarks. For destination events, we handle all guest logistics too." },
{ number: "04", title: "Design & Production", icon: "◆", description: "We build the full event experience — décor, florals, lighting, entertainment, and every creative detail that transforms a space. Nothing generic. Nothing off-the-shelf." },
{ number: "05", title: "The Day Itself", icon: "🥂", description: "Avicam and his team are there on the day, managing every detail so you can be fully present. You won't be fielding calls — you'll be living the experience we built together." },
{ number: "06", title: "After the Event", icon: "♾", description: "Our relationship doesn't end when the event does. We follow up personally and begin planning the next extraordinary moment. Many clients come back year after year." }];


export default function Process() {
  return (
    <div className="min-h-screen bg-[#1c1b1a] text-white" style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}>
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
      <section className="py-20 px-6 bg-[#1c1b1a]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {steps.map((step, i) =>
            <div key={i} className="bg-[#1d1d1d] border border-[#c9a84c]/10 p-7 hover:border-[#c9a84c]/30 transition-all duration-300 group">
                <div className="flex items-start justify-between mb-5">
                  <span className="text-4xl font-light text-[#c9a84c]/20 group-hover:text-[#c9a84c]/40 transition-colors leading-none">{step.number}</span>
                  <span className="text-2xl">{step.icon}</span>
                </div>
                <h3 className="text-lg font-light text-white mb-3 tracking-wide">{step.title}</h3>
                <div className="w-6 h-px bg-[#c9a84c]/40 mb-4" />
                <p className="text-gray-400 font-light leading-relaxed text-sm">{step.description}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-6 bg-[#232120]">
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
            { title: "Global Reach", text: "15+ years, 30+ countries. We have the relationships and network to create extraordinary events anywhere." }].
            map((v, i) =>
            <div key={i} className="bg-[#1a1a1a] p-8 hover:bg-[#1f1f1f] transition-colors">
                <div className="text-[#c9a84c] mb-4">◆</div>
                <h3 className="text-lg font-light mb-3">{v.title}</h3>
                <div className="w-6 h-px bg-[#c9a84c]/30 mb-4" />
                <p className="text-gray-400 font-light text-sm leading-relaxed">{v.text}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="relative py-24 px-6 text-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=1920&q=80')", backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(0,0,0,0.88)' }} />
        <div className="relative z-10 max-w-2xl mx-auto">
          
          <p className="text-xl md:text-2xl font-light text-white leading-relaxed italic mb-6">
            I read every inquiry personally. I will not rest until the event we've built together exceeds everything you imagined.
          </p>
          <div className="w-8 h-px bg-[#c9a84c] mx-auto mb-4" />
          <p className="text-[#c9a84c] tracking-[0.4em] text-xs">— AVICAM GITLIN</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 bg-[#1c1b1a]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#c9a84c] tracking-[0.4em] text-xs mb-3">COMMON QUESTIONS</p>
            <h2 className="text-2xl font-light">What You Want to Know</h2>
          </div>
          {[
          { q: "How far in advance should I reach out?", a: "For destination events and large celebrations, 6–12 months in advance is ideal. For smaller events, 2–3 months is usually sufficient. That said, we've pulled off extraordinary events on shorter timelines — just ask." },
          { q: "Do you handle events outside of the US?", a: "Absolutely. Many of our most celebrated events have taken place in Italy, Greece, Morocco, Switzerland, Croatia, and beyond. We have trusted partners in every destination." },
          { q: "How do you approach budgets?", a: "Transparently. Once we understand your vision, we'll share an honest picture of what it costs. We work within your budget to maximise impact where it matters most." },
          { q: "Is our event truly confidential?", a: "Completely. We never share details about our clients or events without explicit permission. Discretion is fundamental to how we operate." }].
          map((faq, i) =>
          <div key={i} className="border-b border-[#c9a84c]/10 py-6">
              <h3 className="text-base font-light text-white mb-3">{faq.q}</h3>
              <p className="text-gray-500 font-light text-sm leading-relaxed">{faq.a}</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-[#232120] text-center">
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
    </div>);

}