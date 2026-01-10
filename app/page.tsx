"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { 
  ArrowRight, CheckCircle2, Phone, Mail, Star, Zap, 
  Building2, Landmark, ShieldCheck, Briefcase, Globe, Users2 
} from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function HomePage() {
  const containerRef = useRef(null);
  
  // Brand Colors
  const gold = "#DFA528";
  const charcoal = "#383838";
  const appleGrey = "#F5F5F7";

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Word-by-word reveal for headings
      gsap.utils.toArray<HTMLElement>(".reveal-heading").forEach((heading) => {
        gsap.from(heading, {
          scrollTrigger: {
            trigger: heading,
            start: "top 90%",
          },
          y: 50,
          opacity: 0,
          duration: 1.2,
          ease: "power3.out",
        });
      });

      // 2. Fade-up for text blocks and features
      gsap.utils.toArray<HTMLElement>(".fade-up").forEach((el) => {
        gsap.from(el, {
          scrollTrigger: {
            trigger: el,
            start: "top 92%",
          },
          y: 30,
          opacity: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
        });
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="selection:bg-[#DFA528] selection:text-white" style={{ backgroundColor: '#ffffff', color: charcoal, fontFamily: 'sans-serif' }}>
      
      {/* SECTION 1: HERO */}
      <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden" style={{ backgroundColor: appleGrey }}>
        <div className="max-w-7xl mx-auto text-center z-10">
          <p className="fade-up font-bold tracking-[0.3em] text-[#DFA528] text-xs mb-8 uppercase">Your Trusted Advisory Partner</p>
          <h1 className="reveal-heading text-6xl md:text-9xl font-black tracking-tighter leading-[0.85] mb-10" 
              style={{ background: `linear-gradient(to bottom left, ${gold}, ${charcoal})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            One Group.<br/>All Business Solutions.
          </h1>
          <p className="fade-up text-xl md:text-2xl opacity-60 mb-12 font-medium">Mortgage • Accounting • Legal • Real Estate • Commercial</p>
          <button className="fade-up group bg-[#383838] text-white px-10 py-5 rounded-full font-bold flex items-center gap-3 mx-auto transition-transform hover:scale-105 active:scale-95">
            Explore Expertise <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
        {/* IMAGE PROMPT: Premium abstract advisory environment, white minimal interior, soft daylight */}
      </section>

      {/* SECTION 2: INTEGRATED VISION */}
      <section className="py-32 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
        <div>
          <h2 className="reveal-heading text-5xl font-bold mb-8 leading-tight">Advisory Services That Work Together for You</h2>
          <p className="fade-up text-xl leading-relaxed opacity-70">
            We integrate finance, legal, and property expertise to provide streamlined solutions under one roof, ensuring clear and efficient guidance every step of the way.
          </p>
        </div>
        <div className="fade-up bg-[#F5F5F7] rounded-[3rem] h-[500px] overflow:hidden">
            <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80" alt="Workspace" className="w-full h-full object-cover rounded-[3rem]" />
        </div>
        {/* IMAGE PROMPT: Wide architectural workspace, modern advisory meeting, minimal design */}
      </section>

      {/* SECTION 3: QUICK STATS */}
      <section className="py-24 mx-4 rounded-[4rem]" style={{ backgroundColor: charcoal, color: 'white' }}>
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
          <div className="fade-up">
            <h3 className="text-7xl font-black mb-2" style={{ color: gold }}>5+ Years</h3>
            <p className="text-xs tracking-[0.2em] opacity-40 uppercase font-bold">Years of Excellence</p>
          </div>
          <div className="fade-up">
            <h3 className="text-7xl font-black mb-2" style={{ color: gold }}>12+</h3>
            <p className="text-xs tracking-[0.2em] opacity-40 uppercase font-bold">Industries Served</p>
          </div>
          <div className="fade-up">
            <h3 className="text-7xl font-black mb-2" style={{ color: gold }}>1</h3>
            <p className="text-xs tracking-[0.2em] opacity-40 uppercase font-bold">Unified Contact</p>
          </div>
        </div>
        {/* IMAGE PROMPT: Minimal infographic-style visuals, modern editorial style */}
      </section>

      {/* SECTION 4: KEY VALUES */}
      <section className="py-32 overflow-hidden border-y border-gray-100">
        <div className="flex gap-12 animate-marquee whitespace-nowrap">
          {["Strategic Alignment ✱", "Professional Guidance ✱", "Holistic Vision ✱", "Collaborative Solutions ✱", "Future Pathways ✱", "Tailored Roadmaps ✱"].map((val, i) => (
            <span key={i} className="text-5xl md:text-7xl font-black opacity-10 uppercase">{val}</span>
          ))}
        </div>
        {/* IMAGE PROMPT: Abstract geometric shapes representing clarity, guidance, collaboration */}
      </section>

      {/* SECTION 5: ABOUT US */}
      <section className="py-32 px-6" style={{ backgroundColor: appleGrey }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-20 mb-24">
            <h2 className="reveal-heading text-6xl font-bold leading-none">A smarter way to manage your world</h2>
            <p className="fade-up text-xl opacity-70">
              Square Connect removes the burden of coordinating multiple professionals. Your dedicated advisor oversees the entire journey—bringing together finance, legal, tax and strategic partners.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { t: "Proactive", d: "We anticipate needs before they arise" },
              { t: "Responsive", d: "Fast, professional replies always" },
              { t: "Data-driven", d: "Backed by real market insight" },
              { t: "Accountable", d: "One clear point of contact" }
            ].map((f, i) => (
              <div key={i} className="fade-up bg-white p-10 rounded-[2.5rem] shadow-sm">
                <CheckCircle2 className="mb-6" style={{ color: gold }} />
                <h4 className="text-xl font-bold mb-3">{f.t}</h4>
                <p className="opacity-60 text-sm leading-relaxed">{f.d}</p>
              </div>
            ))}
          </div>
        </div>
        {/* IMAGE PROMPT: Human-focused advisory interaction, daylight, modern professional interior */}
      </section>

      {/* SECTION 6: SERVICES (6 CARDS) */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <h2 className="reveal-heading text-5xl font-bold text-center mb-24">Integrated Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { t: "Mortgage & Finance", d: "Optimizing personal and commercial loans", i: <Landmark /> },
            { t: "Tax & Accounting", d: "Precision planning & compliance", i: <Building2 /> },
            { t: "Legal Services", d: "Robust counsel for conveyancing & structures", i: <ShieldCheck /> },
            { t: "Real Estate", d: "Strategic acquisition advice", i: <Briefcase /> },
            { t: "Commercial Finance", d: "Tailored funding solutions", i: <Zap /> },
            { t: "Digital Services", d: "Transforming operations with tech", i: <Globe /> }
          ].map((s, i) => (
            <div key={i} className="fade-up group p-12 rounded-[3.5rem] bg-[#F5F5F7] transition-all duration-500 hover:bg-white hover:shadow-2xl hover:-translate-y-2 cursor-pointer border border-transparent hover:border-gray-100">
              <div className="mb-8 p-4 bg-white rounded-2xl w-fit group-hover:bg-[#F5F5F7] transition-colors" style={{ color: gold }}>{s.i}</div>
              <h3 className="text-2xl font-bold mb-4">{s.t}</h3>
              <p className="opacity-50 text-base mb-8">{s.d}</p>
              <div className="h-0.5 w-0 group-hover:w-full transition-all duration-500" style={{ backgroundColor: gold }}></div>
            </div>
          ))}
        </div>
        <button className="fade-up mt-20 mx-auto block font-bold text-lg border-b-2 pb-2" style={{ borderImage: `linear-gradient(to right, ${gold}, transparent) 1` }}>Start Conversation</button>
      </section>

      {/* SECTION 7: THE ADVANTAGE */}
      <section className="py-32 mx-4 rounded-[4rem]" style={{ backgroundColor: charcoal, color: 'white' }}>
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="reveal-heading text-5xl font-bold mb-20 text-center">The Advantage</h2>
          <div className="grid md:grid-cols-2 gap-12">
            {[
              { n: "01", t: "Integrated Intelligence", d: "We connect the dots across services" },
              { n: "02", n2: "Proactive Speed", d: "Anticipate and manage processes end-to-end" },
              { n: "03", t: "Vetted Excellence", d: "Direct access to pre-vetted elite network" },
              { n: "04", t: "Long-Term Vision", d: "Sustainable strategies for generational growth" }
            ].map((adv, i) => (
              <div key={i} className="fade-up flex gap-8 p-10 border border-white/10 rounded-[3rem] hover:bg-white/5 transition-colors">
                <span className="text-2xl font-black" style={{ color: gold }}>{adv.n}</span>
                <div>
                  <h4 className="text-2xl font-bold mb-3">{adv.t}</h4>
                  <p className="opacity-50 leading-relaxed">{adv.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* IMAGE PROMPT: Professional collaboration scene, modern minimal environment */}
      </section>

      {/* SECTION 8: FOUNDER HIGHLIGHT */}
      <section className="py-32 px-6 max-w-7xl mx-auto flex flex-wrap md:flex-nowrap gap-20 items-center">
        <div className="fade-up w-full md:w-1/3">
          <div className="rounded-[4rem] overflow:hidden bg-[#F5F5F7] h-[600px]">
             <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80" alt="Bhavin Patel" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" />
          </div>
        </div>
        <div className="w-full md:w-2/3">
          <p className="fade-up font-bold text-xs tracking-widest mb-6" style={{ color: gold }}>FOUNDER & LEAD ADVISOR</p>
          <h2 className="reveal-heading text-7xl font-black mb-8">BHAVIN PATEL</h2>
          <p className="fade-up text-2xl font-medium italic opacity-60 mb-12 leading-relaxed">
            "I founded Square Connect to revolutionise the way people build wealth. With over 5 years of relentless drive, we transform complexity into clarity."
          </p>
          <button className="fade-up border-2 border-[#383838] px-10 py-5 rounded-full font-bold hover:bg-[#383838] hover:text-white transition-all">Connect with Bhavin</button>
        </div>
        {/* IMAGE PROMPT: Professional founder portrait, natural light, neutral background */}
      </section>

      {/* SECTION 9: SECTORS */}
      <section className="py-24" style={{ backgroundColor: appleGrey }}>
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="fade-up font-bold text-[10px] tracking-[0.5em] opacity-30 uppercase mb-12">Industries We Support</p>
          <div className="flex flex-wrap justify-center gap-x-16 gap-y-12">
            {["Childcare", "NDIS", "Medical", "Construction", "Real Estate", "Tech", "Retail", "Hospitality", "Professional", "Renewable"].map((sector, i) => (
              <span key={i} className="fade-up text-xl md:text-2xl font-bold opacity-40 hover:opacity-100 transition-opacity cursor-default">{sector}</span>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 10: TESTIMONIALS */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20">
          <h2 className="reveal-heading text-5xl font-bold leading-tight">Client Feedback</h2>
          <div className="space-y-8">
            {[
              { q: "Fantastic experience… saved us countless hours.", n: "Omkar Solanki" },
              { q: "Clear, professional advice. Highly recommended.", n: "Harshad Pathan" },
              { q: "Professional & Timely.", n: "Vishal Patel" },
              { q: "Transformed our finances.", n: "Jaydeep Tank" }
            ].map((test, i) => (
              <div key={i} className="fade-up p-10 bg-[#F5F5F7] rounded-[3rem]">
                <Star className="mb-4 w-5 h-5" style={{ fill: gold, color: gold }} />
                <p className="text-xl font-medium mb-6 italic">"{test.q}"</p>
                <p className="font-bold opacity-40">— {test.n}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 11: CTA / FOOTER */}
      <footer className="pt-32 pb-12 px-6 rounded-t-[5rem]" style={{ backgroundColor: appleGrey }}>
        <div className="max-w-7xl mx-auto text-center mb-32">
          <h2 className="reveal-heading text-7xl font-black mb-10">Ready to Connect?</h2>
          <p className="fade-up text-xl opacity-60 mb-16">We’re here to help you navigate your journey with confidence.</p>
          <div className="flex flex-wrap justify-center gap-12 font-bold text-lg">
            <div className="flex items-center gap-3"><Phone style={{ color: gold }} /> 0425 859 901</div>
            <div className="flex items-center gap-3"><Mail style={{ color: gold }} /> info@squareconnectgroup.com</div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto pt-12 border-t border-gray-200 flex flex-wrap justify-between gap-8 text-xs font-bold opacity-30 uppercase tracking-widest">
          <div>Square Connect Advisory Group</div>
          <div className="max-w-md text-right">Legal Notice: Strategic advisory and referral consultancy. We do not hold an ACL or AFSL in our own right.</div>
        </div>
      </footer>
    </div>
  );
}