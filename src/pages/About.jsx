import { Link } from "react-router-dom";
const LOGO = "https://media.base44.com/images/public/69caab40b61d6ee7c5b75332/9d7fead75_generated_image.png";
const AVICAM = "https://base44.app/api/apps/69caab40b61d6ee7c5b75332/files/mp/public/69caab40b61d6ee7c5b75332/129dab6d3_avicam_photo.jpg";
const CHEF = "https://base44.app/api/apps/69caab40b61d6ee7c5b75332/files/mp/public/69caab40b61d6ee7c5b75332/14656185e_chef_photo.jpg";
const NAV = [["HOME","/"],["EVENTS","/events"],["HOW WE WORK","/process"],["ABOUT","/about"],["GALLERY","/gallery"],["CONTACT","/contact"]];
export default function About() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white" style={{fontFamily:"'Georgia','Times New Roman',serif"}}>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/95 backdrop-blur-md border-b border-[#c9a84c]/20">
        <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3"><img src={LOGO} className="h-12 w-12 object-contain"/><span className="text-xl tracking-[0.25em] text-[#c9a84c] font-light hidden sm:block">AVICAM GITLIN</span></Link>
          <div className="hidden md:flex gap-8 text-xs tracking-[0.2em] text-gray-300">{NAV.map(([l,h])=><Link key={l} to={h} className={`hover:text-[#c9a84c] transition-colors ${l==="ABOUT"?"text-[#c9a84c]":""}`}>{l}</Link>)}</div>
          <Link to="/contact" className="hidden md:block px-5 py-2 border border-[#c9a84c] text-[#c9a84c] text-xs tracking-[0.2em] hover:bg-[#c9a84c]/10 transition-colors">INQUIRE</Link>
        </div>
      </nav>
      <section className="relative overflow-hidden" style={{minHeight:"85vh"}}>
        <img src={AVICAM} className="w-full h-full object-cover object-top absolute inset-0" style={{minHeight:"85vh"}} onError={e=>{e.target.src=CHEF}}/>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-[#0a0a0a]"/>
        <div className="relative z-10 flex items-end min-h-[85vh] pb-20 px-6">
          <div className="max-w-4xl">
            <p className="text-[#c9a84c] tracking-[0.6em] text-xs mb-5">THE PERSON BEHIND THE EXPERIENCE</p>
            <h1 className="text-6xl md:text-8xl font-light leading-none mb-4">Avicam Gitlin</h1>
            <p className="text-gray-300 text-xl font-light tracking-widest">Event Architect · Travel Curator · Private Producer</p>
          </div>
        </div>
      </section>
      <section className="py-28 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-start">
          <div>
            <p className="text-[#c9a84c] tracking-[0.4em] text-xs mb-6">THE BEGINNING</p>
            <h2 className="text-3xl md:text-4xl font-light mb-8 leading-relaxed">Where passion meets purpose.</h2>
            <div className="w-10 h-px bg-[#c9a84c]/40 mb-8"/>
            <p className="text-gray-400 font-light leading-relaxed mb-6">Avicam Gitlin has spent over 15 years turning extraordinary visions into unforgettable realities. His journey began with a simple but powerful belief: that the world's most beautiful places deserve to be the backdrop for the world's most meaningful moments.</p>
            <p className="text-gray-400 font-light leading-relaxed mb-6">From the rolling hills of Tuscany to the crystal waters of the Greek Islands, from Alpine chalets to Moroccan palaces — Avicam has produced events in some of the world's most spectacular settings, for clients who demand nothing less than perfection.</p>
            <p className="text-gray-400 font-light leading-relaxed italic border-l-2 border-[#c9a84c]/40 pl-4">"Every event I create is personal to me. I read every inquiry myself and respond personally."</p>
          </div>
          <div className="relative">
            <img src={CHEF} className="w-full h-[580px] object-cover" onError={e=>{e.target.src="https://images.unsplash.com/photo-1507048331197-7d4ac70811cf?w=800&q=80"}}/>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 border border-[#c9a84c]/30 pointer-events-none"/>
          </div>
        </div>
      </section>
      <section className="py-28 px-6 bg-[#0d0d0d]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#c9a84c] tracking-[0.4em] text-xs mb-4">THE PHILOSOPHY</p>
            <h2 className="text-3xl md:text-4xl font-light">What Drives Every Decision</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[{icon:"✦",title:"Bespoke by Nature",text:"No two events are the same, because no two clients are the same. Every event is built from scratch around your vision, your story, and your guests."},{icon:"◆",title:"No Compromises",text:"Every detail is held to the highest standard — from the grandest gesture to the smallest touch. Nothing generic. Nothing off-the-shelf. Everything intentional."},{icon:"🌍",title:"The World as Your Venue",text:"A Tuscan hillside at sunset, a yacht deck, a lantern-lit courtyard in Marrakech — the world's most beautiful places are available. You just need the right person to open the door."}].map((p,i)=>(
              <div key={i} className="text-center px-4">
                <div className="text-4xl mb-6">{p.icon}</div>
                <h3 className="text-lg font-light mb-4 text-[#c9a84c] tracking-wide">{p.title}</h3>
                <div className="w-8 h-px bg-[#c9a84c]/30 mx-auto mb-4"/>
                <p className="text-gray-400 font-light leading-relaxed text-sm">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-28 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="text-[#c9a84c] text-6xl font-light mb-6">"</div>
          <p className="text-2xl md:text-3xl font-light leading-relaxed text-gray-300 italic mb-10">I am excited to provide people with the opportunity to experience the world in the most extraordinary settings. Each event is a new opportunity to explore, to create, and to share something genuinely unforgettable.</p>
          <div className="w-10 h-px bg-[#c9a84c] mx-auto mb-6"/>
          <p className="text-[#c9a84c] tracking-[0.4em] text-xs">— AVICAM GITLIN</p>
        </div>
      </section>
      <section className="py-24 px-6 bg-[#0d0d0d]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[#c9a84c] tracking-[0.4em] text-xs mb-4">EXPERTISE & REACH</p>
            <h2 className="text-3xl font-light mb-10">Built Over a Decade.<br/>Refined Through Every Event.</h2>
            <ul className="space-y-4">
              {["15+ years producing private events worldwide","Destination celebrations & family milestones","Private villa programs & multi-week event stays","Global network of venues, vendors & local partners","Personal, hands-on approach from concept to execution","Relationships with extraordinary venues in 30+ countries","Sailing & charter event production across the Mediterranean","Corporate & VIP event management at the highest level"].map((item,i)=>(
                <li key={i} className="flex items-start gap-4 text-gray-400 text-sm font-light border-b border-gray-800 pb-4">
                  <span className="text-[#c9a84c] mt-0.5">→</span>{item}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <img src={AVICAM} className="w-full h-[640px] object-cover object-top" onError={e=>{e.target.src="https://images.unsplash.com/photo-1507048331197-7d4ac70811cf?w=800&q=80"}}/>
            <div className="absolute top-4 right-4 border border-[#c9a84c]/30 w-24 h-24 pointer-events-none"/>
          </div>
        </div>
      </section>
      <section className="relative py-28 px-6 text-center" style={{backgroundImage:"url('https://images.unsplash.com/photo-1510076857177-7470076d4098?w=1920&q=80')",backgroundSize:"cover",backgroundPosition:"center"}}>
        <div className="absolute inset-0 bg-black/75"/>
        <div className="relative z-10 max-w-xl mx-auto">
          <p className="text-[#c9a84c] tracking-[0.5em] text-xs mb-6">LET'S WORK TOGETHER</p>
          <h2 className="text-4xl font-light mb-6">Begin Your Journey</h2>
          <div className="w-10 h-px bg-[#c9a84c] mx-auto mb-8"/>
          <Link to="/contact" className="inline-block px-12 py-4 bg-[#c9a84c] text-black text-xs tracking-[0.3em] hover:bg-[#e0c070] transition-colors font-semibold">GET IN TOUCH</Link>
        </div>
      </section>
      <footer className="bg-[#070707] border-t border-[#c9a84c]/15 py-8 px-6 text-center">
        <p className="text-gray-600 text-xs">© 2025 Avicam Gitlin Private Events. All rights reserved.</p>
      </footer>
    </div>
  );
}
