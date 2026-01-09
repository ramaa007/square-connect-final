"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, CheckCircle2, Phone, Mail, MapPin, Star, Zap, Building2, Landmark, Users2, ShieldCheck, Briefcase } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function HomePage() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Word-by-word reveal for headlines
      gsap.utils.toArray<HTMLElement>(".reveal-text").forEach((text) => {
        gsap.from(text, {
          scrollTrigger: { trigger: text, start: "top 90%" },
          y: 30, opacity: 0, duration: 1, ease: "power3.out"
        });
      });

      // 2. Fade-up stagger for cards
      gsap.utils.toArray<HTMLElement>(".stagger-container").forEach((container) => {
        gsap.from(container.querySelectorAll(".stagger-item"), {
          scrollTrigger: { trigger: container, start: "top 85%" },
          y: 40, opacity: 0, duration: 0.8, stagger: 0.2, ease: "power3.out"
        });
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="bg-white selection:bg-gold/30">
      
      {/* SECTION 1 – HERO */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden bg-appleGrey/30">
        <div className="max-w-7xl mx-auto text-center z-10">
          <p className="reveal-text font-bold tracking-[0.3em] text-gold text-xs mb-6 uppercase">Square Connect</p>
          <h1 className="reveal-text text-6xl md:text-9xl font-bold tracking-tighter leading-[0.85] mb-8 bg-gradient-to-br from-gold via-gold-dark to-charcoal bg-clip-text text-transparent">
            One Group.<br/>All Business Solutions.
          </h1>
          <p className="reveal-text text-xl md:text-2xl text-charcoal-light mb-12 max-w-3xl mx-auto">Your Trusted Advisory Partner</p>
          <div className="reveal-text flex flex-wrap justify-center gap-4 mb-8 text-sm font-semibold text-charcoal/60 uppercase tracking-widest">
            <span>Mortgage</span> • <span>Accounting</span> • <span>Legal</span> • <span>Real Estate</span> • <span>Commercial</span>
          </div>
          <button className="reveal-text bg-charcoal text-white px-10 py-5 rounded-full font-bold flex items-center gap-3 mx-auto hover:bg-black transition-all">
            Explore Expertise <ArrowRight size={20} />
          </button>
        </div>
      </section>

      {/* SECTION 2 – INTEGRATED VISION */}
      <section className="py-32 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
        <div className="reveal-text">
          <h2 className="text-5xl font-bold mb-8">Advisory Services That Work Together for You</h2>
          <p className="text-xl text-gray-500 leading-relaxed">We integrate finance, legal, and property expertise to provide streamlined solutions under one roof.</p>
        </div>
        <div className="rounded-[3rem] overflow-hidden bg-appleGrey h-[500px]">
           <div className="w-full h-full bg-slate-300 animate-pulse flex items-center justify-center text-gray-400 italic">Modern Advisory Space Image</div>
        </div>
      </section>

      {/* SECTION 3 – STATS */}
      <section className="py-24 bg-charcoal text-white rounded-[4rem] mx-4">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div className="reveal-text">
            <h2 className="text-7xl font-bold text-gold mb-2">5+ Years</h2>
            <p className="text-gray-400 uppercase tracking-widest text-xs">Industry Excellence</p>
          </div>
          <div className="reveal-text">
            <h2 className="text-7xl font-bold text-gold mb-2">12+</h2>
            <p className="text-gray-400 uppercase tracking-widest text-xs">Industries Served</p>
          </div>
          <div className="reveal-text">
            <h2 className="text-7xl font-bold text-gold mb-2">1 Contact</h2>
            <p className="text-gray-400 uppercase tracking-widest text-xs">Unified Journey</p>
          </div>
        </div>
      </section>

      {/* SECTION 4 – VALUES (TICKER) */}
      <section className="py-16 overflow-hidden border-y border-gray-100">
        <div className="flex space-x-12 animate-marquee whitespace-nowrap text-xl font-bold uppercase tracking-tighter text-charcoal/40">
          {["Strategic Alignment ✱", "Professional Guidance ✱", "Holistic Vision ✱", "Collaborative Solutions ✱", "Future Pathways ✱", "Tailored Roadmaps ✱"].map((val, i) => (
            <span key={i} className="hover:text-gold transition-colors">{val}</span>
          ))}
          {/* Duplicate for seamless loop */}
          {["Strategic Alignment ✱", "Professional Guidance ✱", "Holistic Vision ✱", "Collaborative Solutions ✱", "Future Pathways ✱", "Tailored Roadmaps ✱"].map((val, i) => (
            <span key={i+'d'} className="hover:text-gold transition-colors">{val}</span>
          ))}
        </div>
      </section>

      {/* SECTION 5 – ABOUT PREVIEW */}
      <section className="py-32 bg-appleGrey/50 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20">
          <div className="reveal-text">
            <h2 className="text-5xl font-bold mb-8 leading-tight">A smarter way to manage your world.</h2>
            <p className="text-xl text-gray-500 mb-10">Square Connect removes the burden of coordinating multiple professionals. One advisor. One journey.</p>
          </div>
          <div className="stagger-container grid grid-cols-2 gap-6">
            {["Proactive", "Responsive", "Data-Driven", "Accountable"].map((point) => (
              <div key={point} className="stagger-item p-8 bg-white rounded-3xl shadow-sm border border-gray-100 flex items-center gap-4">
                <CheckCircle2 className="text-gold" />
                <span className="font-bold text-charcoal">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6 – SERVICES GRID */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-20 reveal-text">
          <h2 className="text-5xl font-bold mb-4 italic text-charcoal">Integrated Services</h2>
          <div className="w-24 h-1 bg-gold mx-auto"></div>
        </div>
        <div className="stagger-container grid md:grid-cols-3 gap-8">
          {[
            { t: "Mortgage & Finance", i: <Landmark /> },
            { t: "Tax & Accounting", i: <Building2 /> },
            { t: "Legal Services", i: <ShieldCheck /> },
            { t: "Real Estate Advisory", i: <Briefcase /> },
            { t: "Commercial Finance", i: <Landmark /> },
            { t: "Digital Services", i: <Zap /> }
          ].map((s, idx) => (
            <div key={idx} className="stagger-item group p-12 bg-white border border-gray-100 rounded-[3rem] hover:shadow-2xl hover:shadow-gold/10 transition-all duration-500">
              <div className="mb-8 w-14 h-14 bg-appleGrey rounded-2xl flex items-center justify-center group-hover:bg-gold group-hover:text-white transition-colors">{s.i}</div>
              <h3 className="text-2xl font-bold mb-4">{s.t}</h3>
              <p className="text-gray-500 mb-8">Bespoke advisory tailored to your unique growth journey.</p>
              <button className="text-gold font-bold flex items-center gap-2 group">Start Conversation <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform"/></button>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 7 – WHY CHOOSE US */}
      <section className="py-32 px-6 bg-charcoal text-white rounded-[4rem] mx-4 mb-32">
        <div className="max-w-7xl mx-auto text-center mb-20 reveal-text">
          <h2 className="text-5xl font-bold">Why Choose Us</h2>
        </div>
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8 stagger-container">
          {["Integrated Intelligence", "Proactive Speed", "Vetted Excellence", "Long-Term Vision"].map((why) => (
            <div key={why} className="stagger-item p-8 border border-white/10 rounded-3xl text-center hover:bg-white/5">
              <Star className="mx-auto mb-4 text-gold" />
              <h4 className="font-bold text-lg leading-tight">{why}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 8 – FOUNDER PREVIEW */}
      <section className="py-32 px-6 max-w-7xl mx-auto bg-appleGrey rounded-[4rem] mb-32">
        <div className="flex flex-col md:flex-row items-center gap-20 p-12">
          <div className="w-80 h-80 bg-gray-300 rounded-[3rem] overflow-hidden border-4 border-white shadow-xl flex-shrink-0">
             <div className="w-full h-full bg-slate-400 flex items-center justify-center text-white italic">Founder Portrait</div>
          </div>
          <div className="reveal-text">
            <p className="text-gold font-bold tracking-widest mb-4">LEAD ADVISOR</p>
            <h2 className="text-6xl font-bold mb-6 text-charcoal leading-none">BHAVIN PATEL</h2>
            <p className="text-3xl italic text-gray-500 mb-10 leading-relaxed">
              "I founded Square Connect to revolutionise the way people build wealth."
            </p>
            <button className="bg-charcoal text-white px-10 py-5 rounded-full font-bold">Read Bhavin's Story</button>
          </div>
        </div>
      </section>

      {/* SECTION 9 – INDUSTRIES */}
      <section className="py-20 px-6 max-w-7xl mx-auto text-center">
        <h4 className="text-xs font-bold text-gold uppercase tracking-[0.4em] mb-12 reveal-text">Industries We Support</h4>
        <div className="flex flex-wrap justify-center gap-x-12 gap-y-8 text-xl font-medium text-gray-400 reveal-text">
          {["Childcare", "NDIS", "Medical", "Construction", "Real Estate", "Tech", "Retail", "Hospitality", "Professional", "Renewable"].map(ind => (
            <span key={ind} className="hover:text-charcoal transition-colors">{ind}</span>
          ))}
        </div>
      </section>

      {/* SECTION 10 – CLIENT FEEDBACK */}
      <section className="py-32 overflow-hidden bg-white">
        <div className="text-center mb-16 reveal-text">
          <h2 className="text-4xl font-bold italic">Client Experience</h2>
        </div>
        <div className="flex space-x-8 animate-marquee">
          {[
            {n: "Omkar Solanki", t: "Fantastic experience… saved us countless hours."},
            {n: "Harshad Pathan", t: "Professional, knowledgeable, proactive."},
            {n: "Poojan Patel", t: "Highly recommended."},
            {n: "Vishal Patel", t: "Professional & Timely."},
            {n: "Jaydeep Tank", t: "Transformed our finances."}
          ].map((rev, i) => (
            <div key={i} className="min-w-[400px] p-12 bg-appleGrey rounded-[3rem] flex flex-col justify-between">
              <p className="text-xl text-charcoal italic mb-8">“{rev.t}”</p>
              <p className="font-bold text-gold uppercase tracking-widest text-xs">— {rev.n}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 11 – CTA / FOOTER */}
      <footer className="pt-32 pb-12 px-6 bg-appleGrey rounded-t-[5rem]">
        <div className="max-w-7xl mx-auto text-center mb-24 reveal-text">
          <h2 className="text-7xl font-bold mb-12 tracking-tighter">Ready to Connect?</h2>
          <div className="flex flex-wrap justify-center gap-10">
             <div className="flex items-center gap-4 text-2xl font-bold">
               <Phone className="text-gold" /> 0425 859 901
             </div>
             <div className="flex items-center gap-4 text-2xl font-bold">
               <Mail className="text-gold" /> info@squareconnectgroup.com
             </div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto border-t border-gray-200 pt-12 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] text-gray-400 uppercase tracking-[0.2em] font-bold">
          <p>© 2026 Square Connect Advisory Group</p>
          <p className="max-w-md text-center md:text-right">Square Connect Advisory Group operates as a strategic advisory and referral consultancy. We do not hold an ACL or AFSL in our own right.</p>
        </div>
      </footer>

    </div>
  );
}