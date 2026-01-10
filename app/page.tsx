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

const SERVICES = [
  { t: "Mortgage & Finance", d: "Optimizing personal and commercial loans.", i: <Landmark size={48} /> },
  { t: "Tax & Accounting", d: "Precision planning & compliance strategy.", i: <Building2 size={48} /> },
  { t: "Legal Services", d: "Robust counsel for conveyancing & structures.", i: <ShieldCheck size={48} /> },
  { t: "Real Estate", d: "Strategic acquisition and property advice.", i: <Briefcase size={48} /> },
  { t: "Commercial Finance", d: "Tailored funding solutions for business growth.", i: <Zap size={48} /> },
  { t: "Digital Services", d: "Transforming operations with modern technology.", i: <Globe size={48} /> }
];

export default function HomePage() {
  const containerRef = useRef(null);
  const gold = "#DFA528";
  const charcoal = "#383838";
  const appleGrey = "#F5F5F7";

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. MIND-BLOWING REVEAL: Text Skew & Slide
      gsap.utils.toArray<HTMLElement>(".ultra-reveal").forEach((el) => {
        gsap.fromTo(el, 
          { y: 150, skewY: 10, opacity: 0 },
          { 
            y: 0, skewY: 0, opacity: 1, 
            duration: 1.8, ease: "expo.out", 
            scrollTrigger: { trigger: el, start: "top 95%" } 
          }
        );
      });

      // 2. PARALLAX EFFECT 1: Layered Depth (Images move slower than scroll)
      gsap.to(".parallax-layer", {
        yPercent: -20,
        ease: "none",
        scrollTrigger: {
          trigger: ".parallax-layer",
          scrub: true,
        }
      });

      // 3. PARALLAX EFFECT 2: Floating Stats Depth
      gsap.to(".floating-stat", {
        y: -100,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".stats-section",
          start: "top bottom",
          scrub: 1
        }
      });

      // 4. PARALLAX EFFECT 3: Horizontal Ticker reacting to Scroll
      gsap.to(".ticker-move", {
        xPercent: -30,
        scrollTrigger: {
          trigger: ".ticker-section",
          scrub: 0.5
        }
      });

      // 5. STAGGERED GRID REVEAL
      gsap.from(".service-card", {
        scale: 0.8, opacity: 0, y: 100,
        stagger: 0.1, duration: 1.2, ease: "power4.out",
        scrollTrigger: { trigger: ".service-grid", start: "top 80%" }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} style={{ backgroundColor: '#ffffff', color: charcoal, fontFamily: 'system-ui, -apple-system, sans-serif', margin: 0, padding: 0, overflowX: 'hidden' }}>
      
      {/* SECTION 1: HERO (Extraordinary Entrance) */}
      <section style={{ height: '110vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: appleGrey, position: 'relative' }}>
        <div style={{ maxWidth: '1400px', textAlign: 'center', padding: '0 24px', zIndex: 10 }}>
          <p className="ultra-reveal" style={{ color: gold, fontWeight: '900', letterSpacing: '0.6em', fontSize: '14px', marginBottom: '40px', textTransform: 'uppercase' }}>Square Connect Advisory Group</p>
          <h1 className="ultra-reveal" style={{ fontSize: 'clamp(4rem, 15vw, 12rem)', fontWeight: '900', lineHeight: '0.75', letterSpacing: '-0.07em', marginBottom: '60px', background: `linear-gradient(to right, ${gold}, ${charcoal}, ${gold})`, backgroundSize: '200% auto', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', animation: 'shine 5s linear infinite' }}>
            All Solutions.<br/>One Group.
          </h1>
          <button style={{ backgroundColor: charcoal, color: 'white', padding: '30px 80px', borderRadius: '100px', fontWeight: '900', fontSize: '20px', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '20px', margin: '0 auto', boxShadow: '0 30px 60px rgba(0,0,0,0.2)' }}>
            Experience Clarity <ArrowRight size={28} />
          </button>
        </div>
      </section>

      {/* SECTION 2: DEPTH PARALLAX VISION */}
      <section style={{ padding: '200px 24px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ maxWidth: '1300px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))', gap: '150px', alignItems: 'center' }}>
          <div className="ultra-reveal">
            <h2 style={{ fontSize: '5.5rem', fontWeight: '900', lineHeight: '0.9', marginBottom: '50px' }}>Beyond Traditional Advisory.</h2>
            <p style={{ fontSize: '1.6rem', lineHeight: '1.6', opacity: 0.5 }}>We connect the dots across finance, legal, and property to create an extraordinary path for your wealth.</p>
          </div>
          <div className="parallax-layer" style={{ borderRadius: '120px', overflow: 'hidden', height: '800px', boxShadow: '0 100px 150px -50px rgba(0,0,0,0.3)' }}>
            <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80" style={{ width: '100%', height: '120%', objectFit: 'cover' }} alt="Depth" />
          </div>
        </div>
      </section>

      {/* SECTION 3: FLOATING STATS PARALLAX */}
      <section className="stats-section" style={{ margin: '0 40px', padding: '250px 24px', backgroundColor: charcoal, color: 'white', borderRadius: '150px', position: 'relative' }}>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '150px', flexWrap: 'wrap' }}>
          <div className="floating-stat text-center"><h3 style={{ fontSize: '10rem', fontWeight: '900', color: gold, margin: 0 }}><span className="counter" data-target="5">0</span>+</h3><p style={{ opacity: 0.3, letterSpacing: '0.5em', fontSize: '12px', fontWeight: '900' }}>YEARS EXCELLENCE</p></div>
          <div className="floating-stat text-center"><h3 style={{ fontSize: '10rem', fontWeight: '900', color: gold, margin: 0 }}><span className="counter" data-target="12">0</span>+</h3><p style={{ opacity: 0.3, letterSpacing: '0.5em', fontSize: '12px', fontWeight: '900' }}>INDUSTRIES SERVED</p></div>
          <div className="floating-stat text-center"><h3 style={{ fontSize: '10rem', fontWeight: '900', color: gold, margin: 0 }}>1</h3><p style={{ opacity: 0.3, letterSpacing: '0.5em', fontSize: '12px', fontWeight: '900' }}>UNIFIED PARTNER</p></div>
        </div>
      </section>

      {/* SECTION 4: HORIZONTAL VALUE TICKER */}
      <div className="ticker-section" style={{ padding: '150px 0', overflow: 'hidden' }}>
        <div className="ticker-move" style={{ display: 'flex', gap: '100px', fontSize: '8rem', fontWeight: '900', opacity: 0.03, textTransform: 'uppercase', whiteSpace: 'nowrap' }}>
           <span>Strategic Alignment ✱ Professional Guidance ✱ Holistic Vision ✱ Collaborative Solutions ✱ Strategic Alignment ✱ Professional Guidance ✱</span>
        </div>
      </div>

      {/* SECTION 6: SERVICE GRID (Skew Cards) */}
      <section className="service-grid" style={{ padding: '200px 24px', maxWidth: '1600px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))', gap: '60px' }}>
          {SERVICES.map((s, i) => (
            <div key={i} className="service-card" style={{ padding: '100px 80px', backgroundColor: appleGrey, borderRadius: '80px', transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)' }}>
              <div style={{ color: gold, marginBottom: '60px' }}>{s.i}</div>
              <h3 style={{ fontSize: '3rem', fontWeight: '900', marginBottom: '30px' }}>{s.t}</h3>
              <p style={{ opacity: 0.4, fontSize: '1.4rem', lineHeight: '1.5' }}>{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 8: FOUNDER (Ultra Wide) */}
      <section style={{ padding: '200px 40px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))', gap: '150px', alignItems: 'center' }}>
          <div style={{ borderRadius: '150px', overflow: 'hidden', height: '900px', position: 'relative' }}>
            <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(1)' }} alt="Bhavin Patel" />
          </div>
          <div className="ultra-reveal">
            <p style={{ color: gold, fontWeight: '900', fontSize: '16px', letterSpacing: '0.8em', marginBottom: '50px' }}>FOUNDER & LEAD ADVISOR</p>
            <h2 style={{ fontSize: '8rem', fontWeight: '900', lineHeight: '0.8', marginBottom: '60px' }}>BHAVIN PATEL</h2>
            <p style={{ fontSize: '2.5rem', fontStyle: 'italic', opacity: 0.4, borderLeft: `12px solid ${gold}`, paddingLeft: '60px', lineHeight: '1.2' }}>
              "Transforming professional complexity into extraordinary wealth clarity."
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 11: FOOTER (The Grand Exit) */}
      <footer style={{ padding: '300px 24px 100px', backgroundColor: appleGrey, borderRadius: '200px 200px 0 0', textAlign: 'center' }}>
        <h2 className="ultra-reveal" style={{ fontSize: 'clamp(5rem, 20vw, 15rem)', fontWeight: '900', marginBottom: '150px', letterSpacing: '-0.08em' }}>Ready?</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '120px', marginBottom: '200px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '30px', fontSize: '2.5rem', fontWeight: '900' }}><Phone style={{ color: gold }} size={48} /> 0425 859 901</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '30px', fontSize: '2.5rem', fontWeight: '900' }}><Mail style={{ color: gold }} size={48} /> info@squareconnectgroup.com</div>
        </div>
        <div style={{ borderTop: '1px solid rgba(0,0,0,0.05)', paddingTop: '100px', textAlign: 'left', maxWidth: '1400px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', opacity: 0.2, fontSize: '12px', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '0.5em' }}>
            <div>Square Connect Advisory Group © 2026</div>
            <div>1644 Logan Road, Mount Gravatt QLD</div>
        </div>
      </footer>

      <style jsx global>{`
        @keyframes shine {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
      `}</style>
    </div>
  );
}
