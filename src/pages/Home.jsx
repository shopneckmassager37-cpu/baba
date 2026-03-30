import { Link } from "react-router-dom";

const LOGO = "https://media.base44.com/images/public/69caab40b61d6ee7c5b75332/9d7fead75_generated_image.png";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white" style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/95 backdrop-blur-md border-b border-[#c9a84c]/20">
        <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3">
            <img src={LOGO} alt="Avicam Gitlin" className="h-12 w-12 object-contain" />
            <span className="text-xl tracking-[0.25em] text-[#c9a84c] font-light hidden sm:block">AVICAM GITLIN</span>
          </Link>
          <div className="hidden md:flex gap-8 text-xs tracking-[0.2em] text-gray-300">
            <Link to="/" className="hover:text-[#c9a84c] transition-colors">HOME</Link>
            <Link to="/services" className="hover:text-[#c9a84c] transition-colors">SERVICES</Link>
            <Link to="/experiences" className="hover:text-[#c9a84c] transition-colors">EXPERIENCES</Link>
            <Link to="/about" className="hover:text-[#c9a84c] transition-colors">ABOUT</Link>
            <Link to="/gallery" className="hover:text-[#c9a84c] transition-colors">GALLERY</Link>
            <Link to="/contact" className="hover:text-[#c9a84c] transition-colors">CONTACT</Link>
          </div>
          <Link to="/contact" className="hidden md:block px-5 py-2 border border-[#c9a84c] text-[#c9a84c] text-xs tracking-[0.2em] hover:bg-[#c9a84c]/10 transition-colors">
            INQUIRE
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1920&q=80')` }} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/45 to-[#0a0a0a]" />
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <p className="text-[#c9a84c] tracking-[0.6em] text-xs mb-6 font-light">PRIVATE EVENTS · BESPOKE EXPERIENCES · WORLDWIDE</p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light leading-tight mb-8 tracking-wide">
            Your Moment.<br />
            <span className="text-[#c9a84c] italic">Crafted to Perfection.</span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl font-light leading-relaxed mb-12 max-w-2xl mx-auto">
            Intimate private gatherings, destination celebrations, and extraordinary culinary experiences —
            designed exclusively for those who demand the remarkable.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="px-10 py-4 bg-[#c9a84c] text-black text-xs tracking-[0.3em] hover:bg-[#e0c070] transition-colors font-semibold">
              BEGIN YOUR JOURNEY
            </Link>
            <Link to="/services" className="px-10 py-4 border border-white/40 text-white text-xs tracking-[0.3em] hover:border-[#c9a84c] hover:text-[#c9a84c] transition-colors">
              EXPLORE SERVICES
            </Link>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-gray-500 text-xs tracking-widest">SCROLL</span>
          <div className="w-px h-12 bg-gradient-to-b from-[#c9a84c] to-transparent" />
        </div>
      </section>

      {/* Marquee strip */}
      <div className="bg-[#c9a84c] py-3 overflow-hidden">
        <div className="flex gap-12 animate-pulse">
          {["Destination Weddings", "Private Dining", "Corporate Retreats", "Villa Programs", "Culinary Journeys", "Sailing Charters", "Heritage Tours", "Milestone Celebrations"].map((t, i) => (
            <span key={i} className="text-black text-xs tracking-[0.3em] whitespace-nowrap px-6">✦ {t.toUpperCase()}</span>
          ))}
        </div>
      </div>

      {/* Intro */}
      <section className="py-28 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-[#c9a84c] tracking-[0.5em] text-xs mb-8">THE AVICAM GITLIN DIFFERENCE</p>
          <h2 className="text-3xl md:text-5xl font-light leading-relaxed text-white mb-10">
            Every event is a once-in-a-lifetime experience.<br />
            <span className="text-gray-500">We treat it that way.</span>
          </h2>
          <div className="w-16 h-px bg-[#c9a84c] mx-auto mb-10" />
          <p className="text-gray-400 text-lg font-light leading-relaxed max-w-3xl mx-auto">
            With over a decade crafting bespoke private events across the world's most spectacular destinations,
            Avicam Gitlin brings unmatched culinary expertise, impeccable discretion, and a deeply personal touch
            to every celebration — from intimate private dinners to grand destination events.
          </p>
        </div>
      </section>

      {/* Services Preview */}
      <section className="pb-20 px-6 bg-[#0d0d0d]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 pt-20">
            <p className="text-[#c9a84c] tracking-[0.4em] text-xs mb-4">WHAT WE OFFER</p>
            <h2 className="text-3xl md:text-4xl font-light">Signature Services</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
            {[
              {
                title: "Destination Events",
                desc: "Celebrate life's greatest milestones in the world's most breathtaking settings — Tuscany, Greek islands, Swiss Alps, and beyond.",
                img: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80",
              },
              {
                title: "Private Dining",
                desc: "Restaurant-quality execution in the intimacy of your villa, home, or exclusive venue. Chef-led, fully personalised.",
                img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
              },
              {
                title: "Culinary Retreats",
                desc: "Chef-led journeys where cooking, culture, and extraordinary destinations come together for an unforgettable experience.",
                img: "https://images.unsplash.com/photo-1507048331197-7d4ac70811cf?w=800&q=80",
              }
            ].map((s, i) => (
              <Link key={i} to="/services" className="group relative overflow-hidden block" style={{ height: "460px" }}>
                <img src={s.img} alt={s.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-light tracking-wide mb-3">{s.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4 font-light">{s.desc}</p>
                  <span className="text-[#c9a84c] text-xs tracking-[0.3em] border-b border-[#c9a84c]/40 pb-1">EXPLORE →</span>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/services" className="inline-block px-10 py-4 border border-[#c9a84c]/40 text-[#c9a84c] text-xs tracking-[0.3em] hover:bg-[#c9a84c]/10 transition-colors">
              VIEW ALL SERVICES
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 px-6 border-y border-[#c9a84c]/10">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { num: "15+", label: "Years of Excellence" },
            { num: "500+", label: "Events Worldwide" },
            { num: "30+", label: "Destinations" },
            { num: "100%", label: "Bespoke Service" }
          ].map((s, i) => (
            <div key={i}>
              <div className="text-4xl md:text-5xl text-[#c9a84c] font-light mb-2">{s.num}</div>
              <div className="text-gray-500 text-xs tracking-[0.3em]">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Global Destinations */}
      <section className="py-28 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div>
            <p className="text-[#c9a84c] tracking-[0.4em] text-xs mb-6">GLOBAL REACH</p>
            <h2 className="text-3xl md:text-4xl font-light leading-tight mb-8">
              From Alpine villas to<br />Mediterranean coastlines —<br />
              <span className="text-gray-500">the world is your venue.</span>
            </h2>
            <p className="text-gray-400 font-light leading-relaxed mb-10">
              We've curated extraordinary events in Tuscany, the Greek Isles, Morocco, the Caribbean, Montana, Croatia, and beyond.
              Wherever you envision your celebration, we bring the expertise, the team, and the magic.
            </p>
            <div className="grid grid-cols-2 gap-3 mb-10 text-xs text-gray-400 tracking-wide">
              {["Italy · Tuscany", "Greece · All Isles", "Morocco", "USA · Montana", "Croatia · Adriatic", "Swiss Alps", "Caribbean", "Israel & Beyond"].map((d, i) => (
                <div key={i} className="flex items-center gap-2"><span className="text-[#c9a84c]">→</span>{d}</div>
              ))}
            </div>
            <Link to="/experiences" className="inline-block px-8 py-3 border border-[#c9a84c] text-[#c9a84c] text-xs tracking-[0.2em] hover:bg-[#c9a84c]/10 transition-colors">
              VIEW ALL EXPERIENCES
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80" alt="Alps" className="w-full h-60 object-cover" />
            <img src="https://images.unsplash.com/photo-1533105079780-92b9be482077?w=600&q=80" alt="Greece" className="w-full h-60 object-cover mt-8" />
            <img src="https://images.unsplash.com/photo-1539020140153-e479b8c22e70?w=600&q=80" alt="Morocco" className="w-full h-60 object-cover" />
            <img src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=600&q=80" alt="Mountains" className="w-full h-60 object-cover mt-8" />
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
              { quote: "Avicam transformed our family gathering in Tuscany into something none of us will ever forget. Every single detail was perfection.", name: "Rachel & Daniel M.", event: "Private Villa Celebration, Italy" },
              { quote: "The private dining experience he created for our anniversary was beyond anything we could have imagined. Truly world-class.", name: "Jonathan K.", event: "Private Dinner, Greek Isles" },
              { quote: "Our destination celebration was flawlessly executed. Avicam's dedication to perfection was evident in every single moment.", name: "Sarah & Michael B.", event: "Destination Event, Tuscany" }
            ].map((t, i) => (
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

      {/* Full-bleed CTA */}
      <section className="relative py-36 px-6 text-center overflow-hidden" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1510076857177-7470076d4098?w=1920&q=80')", backgroundSize: "cover", backgroundAttachment: "fixed", backgroundPosition: "center" }}>
        <div className="absolute inset-0 bg-black/72" />
        <div className="relative z-10 max-w-2xl mx-auto">
          <p className="text-[#c9a84c] tracking-[0.5em] text-xs mb-6">LET'S CREATE TOGETHER</p>
          <h2 className="text-4xl md:text-6xl font-light mb-8">Ready to Begin?</h2>
          <div className="w-12 h-px bg-[#c9a84c] mx-auto mb-8" />
          <p className="text-gray-300 font-light leading-relaxed mb-12 text-lg">
            Every extraordinary event starts with a conversation. Tell us your vision — we'll craft something truly unforgettable.
          </p>
          <Link to="/contact" className="inline-block px-14 py-5 bg-[#c9a84c] text-black text-xs tracking-[0.4em] hover:bg-[#e0c070] transition-colors font-semibold">
            START THE CONVERSATION
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#070707] border-t border-[#c9a84c]/15 pt-16 pb-8 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <img src={LOGO} alt="Avicam Gitlin" className="h-16 w-16 object-contain mb-4" />
              <p className="text-[#c9a84c] text-lg tracking-[0.3em] font-light mb-3">AVICAM GITLIN</p>
              <p className="text-gray-500 text-sm font-light leading-relaxed max-w-xs">
                Bespoke private events and extraordinary culinary experiences, crafted for discerning individuals worldwide.
              </p>
            </div>
            <div>
              <p className="text-gray-500 text-xs tracking-[0.3em] mb-4">NAVIGATION</p>
              <div className="space-y-2">
                {[["Home", "/"], ["Services", "/services"], ["Experiences", "/experiences"], ["About", "/about"], ["Gallery", "/gallery"], ["Contact", "/contact"]].map(([l, h]) => (
                  <div key={l}><Link to={h} className="text-gray-400 text-sm font-light hover:text-[#c9a84c] transition-colors">{l}</Link></div>
                ))}
              </div>
            </div>
            <div>
              <p className="text-gray-500 text-xs tracking-[0.3em] mb-4">CONTACT</p>
              <div className="space-y-3 text-gray-400 text-sm font-light">
                <p>+1 (347) 994-9284</p>
                <p>avicam@kosherculinarytravel.com</p>
                <p>New York · Worldwide</p>
              </div>
            </div>
          </div>
          <div className="border-t border-[#c9a84c]/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 text-xs tracking-wide">© 2025 Avicam Gitlin Private Events. All rights reserved.</p>
            <p className="text-gray-700 text-xs tracking-wide">Crafted Worldwide</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
