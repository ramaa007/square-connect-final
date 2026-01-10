"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { 
  ArrowRight, CheckCircle2, Phone, Mail, Star, Zap, 
  Building2, Landmark, ShieldCheck, Briefcase, Globe, ChevronRight 
} from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function HomePage() {
  const containerRef = useRef(null);
  
  // Brand Design System
  const gold = "#DFA528";
  const charcoal = "#383838";
  const appleGrey = "#F5F5F7";

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. ADVANCED HEADING REVEAL (Word-by-word style)
      gsap.utils.toArray<HTMLElement>(".reveal-heading").forEach((heading) => {
        gsap.fromTo(heading, 
          { y: 100, opacity: 0, clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" },
          { 
            y: 0, opacity: 1, clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
            duration: 1.2, ease: "power4.out",
            scrollTrigger: { trigger: heading, start: "top 85%" }
          }
        );
      });

      // 2. FADE-UP STAGGER (For text blocks & cards)
      gsap.utils.toArray<HTMLElement>(".fade-up-group").forEach((group) => {
        gsap.from(group.querySelectorAll(".fade-up-item"), {
          scrollTrigger: { trigger: group, start: "top 90%" },
          y: 40, opacity: 0, duration: 0.8, stagger: 0.15, ease: "power3.out"
        });
      });

      // 3. PARALLAX STATS
      gsap.to(".parallax-bg", {
        scrollTrigger: {
          trigger: ".parallax-bg",
          start: "top bottom",
          end: "bottom top",
          scrub: true
        },
        y: -50
      });

      // 4. COUNTER ANIMATION
      gsap.utils.toArray<HTMLElement>(".counter").forEach((counter) => {
        const target = parseInt(counter.innerText);
        gsap.fromTo(counter, 
          { innerText: 0 },
          { 
            innerText: target, duration: 2, ease: "power2.out",
            scrollTrigger: { trigger: counter, start: "top 90%" },
            snap: { innerText: 1 }
          }
        );
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="selection:bg-[#DFA528] selection:text-white" style={{ backgroundColor: '#ffffff', color: charcoal, fontFamily: 'sans-serif' }}>
      
      {/* SECTION 1: HERO (Apple-Style Editorial) */}
      <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden" style={{ backgroundColor: appleGrey }}>
        <div className="max-w-7xl mx-auto text-center z-10">
          <p className="fade-up-item font-bold tracking-[0.4em] text-[#DFA528] text-[10px] mb-8 uppercase">Square Connect Advisory Group</p>
          <h1 className="reveal-heading text-6xl md:text-[8rem] font-black tracking-tighter leading-[0.8] mb-12" 
              style={{ background: `linear-gradient(135deg, ${gold} 0%, ${charcoal} 100%)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            One Group.<br/>All Solutions.
          </h1>
          <p className="fade-up-item text-xl md:text-2xl opacity-50 mb-14 font-medium max-w-2xl mx-auto">Mortgage • Accounting • Legal • Real Estate • Commercial</p>
          <button className="fade-up-item group bg-[#383838] text-white px-12 py-6 rounded-full font-bold flex items-center gap-4 mx-auto transition-all hover:shadow-2xl hover:scale-105 active:scale-95">
            Explore Expertise <ChevronRight className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      {/* SECTION 2: INTEGRATED VISION */}
      <section className="py-40 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-24 items-center fade-up-group">
        <div className="fade-up-item">
          <h2 className="text-5xl md:text-6xl font-bold mb-10 leading-tight">Advisory Services That Work Together for You</h2>
          <p className="text-xl leading-relaxed opacity-60">
            We integrate finance, legal, and property expertise under one roof, removing the friction of coordinating multiple professionals.
          </p>
        </div>
        <div className="fade-up-item relative h-[600px] rounded-[4rem] overflow-hidden shadow-2xl">
          <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80" alt="Vision" className="w-full h-full object-cover" />
        </div>
      </section>

      {/* SECTION 3: QUICK STATS (Counters) */}
      <section className="py-32 mx-6 rounded-[5rem] parallax-bg" style={{ backgroundColor: charcoal, color: 'white' }}>
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-20 text-center">
          <div className="fade-up-item">
            <h3 className="text-8xl font-black mb-4 flex justify-center" style={{ color: gold }}><span className="counter">5</span>+</h3>
            <p className="text-[10px] tracking-[0.3em] opacity-40 uppercase font-black">Years Excellence</p>
          </div>
          <div className="fade-up-item">
            <h3 className="text-8xl font-black mb-4 flex justify-center" style={{ color: gold }}><span className="counter">12</span>+</h3>
            <p className="text-[10px] tracking-[0.3em] opacity-40 uppercase font-black">Industries Served</p>
          </div>
          <div className="fade-up-item">
            <h3 className="text-8xl font-black mb-4 flex justify-center" style={{ color: gold }}>1</h3>
            <p className="text-[10px] tracking-[0.3em] opacity-40 uppercase font-black">Unified Contact</p>
          </div>
        </div>
      </section>

      {/* SECTION 4: KEY VALUES (Marquee Effect) */}
      <div className="py-20 overflow-hidden border-y border-gray-100 bg-white">
        <div className="flex gap-20 animate-marquee whitespace-nowrap opacity-10 font-black text-7xl uppercase">
          <span>Strategic Alignment ✱ Professional Guidance ✱ Holistic Vision ✱ Collaborative Solutions ✱ Tailored Roadmaps ✱</span>
          <span>Strategic Alignment ✱ Professional Guidance ✱ Holistic Vision ✱ Collaborative Solutions ✱ Tailored Roadmaps ✱</span>
        </div>
      </div>

      {/* SECTION 5: WHY CHOOSE US */}
      <section className="py-40 px-6" style={{ backgroundColor: appleGrey }}>
        <div className="max-w-7xl mx-auto fade-up-group">
          <h2 className="reveal-heading text-6xl font-bold mb-24 text-center">A smarter way to manage your world</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { t: "Proactive", d: "We anticipate needs before they arise" },
              { t: "Responsive", d: "Fast, professional replies always" },
              { t: "Data-driven", d: "Backed by real market insight" },
              { t: "Accountable", d: "One clear point of contact" }
            ].map((f, i) => (
              <div key={i} className="fade-up-item bg-white p-12 rounded-[3rem] shadow-sm hover:shadow-xl transition-shadow">
                <CheckCircle2 className="mb-8 w-10 h-10" style={{ color: gold }} />
                <h4 className="text-2xl font-bold mb-4">{f.t}</h4>
                <p className="opacity-50 text-sm leading-relaxed">{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: SERVICES GRID (6 Premium Cards) */}
      <section className="py-40 px-6 max-w-7xl mx-auto fade-up-group">
        <div className="text-center mb-32">
          <h2 className="reveal-heading text-6xl font-bold mb-6">Our Services</h2>
          <div className="w-24 h-1 mx-auto" style={{ backgroundColor: gold }}></div>
        </div>
        <div className="grid md:grid-cols-3 gap-10">
          {[
            { t: "Mortgage & Finance", d: "Optimizing personal and commercial loans", i: <Landmark /> },
            { t: "Tax & Accounting", d: "Precision planning & compliance", i: <Building2 /> },
            { t: "Legal Services", d: "Robust counsel for conveyancing & structures", i: <ShieldCheck /> },
            { t: "Real Estate", d: "Strategic acquisition advice", i: <Briefcase /> },
            { t: "Commercial Finance", d: "Tailored funding solutions", i: <Zap /> },
            { t: "Digital Services", d: "Transforming operations with tech", i: <Globe /> }
          ].map((s, i) => (
            <div key={i} className="fade-up-item group relative p-14 rounded-[4rem] bg-[#F5F5F7] transition-all duration-700 hover:bg-white hover:shadow-2xl hover:-translate-y-4 cursor-pointer overflow-hidden">
              <div className="relative z-10">
                <div className="mb-10 text-4xl group-hover:scale-110 transition-transform duration-500" style={{ color: gold }}>{s.i}</div>
                <h3 className="text-3xl font-bold mb-6">{s.t}</h3>
                <p className="opacity-40 text-lg mb-10 leading-relaxed">{s.d}</p>
                <div className="flex items-center gap-2 font-bold group-hover:text-[#DFA528] transition-colors">Learn More <ArrowRight size={16} /></div>
              </div>
              <div className="absolute bottom-0 left-0 h-1 w-0 group-hover:w-full transition-all duration-700" style={{ backgroundColor: gold }}></div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 7: THE ADVANTAGE */}
      <section className="py-40 mx-6 rounded-[5rem]" style={{ backgroundColor: charcoal, color: 'white' }}>
        <div className="max-w-7xl mx-auto px-6 fade-up-group">
          <h2 className="reveal-heading text-6xl font-bold mb-24 text-center">The Advantage</h2>
          <div className="grid md:grid-cols-2 gap-10">
            {[
              { n: "01", t: "Integrated Intelligence", d: "We connect the dots across services" },
              { n: "02", t: "Proactive Speed", d: "Anticipate and manage processes end-to-end" },
              { n: "03", t: "Vetted Excellence", d: "Direct access to pre-vetted elite network" },
              { n: "04", t: "Long-Term Vision", d: "Sustainable strategies for generational growth" }
            ].map((adv, i) => (
              <div key={i} className="fade-up-item flex gap-10 p-12 border border-white/5 rounded-[4rem] hover:bg-white/5 transition-all">
                <span className="text-4xl font-black italic opacity-20" style={{ color: gold }}>{adv.n}</span>
                <div>
                  <h4 className="text-3xl font-bold mb-4">{adv.t}</h4>
                  <p className="opacity-40 text-lg leading-relaxed">{adv.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8: FOUNDER HIGHLIGHT */}
      <section className="py-40 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-32 items-center fade-up-group">
        <div className="fade-up-item relative rounded-[5rem] overflow-hidden shadow-2xl h-[750px]">
          <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80" alt="Bhavin Patel" className="w-full h-full object-cover grayscale" />
        </div>
        <div className="fade-up-item">
          <p className="font-bold text-xs tracking-[0.5em] mb-10" style={{ color: gold }}>FOUNDER & LEAD ADVISOR</p>
          <h2 className="text-7xl md:text-8xl font-black mb-12">BHAVIN PATEL</h2>
          <p className="text-3xl font-medium italic opacity-50 mb-16 leading-tight border-l-4 pl-10" style={{ borderColor: gold }}>
            "I founded Square Connect to revolutionise wealth building by turning professional complexity into absolute clarity."
          </p>
          <button className="bg-[#383838] text-white px-14 py-7 rounded-full font-bold hover:scale-105 transition-transform">Connect with Bhavin</button>
        </div>
      </section>

      {/* SECTION 9: SECTORS */}
      <section className="py-32" style={{ backgroundColor: appleGrey }}>
        <div className="max-w-7xl mx-auto px-6 text-center fade-up-group">
          <p className="fade-up-item font-bold text-[10px] tracking-[0.8em] opacity-30 uppercase mb-20">Industries We Support</p>
          <div className="flex flex-wrap justify-center gap-x-20 gap-y-16">
            {["Childcare", "Medical", "NDIS", "Construction", "Real Estate", "Tech", "Retail", "Hospitality", "Professional", "Renewable"].map((sector, i) => (
              <span key={i} className="fade-up-item text-2xl md:text-3xl font-black opacity-20 hover:opacity-100 transition-all duration-500 cursor-default">{sector}</span>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 10: TESTIMONIALS */}
      <section className="py-40 px-6 max-w-7xl mx-auto fade-up-group">
        <h2 className="reveal-heading text-6xl font-bold mb-32 text-center">Trusted Feedback</h2>
        <div className="grid md:grid-cols-2 gap-10">
          {[
            { q: "Fantastic experience… saved us countless hours.", n: "Omkar Solanki" },
            { q: "Professional, knowledgeable, and proactive.", n: "Harshad Pathan" },
            { q: "The level of integration is incredible.", n: "Vishal Patel" },
            { q: "Highly recommended for wealth growth.", n: "Poojan Patel" }
          ].map((test, i) => (
            <div key={i} className="fade-up-item p-16 bg-[#F5F5F7] rounded-[4rem]">
              <Star className="mb-10 w-6 h-6" style={{ fill: gold, color: gold }} />
              <p className="text-2xl font-bold mb-10 italic leading-snug">"{test.q}"</p>
              <p className="font-bold opacity-30 text-lg uppercase tracking-widest">— {test.n}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 11: FOOTER (Premium CTA) */}
      <footer className="pt-40 pb-20 px-6 rounded-t-[6rem] shadow-inner" style={{ backgroundColor: appleGrey }}>
        <div className="max-w-7xl mx-auto text-center mb-40 fade-up-group">
          <h2 className="reveal-heading text-[6rem] md:text-[10rem] font-black leading-[0.8] mb-16 tracking-tighter">Ready to<br/>Connect?</h2>
          <div className="flex flex-wrap justify-center gap-16 font-black text-2xl mb-24">
            <div className="flex items-center gap-4"><Phone className="w-8 h-8" style={{ color: gold }} /> 0425 859 901</div>
            <div className="flex items-center gap-4"><Mail className="w-8 h-8" style={{ color: gold }} /> info@squareconnectgroup.com</div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto pt-16 border-t border-black/5 flex flex-wrap justify-between items-center gap-10 text-[10px] font-black opacity-20 uppercase tracking-[0.4em]">
          <div>Square Connect Advisory Group © 2026</div>
          <div className="max-w-md text-right leading-relaxed">Strategic Advisory and Referral Consultancy. Not an ACL or AFSL holder.</div>
        </div>
      </footer>

      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          animation: marquee 40s linear infinite;
        }
      `}</style>

    </div>
  );
}