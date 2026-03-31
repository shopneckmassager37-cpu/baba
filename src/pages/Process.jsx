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

const steps = [
  {
    number: "01",
    title: "The First Conversation",
    description: "Everything begins with a personal conversation — no forms, no templates. Avicam listens to your vision, your story, and what you want your event to feel like. Whether you have a fully formed idea or just a feeling, this is where it starts.",
    detail: "We take the time to understand who you are, who your guests are, and what this event means to you. The more we know, the better we can build something that's unmistakably yours."
  },
  {
    number: "02",
    title: "Vision & Concept",
    description: "From your initial conversation, we develop a bespoke concept document — a creative direction for your event that captures the mood, the aesthetic, the flow, and the experience we want to create.",
    detail: "This isn't a generic proposal. It's a tailored vision built specifically around your event, complete with venue suggestions, design direction, programming ideas, and a clear sense of what we're building together."
  },
  {
    number: "03",
    title: "Venue & Destination",
    description: "We source and secure the right venue — whether that's a private estate in Tuscany, a hilltop villa in Greece, a luxury resort in Morocco, or an exclusive urban space. We have relationships with extraordinary venues across 30+ countries.",
    detail: "For destination events, we also handle all guest logistics: accommodation recommendations, travel coordination, and ground arrangements so every guest arrives seamlessly."
  },
  {
    number: "04",
    title: "Design & Production",
    description: "We build the full event experience — décor, florals, lighting design, entertainment, music, and every creative detail that transforms a space into something extraordinary. Every element is sourced, curated, and managed personally.",
    detail: "We work with the world's best vendors and local artisans in each destination to ensure the aesthetics are perfect and authentic to the place. Nothing generic. Nothing off-the-shelf."
  },
  {
    number: "05",
    title: "The Day Itself",
    description: "On the day of your event, Avicam and his team are there — on the ground, managing every detail so you can be entirely present with your guests. Every timeline, every vendor, every moment is in our hands.",
    detail: "You won't be fielding calls from the florist or chasing down the caterer. You'll be living the experience we built together, surrounded by the people you love, in a setting that takes your breath away."
  },
  {
    number: "06",
    title: "After the Event",
    description: "Our relationship doesn't end when the event does. We follow up personally to make sure everything met your expectations, handle any post-event logistics, and begin planning for the next extraordinary moment.",
    detail: "Many of our clients come back year after year — for anniversaries, birthdays, family gatherings, and new milestones. We become part of their story."
  }
];

const values = [
  {
    title: "Absolute Discretion",
    icon: "◆",
    text: "Our clients trust us with their most personal moments. We operate with complete confidentiality and never share client details, events, or information without explicit permission."
  },
  {
    title: "Genuinely Personal",
    icon: "◆",
    text: "Avicam is personally involved in every event from concept to execution. You will never be handed off to a junior team member. This is personal — always."
  },
  {
    title: "No Compromises",
    icon: "◆",
    text: "We do not cut corners, use generic vendors, or settle for 'good enough'. Every detail is held to the same standard of excellence — from the grandest gesture to the smallest touch."
  },
  {
    title: "Global Reach",
    icon: "◆",
    text: "With 15+ years producing events across 30+ countries, we have the relationships, the knowledge, and the network to create extraordinary events anywhere in the world."
  }
];

export default function Process() {
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
              <Link key={l} to={h} className={`hover:text-[#c9a84c] transition-colors ${l === "HOW WE WORK" ? "text-[#c9a84c]" : ""}`}>{l}</Link>
            ))}
            <ChatWidget />
</div>
          <Link to="/contact" className="hidden md:block px-5 py-2 border border-[#c9a84c] text-[#c9a84c] text-xs tracking-[0.2em] hover:bg-[#c9a84c]/10 transition-colors">INQUIRE</Link>
          <ChatWidget />
</div>
      </nav>

      {/* Hero */}
      <section
        className="relative pt-32 pb-28 px-6 text-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=1920&q=80')", backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="absolute inset-0 bg-black/78" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <p className="text-[#c9a84c] tracking-[0.5em] text-xs mb-6">THE PROCESS</p>
          <h1 className="text-5xl md:text-6xl font-light mb-6">How We Work</h1>
          <div className="w-12 h-px bg-[#c9a84c] mx-auto mb-8" />
          <p className="text-gray-400 text-lg font-light leading-relaxed max-w-2xl mx-auto">
            Every extraordinary event starts long before the day itself.
            Here's how we take an idea from vision to reality — personally, meticulously, and without compromise.
          </p>
          <ChatWidget />
