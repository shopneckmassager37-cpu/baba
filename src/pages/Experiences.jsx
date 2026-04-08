import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import ChatWidget from "./ChatWidget";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

const experiences = [
  {
    region: "ITALY & TUSCANY",
    title: "Summer in Italy",
    emoji: "",
    description: "Private villas, sun-drenched landscapes, and regionally inspired cuisine — experience Italy at a slower, more beautiful pace. Days unfold naturally: morning espresso overlooking vineyards, afternoons by the pool, evenings around a long table.",
    highlights: ["Private villa & boutique estate stays", "Market visits & countryside excursions", "Chef-led cooking evenings", "Coastal day trips & local wine tastings", "Shabbat & holiday programs available"],
    img: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=900&q=80",
    mood: "Refined simplicity. Effortless beauty."
  },
  {
    region: "MEDITERRANEAN",
    title: "Private Sailing Journeys",
    emoji: "",
    description: "Private sailing charters through crystal-clear waters — wake up each day somewhere new and unforgettable. Cruise between Greek islands or along Croatia's iconic coastline, with swimming stops, secluded coves, and vibrant ports.",
    highlights: ["Private yacht charters", "Greek Islands & Adriatic Sea routes", "Professional chef onboard", "Curated menus & flexible itineraries", "Perfect for couples, families & small groups"],
    img: "https://images.unsplash.com/photo-1493854994231-2d87b09e3890?w=900&q=80",
    mood: "Freedom. Privacy. Endless horizons."
  },
  {
    region: "USA · MONTANA & WYOMING",
    title: "Ranch & Glamping",
    emoji: "",
    description: "Wide-open skies, private ranches, and elevated outdoor living — nature, comfort, and calm in perfect balance. Montana and Wyoming offer rugged beauty with refined hospitality, guided hikes, horseback riding, and fireside dinners.",
    highlights: ["Private ranch estate & luxury tented camps", "Guided hikes & horseback adventures", "Chef-led BBQs & fireside dinners", "Panoramic mountain views", "Ideal for families seeking connection"],
    img: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=900&q=80",
    mood: "Adventure meets luxury."
  },
  {
    region: "MOROCCO & AFRICA",
    title: "Desert & Medina Adventures",
    emoji: "",
    description: "Ancient medinas, desert dunes, and rich cultural history — an immersive journey of color, culture, and cuisine. These journeys blend historic communities, vibrant markets, and private kasbah retreats with refined cuisine inspired by local flavors.",
    highlights: ["Private kasbah & riad retreats", "Desert dune experiences", "Expert cultural guides", "Chef-prepared locally-inspired cuisine", "Sensory-rich storytelling journeys"],
    img: "https://images.unsplash.com/photo-1539020140153-e479b8c22e70?w=900&q=80",
    mood: "Depth. Color. Unforgettable stories."
  },
  {
    region: "GREECE & THE ISLES",
    title: "Greek Island Retreats",
    emoji: "",
    description: "From the whitewashed villages of Santorini to the lush landscapes of Corfu, our Greek island programs are built around private villas with sea views, leisurely days, and evenings that feel like they could last forever.",
    highlights: ["Private island villa stays", "Curated island-hopping itineraries", "Fresh seafood & gourmet dinners", "Boat day trips to hidden coves", "Celebration & wedding packages available"],
    img: "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=900&q=80",
    mood: "Light, sea, and timeless beauty."
  },
  {
    region: "HERITAGE JOURNEYS",
    title: "Poland & Lithuania Heritage Tours",
    emoji: "",
    description: "A powerful journey through history, memory, and renewal. Travelers visit historic sites, cultural landmarks, and communities with expert educators — balanced with comfortable accommodations and thoughtfully prepared meals.",
    highlights: ["Expert historian & educator guides", "Historic sites & cultural landmarks", "Thoughtfully curated group programs", "Meaningful and educational pacing", "Ideal for families & heritage groups"],
    img: "https://images.unsplash.com/photo-1548013146-72479768bada?w=900&q=80",
    mood: "Understanding. Connection. Memory."
  }
];

