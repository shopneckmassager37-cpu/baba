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
    title: "Events in Italy",
    emoji: "",
    description: "Sun-drenched villas, rolling vineyards, and the timeless elegance of Tuscany — the perfect backdrop for weddings, milestone celebrations, and intimate private events. Every detail is curated to reflect the beauty of the setting.",
    highlights: ["Private villa & estate event venues", "Bespoke event design & production", "Private chef & catering services", "Wedding & celebration packages", "Full guest accommodation coordination"],
    img: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=900&q=80",
    mood: "Refined elegance. Effortless beauty."
  },
  {
    region: "USA · NEW YORK & BEYOND",
    title: "Grand Galas & Fundraisers",
    emoji: "",
    description: "From New York ballrooms to California estates, we produce high-impact galas, fundraising events, and corporate celebrations across the United States. World-class production, compelling atmosphere, and flawless execution.",
    highlights: ["Ballroom & estate venue sourcing", "Full gala production & design", "Auction & donor engagement programs", "Entertainment & keynote coordination", "Perfect for organisations & private clients"],
    img: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=900&q=80",
    mood: "Impact. Elegance. Unforgettable evenings."
  },
  {
    region: "USA · MONTANA & WYOMING",
    title: "Ranch & Outdoor Events",
    emoji: "",
    description: "Wide-open skies, private ranches, and elevated outdoor celebrations — nature, comfort, and elegance in perfect balance. Montana and Wyoming offer stunning venues for intimate gatherings, milestone celebrations, and private dinners under the stars.",
    highlights: ["Private ranch estate celebrations", "Outdoor event design & production", "Chef-led dinners & fireside feasts", "Panoramic mountain venue settings", "Ideal for family celebrations & reunions"],
    img: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=900&q=80",
    mood: "Adventure meets elegance."
  },
  {
    region: "MOROCCO",
    title: "Events in Morocco",
    emoji: "",
    description: "Ancient medinas, lantern-lit courtyards, and private kasbahs — Morocco offers an extraordinary setting for private events. From intimate celebrations in a Marrakech riad to grand gatherings in a desert estate, the atmosphere is unmatched.",
    highlights: ["Private kasbah & riad event venues", "Bespoke event design & décor", "Private chef & local cuisine", "Full event production & logistics", "Unique celebration atmospheres"],
    img: "https://images.unsplash.com/photo-1539020140153-e479b8c22e70?w=900&q=80",
    mood: "Depth. Color. Unforgettable atmosphere."
  },
  {
    region: "GREECE & THE ISLES",
    title: "Greek Island Events",
    emoji: "",
    description: "From the whitewashed villages of Santorini to the lush landscapes of Corfu, our Greek island events are built around private villas with sea views, magical evening celebrations, and moments that feel like they could last forever.",
    highlights: ["Private island villa event venues", "Wedding & celebration packages", "Gourmet dining & private chef services", "Full event design & production", "Guest accommodation coordination"],
    img: "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=900&q=80",
    mood: "Light, sea, and timeless beauty."
  },
  {
    region: "SWITZERLAND & ALPS",
    title: "Alpine Celebrations",
    emoji: "",
    description: "Grand chalets, mountain panoramas, and crisp Alpine air — the Swiss Alps provide a stunning setting for intimate private events, corporate retreats, and milestone celebrations. Elegance and warmth in equal measure.",
    highlights: ["Private chalet & estate venues", "Corporate retreat event production", "Gourmet dining & wine experiences", "Full event design & winter décor", "Ideal for intimate celebrations & retreats"],
    img: "https://images.unsplash.com/photo-1518391846015-55a9cc003b25?w=900&q=80",
    mood: "Grandeur. Warmth. Mountain elegance."
  }
];

export default function Experiences() {
  return (
    <div className="min-h-screen bg-[#0f0e0c] text-[#e8e2d9]" style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}>
      <ScrollToTop />
      <Navbar active="EXPERIENCES" />

      {/* Hero */}
      <section className="relative pt-32 pb-24 px-6 text-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1920&q=80')", backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="absolute inset-0 bg-black/72" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <p className="text-[#c9a84c] tracking-[0.5em] text-xs mb-6">WHERE WE CREATE</p>
          <h1 className="text-5xl md:text-6xl font-light mb-8">Event Destinations</h1>
          <div className="w-12 h-px bg-[#c9a84c] mx-auto mb-8" />
          <p className="text-gray-400 text-lg font-light leading-relaxed">
            Each destination is chosen not only for its beauty, but for the extraordinary events it makes possible —
            stunning venues, world-class service, and unforgettable celebrations in the world's finest settings.
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
