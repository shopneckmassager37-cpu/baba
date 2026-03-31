import { Link } from "react-router-dom";
const LOGO = "https://media.base44.com/images/public/69caab40b61d6ee7c5b75332/9d7fead75_generated_image.png";
const NAV = [["HOME","/"],["EVENTS","/events"],["HOW WE WORK","/process"],["ABOUT","/about"],["GALLERY","/gallery"],["CONTACT","/contact"]];
const steps = [
  {n:"01",title:"The First Conversation",desc:"Everything begins with a personal conversation — no forms, no templates. Avicam listens to your vision, your story, and what you want your event to feel like.",detail:"We take the time to understand who you are, who your guests are, and what this event means to you."},
  {n:"02",title:"Vision & Concept",desc:"We develop a bespoke concept document — a creative direction for your event capturing the mood, the aesthetic, the flow, and the experience we want to create.",detail:"A tailored vision built specifically around your event, complete with venue suggestions, design direction, and programming ideas."},
  {n:"03",title:"Venue & Destination",desc:"We source and secure the right venue — a private estate in Tuscany, a hilltop villa in Greece, a luxury resort in Morocco, or an exclusive urban space in 30+ countries.",detail:"For destination events, we also handle all guest logistics: accommodation, travel coordination, and ground arrangements."},
  {n:"04",title:"Design & Production",desc:"We build the full event experience — décor, florals, lighting, entertainment, music, and every creative detail that transforms a space into something extraordinary.",detail:"We work with the world's best vendors and local artisans to ensure the aesthetics are perfect and authentic."},
  {n:"05",title:"The Day Itself",desc:"On the day, Avicam and his team are on the ground managing every detail so you can be entirely present with your guests.",detail:"You'll be living the experience we built together, surrounded by the people you love, in a setting that takes your breath away."},
  {n:"06",title:"After the Event",desc:"Our relationship doesn't end when the event does. We follow up personally and begin planning for your next extraordinary moment.",detail:"Many of our clients come back year after year — for anniversaries, birthdays, family gatherings, and new milestones."}
];
const values = [
  {icon:"◆",title:"Absolute Discretion",text:"Our clients trust us with their most personal moments. We operate with complete confidentiality."},
  {icon:"◆",title:"Genuinely Personal",text:"Avicam is personally involved in every event from concept to execution. You'll never be handed off."},
  {icon:"◆",title:"No Compromises",text:"Every detail is held to the highest standard — from the grandest gesture to the smallest touch."},
  {icon:"◆",title:"Global Reach",text:"15+ years producing events across 30+ countries. We have the relationships to create events anywhere."}
];
export default function Process() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white" style={{fontFamily:"'Georgia','Times New Roman',serif"}}>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/95 backdrop-blur-md border-b border-[#c9a84c]/20">
        <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3"><img src={LOGO} className="h-12 w-12 object-contain"/><span className="text-xl tracking-[0.25em] text-[#c9a84c] font-light hidden sm:block">AVICAM GITLIN</span></Link>
          <div className="hidden md:flex gap-8 text-xs tracking-[0.2em] text-gray-300">{NAV.map(([l,h])=><Link key={l} to={h} className={`hover:text-[#c9a84c] transition-colors ${l==="HOW WE WORK"?"text-[#c9a84c]":""}`}>{l}</Link>)}</div>
          <Link to="/contact" className="hidden md:block px-5 py-2 border border-[#c9a84c] text-[#c9a84c] text-xs tracking-[0.2em] hover:bg-[#c9a84c]/10 transition-colors">INQUIRE</Link>
        </div>
      </nav>
      <section className="relative pt-32 pb-28 px-6 text-center" style={{backgroundImage:"url('https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=1920&q=80')",backgroundSize:"cover",backgroundPosition:"center"}}>
        <div className="absolute inset-0 bg-black/78"/>
        <div className="relative z-10 max-w-3xl mx-auto">
          <p className="text-[#c9a84c] tracking-[0.5em] text-xs mb-6">THE PROCESS</p>
          <h1 className="text-5xl md:text-6xl font-light mb-6">How We Work</h1>
          <div className="w-12 h-px bg-[#c9a84c] mx-auto mb-8"/>
          <p className="text-gray-400 text-lg font-light leading-relaxed max-w-2xl mx-auto">Every extraordinary event starts long before the day itself. Here's how we take an idea from vision to reality — personally, meticulously, and without compromise.</p>
        </div>
      </section>
      <section className="py-28 px-6">
        <div className="max-w-5xl mx-auto">
          {steps.map((step,i)=>(
            <div key={i} className="grid grid-cols-1 md:grid-cols-[140px_1fr] gap-8 md:gap-16 py-16 border-b border-[#c9a84c]/10 last:border-0">
              <div className="flex flex-col items-start md:items-end pt-1"><span className="text-5xl font-light text-[#c9a84c]/25 leading-none">{step.n}</span></div>
              <div>
                <h2 className="text-2xl md:text-3xl font-light mb-4">{step.title}</h2>
                <div className="w-8 h-px bg-[#c9a84c]/40 mb-5"/>
                <p className="text-gray-300 font-light leading-relaxed mb-4">{step.desc}</p>
                <p className="text-gray-500 font-light leading-relaxed text-sm italic">{step.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="py-28 px-6 bg-[#0d0d0d]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16"><p className="text-[#c9a84c] tracking-[0.4em] text-xs mb-4">WHAT WE STAND FOR</p><h2 className="text-3xl md:text-4xl font-light">Our Commitments to You</h2></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#c9a84c]/10">
            {values.map((v,i)=>(
              <div key={i} className="bg-[#0d0d0d] p-10 hover:bg-[#111] transition-colors">
                <div className="text-[#c9a84c] text-xs mb-5">{v.icon}</div>
                <h3 className="text-xl font-light mb-4 tracking-wide">{v.title}</h3>
                <div className="w-8 h-px bg-[#c9a84c]/30 mb-5"/>
                <p className="text-gray-400 font-light leading-relaxed text-sm">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="relative py-32 px-6 text-center" style={{backgroundImage:"url('https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1920&q=80')",backgroundSize:"cover",backgroundAttachment:"fixed",backgroundPosition:"center"}}>
        <div className="absolute inset-0 bg-black/78"/>
        <div className="relative z-10 max-w-3xl mx-auto">
          <div className="text-[#c9a84c] text-5xl font-light mb-6">"</div>
          <p className="text-2xl md:text-3xl font-light text-gray-200 leading-relaxed italic mb-8">I read every inquiry personally. I am involved in every decision. And I will not rest until the event we've built together exceeds everything you imagined.</p>
          <div className="w-10 h-px bg-[#c9a84c] mx-auto mb-6"/>
          <p className="text-[#c9a84c] tracking-[0.4em] text-xs">— AVICAM GITLIN</p>
        </div>
      </section>
      <section className="relative py-28 px-6 text-center" style={{backgroundImage:"url('https://images.unsplash.com/photo-1510076857177-7470076d4098?w=1920&q=80')",backgroundSize:"cover",backgroundPosition:"center"}}>
        <div className="absolute inset-0 bg-black/75"/>
        <div className="relative z-10 max-w-xl mx-auto">
          <p className="text-[#c9a84c] tracking-[0.5em] text-xs mb-6">READY TO BEGIN?</p>
          <h2 className="text-4xl font-light mb-6">Let's Start the Conversation</h2>
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
