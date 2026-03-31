import ChatWidget from "./ChatWidget";
import { Link } from "react-router-dom";

const LOGO = "https://media.base44.com/images/public/69caab40b61d6ee7c5b75332/9d7fead75_generated_image.png";
const NAV = [["HOME","/"],["EVENTS","/events"],["HOW WE WORK","/process"],["ABOUT","/about"],["CONTACT","/contact"]];

function Navbar({ active }) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/95 backdrop-blur-md border-b border-[#c9a84c]/20">
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
    <footer className="bg-[#070707] border-t border-[#c9a84c]/15 pt-14 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={LOGO} alt="logo" className="h-10 w-10 object-contain" />
              <span className="text-[#c9a84c] text-base tracking-[0.3em] font-light">AVICAM GITLIN</span>
            </div>
            <p className="text-gray-500 text-sm font-light leading-relaxed">Bespoke private events and extraordinary celebrations, crafted for discerning individuals worldwide.</p>
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

const events = [
  {
    title: "Weddings & Destination Celebrations",
    tagline: "The most important day of your life deserves the most extraordinary setting.",
    description: "We plan and produce destination weddings that are as unique as your love story. From the first conversation to the final dance, every element is curated — the venue, the florals, the entertainment, the lighting, the flow of the day. Intimate ceremonies in Tuscan villas, Greek island estates, Swiss chalet retreats, and beyond.",
    highlights: ["Full destination wedding planning & design","Venue sourcing across 30+ countries","Accommodation & guest logistics","Day-of execution & full team management","Custom décor, florals & production","Entertainment, music & live performance"],
    img: "https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&q=80"
  },
  {
    title: "Bar & Bat Mitzvahs",
    tagline: "A milestone this meaningful deserves a celebration to match.",
    description: "We create Bar and Bat Mitzvah celebrations that honour the significance of the moment while creating an unforgettable experience for the whole family. Whether in your hometown or a dream destination, we handle every element from venue to entertainment to guest experience.",
    highlights: ["Destination & local Bar/Bat Mitzvah planning","Complete venue selection & design","Entertainment, DJ & live performances","Customised guest experience programs","Family accommodation coordination","Multi-day celebration programs"],
    img: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=1200&q=80"
  },
  {
    title: "Fundraising Galas & Charity Events",
    tagline: "Events that inspire generosity and leave a lasting impact.",
    description: "We produce high-impact fundraising galas and charity events that combine compelling storytelling, exceptional production, and genuine atmosphere. From intimate donor dinners to grand ballroom galas, we help organisations raise more by creating events people truly want to attend.",
    highlights: ["Gala event design & production","Auction programming & donor engagement","Entertainment & keynote coordination","Venue selection & full logistics","Sponsorship display & branding","Silent & live auction management"],
    img: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1200&q=80"
  },
  {
    title: "Corporate & Executive Events",
    tagline: "Your company's most important moments, elevated.",
    description: "We produce high-end corporate events and executive gatherings that leave lasting impressions. Executive retreats in private Alpine chalets, product launch evenings, incentive trips, and gala dinners — we bring the same standard of excellence and discretion to every corporate engagement.",
    highlights: ["Executive retreats & private offsites","Product launches & brand activations","Incentive trips & reward experiences","Conference & gala evenings","VIP guest hospitality","Full production, AV & technical support"],
    img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&q=80"
  },
  {
    title: "VIP & Private Milestone Events",
    tagline: "Every milestone deserves to be remembered forever.",
    description: "Landmark birthdays, anniversaries, retirement celebrations, and family reunions — we create private events that honour the gravity and joy of the moment. From intimate gatherings of 20 to grand celebrations of 200, every detail is handled so you can be fully present.",
    highlights: ["Worldwide venue selection & curation","Complete event design & styling","Entertainment & live performance","Multi-day event programs available","Bespoke personal touches throughout","Families, couples & friend groups"],
    img: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=1200&q=80"
  },
  {
    title: "Heritage & Cultural Journeys",
    tagline: "Meaningful travel. Shared stories. Lasting bonds.",
    description: "A powerful group event built around history, memory, and renewal. Participants visit historic sites and cultural landmarks with expert educators — creating a shared experience that goes far beyond the ordinary. Thoughtfully paced, deeply meaningful, and beautifully produced.",
    highlights: ["Expert historian & educator guides","Historic sites & cultural landmarks","Curated group programs & ceremonies","Meaningful and educational pacing","Comfortable accommodation & logistics","Ideal for families & heritage groups"],
    img: "https://images.unsplash.com/photo-1548013146-72479768bada?w=1200&q=80"
  }
];

export default function Events() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white" style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}>
      <Navbar active="EVENTS" />

      {/* Hero */}
      <section className="relative pt-32 pb-24 px-6 text-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&q=80')", backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="absolute inset-0 bg-black/72" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <p className="text-[#c9a84c] tracking-[0.5em] text-xs mb-6">PRIVATE EVENTS WORLDWIDE</p>
          <h1 className="text-5xl md:text-6xl font-light mb-6">Events & Celebrations</h1>
          <div className="w-12 h-px bg-[#c9a84c] mx-auto mb-8" />
          <p className="text-gray-400 text-lg font-light leading-relaxed max-w-2xl mx-auto">
            From intimate private gatherings to grand destination celebrations —
            every event is designed from scratch to be entirely, unmistakably yours.
          </p>
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
                    <img src={ev.img} alt={ev.title} className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-700" />
                  </div>
                  <div>
                    <p className="text-[#c9a84c] tracking-[0.4em] text-xs mb-4 italic">{ev.tagline}</p>
                    <h2 className="text-3xl md:text-4xl font-light mb-6">{ev.title}</h2>
                    <div className="w-10 h-px bg-[#c9a84c]/50 mb-6" />
                    <p className="text-gray-400 font-light leading-relaxed mb-8">{ev.description}</p>
                    <ul className="space-y-2 mb-10">
                      {ev.highlights.map((d,j) => (
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
                    <p className="text-[#c9a84c] tracking-[0.4em] text-xs mb-4 italic">{ev.tagline}</p>
                    <h2 className="text-3xl md:text-4xl font-light mb-6">{ev.title}</h2>
                    <div className="w-10 h-px bg-[#c9a84c]/50 mb-6" />
                    <p className="text-gray-400 font-light leading-relaxed mb-8">{ev.description}</p>
                    <ul className="space-y-2 mb-10">
                      {ev.highlights.map((d,j) => (
                        <li key={j} className="flex items-center gap-3 text-gray-300 text-sm font-light">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#c9a84c] flex-shrink-0" />{d}
                        </li>
                      ))}
                    </ul>
                    <Link to="/contact" className="inline-block px-8 py-3 border border-[#c9a84c] text-[#c9a84c] text-xs tracking-[0.2em] hover:bg-[#c9a84c]/10 transition-colors">INQUIRE NOW</Link>
                  </div>
                  <div className="overflow-hidden">
                    <img src={ev.img} alt={ev.title} className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-700" />
                  </div>
                </>
              )}
            </div>
          ))}
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
        </div>
      </section>

      <Footer />
      <ChatWidget />
    </div>
  );
}