</div>
      </section>

      {/* Steps */}
      <section className="py-28 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="space-y-0">
            {steps.map((step, i) => (
              <div key={i} className="grid grid-cols-1 md:grid-cols-[140px_1fr] gap-8 md:gap-16 py-16 border-b border-[#c9a84c]/10 last:border-0">
                <div className="flex flex-col items-start md:items-end pt-1">
                  <span className="text-5xl font-light text-[#c9a84c]/25 leading-none">{step.number}</span>
                  <ChatWidget />
</div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-light mb-4 text-white">{step.title}</h2>
                  <div className="w-8 h-px bg-[#c9a84c]/40 mb-5" />
                  <p className="text-gray-300 font-light leading-relaxed mb-4">{step.description}</p>
                  <p className="text-gray-500 font-light leading-relaxed text-sm italic">{step.detail}</p>
                  <ChatWidget />
</div>
                <ChatWidget />
</div>
            ))}
            <ChatWidget />
</div>
          <ChatWidget />
</div>
      </section>

      {/* Values */}
      <section className="py-28 px-6 bg-[#0d0d0d]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#c9a84c] tracking-[0.4em] text-xs mb-4">WHAT WE STAND FOR</p>
            <h2 className="text-3xl md:text-4xl font-light">Our Commitments to You</h2>
            <ChatWidget />
</div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#c9a84c]/10">
            {values.map((v, i) => (
              <div key={i} className="bg-[#0d0d0d] p-10 hover:bg-[#111] transition-colors">
                <div className="text-[#c9a84c] text-xs mb-5">{v.icon}  <ChatWidget />
</div>
                <h3 className="text-xl font-light mb-4 tracking-wide">{v.title}</h3>
                <div className="w-8 h-px bg-[#c9a84c]/30 mb-5" />
                <p className="text-gray-400 font-light leading-relaxed text-sm">{v.text}</p>
                <ChatWidget />
</div>
            ))}
            <ChatWidget />
</div>
          <ChatWidget />
</div>
      </section>

      {/* Full-width quote */}
      <section
        className="relative py-32 px-6 text-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1920&q=80')", backgroundSize: "cover", backgroundAttachment: "fixed", backgroundPosition: "center" }}
      >
        <div className="absolute inset-0 bg-black/78" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <div className="text-[#c9a84c] text-5xl font-light mb-6">"  <ChatWidget />
</div>
          <p className="text-2xl md:text-3xl font-light text-gray-200 leading-relaxed italic mb-8">
            I read every inquiry personally. I am involved in every decision.
            And I will not rest until the event we've built together exceeds everything you imagined.
          </p>
          <div className="w-10 h-px bg-[#c9a84c] mx-auto mb-6" />
          <p className="text-[#c9a84c] tracking-[0.4em] text-xs">— AVICAM GITLIN</p>
          <ChatWidget />
</div>
      </section>

      {/* FAQ */}
      <section className="py-28 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#c9a84c] tracking-[0.4em] text-xs mb-4">COMMON QUESTIONS</p>
            <h2 className="text-3xl font-light">What You Want to Know</h2>
            <ChatWidget />
</div>
          <div className="space-y-0">
            {[
              { q: "How far in advance should I reach out?", a: "For destination events and large celebrations, 6–12 months in advance is ideal. For smaller or local events, 2–3 months is usually sufficient. That said, we've pulled off extraordinary events on shorter timelines — reach out and we'll tell you honestly what's possible." },
              { q: "Do you handle events outside of the US?", a: "Absolutely. In fact, many of our most celebrated events have taken place in Italy, Greece, Morocco, Switzerland, Croatia, and beyond. We have trusted partners, vendors, and local teams in every destination we work in." },
              { q: "How do you approach budgets?", a: "Transparently. Once we understand your vision, we'll share an honest picture of what it costs and where the investment goes. We don't mark up vendor costs without disclosure. We work within your budget to maximise impact where it matters most." },
              { q: "Can you work with our existing vendors?", a: "Yes. If you have vendors you love and trust, we're happy to work alongside them. We can also recommend our own partners — we've built relationships with exceptional vendors across every category over many years." },
              { q: "Is our event truly confidential?", a: "Completely. We never share details about our clients, their events, or any images without explicit permission. Discretion is not optional — it's fundamental to how we operate." }
            ].map((faq, i) => (
              <div key={i} className="border-b border-[#c9a84c]/10 py-8">
                <h3 className="text-lg font-light text-white mb-4">{faq.q}</h3>
                <p className="text-gray-500 font-light leading-relaxed text-sm">{faq.a}</p>
                <ChatWidget />
</div>
            ))}
            <ChatWidget />
</div>
          <ChatWidget />
</div>
      </section>

      {/* CTA */}
      <section className="py-28 px-6 bg-[#0d0d0d] text-center">
        <div className="max-w-xl mx-auto">
          <p className="text-[#c9a84c] tracking-[0.4em] text-xs mb-6">READY TO BEGIN?</p>
          <h2 className="text-4xl font-light mb-8">Start With a Conversation</h2>
          <div className="w-10 h-px bg-[#c9a84c] mx-auto mb-8" />
          <p className="text-gray-400 font-light mb-10 leading-relaxed">You don't need a full brief or a clear idea. Just reach out — Avicam will handle the rest.</p>
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
