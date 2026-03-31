import { Link } from "react-router-dom";
import ChatWidget from "./ChatWidget";

const LOGO = "https://media.base44.com/images/public/69caab40b61d6ee7c5b75332/9d7fead75_generated_image.png";
const AVICAM = "https://base44.app/api/apps/69caab40b61d6ee7c5b75332/files/mp/public/69caab40b61d6ee7c5b75332/129dab6d3_avicam_photo.jpg";
const KITCHEN_IMG = "https://media.base44.com/images/public/69caab40b61d6ee7c5b75332/45a3420cd_image.png";
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
              <Link to="/terms" className="text-gray-400 text-sm font-light hover:text-[#c9a84c] transition-colors">Terms & Policies</Link>
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
        <div className="border-t border-[#c9a84c]/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-2">
          <p className="text-gray-600 text-xs tracking-wide">© 2025 Avicam Gitlin Private Events. All rights reserved.</p>
          <Link to="/terms" className="text-gray-600 text-xs hover:text-[#c9a84c] transition-colors">Terms & Cancellation Policy</Link>
        </div>
      </div>
    </footer>
  );
}

export default function About() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white" style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}>
      <Navbar active="ABOUT" />

      {/* Hero */}
      <section className="relative overflow-hidden" style={{ minHeight: "80vh" }}>
        <img src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1920&q=80" alt="Private event" className="absolute inset-0 w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/40 to-[#0a0a0a]" />
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-6" style={{ minHeight: "80vh" }}>
          <p className="text-[#c9a84c] tracking-[0.6em] text-xs mb-6">THE STORY</p>
          <h1 className="text-5xl md:text-7xl font-light leading-none mb-6">Behind Every<br /><span className="italic text-[#c9a84c]">Extraordinary Event</span></h1>
          <div className="w-16 h-px bg-[#c9a84c] mb-8" />
          <p className="text-gray-300 text-lg font-light max-w-xl leading-relaxed">The person, the philosophy, and the passion that make it all possible.</p>
        </div>
      </section>

      {/* Story */}
      <section className="py-28 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div>
            <p className="text-[#c9a84c] tracking-[0.4em] text-xs mb-6">THE BEGINNING</p>
            <h2 className="text-3xl md:text-4xl font-light mb-8 leading-relaxed">It started around a table<br />on a Friday night.</h2>
            <div className="w-10 h-px bg-[#c9a84c]/40 mb-8" />
            <p className="text-gray-400 font-light leading-relaxed mb-5">
              It was springtime, and a group of friends sat together sharing a meal — full of laughter, good wine, and the kind of conversation that stays with you. The talk turned to travel: Tuscany, the rolling hills, the scent of cypress trees in the Mediterranean warmth. Everyone shared the same dream.
            </p>
            <p className="text-gray-400 font-light leading-relaxed mb-5">
              That evening was the seed of everything that followed. Avicam realised he could build something that didn't yet exist — a way for people to gather, celebrate, and experience the world's most extraordinary places with total care and without compromise.
            </p>
            <p className="text-gray-400 font-light leading-relaxed italic border-l-2 border-[#c9a84c]/40 pl-4">
              "Great ideas are born when good friends and great wine come together."
            </p>
          </div>
          <div className="relative">
            <img src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80" alt="Event celebration" className="w-full h-[580px] object-cover" />
            <div className="absolute -bottom-4 -left-4 w-28 h-28 border border-[#c9a84c]/25 pointer-events-none" />
          </div>
        </div>
      </section>

      {/* Kitchen photo — the new image */}
      <section className="py-0 px-6 pb-28">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="relative overflow-hidden">
              <img
                src={KITCHEN_IMG}
                alt="Avicam in the kitchen"
                className="w-full h-[480px] object-cover object-center hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent px-6 py-5">
                <p className="text-[#c9a84c] text-xs tracking-[0.3em]">IN THE HEART OF IT ALL</p>
              </div>
            </div>
            <div>
              <p className="text-[#c9a84c] tracking-[0.4em] text-xs mb-6">WHERE IT ALL COMES TOGETHER</p>
              <h2 className="text-3xl font-light mb-6 leading-relaxed">More than events.<br />Experiences lived from the inside out.</h2>
              <div className="w-10 h-px bg-[#c9a84c]/40 mb-6" />
              <p className="text-gray-400 font-light leading-relaxed mb-5">
                Every extraordinary event begins long before the guests arrive. It starts in conversations, in creative sessions, in the quiet hours of preparation where every detail is considered and every decision is made with purpose.
              </p>
              <p className="text-gray-400 font-light leading-relaxed">
                Avicam and his team bring the same passion and precision to every element of the experience — from the broadest vision to the smallest detail. This is the standard we hold ourselves to, every time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 px-6 bg-[#0d0d0d]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#c9a84c] tracking-[0.4em] text-xs mb-4">THE PHILOSOPHY</p>
            <h2 className="text-3xl md:text-4xl font-light">What Drives Every Decision</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: "✦", title: "Every Event is Personal", text: "Avicam's approach starts from who you are, not a template. He wants to understand how you live, what you love, and what this event means to you — then build something unmistakably yours." },
              { icon: "◆", title: "Bespoke by Nature", text: "No two events are the same, because no two clients are the same. Every venue, every design direction, every piece of programming is chosen specifically for you." },
              { icon: "🌍", title: "The World is Your Venue", text: "The finest venues in the world are available — a Tuscan hillside, a yacht deck, a lantern-lit courtyard in Marrakech. You just need the right person to open the door." }
            ].map((p,i) => (
              <div key={i} className="text-center px-4">
                <div className="text-3xl mb-6 text-[#c9a84c]">{p.icon}</div>
                <h3 className="text-lg font-light mb-4 text-[#c9a84c] tracking-wide">{p.title}</h3>
                <div className="w-8 h-px bg-[#c9a84c]/30 mx-auto mb-4" />
                <p className="text-gray-400 font-light leading-relaxed text-sm">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Avicam */}
      <section className="py-28 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <img src={AVICAM} alt="Avicam Gitlin" className="w-full h-[650px] object-cover object-top"
              onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1507048331197-7d4ac70811cf?w=800&q=80"; }} />
            <div className="absolute bottom-6 left-6 bg-black/75 backdrop-blur-sm border border-[#c9a84c]/30 px-5 py-3">
              <p className="text-[#c9a84c] text-xs tracking-[0.3em]">AVICAM GITLIN</p>
              <p className="text-gray-400 text-xs mt-1">Event Producer · Travel Curator</p>
            </div>
          </div>
          <div>
            <p className="text-[#c9a84c] tracking-[0.4em] text-xs mb-6">THE MAN BEHIND IT ALL</p>
            <h2 className="text-3xl md:text-4xl font-light leading-tight mb-8">Avicam Gitlin</h2>
            <div className="w-10 h-px bg-[#c9a84c]/50 mb-8" />
            <p className="text-gray-400 font-light leading-relaxed mb-6">
              Avicam Gitlin is a private event producer and travel curator with over 15 years of experience creating bespoke celebrations across the world's most spectacular destinations.
            </p>
            <p className="text-gray-400 font-light leading-relaxed mb-10">
              He has produced weddings, Bar and Bat Mitzvahs, fundraising galas, corporate retreats, and milestone celebrations — from New York ballrooms to Greek island estates, from Moroccan riads to Alpine chalets.
            </p>
            <div className="space-y-0">
              {["15+ years producing private events worldwide","Weddings, galas, B'nei Mitzvah & corporate events","Trusted network in 30+ countries","Personally involved in every event","Complete discretion, always"].map((item,i) => (
                <div key={i} className="flex items-center gap-4 py-3 border-b border-[#c9a84c]/10">
                  <span className="text-[#c9a84c] text-xs">→</span>
                  <span className="text-gray-400 text-sm font-light">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-24 px-6 text-center bg-[#0d0d0d]">
        <div className="max-w-3xl mx-auto">
          <div className="text-[#c9a84c] text-5xl font-light mb-6">"</div>
          <p className="text-2xl md:text-3xl font-light leading-relaxed text-gray-300 italic mb-8">
            Each event is a new and exciting opportunity to create something extraordinary — and a privilege I never take for granted.
          </p>
          <div className="w-10 h-px bg-[#c9a84c] mx-auto mb-6" />
          <p className="text-[#c9a84c] tracking-[0.4em] text-xs">— AVICAM GITLIN</p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 px-6 text-center">
        <div className="max-w-xl mx-auto">
          <p className="text-[#c9a84c] tracking-[0.4em] text-xs mb-6">WORK WITH AVICAM</p>
          <h2 className="text-4xl font-light mb-8">Let's Create Something Together</h2>
          <div className="w-10 h-px bg-[#c9a84c] mx-auto mb-8" />
          <p className="text-gray-400 font-light mb-10">Whether you have a clear vision or just a feeling, Avicam would love to hear from you.</p>
          <Link to="/contact" className="inline-block px-12 py-5 bg-[#c9a84c] text-black text-xs tracking-[0.3em] hover:bg-[#e0c070] transition-colors font-semibold">GET IN TOUCH</Link>
        </div>
      </section>

      <Footer />
      <ChatWidget />
    </div>
  );
}
