import ChatWidget from "./ChatWidget";
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

// Destinations data
const destinations = [
  {
    name: "Italy",
    headline: "Tuscany & Beyond",
    description: "Rolling hills, ancient estates, and centuries of beauty. Italy is the gold standard for destination events — Avicam has produced weddings, family celebrations, and intimate gatherings across Tuscany, the Amalfi Coast, and Rome.",
    img: "https://images.unsplash.com/photo-1568869707922-e37547f49d6c?w=1200&q=80",
    accent: "Tuscany · Amalfi · Rome"
  },
  {
    name: "Greece",
    headline: "Islands & Ancient Light",
    description: "From the whitewashed clifftops of Santorini to the lush hills of Corfu, Greece offers an unmatched backdrop for celebration. Avicam has brought groups together across the Greek islands for weddings, milestone events, and cultural journeys.",
    img: "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=1200&q=80",
    accent: "Santorini · Mykonos · Corfu"
  },
  {
    name: "Morocco",
    headline: "Spice, Light & Ancient Grandeur",
    description: "Lantern-lit riads, sweeping desert skies, and the warm hospitality of one of the world's most captivating cultures. Morocco is extraordinary for intimate events and cultural journeys that leave guests transformed.",
    img: "https://images.unsplash.com/photo-1539020140153-e479b8c22e70?w=1200&q=80",
    accent: "Marrakech · Fez · The Sahara"
  },
  {
    name: "Switzerland",
    headline: "Alpine Grandeur",
    description: "Private chalets overlooking glacial lakes, mountain peaks that take your breath away, and a standard of luxury that is simply unmatched. Switzerland is the destination of choice for exclusive corporate retreats and high-end milestone celebrations.",
    img: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?w=1200&q=80",
    accent: "Geneva · Verbier · Lucerne"
  },
  {
    name: "Caribbean",
    headline: "Private Islands & Crystal Waters",
    description: "Exclusive island resorts, private villa estates, and turquoise waters that seem almost unreal. The Caribbean offers the perfect setting for relaxed luxury events, from intimate family gatherings to VIP milestone celebrations.",
    img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80",
    accent: "St. Barts · Turks & Caicos · Barbados"
  },
  {
    name: "United States",
    headline: "Coast to Coast Excellence",
    description: "From rooftop galas in Manhattan to vineyard weddings in California wine country, Avicam produces extraordinary events across the United States — with the same personal attention and standard of excellence as any international destination.",
    img: "https://images.unsplash.com/photo-1518391846015-55a9cc003b25?w=1200&q=80",
    accent: "New York · California · Florida"
  }
];

export default function Gallery() {
  return (
    <div className="min-h-screen bg-[#0f0e0c] text-[#e8e2d9]" style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}>
      <ScrollToTop />
      <Navbar active="GALLERY" />

      {/* Hero */}
      <section className="relative overflow-hidden" style={{ minHeight: "70vh" }}>
        <div className="absolute inset-0 grid grid-cols-3 grid-rows-2 gap-0.5">
          {[
            "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80",
            "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600&q=80",
            "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80",
            "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=600&q=80",
            "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&q=80",
            "https://images.unsplash.com/photo-1568869707922-e37547f49d6c?w=600&q=80"
          ].map((src,i) => (
            <img key={i} src={src} alt="" className="w-full h-full object-cover" />
          ))}
        </div>
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-6" style={{ minHeight: "70vh" }}>
          <p className="text-[#c9a84c] tracking-[0.6em] text-xs mb-6">WHERE EVENTS HAPPEN</p>
          <h1 className="text-5xl md:text-7xl font-light leading-none mb-6">Our World</h1>
          <div className="w-16 h-px bg-[#c9a84c] mb-8" />
          <p className="text-gray-300 text-lg font-light max-w-xl leading-relaxed">The destinations where Avicam creates extraordinary private events — across four continents and 30+ destinations worldwide.</p>
        </div>
      </section>

      {/* Destinations */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto space-y-32">
          {destinations.map((dest, i) => (
            <div key={i} className={`grid grid-cols-1 md:grid-cols-2 gap-16 items-center ${i % 2 !== 0 ? "md:grid-flow-dense" : ""}`}>
              {i % 2 === 0 ? (
                <>
                  <div className="overflow-hidden relative">
                    <img src={dest.img} alt={dest.name} className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-700" />
                    <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm px-4 py-2 border-l-2 border-[#c9a84c]">
                      <p className="text-[#c9a84c] text-xs tracking-[0.3em]">{dest.accent}</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-[#c9a84c] tracking-[0.5em] text-xs mb-3">{dest.name.toUpperCase()}</p>
                    <h2 className="text-3xl md:text-4xl font-light mb-6">{dest.headline}</h2>
                    <div className="w-10 h-px bg-[#c9a84c]/50 mb-6" />
                    <p className="text-gray-400 font-light leading-relaxed mb-8">{dest.description}</p>
                    <Link to="/contact" className="inline-block px-8 py-3 border border-[#c9a84c] text-[#c9a84c] text-xs tracking-[0.2em] hover:bg-[#c9a84c]/10 transition-colors">PLAN AN EVENT HERE</Link>
                  </div>
                </>
              ) : (
                <>
                  <div className="md:col-start-2">
                    <div className="overflow-hidden relative">
                      <img src={dest.img} alt={dest.name} className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-700" />
                      <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm px-4 py-2 border-l-2 border-[#c9a84c]">
                        <p className="text-[#c9a84c] text-xs tracking-[0.3em]">{dest.accent}</p>
                      </div>
                    </div>
                  </div>
                  <div className="md:col-start-1 md:row-start-1">
                    <p className="text-[#c9a84c] tracking-[0.5em] text-xs mb-3">{dest.name.toUpperCase()}</p>
                    <h2 className="text-3xl md:text-4xl font-light mb-6">{dest.headline}</h2>
                    <div className="w-10 h-px bg-[#c9a84c]/50 mb-6" />
                    <p className="text-gray-400 font-light leading-relaxed mb-8">{dest.description}</p>
                    <Link to="/contact" className="inline-block px-8 py-3 border border-[#c9a84c] text-[#c9a84c] text-xs tracking-[0.2em] hover:bg-[#c9a84c]/10 transition-colors">PLAN AN EVENT HERE</Link>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 px-6 bg-[#1a1a1a] text-center">
        <div className="max-w-xl mx-auto">
          <p className="text-[#c9a84c] tracking-[0.4em] text-xs mb-6">DON'T SEE YOUR DESTINATION?</p>
          <h2 className="text-4xl font-light mb-8">We Go Anywhere</h2>
          <div className="w-10 h-px bg-[#c9a84c] mx-auto mb-8" />
          <p className="text-gray-400 font-light mb-10 leading-relaxed">If you can dream it, we can find the venue. Tell us where you want your event to happen — we'll make it possible.</p>
          <Link to="/contact" className="inline-block px-12 py-5 bg-[#c9a84c] text-black text-xs tracking-[0.3em] hover:bg-[#e0c070] transition-colors font-semibold">START A CONVERSATION</Link>
        </div>
      </section>

      <Footer />
      <ChatWidget />
    </div>
  );
}
