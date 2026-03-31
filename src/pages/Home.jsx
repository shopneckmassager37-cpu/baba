import ChatWidget from "./ChatWidget";
import { Link } from "react-router-dom";

const LOGO = "https://media.base44.com/images/public/69caab40b61d6ee7c5b75332/9d7fead75_generated_image.png";
const AVICAM = "https://base44.app/api/apps/69caab40b61d6ee7c5b75332/files/mp/public/69caab40b61d6ee7c5b75332/129dab6d3_avicam_photo.jpg";

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
          {NAV.map(([l,h]) => (
            <Link key={l} to={h} className={`hover:text-[#c9a84c] transition-colors ${active===l?"text-[#c9a84c]":""}`}>{l}</Link>
          ))}
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
              {NAV.map(([l,h]) => (
                <Link key={l} to={h} className="text-gray-400 text-sm font-light hover:text-[#c9a84c] transition-colors">{l}</Link>
              ))}
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

export { Navbar, Footer };

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white" style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}>
      <Navbar active="HOME" />

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1920&q=80')` }} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/45 to-[#0a0a0a]" />
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <p className="text-[#c9a84c] tracking-[0.6em] text-xs mb-6 font-light">PRIVATE EVENTS · BESPOKE CELEBRATIONS · WORLDWIDE</p>
          <h1 className="text-5xl md:text-7xl font-light leading-tight mb-8 tracking-wide">
            Your Moment.<br /><span className="text-[#c9a84c] italic">Crafted to Perfection.</span>
          </h1>
          <p className="text-gray-300 text-lg font-light leading-relaxed mb-12 max-w-2xl mx-auto">
            Weddings, milestone celebrations, corporate events, and VIP gatherings —
            designed exclusively for those who demand the extraordinary.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="px-10 py-4 bg-[#c9a84c] text-black text-xs tracking-[0.3em] hover:bg-[#e0c070] transition-colors font-semibold">BEGIN YOUR JOURNEY</Link>
            <Link to="/events" className="px-10 py-4 border border-white/40 text-white text-xs tracking-[0.3em] hover:border-[#c9a84c] hover:text-[#c9a84c] transition-colors">EXPLORE EVENTS</Link>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-gray-500 text-xs tracking-widest">SCROLL</span>
          <div className="w-px h-12 bg-gradient-to-b from-[#c9a84c] to-transparent" />
        </div>
      </section>

      {/* Gold strip */}
      <div className="bg-[#c9a84c] py-3 overflow-hidden whitespace-nowrap">
        <div className="inline-flex">
          {["Weddings","Bar & Bat Mitzvahs","Fundraising Galas","Corporate Events","VIP Experiences","Milestone Celebrations","Sailing Events","Heritage Journeys"].map((t,i) => (
            <span key={i} className="text-black text-xs tracking-[0.3em] whitespace-nowrap px-8">✦ {t.toUpperCase()}</span>
          ))}
        </div>
      </div>

      {/* Intro */}
      <section className="py-28 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-[#c9a84c] tracking-[0.5em] text-xs mb-8">THE AVICAM GITLIN DIFFERENCE</p>
          <h2 className="text-3xl md:text-5xl font-light leading-relaxed mb-10">
            Every event is once-in-a-lifetime.<br /><span className="text-gray-500">We treat it that way.</span>
          </h2>
          <div className="w-16 h-px bg-[#c9a84c] mx-auto mb-10" />
          <p className="text-gray-400 text-lg font-light leading-relaxed max-w-3xl mx-auto">
            With over a decade producing bespoke private events across the world's most spectacular destinations,
            Avicam Gitlin brings unmatched expertise, impeccable discretion, and a deeply personal touch
            to every celebration.
          </p>
        </div>
      </section>

      {/* Event types grid */}
      <section className="pb-20 px-6 bg-[#0d0d0d]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 pt-20">
            <p className="text-[#c9a84c] tracking-[0.4em] text-xs mb-4">WHAT WE CREATE</p>
            <h2 className="text-3xl md:text-4xl font-light">Private Events of Every Kind</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
            {[
              { title: "Weddings & Celebrations", desc: "Destination weddings and milestone events in the world's most breathtaking settings — Tuscany, Greek islands, Swiss Alps, and beyond.", img: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80" },
              { title: "Galas & Fundraisers", desc: "High-impact fundraising galas, charity events, and VIP evenings that inspire, connect, and leave a lasting impression.", img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80" },
              { title: "Corporate & VIP", desc: "Executive retreats, product launches, incentive trips, and gala evenings — produced at the highest level, anywhere in the world.", img: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80" }
            ].map((s,i) => (
              <Link key={i} to="/events" className="group relative overflow-hidden block" style={{ height: "460px" }}>
                <img src={s.img} alt={s.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-xl font-light tracking-wide mb-3">{s.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4 font-light">{s.desc}</p>
                  <span className="text-[#c9a84c] text-xs tracking-[0.3em] border-b border-[#c9a84c]/40 pb-1">EXPLORE →</span>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/events" className="inline-block px-10 py-4 border border-[#c9a84c]/40 text-[#c9a84c] text-xs tracking-[0.3em] hover:bg-[#c9a84c]/10 transition-colors">VIEW ALL EVENTS</Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 px-6 border-y border-[#c9a84c]/10">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[{num:"15+",label:"Years of Excellence"},{num:"500+",label:"Events Worldwide"},{num:"30+",label:"Destinations"},{num:"100%",label:"Bespoke"}].map((s,i) => (
            <div key={i}>
              <div className="text-4xl md:text-5xl text-[#c9a84c] font-light mb-2">{s.num}</div>
              <div className="text-gray-500 text-xs tracking-[0.3em]">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Meet Avicam */}
      <section className="py-28 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div>
            <p className="text-[#c9a84c] tracking-[0.4em] text-xs mb-6">MEET AVICAM</p>
            <h2 className="text-3xl md:text-4xl font-light leading-tight mb-8">The person behind<br />every extraordinary event.</h2>
            <div className="w-10 h-px bg-[#c9a84c]/50 mb-8" />
            <p className="text-gray-400 font-light leading-relaxed mb-6">
              Avicam Gitlin is a private event producer and travel curator with over 15 years of experience creating bespoke celebrations across the world's most spectacular destinations.
            </p>
            <p className="text-gray-400 font-light leading-relaxed mb-10">
              His philosophy: every event is personal, every detail matters, and the world is your venue. From Alpine chalets to Mediterranean coastlines — wherever you envision your celebration, Avicam makes it happen.
            </p>
            <Link to="/about" className="inline-block px-8 py-3 border border-[#c9a84c] text-[#c9a84c] text-xs tracking-[0.2em] hover:bg-[#c9a84c]/10 transition-colors">MEET AVICAM</Link>
          </div>
          <div className="relative">
            <img src={AVICAM} alt="Avicam Gitlin" className="w-full h-[600px] object-cover object-top" onError={(e)=>{e.target.src="https://images.unsplash.com/photo-1507048331197-7d4ac70811cf?w=800&q=80"}} />
            <div className="absolute bottom-6 left-6 bg-black/70 backdrop-blur-sm border border-[#c9a84c]/30 px-5 py-3">
              <p className="text-[#c9a84c] text-xs tracking-[0.3em]">AVICAM GITLIN</p>
              <p className="text-gray-400 text-xs mt-1">Private Events · Worldwide</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 bg-[#0d0d0d]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#c9a84c] tracking-[0.4em] text-xs mb-4">KIND WORDS</p>
            <h2 className="text-3xl md:text-4xl font-light">What Our Clients Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { quote: "Avicam transformed our wedding in Tuscany into something none of us will ever forget. Every single detail was perfection.", name: "Rachel & Daniel M.", event: "Destination Wedding, Italy" },
              { quote: "The gala he produced for our foundation exceeded every expectation. World-class execution from first meeting to final moment.", name: "Jonathan K.", event: "Fundraising Gala, New York" },
              { quote: "Our Bar Mitzvah celebration was flawlessly produced. Avicam's dedication to perfection was evident in every moment.", name: "Sarah & Michael B.", event: "Bar Mitzvah, Tuscany" }
            ].map((t,i) => (
              <div key={i} className="border border-[#c9a84c]/15 p-8 hover:border-[#c9a84c]/40 transition-colors">
                <div className="text-[#c9a84c] text-4xl mb-4 font-light">"</div>
                <p className="text-gray-400 font-light leading-relaxed mb-8 italic text-sm">{t.quote}</p>
                <div className="border-t border-[#c9a84c]/15 pt-4">
                  <p className="text-white text-sm font-light">{t.name}</p>
                  <p className="text-[#c9a84c] text-xs tracking-wide mt-1">{t.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-36 px-6 text-center overflow-hidden" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1510076857177-7470076d4098?w=1920&q=80')", backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="absolute inset-0 bg-black/72" />
        <div className="relative z-10 max-w-2xl mx-auto">
          <p className="text-[#c9a84c] tracking-[0.5em] text-xs mb-6">LET'S CREATE TOGETHER</p>
          <h2 className="text-4xl md:text-6xl font-light mb-8">Ready to Begin?</h2>
          <div className="w-12 h-px bg-[#c9a84c] mx-auto mb-8" />
          <p className="text-gray-300 font-light leading-relaxed mb-12 text-lg">Every extraordinary event starts with a conversation. Tell us your vision — we'll craft something truly unforgettable.</p>
          <Link to="/contact" className="inline-block px-14 py-5 bg-[#c9a84c] text-black text-xs tracking-[0.4em] hover:bg-[#e0c070] transition-colors font-semibold">START THE CONVERSATION</Link>
        </div>
      </section>

      <Footer />
      <ChatWidget />
    </div>
  );
}
