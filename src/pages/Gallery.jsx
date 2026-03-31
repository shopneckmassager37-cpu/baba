import ChatWidget from "./ChatWidget";
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

const LOGO = "https://media.base44.com/images/public/69caab40b61d6ee7c5b75332/9d7fead75_generated_image.png";
const NAV = [["HOME","/"],["EVENTS","/events"],["HOW WE WORK","/process"],["ABOUT","/about"],["CONTACT","/contact"]];

function Navbar({ active }) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#161616]/95 backdrop-blur-md border-b border-[#c9a84c]/20">
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
    <footer className="bg-[#111] border-t border-[#c9a84c]/15 pt-14 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={LOGO} alt="logo" className="h-10 w-10 object-contain" />
              <span className="text-[#c9a84c] text-base tracking-[0.3em] font-light">AVICAM GITLIN</span>
            </div>
            <p className="text-gray-400 text-sm font-light leading-relaxed">Bespoke private events and extraordinary celebrations, crafted for discerning individuals worldwide.</p>
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
    <div className="min-h-screen bg-[#161616] text-white" style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}>
      <ScrollToTop />
      <Navbar />

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
          <p className="text-gray-300 text-lg font-light max-w-xl leading-relaxed">The destinations where Avicam creates extraordinary private events — across every continent, for every occasion.</p>
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
