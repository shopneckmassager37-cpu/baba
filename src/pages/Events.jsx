import { useState } from "react";
import { Link } from "react-router-dom";
const LOGO = "https://media.base44.com/images/public/69caab40b61d6ee7c5b75332/9d7fead75_generated_image.png";
const NAV = [["HOME","/"],["EVENTS","/events"],["HOW WE WORK","/process"],["ABOUT","/about"],["GALLERY","/gallery"],["CONTACT","/contact"]];
const events = [
  {title:"Destination Celebrations",tagline:"Life's greatest moments deserve an extraordinary stage.",desc:"We plan and produce destination celebrations that are as unique as the occasion itself. From the first conversation to the final toast, every element is curated with intention — the venue, the florals, the entertainment, the lighting, the flow of the day.",highlights:["Full destination event planning & design","Venue sourcing across 30+ countries","Accommodation & guest logistics","Day-of execution & full team management","Custom décor, florals & production","Entertainment, music & programming"],img:"https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=1200&q=80"},
  {title:"Milestone Celebrations",tagline:"Every milestone deserves to be remembered forever.",desc:"Whether it's a landmark birthday, an anniversary, a coming-of-age celebration, or a family reunion — we create events that honour the gravity and joy of the moment.",highlights:["Worldwide venue selection & curation","Complete event design & styling","Entertainment & live performance","Family accommodation coordination","Multi-day event programs","Bespoke personal touches throughout"],img:"https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=1200&q=80"},
  {title:"Corporate & VIP Events",tagline:"Your company's most important moments, elevated.",desc:"Executive retreats, product launches, incentive trips, and gala evenings — produced at the highest level, anywhere in the world, with the same standard of excellence and discretion.",highlights:["Executive retreats & private offsites","Product launches & brand activations","Incentive trips & reward experiences","Conference & gala evenings","VIP guest experiences & hospitality","Full production, AV & technical support"],img:"https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&q=80"},
  {title:"Private Villa Programs",tagline:"Weeks crafted entirely around your group.",desc:"We take over a stunning estate — in Tuscany, Greece, Morocco, the Caribbean — and build an entire week or more around your group with daily programming, excursions, and exceptional evenings.",highlights:["Full villa buyout & staffing","Daily curated programming & activities","Local excursions & experiences","Celebration evenings & special events","Multi-generational & friend groups","Custom themes & personalised touches"],img:"https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&q=80"},
  {title:"Sailing & Charter Events",tagline:"The sea as your venue.",desc:"Private sailing charters through crystal-clear Mediterranean waters — aboard a private yacht between Greek islands or along Croatia's iconic coastline. Secluded coves, sunset celebrations, vibrant evenings at sea.",highlights:["Private yacht & sailing charter events","Greek Islands & Adriatic Sea routes","Fully crewed & personalised itineraries","Onboard celebration programming","Perfect for couples, families & small groups","Day charters or multi-day voyages"],img:"https://images.unsplash.com/photo-1493854994231-2d87b09e3890?w=1200&q=80"},
  {title:"Heritage & Cultural Journeys",tagline:"Meaningful travel. Shared stories.",desc:"A powerful group event built around history, memory, and renewal. Travellers visit historic sites and cultural landmarks with expert educators — creating a shared experience that goes far beyond the ordinary.",highlights:["Expert historian & educator guides","Historic sites & cultural landmarks","Curated group programs & ceremonies","Meaningful and educational pacing","Comfortable accommodation & logistics","Ideal for families & heritage groups"],img:"https://images.unsplash.com/photo-1548013146-72479768bada?w=1200&q=80"}
];
export default function Events() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white" style={{fontFamily:"'Georgia','Times New Roman',serif"}}>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/95 backdrop-blur-md border-b border-[#c9a84c]/20">
        <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3"><img src={LOGO} className="h-12 w-12 object-contain"/><span className="text-xl tracking-[0.25em] text-[#c9a84c] font-light hidden sm:block">AVICAM GITLIN</span></Link>
          <div className="hidden md:flex gap-8 text-xs tracking-[0.2em] text-gray-300">{NAV.map(([l,h])=><Link key={l} to={h} className={`hover:text-[#c9a84c] transition-colors ${l==="EVENTS"?"text-[#c9a84c]":""}`}>{l}</Link>)}</div>
          <Link to="/contact" className="hidden md:block px-5 py-2 border border-[#c9a84c] text-[#c9a84c] text-xs tracking-[0.2em] hover:bg-[#c9a84c]/10 transition-colors">INQUIRE</Link>
          <button className="md:hidden text-gray-300 hover:text-[#c9a84c] p-1" onClick={()=>setMenuOpen(!menuOpen)}>
            {menuOpen
              ? <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
              : <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>}
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden bg-[#0a0a0a] border-t border-[#c9a84c]/10 px-6 py-4 flex flex-col gap-4">
            {[["HOME","/"],["EVENTS","/events"],["HOW WE WORK","/process"],["ABOUT","/about"],["GALLERY","/gallery"],["CONTACT","/contact"]].map(([l,h])=><Link key={l} to={h} onClick={()=>setMenuOpen(false)} className="text-gray-300 hover:text-[#c9a84c] transition-colors text-sm tracking-[0.2em] py-1">{l}</Link>)}
            <Link to="/contact" onClick={()=>setMenuOpen(false)} className="mt-2 px-5 py-3 border border-[#c9a84c] text-[#c9a84c] text-xs tracking-[0.2em] text-center hover:bg-[#c9a84c]/10 transition-colors">INQUIRE</Link>
          </div>
        )}
      </nav>
      <section className="relative pt-32 pb-24 px-6 text-center" style={{backgroundImage:"url('https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1920&q=80')",backgroundSize:"cover",backgroundPosition:"center"}}>
        <div className="absolute inset-0 bg-black/72"/>
        <div className="relative z-10 max-w-3xl mx-auto">
          <p className="text-[#c9a84c] tracking-[0.5em] text-xs mb-6">PRIVATE EVENTS WORLDWIDE</p>
          <h1 className="text-5xl md:text-6xl font-light mb-6">Events & Celebrations</h1>
          <div className="w-12 h-px bg-[#c9a84c] mx-auto mb-8"/>
          <p className="text-gray-400 text-lg font-light leading-relaxed">From intimate private gatherings to grand destination celebrations — every event is designed from scratch to be entirely, unmistakably yours.</p>
        </div>
      </section>
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto space-y-36">
          {events.map((ev,i)=>(
            <div key={i} className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              {i%2===0 ? (
                <>
                  <div className="overflow-hidden"><img src={ev.img} alt={ev.title} className="w-full h-[520px] object-cover hover:scale-105 transition-transform duration-700"/></div>
                  <div>
                    <p className="text-[#c9a84c] tracking-[0.4em] text-xs mb-4 italic">{ev.tagline}</p>
                    <h2 className="text-3xl md:text-4xl font-light mb-6">{ev.title}</h2>
                    <div className="w-10 h-px bg-[#c9a84c]/50 mb-6"/>
                    <p className="text-gray-400 font-light leading-relaxed mb-8">{ev.desc}</p>
                    <ul className="space-y-2 mb-10">{ev.highlights.map((d,j)=><li key={j} className="flex items-center gap-3 text-gray-300 text-sm font-light"><span className="w-1.5 h-1.5 rounded-full bg-[#c9a84c] flex-shrink-0"/>{d}</li>)}</ul>
                    <Link to="/contact" className="inline-block px-8 py-3 border border-[#c9a84c] text-[#c9a84c] text-xs tracking-[0.2em] hover:bg-[#c9a84c]/10 transition-colors">INQUIRE NOW</Link>
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <p className="text-[#c9a84c] tracking-[0.4em] text-xs mb-4 italic">{ev.tagline}</p>
                    <h2 className="text-3xl md:text-4xl font-light mb-6">{ev.title}</h2>
                    <div className="w-10 h-px bg-[#c9a84c]/50 mb-6"/>
                    <p className="text-gray-400 font-light leading-relaxed mb-8">{ev.desc}</p>
                    <ul className="space-y-2 mb-10">{ev.highlights.map((d,j)=><li key={j} className="flex items-center gap-3 text-gray-300 text-sm font-light"><span className="w-1.5 h-1.5 rounded-full bg-[#c9a84c] flex-shrink-0"/>{d}</li>)}</ul>
                    <Link to="/contact" className="inline-block px-8 py-3 border border-[#c9a84c] text-[#c9a84c] text-xs tracking-[0.2em] hover:bg-[#c9a84c]/10 transition-colors">INQUIRE NOW</Link>
                  </div>
                  <div className="overflow-hidden"><img src={ev.img} alt={ev.title} className="w-full h-[520px] object-cover hover:scale-105 transition-transform duration-700"/></div>
                </>
              )}
            </div>
          ))}
        </div>
      </section>
      <section className="relative py-28 px-6 text-center" style={{backgroundImage:"url('https://images.unsplash.com/photo-1510076857177-7470076d4098?w=1920&q=80')",backgroundSize:"cover",backgroundPosition:"center"}}>
        <div className="absolute inset-0 bg-black/75"/>
        <div className="relative z-10 max-w-xl mx-auto">
          <p className="text-[#c9a84c] tracking-[0.5em] text-xs mb-6">READY TO BEGIN?</p>
          <h2 className="text-4xl font-light mb-6">Let's Create Something Extraordinary</h2>
          <div className="w-10 h-px bg-[#c9a84c] mx-auto mb-8"/>
          <Link to="/contact" className="inline-block px-12 py-4 bg-[#c9a84c] text-black text-xs tracking-[0.3em] hover:bg-[#e0c070] transition-colors font-semibold">START THE CONVERSATION</Link>
        </div>
      </section>
      <footer className="bg-[#070707] border-t border-[#c9a84c]/15 py-8 px-6 text-center">
        <p className="text-gray-600 text-xs">© 2025 Avicam Gitlin Private Events. All rights reserved.</p>
      </footer>
    </div>
  );
}
