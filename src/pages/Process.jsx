import ChatWidget from "./ChatWidget";
import { Link } from "react-router-dom";

const LOGO = "https://media.base44.com/images/public/69caab40b61d6ee7c5b75332/9d7fead75_generated_image.png";
const NAV = [["HOME","/"],["EVENTS","/events"],["HOW WE WORK","/process"],["ABOUT","/about"],["CONTACT","/contact"]];

function Navbar({ active }) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/95 backdrop-blur-md border-b border-[#c9a84c]/20">
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
    <footer className="bg-[#070707] border-t border-[#c9a84c]/15 pt-14 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={LOGO} alt="logo" className="h-10 w-10 object-contain" />
              <span className="text-[#c9a84c] text-base tracking-[0.3em] font-light">AVICAM GITLIN</span>
            </div>
            <p className="text-gray-500 text-sm font-light leading-relaxed">Bespoke private events and extraordinary celebrations, crafted for discerning individuals worldwide.</p>
          </div>
          <div>
            <p className="text-gray-500 text-xs tracking-[0.3em] mb-4">NAVIGATION</p>
            <div className="flex flex-col gap-2">
              {NAV.map(([l,h]) => <Link key={l} to={h} className="text-gray-400 text-sm font-light hover:text-[#c9a84c] transition-colors">{l}</Link>)}
            </div>
          </div>
          <div>
            <p className="text-gray-500 text-xs tracking-[0.3em] mb-4">CONNECT</p>
            <div className="space-y-2 text-gray-400 text-sm font-light mb-5">
              <p>+1 (347) 994-9284</p>
              <p className="text-xs break-all">avicam@kosherculinarytravel.com</p>
            </div>
            <div className="flex gap-3">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 border border-[#c9a84c]/30 px-3 py-2 text-gray-400 hover:border-[#c9a84c] hover:text-[#c9a84c] transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                <span className="text-xs tracking-wide">INSTAGRAM</span>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 border border-[#c9a84c]/30 px-3 py-2 text-gray-400 hover:border-[#c9a84c] hover:text-[#c9a84c] transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                <span className="text-xs tracking-wide">FACEBOOK</span>
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-[#c9a84c]/10 pt-6 text-center">
          <p className="text-gray-600 text-xs tracking-wide">© 2025 Avicam Gitlin Private Events. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

const steps = [
  { number: "01", title: "The First Conversation", description: "Everything begins with a personal conversation — no forms, no templates. Avicam listens to your vision, your story, and what you want your event to feel like.", detail: "Whether you have a fully formed idea or just a feeling, this is where it starts. We take the time to understand who you are, who your guests are, and what this event truly means to you." },
  { number: "02", title: "Vision & Concept", description: "From your initial conversation, we develop a bespoke concept document — a creative direction for your event that captures the mood, the aesthetic, the flow, and the experience.", detail: "This isn't a generic proposal. It's a tailored vision built around your event, complete with venue suggestions, design direction, programming ideas, and a clear sense of what we're building together." },
  { number: "03", title: "Venue & Destination", description: "We source and secure the right venue — a private estate in Tuscany, a hilltop venue in Greece, a luxury space in the city, or an exclusive destination anywhere in the world.", detail: "We have relationships with extraordinary venues across 30+ countries. For destination events, we also handle all guest logistics: accommodation, travel, and ground arrangements." },
  { number: "04", title: "Design & Production", description: "We build the full event experience — décor, florals, lighting design, entertainment, music, and every creative detail that transforms a space into something extraordinary.", detail: "We work with the world's best vendors and local artisans in each destination to ensure the aesthetics are perfect and authentic. Nothing generic. Nothing off-the-shelf." },
  { number: "05", title: "The Day Itself", description: "On the day of your event, Avicam and his team are there — on the ground, managing every detail so you can be entirely present with your guests.", detail: "You won't be fielding calls or chasing vendors. You'll be living the experience we built together, surrounded by the people you love." },
  { number: "06", title: "After the Event", description: "Our relationship doesn't end when the event does. We follow up personally, handle any post-event logistics, and begin planning for the next extraordinary moment.", detail: "Many of our clients come back year after year — for anniversaries, birthdays, family gatherings, and new milestones. We become part of their story." }
];

export default function Process() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white" style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}>
      <Navbar active="HOW WE WORK" />

      {/* Hero — full bleed, dramatic */}
      <section className="relative overflow-hidden" style={{ minHeight: "70vh" }}>
        <img src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1920&q=80" alt="hero" className="absolute inset-0 w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-[#0a0a0a]" />
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-6" style={{ minHeight: "70vh" }}>
          <p className="text-[#c9a84c] tracking-[0.6em] text-xs mb-6">THE PROCESS</p>
          <h1 className="text-5xl md:text-7xl font-light leading-none mb-6">How We Work</h1>
          <div className="w-16 h-px bg-[#c9a84c] mb-8" />
          <p className="text-gray-300 text-lg font-light leading-relaxed max-w-2xl">
            Every extraordinary event starts long before the day itself. Here's how we take an idea from vision to reality — personally, meticulously, and without compromise.
          </p>
        </div>
      </section>

      {/* Steps — clean numbered layout */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          {steps.map((step, i) => (
            <div key={i} className="grid grid-cols-[80px_1fr] md:grid-cols-[120px_1fr] gap-8 md:gap-16 py-14 border-b border-[#c9a84c]/10 last:border-0 group">
              <div className="flex flex-col items-end pt-1">
                <span className="text-6xl md:text-7xl font-light text-[#c9a84c]/15 leading-none group-hover:text-[#c9a84c]/30 transition-colors duration-500">{step.number}</span>
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-light mb-3 text-white">{step.title}</h2>
                <div className="w-8 h-px bg-[#c9a84c]/40 mb-5" />
                <p className="text-gray-300 font-light leading-relaxed mb-3 text-base">{step.description}</p>
                <p className="text-gray-500 font-light leading-relaxed text-sm italic">{step.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Values grid */}
      <section className="py-24 px-6 bg-[#0d0d0d]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#c9a84c] tracking-[0.4em] text-xs mb-4">WHAT WE STAND FOR</p>
            <h2 className="text-3xl md:text-4xl font-light">Our Commitments to You</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#c9a84c]/10">
            {[
              { title: "Absolute Discretion", text: "Our clients trust us with their most personal moments. We operate with complete confidentiality and never share client details without explicit permission." },
              { title: "Genuinely Personal", text: "Avicam is personally involved in every event from concept to execution. You will never be handed off to a junior team member. This is personal — always." },
              { title: "No Compromises", text: "We do not cut corners, use generic vendors, or settle for 'good enough'. Every detail is held to the same standard of excellence — from the grandest gesture to the smallest touch." },
              { title: "Global Reach", text: "With 15+ years producing events across 30+ countries, we have the relationships, the knowledge, and the network to create extraordinary events anywhere in the world." }
            ].map((v,i) => (
              <div key={i} className="bg-[#0d0d0d] p-10 hover:bg-[#111] transition-colors group">
                <div className="text-[#c9a84c] text-xl mb-5 group-hover:scale-110 transition-transform origin-left">◆</div>
                <h3 className="text-xl font-light mb-4 tracking-wide">{v.title}</h3>
                <div className="w-8 h-px bg-[#c9a84c]/30 mb-5" />
                <p className="text-gray-400 font-light leading-relaxed text-sm">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Avicam quote — cinematic */}
      <section className="relative py-36 px-6 text-center overflow-hidden" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=1920&q=80')", backgroundSize: "cover", backgroundAttachment: "fixed", backgroundPosition: "center" }}>
        <div className="absolute inset-0 bg-black/80" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <div className="text-[#c9a84c] text-6xl font-light mb-6">"</div>
          <p className="text-2xl md:text-3xl font-light text-gray-200 leading-relaxed italic mb-8">
            I read every inquiry personally. I am involved in every decision. And I will not rest until the event we've built together exceeds everything you imagined.
          </p>
          <div className="w-10 h-px bg-[#c9a84c] mx-auto mb-6" />
          <p className="text-[#c9a84c] tracking-[0.4em] text-xs">— AVICAM GITLIN</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#c9a84c] tracking-[0.4em] text-xs mb-4">COMMON QUESTIONS</p>
            <h2 className="text-3xl font-light">What You Want to Know</h2>
          </div>
          {[
            { q: "How far in advance should I reach out?", a: "For destination events and large celebrations, 6–12 months in advance is ideal. For smaller events, 2–3 months is usually sufficient. That said, we've pulled off extraordinary events on shorter timelines — reach out and we'll tell you honestly what's possible." },
            { q: "Do you handle events outside of the US?", a: "Absolutely. Many of our most celebrated events have taken place in Italy, Greece, Morocco, Switzerland, Croatia, and beyond. We have trusted partners, vendors, and local teams in every destination we work in." },
            { q: "How do you approach budgets?", a: "Transparently. Once we understand your vision, we'll share an honest picture of what it costs and where the investment goes. We work within your budget to maximise impact where it matters most." },
            { q: "Is our event truly confidential?", a: "Completely. We never share details about our clients, their events, or any images without explicit permission. Discretion is not optional — it's fundamental to how we operate." }
          ].map((faq,i) => (
            <div key={i} className="border-b border-[#c9a84c]/10 py-8">
              <h3 className="text-lg font-light text-white mb-4">{faq.q}</h3>
              <p className="text-gray-500 font-light leading-relaxed text-sm">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 px-6 bg-[#0d0d0d] text-center">
        <div className="max-w-xl mx-auto">
          <p className="text-[#c9a84c] tracking-[0.4em] text-xs mb-6">READY TO BEGIN?</p>
          <h2 className="text-4xl font-light mb-8">Start With a Conversation</h2>
          <div className="w-10 h-px bg-[#c9a84c] mx-auto mb-8" />
          <p className="text-gray-400 font-light mb-10 leading-relaxed">You don't need a full brief. Just reach out — Avicam will handle the rest.</p>
          <Link to="/contact" className="inline-block px-12 py-5 bg-[#c9a84c] text-black text-xs tracking-[0.3em] hover:bg-[#e0c070] transition-colors font-semibold">GET IN TOUCH</Link>
        </div>
      </section>

      <Footer />
      <ChatWidget />
    </div>
  );
}