export default function Experiences() {
  return (
    <div className="min-h-screen bg-[#0f0e0c] text-[#e8e2d9]" style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}>
      <ScrollToTop />
      <Navbar active="EXPERIENCES" />

      {/* Hero */}
      <section className="relative pt-36 pb-28 px-6 text-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1920&q=80')", backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/55 to-[#0f0e0c]" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <p className="text-[#c9a84c] tracking-[0.6em] text-xs mb-6">WHERE WE GO</p>
          <h1 className="text-5xl md:text-7xl font-light mb-8 leading-tight">Destinations &<br /><span className="italic text-[#c9a84c]">Experiences</span></h1>
          <div className="w-16 h-px bg-[#c9a84c]/60 mx-auto mb-8" />
          <p className="text-gray-300 text-lg font-light leading-relaxed max-w-2xl mx-auto">
            Each destination is chosen not only for its beauty, but for what it awakens —
            a sense of wonder, connection, and the pleasure of being fully alive in a magnificent place.
          </p>
        </div>
      </section>

      {/* Experiences */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto space-y-28">
          {experiences.map((exp, i) => (
            <div key={i} className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
              {i % 2 === 0 ? (
                <>
                  <div className="overflow-hidden">
                    <img src={exp.img} alt={exp.title} className="w-full h-[480px] object-cover hover:scale-105 transition-transform duration-700" />
                  </div>
                  <div>
                    <p className="text-[#c9a84c] tracking-[0.5em] text-xs mb-3">{exp.region}</p>
                    <h2 className="text-3xl md:text-4xl font-light mb-2">{exp.title}</h2>
                    <p className="text-gray-600 italic text-sm mb-6">"{exp.mood}"</p>
                    <div className="w-10 h-px bg-[#c9a84c]/40 mb-6" />
                    <p className="text-gray-400 font-light leading-relaxed mb-8">{exp.description}</p>
                    <ul className="space-y-2 mb-8">
                      {exp.highlights.map((h, j) => (
                        <li key={j} className="flex items-center gap-3 text-gray-300 text-sm font-light">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#c9a84c] flex-shrink-0" />{h}
                        </li>
                      ))}
                    </ul>
                    <Link to="/contact" className="inline-block px-8 py-3 border border-[#c9a84c] text-[#c9a84c] text-xs tracking-[0.2em] hover:bg-[#c9a84c]/10 transition-colors">PLAN THIS EXPERIENCE</Link>
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <p className="text-[#c9a84c] tracking-[0.5em] text-xs mb-3">{exp.region}</p>
                    <h2 className="text-3xl md:text-4xl font-light mb-2">{exp.title}</h2>
                    <p className="text-gray-600 italic text-sm mb-6">"{exp.mood}"</p>
                    <div className="w-10 h-px bg-[#c9a84c]/40 mb-6" />
                    <p className="text-gray-400 font-light leading-relaxed mb-8">{exp.description}</p>
                    <ul className="space-y-2 mb-8">
                      {exp.highlights.map((h, j) => (
                        <li key={j} className="flex items-center gap-3 text-gray-300 text-sm font-light">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#c9a84c] flex-shrink-0" />{h}
                        </li>
                      ))}
                    </ul>
                    <Link to="/contact" className="inline-block px-8 py-3 border border-[#c9a84c] text-[#c9a84c] text-xs tracking-[0.2em] hover:bg-[#c9a84c]/10 transition-colors">PLAN THIS EXPERIENCE</Link>
                  </div>
                  <div className="overflow-hidden">
                    <img src={exp.img} alt={exp.title} className="w-full h-[480px] object-cover hover:scale-105 transition-transform duration-700" />
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-20 px-6 bg-[#0d0d0d] text-center">
        <div className="max-w-5xl mx-auto">
          <p className="text-[#c9a84c] tracking-[0.4em] text-xs mb-4">WORLDWIDE REACH</p>
          <h2 className="text-3xl font-light mb-12">30+ Destinations. One Standard of Excellence.</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-gray-400 text-sm">
            {["Italy · Tuscany", "Greece · All Isles", "Morocco · Marrakech", "USA · Montana", "France · Riviera", "Croatia · Dalmatia", "Switzerland · Alps", "Caribbean · Islands"].map((d, i) => (
              <div key={i} className="border border-[#c9a84c]/20 py-4 px-3 text-xs tracking-wide hover:border-[#c9a84c]/50 hover:text-[#c9a84c] transition-colors">{d}</div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <ChatWidget />
    </div>
  );
}
