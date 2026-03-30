import { Link } from "react-router-dom";

const experiences = [
  {
    region: "ITALY & TUSCANY",
    title: "Summer in Italy",
    emoji: "🇮🇹",
    description: "Private villas, sun-drenched landscapes, and regionally inspired cuisine — experience Italy at a slower, more beautiful pace. Days unfold naturally: morning espresso overlooking vineyards, afternoons by the pool, evenings around the table.",
    highlights: ["Private villa & boutique estate stays", "Market visits & countryside excursions", "Chef-led cooking evenings", "Relaxed Shabbat experiences in stunning surroundings", "Coastal day trips & local tastings"],
    img: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=900&q=80",
    mood: "Refined simplicity. Effortless beauty."
  },
  {
    region: "MEDITERRANEAN",
    title: "Private Sailing Journeys",
    emoji: "⛵",
    description: "Private sailing charters through crystal-clear waters — wake up each day somewhere new and unforgettable. Cruise between Greek islands or along Croatia's iconic coastline, with swimming stops, secluded coves, and vibrant ports.",
    highlights: ["Private yacht charters", "Greek Islands & Adriatic Sea routes", "Professional chef onboard", "Curated menus & flexible itineraries", "Couples, families, and small groups"],
    img: "https://images.unsplash.com/photo-1493854994231-2d87b09e3890?w=900&q=80",
    mood: "Freedom. Privacy. Endless horizons."
  },
  {
    region: "USA",
    title: "Ranch & Glamping",
    emoji: "🌄",
    description: "Wide-open skies, private ranches, and elevated outdoor living — nature, comfort, and calm in perfect balance. Montana and Wyoming offer a rare combination of rugged beauty and refined hospitality, with guided hikes, horseback riding, and fireside dinners.",
    highlights: ["Private ranch estate & luxury tented camps", "Guided hikes & horseback adventures", "Chef-led BBQs & fireside dinners", "Panoramic mountain views", "Perfect for families seeking connection"],
    img: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=900&q=80",
    mood: "Adventure meets luxury."
  },
  {
    region: "MOROCCO & AFRICA",
    title: "Desert & Medina Adventures",
    emoji: "🌍",
    description: "Ancient medinas, desert dunes, and rich cultural history — an immersive journey of color, culture, and cuisine. These journeys blend historic communities, vibrant markets, and private kasbah retreats with refined cuisine inspired by local flavors.",
    highlights: ["Private kasbah & riad retreats", "Desert dune experiences", "Expert cultural guides", "Chef-prepared local-inspired cuisine", "Sensory-rich storytelling journeys"],
    img: "https://images.unsplash.com/photo-1539020140153-e479b8c22e70?w=900&q=80",
    mood: "Depth. Color. Unforgettable stories."
  },
  {
    region: "GREECE & THE ISLES",
    title: "Greek Island Retreats",
    emoji: "🏛️",
    description: "From the whitewashed villages of Santorini to the lush landscapes of Corfu, our Greek island programs are built around private villas with sea views, leisurely days, and evenings that feel like they could last forever.",
    highlights: ["Private island villa stays", "Curated island-hopping itineraries", "Local seafood & gourmet dinners", "Boat day trips to hidden coves", "Weddings & celebration packages available"],
    img: "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=900&q=80",
    mood: "Light, sea, and timeless beauty."
  },
  {
    region: "HERITAGE JOURNEYS",
    title: "Poland & Lithuania Heritage Tours",
    emoji: "🕯️",
    description: "A powerful journey through history, memory, and renewal. Travelers visit historic synagogues, cemeteries, and former shtetl communities with expert educators — balanced with comfortable accommodations and thoughtfully prepared meals.",
    highlights: ["Expert historian & educator guides", "Historic synagogues & community sites", "Thoughtfully curated group programs", "Educational & meaningful pacing", "Ideal for families & educational groups"],
    img: "https://images.unsplash.com/photo-1548013146-72479768bada?w=900&q=80",
    mood: "Understanding. Connection. Memory."
  }
];

