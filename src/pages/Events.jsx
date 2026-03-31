import ChatWidget from "./ChatWidget";
import { Link } from "react-router-dom";

const LOGO = "https://media.base44.com/images/public/69caab40b61d6ee7c5b75332/9d7fead75_generated_image.png";

const NAV_LINKS = [
  ["HOME", "/"],
  ["EVENTS", "/events"],
  ["HOW WE WORK", "/process"],
  ["ABOUT", "/about"],
  ["GALLERY", "/gallery"],
  ["CONTACT", "/contact"],
];

const events = [
  {
    title: "Destination Celebrations",
    tagline: "Life's greatest moments deserve an extraordinary stage.",
    description: "We plan and produce destination celebrations that are as unique as the occasion itself. From the first conversation to the final toast, every element is curated with intention — the venue, the florals, the entertainment, the lighting, the flow of the day. We've brought people together in Tuscan villas, Greek island estates, Swiss chalet retreats, and beyond.",
    highlights: [
      "Full destination event planning & design",
      "Venue sourcing across 30+ countries",
      "Accommodation & guest logistics coordination",
      "Day-of execution & full team management",
      "Custom décor, florals & production",
      "Entertainment, music & programming"
    ],
    img: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=1200&q=80"
  },
  {
    title: "Milestone Celebrations",
    tagline: "Every milestone deserves to be remembered forever.",
    description: "Whether it's a landmark birthday, an anniversary, a coming-of-age celebration, or a family reunion — we create events that honour the gravity and joy of the moment. From intimate family gatherings to large-scale destination celebrations, we handle everything so you can be fully present.",
    highlights: [
      "Worldwide venue selection & curation",
      "Complete event design & styling",
      "Entertainment & live performance",
      "Family accommodation coordination",
      "Multi-day event programs",
      "Bespoke personal touches throughout"
    ],
    img: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=1200&q=80"
  },
  {
    title: "Corporate & VIP Events",
    tagline: "Your company's most important moments, elevated.",
    description: "We produce high-end corporate events and VIP gatherings that leave lasting impressions. Whether it's an executive retreat in a private Alpine chalet, a product launch event, an incentive trip, or a gala evening — we bring the same standard of excellence and discretion to every engagement.",
    highlights: [
      "Executive retreats & private offsites",
      "Product launches & brand activations",
      "Incentive trips & reward experiences",
      "Conference & gala evenings",
      "VIP guest experiences & hospitality",
      "Full production, AV & technical support"
    ],
    img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&q=80"
  },
  {
    title: "Private Villa Programs",
    tagline: "Weeks crafted entirely around your group.",
    description: "Our private villa programs are the ultimate expression of a curated group event. We take over a stunning estate — in Tuscany, Greece, Morocco, the Caribbean — and build an entire week or more around your group. Daily programming, excursions, celebrations, and exceptional evenings in extraordinary settings.",
    highlights: [
      "Full villa buyout & staffing",
      "Daily curated programming & activities",
      "Curated local excursions & experiences",
      "Celebration evenings & special events",
      "Families, multi-generational & friend groups",
      "Custom themes & personalised touches"
    ],
    img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&q=80"
  },
  {
    title: "Sailing & Charter Events",
    tagline: "The sea as your venue.",
    description: "Private sailing charters through crystal-clear Mediterranean waters — hosting your event aboard a private yacht between Greek islands or along Croatia's iconic coastline. Swimming stops, secluded coves, sunset celebrations, and vibrant evenings at sea.",
    highlights: [
      "Private yacht & sailing charter events",
      "Greek Islands & Adriatic Sea routes",
      "Fully crewed & personalised itineraries",
      "Onboard celebration programming",
      "Perfect for couples, families & small groups",
      "Day charters or multi-day voyages"
    ],
    img: "https://images.unsplash.com/photo-1493854994231-2d87b09e3890?w=1200&q=80"
  },
  {
    title: "Heritage & Cultural Journeys",
    tagline: "Meaningful travel. Shared stories.",
    description: "A powerful group event built around history, memory, and renewal. Travellers visit historic sites, cultural landmarks, and communities with expert educators — creating a shared experience that goes far beyond the ordinary. Thoughtfully paced and deeply meaningful.",
    highlights: [
      "Expert historian & educator guides",
      "Historic sites & cultural landmarks",
      "Curated group programs & ceremonies",
      "Meaningful and educational pacing",
      "Comfortable accommodation & logistics",
      "Ideal for families & heritage groups"
    ],
    img: "https://images.unsplash.com/photo-1548013146-72479768bada?w=1200&q=80"
  }
];

export default function Events() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white" style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/95 backdrop-blur-md border-b border-[#c9a84c]/20">
        <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3">
            <img src={LOGO} alt="Avicam Gitlin" className="h-12 w-12 object-contain" />
            <span className="text-xl tracking-[0.25em] text-[#c9a84c] font-light hidden sm:block">AVICAM GITLIN</span>
          </Link>
          <div className="hidden md:flex gap-8 text-xs tracking-[0.2em] text-gray-300">
            {NAV_LINKS.map(([l, h]) => (
              <Link key={l} to={h} className={`hover:text-[#c9a84c] transition-colors ${l === "EVENTS" ? "text-[#c9a84c]" : ""}`}>{l}</Link>
            ))}
            <ChatWidget />
