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
    <div className="min-h-screen bg-[#161616] text-white" style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}>
      <ScrollToTop />
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
      <section className="py-28 px-6 bg-[#1a1a1a] text-center">
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