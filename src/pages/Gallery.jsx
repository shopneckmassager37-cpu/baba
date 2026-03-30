import { useState } from "react";
import { Link } from "react-router-dom";

const categories = ["ALL", "WEDDINGS", "DINING", "TRAVEL", "CULINARY", "CELEBRATIONS"];

const galleryItems = [
  { cat: "WEDDINGS", img: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80", caption: "Destination Wedding · Tuscany" },
  { cat: "DINING", img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80", caption: "Private Dinner · Greek Isles" },
  { cat: "TRAVEL", img: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=800&q=80", caption: "Villa Program · Tuscany" },
  { cat: "CULINARY", img: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=800&q=80", caption: "Chef-Led Workshop · Italy" },
  { cat: "CELEBRATIONS", img: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=800&q=80", caption: "Bar Mitzvah · Destination Event" },
  { cat: "TRAVEL", img: "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=800&q=80", caption: "Sailing Journey · Greek Islands" },
  { cat: "CULINARY", img: "https://images.unsplash.com/photo-1507048331197-7d4ac70811cf?w=800&q=80", caption: "Culinary Retreat · Europe" },
  { cat: "WEDDINGS", img: "https://images.unsplash.com/photo-1510076857177-7470076d4098?w=800&q=80", caption: "Intimate Wedding · Amalfi Coast" },
  { cat: "TRAVEL", img: "https://images.unsplash.com/photo-1539020140153-e479b8c22e70?w=800&q=80", caption: "Moroccan Desert Adventure" },
  { cat: "DINING", img: "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?w=800&q=80", caption: "Private Villa Dinner · Provence" },
  { cat: "CELEBRATIONS", img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80", caption: "Corporate Gala · New York" },
  { cat: "TRAVEL", img: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80", caption: "Ranch Experience · Montana" },
  { cat: "CULINARY", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80", caption: "Market Visit · Marrakech" },
  { cat: "WEDDINGS", img: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&q=80", caption: "Garden Wedding · Santorini" },
  { cat: "DINING", img: "https://images.unsplash.com/photo-1493846740636-63dde8d42b68?w=800&q=80", caption: "Yacht Dinner · Mediterranean" },
  { cat: "TRAVEL", img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80", caption: "Alpine Chalet · Swiss Alps" },
];

export default function Gallery() {
  const [active, setActive] = useState("ALL");
  const [lightbox, setLightbox] = useState(null);

  const filtered = active === "ALL" ? galleryItems : galleryItems.filter(g => g.cat === active);

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
            <Link to="/gallery" className="text-[#c9a84c]">GALLERY</Link>
            <Link to="/contact" className="hover:text-[#c9a84c] transition-colors">CONTACT</Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-16 px-6 text-center bg-[#0a0a0a]">
        <p className="text-[#c9a84c] tracking-[0.5em] text-sm mb-6">OUR WORK</p>
        <h1 className="text-5xl md:text-6xl font-light mb-8">Gallery</h1>
        <p className="text-gray-500 text-lg font-light max-w-xl mx-auto">
          A glimpse into the events, experiences, and moments we've had the privilege to craft.
        </p>
      </section>

      {/* Filter Tabs */}
      <section className="px-6 pb-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-6 py-2 text-xs tracking-[0.3em] border transition-colors ${
                  active === cat
                    ? "border-[#c9a84c] bg-[#c9a84c] text-black"
                    : "border-[#c9a84c]/30 text-gray-400 hover:border-[#c9a84c] hover:text-[#c9a84c]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Masonry-style grid */}
          <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-2 space-y-2">
            {filtered.map((item, i) => (
              <div
                key={i}
                className="break-inside-avoid cursor-pointer group relative overflow-hidden"
                onClick={() => setLightbox(item)}
              >
                <img
                  src={item.img}
                  alt={item.caption}
                  className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors flex items-end">
                  <p className="text-white text-xs tracking-wide p-4 opacity-0 group-hover:opacity-100 transition-opacity font-light">
                    {item.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-6"
          onClick={() => setLightbox(null)}
        >
          <div className="max-w-4xl w-full">
            <img src={lightbox.img} alt={lightbox.caption} className="w-full max-h-[80vh] object-contain" />
            <p className="text-center text-gray-400 text-sm mt-4 tracking-wide">{lightbox.caption}</p>
            <p className="text-center text-gray-600 text-xs mt-2">Click anywhere to close</p>
          </div>
        </div>
      )}

      {/* CTA */}
      <section className="py-24 px-6 bg-[#111111] text-center">
        <div className="max-w-xl mx-auto">
          <p className="text-[#c9a84c] tracking-[0.4em] text-sm mb-6">YOUR STORY AWAITS</p>
          <h2 className="text-4xl font-light mb-8">Let's Add Your Moment to the Collection</h2>
          <Link to="/contact" className="inline-block px-12 py-5 bg-[#c9a84c] text-black text-sm tracking-[0.3em] hover:bg-[#e0c070] transition-colors font-medium">
            BEGIN YOUR JOURNEY
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
          <div className="text-gray-600 text-xs tracking-wide">© 2025 Avicam Gitlin Private Events</div>
        </div>
      </footer>
    </div>
  );
}
