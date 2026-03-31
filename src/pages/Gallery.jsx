import { useState } from "react";
import { Link } from "react-router-dom";
const LOGO = "https://media.base44.com/images/public/69caab40b61d6ee7c5b75332/9d7fead75_generated_image.png";
const NAV = [["HOME","/"],["EVENTS","/events"],["HOW WE WORK","/process"],["ABOUT","/about"],["GALLERY","/gallery"],["CONTACT","/contact"]];
const cats = ["ALL","CELEBRATIONS","TRAVEL","CORPORATE"];
const items = [
  {cat:"CELEBRATIONS",img:"https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80",caption:"Destination Celebration · Tuscany"},
  {cat:"TRAVEL",img:"https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=800&q=80",caption:"Villa Program · Tuscany"},
  {cat:"CELEBRATIONS",img:"https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=800&q=80",caption:"Milestone Event · Destination"},
  {cat:"TRAVEL",img:"https://images.unsplash.com/photo-1533105079780-92b9be482077?w=800&q=80",caption:"Sailing Journey · Greek Islands"},
  {cat:"CELEBRATIONS",img:"https://images.unsplash.com/photo-1510076857177-7470076d4098?w=800&q=80",caption:"Intimate Celebration · Amalfi Coast"},
  {cat:"TRAVEL",img:"https://images.unsplash.com/photo-1539020140153-e479b8c22e70?w=800&q=80",caption:"Moroccan Desert Adventure"},
  {cat:"CORPORATE",img:"https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",caption:"Corporate Gala · New York"},
  {cat:"TRAVEL",img:"https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80",caption:"Ranch Experience · Montana"},
  {cat:"CELEBRATIONS",img:"https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&q=80",caption:"Garden Celebration · Santorini"},
  {cat:"TRAVEL",img:"https://images.unsplash.com/photo-1493846740636-63dde8d42b68?w=800&q=80",caption:"Yacht Event · Mediterranean"},
  {cat:"TRAVEL",img:"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",caption:"Alpine Chalet · Swiss Alps"},
  {cat:"CORPORATE",img:"https://images.unsplash.com/photo-1578474846511-04ba529f0b88?w=800&q=80",caption:"Private VIP Event · Provence"},
];
export default function Gallery() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active,setActive] = useState("ALL");
  const [lb,setLb] = useState(null);
  const filtered = active==="ALL"?items:items.filter(g=>g.cat===active);
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white" style={{fontFamily:"'Georgia','Times New Roman',serif"}}>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/95 backdrop-blur-md border-b border-[#c9a84c]/20">
        <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3"><img src={LOGO} className="h-12 w-12 object-contain"/><span className="text-xl tracking-[0.25em] text-[#c9a84c] font-light hidden sm:block">AVICAM GITLIN</span></Link>
          <div className="hidden md:flex gap-8 text-xs tracking-[0.2em] text-gray-300">{NAV.map(([l,h])=><Link key={l} to={h} className={`hover:text-[#c9a84c] transition-colors ${l==="GALLERY"?"text-[#c9a84c]":""}`}>{l}</Link>)}</div>
          <Link to="/contact" className="hidden md:block px-5 py-2 border border-[#c9a84c] text-[#c9a84c] text-xs tracking-[0.2em] hover:bg-[#c9a84c]/10 transition-colors">INQUIRE</Link>
          <button className="md:hidden text-gray-300 hover:text-[#c9a84c] p-1" onClick={()=>setMenuOpen(!menuOpen)}>
            {menuOpen
              ? <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
              : <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>}
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden bg-[#0a0a0a] border-t border-[#c9a84c]/10 px-6 py-4 flex flex-col gap-4">
            {NAV.map(([l,h])=><Link key={l} to={h} onClick={()=>setMenuOpen(false)} className="text-gray-300 hover:text-[#c9a84c] transition-colors text-sm tracking-[0.2em] py-1">{l}</Link>)}
            <Link to="/contact" onClick={()=>setMenuOpen(false)} className="mt-2 px-5 py-3 border border-[#c9a84c] text-[#c9a84c] text-xs tracking-[0.2em] text-center hover:bg-[#c9a84c]/10 transition-colors">INQUIRE</Link>
          </div>
        )}
      </nav>
      <section className="pt-36 pb-16 px-6 text-center">
        <p className="text-[#c9a84c] tracking-[0.5em] text-xs mb-6">OUR WORK</p>
        <h1 className="text-5xl md:text-6xl font-light mb-6">Gallery</h1>
        <div className="w-12 h-px bg-[#c9a84c] mx-auto mb-6"/>
        <p className="text-gray-500 text-lg font-light max-w-xl mx-auto">A glimpse into the events and moments we've had the privilege to craft.</p>
      </section>
      <section className="px-6 pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center mb-14">
            {cats.map(cat=>(
              <button key={cat} onClick={()=>setActive(cat)} className={`px-6 py-2 text-xs tracking-[0.3em] border transition-colors ${active===cat?"border-[#c9a84c] bg-[#c9a84c] text-black font-semibold":"border-[#c9a84c]/30 text-gray-400 hover:border-[#c9a84c] hover:text-[#c9a84c]"}`}>{cat}</button>
            ))}
          </div>
          <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-2 space-y-2">
            {filtered.map((item,i)=>(
              <div key={i} className="break-inside-avoid cursor-pointer group relative overflow-hidden" onClick={()=>setLb(item)}>
                <img src={item.img} alt={item.caption} className="w-full object-cover group-hover:scale-105 transition-transform duration-500"/>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/55 transition-colors flex items-end">
                  <p className="text-white text-xs tracking-wide p-4 opacity-0 group-hover:opacity-100 transition-opacity font-light">{item.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {lb&&(
        <div className="fixed inset-0 z-50 bg-black/96 flex items-center justify-center p-6" onClick={()=>setLb(null)}>
          <div className="max-w-4xl w-full">
            <img src={lb.img} alt={lb.caption} className="w-full max-h-[80vh] object-contain"/>
            <p className="text-center text-gray-400 text-sm mt-4 tracking-wide">{lb.caption}</p>
            <p className="text-center text-gray-600 text-xs mt-2 tracking-widest">CLICK TO CLOSE</p>
          </div>
        </div>
      )}
      <section className="py-28 px-6 bg-[#0d0d0d] text-center">
        <div className="max-w-xl mx-auto">
          <p className="text-[#c9a84c] tracking-[0.4em] text-xs mb-6">YOUR STORY AWAITS</p>
          <h2 className="text-4xl font-light mb-6">Let's Add Your Moment to the Collection</h2>
          <div className="w-10 h-px bg-[#c9a84c] mx-auto mb-8"/>
          <Link to="/contact" className="inline-block px-12 py-5 bg-[#c9a84c] text-black text-xs tracking-[0.3em] hover:bg-[#e0c070] transition-colors font-semibold">BEGIN YOUR JOURNEY</Link>
        </div>
      </section>
      <footer className="bg-[#070707] border-t border-[#c9a84c]/15 py-8 px-6 text-center">
        <p className="text-gray-600 text-xs">© 2025 Avicam Gitlin Private Events. All rights reserved.</p>
      </footer>
    </div>
  );
}
