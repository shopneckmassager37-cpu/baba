import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-['Georgia',serif]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-[#c9a84c]/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link to="/" className="text-2xl tracking-[0.3em] text-[#c9a84c] font-light">AVICAM GITLIN</Link>
          <div className="hidden md:flex gap-8 text-sm tracking-[0.2em] text-gray-300">
            <Link to="/" className="hover:text-[#c9a84c] transition-colors">HOME</Link>
            <Link to="/services" className="hover:text-[#c9a84c] transition-colors">SERVICES</Link>
            <Link to="/experiences" className="hover:text-[#c9a84c] transition-colors">EXPERIENCES</Link>
            <Link to="/about" className="hover:text-[#c9a84c] transition-colors">ABOUT</Link>
            <Link to="/gallery" className="hover:text-[#c9a84c] transition-colors">GALLERY</Link>
            <Link to="/contact" className="hover:text-[#c9a84c] transition-colors">CONTACT</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1920&q=80')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-[#0a0a0a]" />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <p className="text-[#c9a84c] tracking-[0.5em] text-sm mb-6 font-light">PRIVATE EVENTS · BESPOKE EXPERIENCES</p>
          <h1 className="text-5xl md:text-7xl font-light leading-tight mb-8 tracking-wide">
            Your Moment.<br />
            <span className="text-[#c9a84c]">Crafted to Perfection.</span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl font-light leading-relaxed mb-12 max-w-2xl mx-auto">
            Intimate gatherings, destination celebrations, and unforgettable private events — 
            designed exclusively for discerning individuals who demand the extraordinary.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-10 py-4 bg-[#c9a84c] text-black text-sm tracking-[0.3em] hover:bg-[#e0c070] transition-colors font-medium"
            >
              BEGIN YOUR JOURNEY
            </Link>
            <Link
              to="/services"
              className="px-10 py-4 border border-[#c9a84c] text-[#c9a84c] text-sm tracking-[0.3em] hover:bg-[#c9a84c]/10 transition-colors"
            >
              EXPLORE SERVICES
            </Link>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-px h-16 bg-gradient-to-b from-[#c9a84c] to-transparent mx-auto" />
        </div>
      </section>

      {/* Intro Strip */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-[#c9a84c] tracking-[0.4em] text-sm mb-6">THE AVICAM GITLIN DIFFERENCE</p>
          <h2 className="text-3xl md:text-5xl font-light leading-relaxed text-white mb-8">
            Every event is a once-in-a-lifetime experience.<br />
            <span className="text-gray-400">We treat it that way.</span>
          </h2>
          <p className="text-gray-400 text-lg font-light leading-relaxed max-w-3xl mx-auto">
            With over a decade of crafting bespoke private events across the world's most spectacular destinations, 
            Avicam Gitlin brings unmatched culinary expertise, impeccable service, and a deeply personal touch 
            to every celebration — from intimate private dinners to grand destination events.
          </p>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 px-6 bg-[#111111]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#c9a84c] tracking-[0.4em] text-sm mb-4">WHAT WE OFFER</p>
            <h2 className="text-3xl md:text-4xl font-light">Signature Services</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
            {[
              {
                title: "Destination Weddings",
                desc: "Celebrate your love story in the world's most breathtaking settings — from Tuscany villas to Greek island shores.",
                img: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80",
                link: "/services"
              },
              {
                title: "Private Dining Events",
                desc: "Restaurant-level execution in the intimacy of your own villa, home, or exclusive venue — anywhere in the world.",
                img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
                link: "/services"
              },
              {
                title: "Bar & Bat Mitzvahs",
                desc: "A milestone celebration deserves perfection. We handle every detail so you can be fully present for the moment.",
                img: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=800&q=80",
                link: "/services"
              }
            ].map((s, i) => (
              <Link key={i} to={s.link} className="group relative overflow-hidden block" style={{ height: "420px" }}>
                <img src={s.img} alt={s.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-xl font-light tracking-wide mb-3">{s.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4 font-light">{s.desc}</p>
                  <span className="text-[#c9a84c] text-xs tracking-[0.3em]">EXPLORE →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Strip */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[#c9a84c] tracking-[0.4em] text-sm mb-6">GLOBAL REACH</p>
            <h2 className="text-3xl md:text-4xl font-light leading-tight mb-8">
              From Alpine villas to<br />Mediterranean coastlines
            </h2>
            <p className="text-gray-400 font-light leading-relaxed mb-8">
              We've curated extraordinary private events in Tuscany, the Greek Isles, Morocco, the Caribbean, 
              and beyond. Wherever you envision your celebration, we bring the expertise, the team, 
              and the magic — right to your chosen destination.
            </p>
            <div className="grid grid-cols-2 gap-6 mb-10">
              {[
                { num: "15+", label: "Years of Experience" },
                { num: "500+", label: "Events Worldwide" },
                { num: "30+", label: "Destinations" },
                { num: "100%", label: "Bespoke Service" }
              ].map((stat, i) => (
                <div key={i} className="border-l border-[#c9a84c]/40 pl-4">
                  <div className="text-3xl text-[#c9a84c] font-light">{stat.num}</div>
                  <div className="text-gray-500 text-sm tracking-wide mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
            <Link to="/experiences" className="inline-block px-8 py-3 border border-[#c9a84c] text-[#c9a84c] text-sm tracking-[0.2em] hover:bg-[#c9a84c]/10 transition-colors">
              VIEW ALL EXPERIENCES
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80" alt="Tuscany" className="w-full h-64 object-cover" />
            <img src="https://images.unsplash.com/photo-1533105079780-92b9be482077?w=600&q=80" alt="Greece" className="w-full h-64 object-cover mt-8" />
            <img src="https://images.unsplash.com/photo-1548013146-72479768bada?w=600&q=80" alt="Morocco" className="w-full h-64 object-cover" />
            <img src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=600&q=80" alt="Alps" className="w-full h-64 object-cover mt-8" />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 bg-[#111111]">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-[#c9a84c] tracking-[0.4em] text-sm mb-6">KIND WORDS</p>
          <h2 className="text-3xl md:text-4xl font-light mb-16">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "Avicam transformed our family gathering in Tuscany into something none of us will ever forget. Every detail was perfect.",
                name: "Rachel & Daniel M.",
                event: "Private Villa Celebration, Italy"
              },
              {
                quote: "The private dining experience he created for our anniversary was beyond anything we could have imagined. Truly world-class.",
                name: "Jonathan K.",
                event: "Private Dinner, Greek Isles"
              },
              {
                quote: "Our destination wedding was flawlessly executed. Avicam's dedication to perfection was evident in every single moment.",
                name: "Sarah & Michael B.",
                event: "Destination Wedding, Tuscany"
              }
            ].map((t, i) => (
              <div key={i} className="border border-[#c9a84c]/20 p-8">
                <div className="text-[#c9a84c] text-3xl mb-4">"</div>
                <p className="text-gray-400 font-light leading-relaxed mb-6 italic">{t.quote}</p>
                <div className="border-t border-[#c9a84c]/20 pt-4">
                  <p className="text-white text-sm">{t.name}</p>
                  <p className="text-[#c9a84c] text-xs tracking-wide mt-1">{t.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="relative py-32 px-6 text-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1510076857177-7470076d4098?w=1920&q=80')", backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 max-w-2xl mx-auto">
          <p className="text-[#c9a84c] tracking-[0.4em] text-sm mb-6">LET'S CREATE TOGETHER</p>
          <h2 className="text-4xl md:text-5xl font-light mb-8">Ready to Begin?</h2>
          <p className="text-gray-300 font-light leading-relaxed mb-10">
            Every extraordinary event starts with a conversation. Tell us your vision, 
            and we'll craft something truly unforgettable.
          </p>
          <Link to="/contact" className="inline-block px-12 py-5 bg-[#c9a84c] text-black text-sm tracking-[0.3em] hover:bg-[#e0c070] transition-colors font-medium">
            START THE CONVERSATION
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0a0a0a] border-t border-[#c9a84c]/20 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-[#c9a84c] text-xl tracking-[0.3em] font-light">AVICAM GITLIN</div>
          <div className="flex gap-8 text-sm text-gray-500 tracking-[0.2em]">
            <Link to="/services" className="hover:text-[#c9a84c] transition-colors">SERVICES</Link>
            <Link to="/experiences" className="hover:text-[#c9a84c] transition-colors">EXPERIENCES</Link>
            <Link to="/about" className="hover:text-[#c9a84c] transition-colors">ABOUT</Link>
            <Link to="/contact" className="hover:text-[#c9a84c] transition-colors">CONTACT</Link>
          </div>
          <div className="text-gray-600 text-xs tracking-wide">
            © 2025 Avicam Gitlin Private Events
          </div>
        </div>
      </footer>
    </div>
  );
}