</div>
          <Link to="/contact" className="hidden md:block px-5 py-2 border border-[#c9a84c] text-[#c9a84c] text-xs tracking-[0.2em] hover:bg-[#c9a84c]/10 transition-colors">INQUIRE</Link>
          <ChatWidget />
</div>
      </nav>

      {/* Hero */}
      <section
        className="relative pt-32 pb-24 px-6 text-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1920&q=80')", backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="absolute inset-0 bg-black/72" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <p className="text-[#c9a84c] tracking-[0.5em] text-xs mb-6">PRIVATE EVENTS WORLDWIDE</p>
          <h1 className="text-5xl md:text-6xl font-light mb-6">Events & Celebrations</h1>
          <div className="w-12 h-px bg-[#c9a84c] mx-auto mb-8" />
          <p className="text-gray-400 text-lg font-light leading-relaxed max-w-2xl mx-auto">
            From intimate private gatherings to grand destination celebrations —
            every event is designed from scratch to be entirely, unmistakably yours.
          </p>
          <ChatWidget />
</div>
      </section>

      {/* Events list */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto space-y-36">
          {events.map((ev, i) => (
            <div key={i} className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              {i % 2 === 0 ? (
                <>
                  <div className="overflow-hidden">
                    <img src={ev.img} alt={ev.title} className="w-full h-[520px] object-cover hover:scale-105 transition-transform duration-700" />
                    <ChatWidget />
</div>
                  <div>
                    <p className="text-[#c9a84c] tracking-[0.4em] text-xs mb-4 italic">{ev.tagline}</p>
                    <h2 className="text-3xl md:text-4xl font-light mb-6">{ev.title}</h2>
                    <div className="w-10 h-px bg-[#c9a84c]/50 mb-6" />
                    <p className="text-gray-400 font-light leading-relaxed mb-8">{ev.description}</p>
                    <ul className="space-y-2 mb-10">
                      {ev.highlights.map((d, j) => (
                        <li key={j} className="flex items-center gap-3 text-gray-300 text-sm font-light">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#c9a84c] flex-shrink-0" />{d}
                        </li>
                      ))}
                    </ul>
                    <Link to="/contact" className="inline-block px-8 py-3 border border-[#c9a84c] text-[#c9a84c] text-xs tracking-[0.2em] hover:bg-[#c9a84c]/10 transition-colors">INQUIRE NOW</Link>
                    <ChatWidget />
</div>
                </>
              ) : (
                <>
                  <div>
                    <p className="text-[#c9a84c] tracking-[0.4em] text-xs mb-4 italic">{ev.tagline}</p>
                    <h2 className="text-3xl md:text-4xl font-light mb-6">{ev.title}</h2>
                    <div className="w-10 h-px bg-[#c9a84c]/50 mb-6" />
                    <p className="text-gray-400 font-light leading-relaxed mb-8">{ev.description}</p>
                    <ul className="space-y-2 mb-10">
                      {ev.highlights.map((d, j) => (
                        <li key={j} className="flex items-center gap-3 text-gray-300 text-sm font-light">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#c9a84c] flex-shrink-0" />{d}
                        </li>
                      ))}
                    </ul>
                    <Link to="/contact" className="inline-block px-8 py-3 border border-[#c9a84c] text-[#c9a84c] text-xs tracking-[0.2em] hover:bg-[#c9a84c]/10 transition-colors">INQUIRE NOW</Link>
                    <ChatWidget />
</div>
                  <div className="overflow-hidden">
                    <img src={ev.img} alt={ev.title} className="w-full h-[520px] object-cover hover:scale-105 transition-transform duration-700" />
                    <ChatWidget />
</div>
                </>
              )}
              <ChatWidget />
</div>
          ))}
          <ChatWidget />
</div>
      </section>

      {/* CTA */}
      <section className="py-28 px-6 bg-[#0d0d0d] text-center">
        <div className="max-w-2xl mx-auto">
          <p className="text-[#c9a84c] tracking-[0.4em] text-xs mb-6">READY TO START?</p>
          <h2 className="text-4xl font-light mb-6">Let's Design Your Event</h2>
          <div className="w-12 h-px bg-[#c9a84c] mx-auto mb-8" />
          <p className="text-gray-400 font-light mb-10">Every great event begins with a single conversation. Share your vision with us.</p>
          <Link to="/contact" className="inline-block px-12 py-5 bg-[#c9a84c] text-black text-xs tracking-[0.3em] hover:bg-[#e0c070] transition-colors font-semibold">GET IN TOUCH</Link>
          <ChatWidget />
</div>
      </section>

      {/* Footer */}
      <footer className="bg-[#070707] border-t border-[#c9a84c]/15 pt-16 pb-8 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <img src={LOGO} alt="logo" className="h-10 w-10 object-contain" />
            <span className="text-[#c9a84c] text-lg tracking-[0.3em] font-light">AVICAM GITLIN</span>
            <ChatWidget />
</div>
          <div className="flex gap-6 text-xs text-gray-500 tracking-[0.2em]">
            {[["Events", "/events"], ["How We Work", "/process"], ["About", "/about"], ["Gallery", "/gallery"], ["Contact", "/contact"]].map(([l, h]) => (
              <Link key={l} to={h} className="hover:text-[#c9a84c] transition-colors">{l.toUpperCase()}</Link>
            ))}
            <ChatWidget />
</div>
          <p className="text-gray-600 text-xs tracking-wide">© 2025 Avicam Gitlin Private Events</p>
          <ChatWidget />
</div>
      </footer>
      <ChatWidget />
</div>
  );
}
