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

const services = [
  {
    id: "weddings",
    title: "Destination Events & Celebrations",
    tagline: "Life's greatest milestones deserve an extraordinary stage.",
    description: "We design and produce destination celebrations that are as unique as the occasion itself. From the initial vision to the final toast, every element is curated with intention — the venue, the florals, the cuisine, the music, the lighting. We've brought people together in Tuscan villas, Greek island estates, Swiss chalet retreats, and beyond.",
    details: [
      "Full-service event planning & design",
      "Venue sourcing across 30+ countries",
      "Bespoke menu design by private chef",
      "Accommodation & logistics coordination",
      "Day-of execution & team management",
      "Custom décor & floral arrangements"
    ],
    img: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=1200&q=80"
  },
  {
    id: "private-dining",
    title: "Private Dining Experiences",
    tagline: "Restaurant-quality. Personal intimacy.",
    description: "Our private dining experiences bring world-class culinary execution directly into your villa, home, yacht, or exclusive venue. Whether hosting a formal seated dinner for twelve or a relaxed gathering under the stars, we design menus and service that reflect your palate and the destination around you.",
    details: [
      "In-villa & private home dining",
      "Yacht & outdoor estate dinners",
      "Custom multi-course menus",
      "Professional service staff",
      "Wine pairing & sommelier service",
      "Complete setup & cleanup included"
    ],
    img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=80"
  },
  {
    id: "milestone",
    title: "Milestone Celebrations",
    tagline: "Every milestone deserves to be extraordinary.",
    description: "Whether it's a landmark birthday, an anniversary, a coming-of-age celebration, or a family reunion — we create experiences that honor the gravity and joy of the moment. From intimate family gatherings to larger destination celebrations, we handle everything so you can be fully present.",
    details: [
      "Venue selection worldwide",
      "Complete event design & styling",
      "Catering & private chef services",
      "Entertainment & programming",
      "Family accommodation coordination",
      "Multi-day programs available"
    ],
    img: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=1200&q=80"
  },
  {
    id: "corporate",
    title: "Corporate & VIP Events",
    tagline: "Elevate your company's most important moments.",
    description: "We produce high-end corporate events and VIP gatherings that leave lasting impressions. Whether it's an executive retreat in a private Alpine chalet, a product launch dinner, or a team-building culinary experience in a world-class destination, we bring the same standard of excellence to every engagement.",
    details: [
      "Executive retreats & offsites",
      "VIP dinner experiences",
      "Product launch events",
      "Team culinary workshops",
      "Conference & gala dinners",
      "Complete AV & technical production"
    ],
    img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&q=80"
  },
  {
    id: "villa-programs",
    title: "Private Villa Programs",
    tagline: "Weeks crafted around your rhythm and vision.",
    description: "Our private villa programs are the ultimate expression of luxury travel and private events combined. We take over a stunning estate — in Tuscany, Greece, Morocco, the Caribbean — and build an entire week or more around your group. Morning cooking sessions, afternoon excursions, evening feasts under the stars.",
    details: [
      "Full villa buyout & staffing",
      "Daily programmed experiences",
      "In-residence private chef & team",
      "Curated local excursions",
      "Celebration dinners & special evenings",
      "Families, multi-generational groups & friend gatherings"
    ],
    img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&q=80"
  },
  {
    id: "chef-retreats",
    title: "Chef-Led Culinary Retreats",
    tagline: "Travel. Cook. Taste. Connect.",
    description: "Avicam personally leads immersive culinary retreats that blend the joy of cooking with the pleasure of discovery. Groups travel together, visit local markets, cook with regional ingredients, and sit down each evening to share meals that celebrate the culture around them.",
    details: [
      "Market visits & ingredient sourcing",
      "Hands-on cooking workshops",
      "Wine pairings & local tastings",
      "Cultural destination excursions",
      "Chef-curated multi-course dinners",
      "Intimate groups of 8–20 guests"
    ],
    img: "https://images.unsplash.com/photo-1507048331197-7d4ac70811cf?w=1200&q=80"
  }
];

