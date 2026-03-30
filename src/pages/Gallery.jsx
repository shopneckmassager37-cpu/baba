import { useState } from "react";
import { Link } from "react-router-dom";

const LOGO = "https://media.base44.com/images/public/69caab40b61d6ee7c5b75332/9d7fead75_generated_image.png";

const categories = ["ALL", "CELEBRATIONS", "DINING", "TRAVEL", "CULINARY"];

const galleryItems = [
  { cat: "CELEBRATIONS", img: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80", caption: "Destination Celebration · Tuscany" },
  { cat: "DINING", img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80", caption: "Private Dinner · Greek Isles" },
  { cat: "TRAVEL", img: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=800&q=80", caption: "Villa Program · Tuscany" },
  { cat: "CULINARY", img: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=800&q=80", caption: "Chef-Led Workshop · Italy" },
  { cat: "CELEBRATIONS", img: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=800&q=80", caption: "Milestone Event · Destination" },
  { cat: "TRAVEL", img: "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=800&q=80", caption: "Sailing Journey · Greek Islands" },
  { cat: "CULINARY", img: "https://images.unsplash.com/photo-1507048331197-7d4ac70811cf?w=800&q=80", caption: "Culinary Retreat · Europe" },
  { cat: "CELEBRATIONS", img: "https://images.unsplash.com/photo-1510076857177-7470076d4098?w=800&q=80", caption: "Intimate Celebration · Amalfi Coast" },
  { cat: "TRAVEL", img: "https://images.unsplash.com/photo-1539020140153-e479b8c22e70?w=800&q=80", caption: "Moroccan Desert Adventure" },
  { cat: "DINING", img: "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?w=800&q=80", caption: "Private Villa Dinner · Provence" },
  { cat: "CELEBRATIONS", img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80", caption: "Corporate Gala · New York" },
  { cat: "TRAVEL", img: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80", caption: "Ranch Experience · Montana" },
  { cat: "CULINARY", img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=80", caption: "Market Visit · Marrakech" },
  { cat: "CELEBRATIONS", img: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&q=80", caption: "Garden Celebration · Santorini" },
  { cat: "DINING", img: "https://images.unsplash.com/photo-1493846740636-63dde8d42b68?w=800&q=80", caption: "Yacht Dinner · Mediterranean" },
  { cat: "TRAVEL", img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80", caption: "Alpine Chalet · Swiss Alps" },
];

export default function Gallery() {
  const [active, setActive] = useState("ALL");
  const [lightbox, setLightbox] = useState(null);

  const filtered = active === "ALL" ? galleryItems : galleryItems.filter(g => g.cat === active);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white" style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}>
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
            <Link to="/gallery" className="text-[#c9a84c]">GALLERY</Link>
            <Link to="/contact" className="hover:text-[#c9a84c] transition-colors">CONTACT</Link>
          </div>
          <Link to="/contact" className="hidden md:block px-5 py-2 border border-[#c9a84c] text-[#c9a84c] text-xs tracking-[0.2em] hover:bg-[#c9a84c]/10 transition-colors">INQUIRE</Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-36 pb-16 px-6 text-center">
        <p className="text-[#c9a84c] tracking-[0.5em] text-xs mb-6">OUR WORK</p>
        <h1 className="text-5xl md:text-6xl font-light mb-6">Gallery</h1>
        <div className="w-12 h-px bg-[#c9a84c] mx-auto mb-6" />
        <p className="text-gray-500 text-lg font-light max-w-xl mx-auto">
          A glimpse into the events, experiences, and moments we've had the privilege to craft.
        </p>
      </section>

      {/* Filters */}
      <section className="px-6 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center mb-14">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-6 py-2 text-xs tracking-[0.3em] border transition-colors ${
                  active === cat
                    ? "border-[#c9a84c] bg-[#c9a84c] text-black font-semibold"
                    : "border-[#c9a84c]/30 text-gray-400 hover:border-[#c9a84c] hover:text-[#c9a84c]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Masonry Grid */}
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
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/55 transition-colors flex items-end">
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
        <div className="fixed inset-0 z-50 bg-black/96 flex items-center justify-center p-6" onClick={() => setLightbox(null)}>
          <div className="max-w-4xl w-full">
            <img src={lightbox.img} alt={lightbox.caption} className="w-full max-h-[80vh] object-contain" />
            <p className="text-center text-gray-400 text-sm mt-4 tracking-wide">{lightbox.caption}</p>
            <p className="text-center text-gray-600 text-xs mt-2 tracking-widest">CLICK TO CLOSE</p>
          </div>
        </div>
      )}

      {/* CTA */}
      <section className="py-28 px-6 bg-[#0d0d0d] text-center">
        <div className="max-w-xl mx-auto">
          <p className="text-[#c9a84c] tracking-[0.4em] text-xs mb-6">YOUR STORY AWAITS</p>
          <h2 className="text-4xl font-light mb-6">Let's Add Your Moment to the Collection</h2>
          <div className="w-10 h-px bg-[#c9a84c] mx-auto mb-8" />
          <Link to="/contact" className="inline-block px-12 py-5 bg-[#c9a84c] text-black text-xs tracking-[0.3em] hover:bg-[#e0c070] transition-colors font-semibold">BEGIN YOUR JOURNEY</Link>
        </div>
      </section>

      <footer className="bg-[#070707] border-t border-[#c9a84c]/15 pt-16 pb-8 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <img src={LOGO} alt="logo" className="h-10 w-10 object-contain" />
            <span className="text-[#c9a84c] text-lg tracking-[0.3em] font-light">AVICAM GITLIN</span>
          </div>
          <div className="flex gap-8 text-xs text-gray-500 tracking-[0.2em]">
            {[["Services", "/services"], ["Experiences", "/experiences"], ["About", "/about"], ["Contact", "/contact"]].map(([l, h]) => (
              <Link key={l} to={h} className="hover:text-[#c9a84c] transition-colors">{l.toUpperCase()}</Link>
            ))}
          </div>
          <p className="text-gray-600 text-xs tracking-wide">© 2025 Avicam Gitlin Private Events</p>
        </div>
      </footer>
    </div>
  );
}