export default function Experiences() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-['Georgia',serif]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-[#c9a84c]/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link to="/" className="text-2xl tracking-[0.3em] text-[#c9a84c] font-light">AVICAM GITLIN</Link>
          <div className="hidden md:flex gap-8 text-sm tracking-[0.2em] text-gray-300">
            <Link to="/" className="hover:text-[#c9a84c] transition-colors">HOME</Link>
            <Link to="/services" className="hover:text-[#c9a84c] transition-colors">SERVICES</Link>
            <Link to="/experiences" className="text-[#c9a84c]">EXPERIENCES</Link>
            <Link to="/about" className="hover:text-[#c9a84c] transition-colors">ABOUT</Link>
            <Link to="/gallery" className="hover:text-[#c9a84c] transition-colors">GALLERY</Link>
            <Link to="/contact" className="hover:text-[#c9a84c] transition-colors">CONTACT</Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6 text-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1920&q=80')", backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <p className="text-[#c9a84c] tracking-[0.5em] text-sm mb-6">WHERE WE GO</p>
          <h1 className="text-5xl md:text-6xl font-light mb-8">Destinations & Experiences</h1>
          <p className="text-gray-400 text-lg font-light leading-relaxed">
            Each destination is chosen not only for its beauty, but for what it awakens — 
            a sense of wonder, connection, and the pleasure of being fully alive in a magnificent place.
          </p>
        </div>
      </section>

      {/* Experiences Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto space-y-24">
          {experiences.map((exp, i) => (
            <div key={i} className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${i % 2 !== 0 ? "md:flex-row-reverse" : ""}`}>
              {i % 2 !== 0 ? (
                <>
                  <div className="order-1 md:order-2">
                    <img src={exp.img} alt={exp.title} className="w-full h-[450px] object-cover hover:scale-105 transition-transform duration-700" />
                  </div>
                  <div className="order-2 md:order-1">
                    <p className="text-[#c9a84c] tracking-[0.4em] text-xs mb-2">{exp.region}</p>
                    <h2 className="text-3xl md:text-4xl font-light mb-2">{exp.emoji} {exp.title}</h2>
                    <p className="text-gray-600 italic text-sm mb-6">"{exp.mood}"</p>
                    <p className="text-gray-400 font-light leading-relaxed mb-8">{exp.description}</p>
                    <ul className="space-y-2 mb-8">
                      {exp.highlights.map((h, j) => (
                        <li key={j} className="flex items-center gap-3 text-gray-300 text-sm">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#c9a84c] flex-shrink-0" />
                          {h}
                        </li>
                      ))}
                    </ul>
                    <Link to="/contact" className="inline-block px-8 py-3 border border-[#c9a84c] text-[#c9a84c] text-sm tracking-[0.2em] hover:bg-[#c9a84c]/10 transition-colors">
                      PLAN THIS EXPERIENCE
                    </Link>
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <img src={exp.img} alt={exp.title} className="w-full h-[450px] object-cover hover:scale-105 transition-transform duration-700" />
                  </div>
                  <div>
                    <p className="text-[#c9a84c] tracking-[0.4em] text-xs mb-2">{exp.region}</p>
                    <h2 className="text-3xl md:text-4xl font-light mb-2">{exp.emoji} {exp.title}</h2>
                    <p className="text-gray-600 italic text-sm mb-6">"{exp.mood}"</p>
                    <p className="text-gray-400 font-light leading-relaxed mb-8">{exp.description}</p>
                    <ul className="space-y-2 mb-8">
                      {exp.highlights.map((h, j) => (
                        <li key={j} className="flex items-center gap-3 text-gray-300 text-sm">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#c9a84c] flex-shrink-0" />
                          {h}
                        </li>
                      ))}
                    </ul>
                    <Link to="/contact" className="inline-block px-8 py-3 border border-[#c9a84c] text-[#c9a84c] text-sm tracking-[0.2em] hover:bg-[#c9a84c]/10 transition-colors">
                      PLAN THIS EXPERIENCE
                    </Link>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Map strip */}
      <section className="py-16 px-6 bg-[#111111] text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#c9a84c] tracking-[0.4em] text-sm mb-4">WHERE WE'VE BEEN</p>
          <h2 className="text-3xl font-light mb-8">30+ Destinations. One Standard of Excellence.</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-gray-400 text-sm">
            {["Italy · Tuscany", "Greece · All Isles", "Morocco · Marrakech", "USA · Montana", "France · Riviera", "Croatia · Dalmatia", "Israel · Jerusalem", "Caribbean · All Islands"].map((dest, i) => (
              <div key={i} className="border border-[#c9a84c]/20 py-4 px-2 hover:border-[#c9a84c]/50 transition-colors">
                {dest}
              </div>
            ))}
          </div>
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
          <div className="text-gray-600 text-xs tracking-wide">© 2025 Avicam Gitlin Private Events</div>
        </div>
      </footer>
    </div>
  );
}
