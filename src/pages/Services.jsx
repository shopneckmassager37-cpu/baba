import { Link } from "react-router-dom";

const services = [
  {
    id: "weddings",
    title: "Destination Weddings",
    tagline: "Your love story. The world's most beautiful stage.",
    description: "We design and produce destination weddings that are as unique as your relationship. From the initial vision to the final toast, every element is curated with intention — the venue, the florals, the cuisine, the music, the lighting. We've brought couples together in Tuscan villas, Greek island estates, Swiss chalet retreats, and beyond.",
    details: [
      "Full-service wedding planning & design",
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
    description: "Our private dining experiences bring world-class culinary execution directly into your villa, home, yacht, or exclusive venue. Whether you're hosting a formal seated dinner for twelve or a relaxed gathering around a long table under the stars, we design menus and service experiences that reflect your palate and the destination around you.",
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
    id: "bar-bat-mitzvahs",
    title: "Bar & Bat Mitzvahs",
    tagline: "A milestone that deserves to be extraordinary.",
    description: "A Bar or Bat Mitzvah is one of the most meaningful events in a family's life. We create celebrations that honor the gravity of the moment while still feeling joyful, personal, and alive. From intimate family gatherings to larger destination celebrations, we handle everything so your family can be fully present.",
    details: [
      "Venue selection worldwide",
      "Complete event design & styling",
      "Catering & private chef services",
      "Entertainment & programming",
      "Family accommodation coordination",
      "Rehearsal dinner & extended programming"
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
    description: "Avicam personally leads immersive culinary retreats that blend the joy of cooking with the pleasure of discovery. Groups travel together to a destination, visit local markets, learn to cook with regional ingredients, and sit down each evening to share meals that celebrate the culture around them.",
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
    <div className="min-h-screen bg-[#0a0a0a] text-white font-['Georgia',serif]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-[#c9a84c]/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link to="/" className="text-2xl tracking-[0.3em] text-[#c9a84c] font-light">AVICAM GITLIN</Link>
          <div className="hidden md:flex gap-8 text-sm tracking-[0.2em] text-gray-300">
            <Link to="/" className="hover:text-[#c9a84c] transition-colors">HOME</Link>
            <Link to="/services" className="text-[#c9a84c]">SERVICES</Link>
            <Link to="/experiences" className="hover:text-[#c9a84c] transition-colors">EXPERIENCES</Link>
            <Link to="/about" className="hover:text-[#c9a84c] transition-colors">ABOUT</Link>
            <Link to="/gallery" className="hover:text-[#c9a84c] transition-colors">GALLERY</Link>
            <Link to="/contact" className="hover:text-[#c9a84c] transition-colors">CONTACT</Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6 text-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1510076857177-7470076d4098?w=1920&q=80')", backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="absolute inset-0 bg-black/75" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <p className="text-[#c9a84c] tracking-[0.5em] text-sm mb-6">WHAT WE DO</p>
          <h1 className="text-5xl md:text-6xl font-light mb-8">Our Services</h1>
          <p className="text-gray-400 text-lg font-light leading-relaxed">
            Every service we offer is built on one principle: your event should feel effortless to experience 
            and impossible to forget. We handle the complexity so you can live the moment.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto space-y-32">
          {services.map((s, i) => (
            <div key={s.id} className={`grid grid-cols-1 md:grid-cols-2 gap-16 items-center ${i % 2 !== 0 ? "md:[direction:rtl]" : ""}`}>
              <div className="overflow-hidden" style={{ direction: "ltr" }}>
                <img src={s.img} alt={s.title} className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-700" />
              </div>
              <div style={{ direction: "ltr" }}>
                <p className="text-[#c9a84c] tracking-[0.4em] text-xs mb-4">{s.tagline.toUpperCase()}</p>
                <h2 className="text-3xl md:text-4xl font-light mb-6">{s.title}</h2>
                <p className="text-gray-400 font-light leading-relaxed mb-8">{s.description}</p>
                <ul className="space-y-2 mb-10">
                  {s.details.map((d, j) => (
                    <li key={j} className="flex items-center gap-3 text-gray-300 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#c9a84c] flex-shrink-0" />
                      {d}
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="inline-block px-8 py-3 border border-[#c9a84c] text-[#c9a84c] text-sm tracking-[0.2em] hover:bg-[#c9a84c]/10 transition-colors">
                  INQUIRE NOW
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-[#111111] text-center">
        <div className="max-w-2xl mx-auto">
          <p className="text-[#c9a84c] tracking-[0.4em] text-sm mb-6">READY TO START?</p>
          <h2 className="text-4xl font-light mb-8">Let's Design Your Event</h2>
          <p className="text-gray-400 font-light mb-10">Every great event begins with a single conversation. Share your vision with us.</p>
          <Link to="/contact" className="inline-block px-12 py-5 bg-[#c9a84c] text-black text-sm tracking-[0.3em] hover:bg-[#e0c070] transition-colors font-medium">
            GET IN TOUCH
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