export default function Services() {
  return (
    <div className="min-h-screen bg-[#0f0e0c] text-[#e8e2d9]" style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}>
      <ScrollToTop />
      <Navbar active="SERVICES" />

      {/* Hero */}
      <section className="relative pt-36 pb-28 px-6 text-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1510076857177-7470076d4098?w=1920&q=80')", backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-[#0f0e0c]" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <p className="text-[#c9a84c] tracking-[0.6em] text-xs mb-6">WHAT WE DO</p>
          <h1 className="text-5xl md:text-7xl font-light mb-8 leading-tight">Our <span className="italic text-[#c9a84c]">Services</span></h1>
          <div className="w-16 h-px bg-[#c9a84c]/60 mx-auto mb-8" />
          <p className="text-gray-300 text-lg font-light leading-relaxed max-w-2xl mx-auto">
            Every service we offer is built on one principle: we make the planning effortless,
            the experience extraordinary, and the memory impossible to forget.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto space-y-36">
          {services.map((s, i) => (
            <div key={s.id} className={`grid grid-cols-1 md:grid-cols-2 gap-16 items-center`}>
              {i % 2 === 0 ? (
                <>
                  <div className="overflow-hidden">
                    <img src={s.img} alt={s.title} className="w-full h-[520px] object-cover hover:scale-105 transition-transform duration-700" />
                  </div>
                  <div>
                    <p className="text-[#c9a84c] tracking-[0.4em] text-xs mb-4 italic">{s.tagline}</p>
                    <h2 className="text-3xl md:text-4xl font-light mb-6">{s.title}</h2>
                    <div className="w-10 h-px bg-[#c9a84c]/50 mb-6" />
                    <p className="text-gray-400 font-light leading-relaxed mb-8">{s.description}</p>
                    <ul className="space-y-2 mb-10">
                      {s.details.map((d, j) => (
                        <li key={j} className="flex items-center gap-3 text-gray-300 text-sm font-light">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#c9a84c] flex-shrink-0" />{d}
                        </li>
                      ))}
                    </ul>
                    <Link to="/contact" className="inline-block px-8 py-3 border border-[#c9a84c] text-[#c9a84c] text-xs tracking-[0.2em] hover:bg-[#c9a84c]/10 transition-colors">INQUIRE NOW</Link>
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <p className="text-[#c9a84c] tracking-[0.4em] text-xs mb-4 italic">{s.tagline}</p>
                    <h2 className="text-3xl md:text-4xl font-light mb-6">{s.title}</h2>
                    <div className="w-10 h-px bg-[#c9a84c]/50 mb-6" />
                    <p className="text-gray-400 font-light leading-relaxed mb-8">{s.description}</p>
                    <ul className="space-y-2 mb-10">
                      {s.details.map((d, j) => (
                        <li key={j} className="flex items-center gap-3 text-gray-300 text-sm font-light">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#c9a84c] flex-shrink-0" />{d}
                        </li>
                      ))}
                    </ul>
                    <Link to="/contact" className="inline-block px-8 py-3 border border-[#c9a84c] text-[#c9a84c] text-xs tracking-[0.2em] hover:bg-[#c9a84c]/10 transition-colors">INQUIRE NOW</Link>
                  </div>
                  <div className="overflow-hidden">
                    <img src={s.img} alt={s.title} className="w-full h-[520px] object-cover hover:scale-105 transition-transform duration-700" />
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 bg-[#0d0d0d] text-center">
        <div className="max-w-2xl mx-auto">
          <p className="text-[#c9a84c] tracking-[0.4em] text-xs mb-6">YOUR VISION AWAITS</p>
          <h2 className="text-4xl md:text-5xl font-light mb-8 leading-tight">Let's Design Your<br />Perfect Event</h2>
          <div className="w-16 h-px bg-[#c9a84c] mx-auto mb-8" />
          <p className="text-gray-400 font-light mb-12 text-lg">Every great event begins with a single conversation. Share your vision — we'll make it real.</p>
          <Link to="/contact" className="inline-block px-14 py-5 bg-[#c9a84c] text-black text-xs tracking-[0.3em] hover:bg-[#e0c070] transition-all duration-300 font-semibold hover:shadow-[0_4px_30px_rgba(201,168,76,0.3)]">GET IN TOUCH</Link>
        </div>
      </section>

      <Footer />
      <ChatWidget />
    </div>
  );
}
