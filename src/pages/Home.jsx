import { Link } from "react-router-dom";
const LOGO = "https://media.base44.com/images/public/69caab40b61d6ee7c5b75332/9d7fead75_generated_image.png";
const AVICAM = "https://base44.app/api/apps/69caab40b61d6ee7c5b75332/files/mp/public/69caab40b61d6ee7c5b75332/129dab6d3_avicam_photo.jpg";
const CHEF = "https://base44.app/api/apps/69caab40b61d6ee7c5b75332/files/mp/public/69caab40b61d6ee7c5b75332/14656185e_chef_photo.jpg";
const NAV = [["HOME","/"],["EVENTS","/events"],["HOW WE WORK","/process"],["ABOUT","/about"],["GALLERY","/gallery"],["CONTACT","/contact"]];
const dests = [{name:"Tuscany",img:"https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=800&q=80"},{name:"Greek Islands",img:"https://images.unsplash.com/photo-1533105079780-92b9be482077?w=800&q=80"},{name:"Swiss Alps",img:"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80"},{name:"Morocco",img:"https://images.unsplash.com/photo-1539020140153-e479b8c22e70?w=800&q=80"},{name:"Amalfi Coast",img:"https://images.unsplash.com/photo-1510076857177-7470076d4098?w=800&q=80"},{name:"Caribbean",img:"https://images.unsplash.com/photo-1548013146-72479768bada?w=800&q=80"}];
export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white" style={{fontFamily:"'Georgia','Times New Roman',serif"}}>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/95 backdrop-blur-md border-b border-[#c9a84c]/20">
        <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3"><img src={LOGO} className="h-12 w-12 object-contain"/><span className="text-xl tracking-[0.25em] text-[#c9a84c] font-light hidden sm:block">AVICAM GITLIN</span></Link>
          <div className="hidden md:flex gap-8 text-xs tracking-[0.2em] text-gray-300">{NAV.map(([l,h])=><Link key={l} to={h} className={`hover:text-[#c9a84c] transition-colors ${l==="HOME"?"text-[#c9a84c]":""}`}>{l}</Link>)}</div>
          <Link to="/contact" className="hidden md:block px-5 py-2 border border-[#c9a84c] text-[#c9a84c] text-xs tracking-[0.2em] hover:bg-[#c9a84c]/10 transition-colors">INQUIRE</Link>
        </div>
      </nav>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage:`url('https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1920&q=80')`}}/>
        <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/45 to-[#0a0a0a]"/>
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <p className="text-[#c9a84c] tracking-[0.6em] text-xs mb-6 font-light">PRIVATE EVENTS · BESPOKE CELEBRATIONS · WORLDWIDE</p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light leading-tight mb-8 tracking-wide">Your Moment.<br/><span className="text-[#c9a84c] italic">Crafted to Perfection.</span></h1>
          <p className="text-gray-300 text-lg md:text-xl font-light leading-relaxed mb-12 max-w-2xl mx-auto">Destination celebrations, milestone events, corporate retreats, and private villa programs — designed exclusively for those who demand the extraordinary.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="px-10 py-4 bg-[#c9a84c] text-black text-xs tracking-[0.3em] hover:bg-[#e0c070] transition-colors font-semibold">BEGIN YOUR JOURNEY</Link>
            <Link to="/events" className="px-10 py-4 border border-white/40 text-white text-xs tracking-[0.3em] hover:border-[#c9a84c] hover:text-[#c9a84c] transition-colors">EXPLORE EVENTS</Link>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-gray-500 text-xs tracking-widest">SCROLL</span>
          <div className="w-px h-12 bg-gradient-to-b from-[#c9a84c] to-transparent"/>
        </div>
      </section>
      {/* GOLD STRIP */}
      <div className="bg-[#c9a84c] py-3 overflow-hidden whitespace-nowrap">
        <div className="inline-flex gap-0">
          {["Destination Events","Milestone Celebrations","Corporate Retreats","Villa Programs","Sailing Events","Heritage Journeys","VIP Experiences","Cultural Journeys"].map((t,i)=>(
            <span key={i} className="text-black text-xs tracking-[0.3em] whitespace-nowrap px-8">✦ {t.toUpperCase()}</span>
          ))}
        </div>
      </div>
      {/* INTRO */}
      <section className="py-28 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-[#c9a84c] tracking-[0.5em] text-xs mb-8">THE AVICAM GITLIN DIFFERENCE</p>
          <h2 className="text-3xl md:text-5xl font-light leading-relaxed mb-10">Every event is a once-in-a-lifetime experience.<br/><span className="text-gray-500">We treat it that way.</span></h2>
          <div className="w-16 h-px bg-[#c9a84c] mx-auto mb-10"/>
          <p className="text-gray-400 text-lg font-light leading-relaxed max-w-3xl mx-auto">With over a decade producing bespoke private events across the world's most spectacular destinations, Avicam Gitlin brings unmatched expertise, impeccable discretion, and a deeply personal touch to every celebration — from intimate gatherings to grand destination events.</p>
        </div>
      </section>
      {/* EVENT TYPES */}
      <section className="pb-20 px-6 bg-[#0d0d0d]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 pt-20">
            <p className="text-[#c9a84c] tracking-[0.4em] text-xs mb-4">WHAT WE CREATE</p>
            <h2 className="text-3xl md:text-4xl font-light">Private Events of Every Kind</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
            {[{title:"Destination Celebrations",desc:"Celebrate life's greatest milestones in the world's most breathtaking settings — Tuscany, Greek islands, Swiss Alps, and beyond.",img:"https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80"},{title:"Corporate & VIP Events",desc:"Executive retreats, product launches, incentive trips, and gala evenings — produced at the highest level, anywhere in the world.",img:"https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80"},{title:"Private Villa Programs",desc:"A full week or more in a stunning private estate, with every day programmed, every evening memorable, every detail considered.",img:"https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80"}].map((s,i)=>(
              <Link key={i} to="/events" className="group relative overflow-hidden block" style={{height:"460px"}}>
                <img src={s.img} alt={s.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"/>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"/>
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-xl font-light tracking-wide mb-3">{s.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4 font-light">{s.desc}</p>
                  <span className="text-[#c9a84c] text-xs tracking-[0.3em] border-b border-[#c9a84c]/40 pb-1">EXPLORE →</span>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8"><Link to="/events" className="inline-block px-10 py-4 border border-[#c9a84c]/40 text-[#c9a84c] text-xs tracking-[0.3em] hover:bg-[#c9a84c]/10 transition-colors">VIEW ALL EVENTS</Link></div>
        </div>
      </section>
      {/* STATS */}
      <section className="py-20 px-6 border-y border-[#c9a84c]/10">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[{num:"15+",label:"Years of Excellence"},{num:"500+",label:"Events Worldwide"},{num:"30+",label:"Destinations"},{num:"100%",label:"Bespoke"}].map((s,i)=>(
            <div key={i}><div className="text-4xl md:text-5xl text-[#c9a84c] font-light mb-2">{s.num}</div><div className="text-gray-500 text-xs tracking-[0.3em]">{s.label}</div></div>
          ))}
        </div>
      </section>
      {/* DESTINATIONS */}
      <section className="py-28 px-6 bg-[#0d0d0d]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#c9a84c] tracking-[0.4em] text-xs mb-4">WHERE WE WORK</p>
            <h2 className="text-3xl md:text-4xl font-light">Our World</h2>
            <div className="w-12 h-px bg-[#c9a84c] mx-auto mt-6"/>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-1">
            {dests.map((d,i)=>(
              <div key={i} className="group relative overflow-hidden" style={{height:"280px"}}>
                <img src={d.img} alt={d.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"/>
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"/>
                <div className="absolute inset-0 flex items-end p-6"><p className="text-white text-lg font-light tracking-[0.2em]">{d.name.toUpperCase()}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* MEET AVICAM */}
      <section className="py-28 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div>
            <p className="text-[#c9a84c] tracking-[0.4em] text-xs mb-6">MEET AVICAM</p>
            <h2 className="text-3xl md:text-4xl font-light leading-tight mb-8">The person behind<br/>every extraordinary event.</h2>
            <div className="w-10 h-px bg-[#c9a84c]/50 mb-8"/>
            <p className="text-gray-400 font-light leading-relaxed mb-6">Avicam Gitlin is a private event producer and travel curator with over 15 years of experience creating bespoke celebrations across the world's most spectacular destinations.</p>
            <p className="text-gray-400 font-light leading-relaxed mb-10">His philosophy: every event is personal, every detail matters, and the world is your venue. From Alpine chalets to Mediterranean coastlines — wherever you envision your celebration, Avicam makes it happen.</p>
            <Link to="/about" className="inline-block px-8 py-3 border border-[#c9a84c] text-[#c9a84c] text-xs tracking-[0.2em] hover:bg-[#c9a84c]/10 transition-colors">MEET AVICAM</Link>
          </div>
          <div className="relative">
            <img src={AVICAM} className="w-full h-[600px] object-cover object-top" onError={e=>{e.target.src=CHEF}}/>
            <div className="absolute bottom-6 left-6 bg-black/70 backdrop-blur-sm border border-[#c9a84c]/30 px-5 py-3">
              <p className="text-[#c9a84c] text-xs tracking-[0.3em]">AVICAM GITLIN</p>
              <p className="text-gray-400 text-xs mt-0.5">Private Event Producer</p>
            </div>
          </div>
        </div>
      </section>
      {/* TESTIMONIALS */}
      <section className="py-24 px-6 bg-[#0d0d0d]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16"><p className="text-[#c9a84c] tracking-[0.4em] text-xs mb-4">CLIENT EXPERIENCES</p><h2 className="text-3xl font-light">Words from Those Who Were There</h2></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[{quote:"Avicam didn't just plan our event — he created a memory that our family will carry forever. Every detail was perfect.",name:"Sarah M.",event:"Destination Celebration, Tuscany"},{quote:"The level of care and attention Avicam brought to our corporate retreat was extraordinary. Our clients were genuinely moved.",name:"Jonathan R.",event:"Corporate Retreat, Swiss Alps"},{quote:"We've worked with many event producers. None come close to Avicam's combination of vision, taste, and personal commitment.",name:"The Klein Family",event:"Private Villa Program, Greece"}].map((t,i)=>(
              <div key={i} className="border border-[#c9a84c]/15 p-8 bg-[#0a0a0a]">
                <div className="text-[#c9a84c] text-3xl font-light mb-4">"</div>
                <p className="text-gray-400 font-light leading-relaxed italic mb-6 text-sm">{t.quote}</p>
                <div className="border-t border-[#c9a84c]/15 pt-4"><p className="text-white text-sm font-light">{t.name}</p><p className="text-gray-600 text-xs mt-1">{t.event}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA */}
      <section className="relative py-32 px-6 text-center" style={{backgroundImage:"url('https://images.unsplash.com/photo-1510076857177-7470076d4098?w=1920&q=80')",backgroundSize:"cover",backgroundPosition:"center"}}>
        <div className="absolute inset-0 bg-black/75"/>
        <div className="relative z-10 max-w-2xl mx-auto">
          <p className="text-[#c9a84c] tracking-[0.5em] text-xs mb-6">LET'S CREATE TOGETHER</p>
          <h2 className="text-4xl md:text-6xl font-light mb-6">Ready to Begin?</h2>
          <div className="w-12 h-px bg-[#c9a84c] mx-auto mb-8"/>
          <p className="text-gray-300 font-light mb-12 text-lg">Every extraordinary event starts with a single conversation.<br/>Tell us your vision — we'll handle the rest.</p>
          <Link to="/contact" className="inline-block px-14 py-5 bg-[#c9a84c] text-black text-xs tracking-[0.4em] hover:bg-[#e0c070] transition-colors font-semibold">START THE CONVERSATION</Link>
        </div>
      </section>
      {/* FOOTER */}
      <footer className="bg-[#070707] border-t border-[#c9a84c]/15 pt-16 pb-8 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-5"><img src={LOGO} className="h-10 w-10 object-contain"/><span className="text-[#c9a84c] text-lg tracking-[0.3em] font-light">AVICAM GITLIN</span></div>
            <p className="text-gray-500 text-sm font-light leading-relaxed max-w-sm">Bespoke private events and extraordinary celebrations, crafted for discerning individuals worldwide.</p>
          </div>
          <div>
            <p className="text-gray-500 text-xs tracking-[0.3em] mb-5">NAVIGATION</p>
            <div className="flex flex-col gap-3">{NAV.map(([l,h])=><Link key={l} to={h} className="text-gray-500 text-sm font-light hover:text-[#c9a84c] transition-colors">{l}</Link>)}</div>
          </div>
          <div>
            <p className="text-gray-500 text-xs tracking-[0.3em] mb-5">CONTACT</p>
            <div className="space-y-3 text-gray-500 text-sm font-light"><p>+1 (347) 994-9284</p><p className="text-xs break-all">avicam@kosherculinarytravel.com</p></div>
            <div className="flex gap-3 mt-5">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="border border-[#c9a84c]/30 px-3 py-2 text-xs text-gray-500 hover:border-[#c9a84c] hover:text-[#c9a84c] transition-colors">INSTAGRAM</a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="border border-[#c9a84c]/30 px-3 py-2 text-xs text-gray-500 hover:border-[#c9a84c] hover:text-[#c9a84c] transition-colors">FACEBOOK</a>
            </div>
          </div>
        </div>
        <div className="border-t border-[#c9a84c]/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-gray-600 text-xs">© 2025 Avicam Gitlin Private Events. All rights reserved.</p>
          <Link to="/terms" className="text-gray-600 text-xs hover:text-[#c9a84c] transition-colors">Terms & Conditions</Link>
        </div>
      </footer>
    </div>
  );
}
