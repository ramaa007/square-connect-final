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

// PREMIUM DATA ARCHITECTURE
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
      // 1. ULTRA-REVEAL: Clip-path "Sliding Curtain" Effect
      gsap.utils.toArray<HTMLElement>(".reveal-curtain").forEach((el) => {
        gsap.fromTo(el, 
          { clipPath: "inset(100% 0% 0% 0%)", y: 100 },
          { 
            clipPath: "inset(0% 0% 0% 0%)", y: 0, 
            duration: 1.8, ease: "expo.out", 
            scrollTrigger: { trigger: el, start: "top 90%" } 
          }
        );
      });

      // 2. PARALLAX TYPE 1: Hero Depth (Background moves slower)
      gsap.to(".parallax-bg", {
        yPercent: 30,
        ease: "none",
        scrollTrigger: { trigger: ".hero-section", scrub: true }
      });

      // 3. PARALLAX TYPE 2: Floating Stat Drift
      gsap.utils.toArray<HTMLElement>(".stat-drift").forEach((el, i) => {
        gsap.to(el, {
          y: -150 * (i + 1),
          ease: "none",
          scrollTrigger: { trigger: ".stats-section", start: "top bottom", end: "bottom top", scrub: 1 }
        });
      });

      // 4. PARALLAX TYPE 3: Horizontal Value Scrub
      gsap.to(".value-scrub", {
        xPercent: -40,
        ease: "none",
        scrollTrigger: { trigger: ".ticker-section", scrub: 1 }
      });

      // 5. COUNTER ANIMATION
      gsap.utils.toArray<HTMLElement>(".counter").forEach((counter) => {
        const target = parseInt(counter.getAttribute("data-target") || "0");
        gsap.to(counter, {
          innerText: target, duration: 4, ease: "power4.out",
          scrollTrigger: { trigger: counter, start: "top 95%" },
          snap: { innerText: 1 }
        });
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} style={{ backgroundColor: '#ffffff', color: charcoal, fontFamily: 'system-ui, -apple-system, sans-serif', margin: 0, padding: 0, overflowX: 'hidden' }}>
      
      {/* SECTION 1: HERO (Extraordinary Entrance) */}
      <section className="hero-section" style={{ height: '110vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: appleGrey, position: 'relative', overflow: 'hidden' }}>
        <div className="parallax-bg" style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, opacity: 0.03, fontSize: '30vw', fontWeight: 900, color: charcoal, display: 'flex', alignItems: 'center', justifyContent: 'center', whiteSpace: 'nowrap' }}>SQUARE</div>
        <div style={{ maxWidth: '1400px', textAlign: 'center', zIndex: 10 }}>
          <p className="reveal-curtain" style={{ color: gold, fontWeight: '900', letterSpacing: '0.6em', fontSize: '14px', marginBottom: '40px', textTransform: 'uppercase' }}>Square Connect Advisory Group</p>
          <h1 className="reveal-curtain" style={{ fontSize: 'clamp(4rem, 15vw, 13rem)', fontWeight: '900', lineHeight: '0.75', letterSpacing: '-0.08em', marginBottom: '60px', background: `linear-gradient(to right, ${gold}, ${charcoal}, ${gold})`, backgroundSize: '200% auto', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', animation: 'shine 6s linear infinite' }}>
            All Solutions.<br/>One Group.
          </h1>
          <button style={{ backgroundColor: charcoal, color: 'white', padding: '30px 80px', borderRadius: '100px', fontWeight: '900', fontSize: '20px', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '20px', margin: '0 auto', boxShadow: '0 40px 80px rgba(0,0,0,0.15)' }}>
            Explore Expertise <ArrowRight size={28} />
          </button>
        </div>
      </section>

      {/* SECTION 2: VISION (Parallax Depth) */}
      <section style={{ padding: '250px 24px', position: 'relative' }}>
        <div style={{ maxWidth: '1300px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))', gap: '150px', alignItems: 'center' }}>
          <div className="reveal-curtain">
            <h2 style={{ fontSize: '5.5rem', fontWeight: '900', lineHeight: '0.9', marginBottom: '50px' }}>Integrated Intelligence.</h2>
            <p style={{ fontSize: '1.6rem', lineHeight: '1.6', opacity: 0.5 }}>We connect the dots across finance, legal, and property to provide streamlined solutions.</p>
          </div>
          <div style={{ borderRadius: '120px', overflow: 'hidden', height: '850px', boxShadow: '0 100px 150px -40px rgba(0,0,0,0.2)' }}>
            <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80" style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="Vision" />
          </div>
        </div>
      </section>

      {/* SECTION 3: QUICK STATS (Floating Parallax) */}
      <section className="stats-section" style={{ margin: '0 40px', padding: '300px 24px', backgroundColor: charcoal, color: 'white', borderRadius: '180px', overflow: 'hidden' }}>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '150px', flexWrap: 'wrap' }}>
          <div className="stat-drift text-center"><h3 style={{ fontSize: '12rem', fontWeight: '900', color: gold, margin: 0 }}><span className="counter" data-target="5">0</span>+</h3><p style={{ opacity: 0.4, letterSpacing: '0.6em', fontSize: '14px', fontWeight: '900' }}>YEARS</p></div>
          <div className="stat-drift text-center" style={{ marginTop: '100px' }}><h3 style={{ fontSize: '12rem', fontWeight: '900', color: gold, margin: 0 }}><span className="counter" data-target="12">0</span>+</h3><p style={{ opacity: 0.4, letterSpacing: '0.6em', fontSize: '14px', fontWeight: '900' }}>INDUSTRIES</p></div>
          <div className="stat-drift text-center"><h3 style={{ fontSize: '12rem', fontWeight: '900', color: gold, margin: 0 }}>1</h3><p style={{ opacity: 0.4, letterSpacing: '0.6em', fontSize: '14px', fontWeight: '900' }}>PARTNER</p></div>
        </div>
      </section>

      {/* SECTION 4: VALUE TICKER (Scroll Scrub) */}
      <div className="ticker-section" style={{ padding: '150px 0', borderBottom: '1px solid #eee' }}>
        <div className="value-scrub" style={{ display: 'flex', gap: '120px', fontSize: '10rem', fontWeight: '900', opacity: 0.04, textTransform: 'uppercase', whiteSpace: 'nowrap' }}>
           <span>Strategic Alignment ✱ Professional Guidance ✱ Holistic Vision ✱ Collaborative Solutions ✱</span>
        </div>
      </div>

      {/* SECTION 5: ABOUT US */}
      <section style={{ padding: '250px 24px', backgroundColor: appleGrey }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '6rem', fontWeight: '900', textAlign: 'center', marginBottom: '150px', lineHeight: '0.85' }}>A smarter way to manage your world</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '50px' }}>
            {["Proactive", "Responsive", "Data-driven", "Accountable"].map(f => (
              <div key={f} className="reveal-curtain" style={{ backgroundColor: 'white', padding: '80px 60px', borderRadius: '60px', textAlign: 'center', boxShadow: '0 30px 60px rgba(0,0,0,0.03)' }}>
                <CheckCircle2 size={60} style={{ color: gold, marginBottom: '40px' }} />
                <h4 style={{ fontSize: '2rem', fontWeight: '900' }}>{f}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: SERVICES */}
      <section style={{ padding: '250px 24px', maxWidth: '1600px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))', gap: '60px' }}>
          {SERVICES.map((s, i) => (
            <div key={i} className="reveal-curtain" style={{ padding: '100px 80px', backgroundColor: appleGrey, borderRadius: '80px' }}>
              <div style={{ color: gold, marginBottom: '60px' }}>{s.i}</div>
              <h3 style={{ fontSize: '3rem', fontWeight: '900', marginBottom: '30px' }}>{s.t}</h3>
              <p style={{ opacity: 0.4, fontSize: '1.4rem' }}>{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 7: THE ADVANTAGE */}
      <section style={{ margin: '0 40px', padding: '250px 24px', backgroundColor: charcoal, color: 'white', borderRadius: '180px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '6rem', fontWeight: '900', textAlign: 'center', marginBottom: '150px' }}>The Advantage</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))', gap: '60px' }}>
            {["Integrated Intelligence", "Proactive Speed", "Vetted Excellence", "Long-Term Vision"].map((adv, i) => (
              <div key={i} className="reveal-curtain" style={{ padding: '80px', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '70px' }}>
                <h4 style={{ fontSize: '3rem', fontWeight: '900', marginBottom: '30px', color: gold }}>0{i+1}</h4>
                <h5 style={{ fontSize: '2.2rem', fontWeight: '900', marginBottom: '30px' }}>{adv}</h5>
                <p style={{ opacity: 0.4, fontSize: '1.3rem' }}>Bespoke strategy for extraordinary growth.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8: FOUNDER (Parallax Portrait) */}
      <section style={{ padding: '250px 40px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))', gap: '150px', alignItems: 'center' }}>
          <div style={{ borderRadius: '180px', overflow: 'hidden', height: '950px' }}>
            <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(1)' }} alt="Founder" />
          </div>
          <div className="reveal-curtain">
            <p style={{ color: gold, fontWeight: '900', fontSize: '16px', letterSpacing: '0.8em', marginBottom: '50px' }}>FOUNDER & LEAD ADVISOR</p>
            <h2 style={{ fontSize: '9rem', fontWeight: '900', lineHeight: '0.8', marginBottom: '60px' }}>BHAVIN PATEL</h2>
            <p style={{ fontSize: '2.8rem', fontStyle: 'italic', opacity: 0.4, borderLeft: `14px solid ${gold}`, paddingLeft: '60px', lineHeight: '1.2' }}>
              "Revolutionising the way extraordinary people build wealth."
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 9: SECTORS */}
      <section style={{ padding: '150px 24px', textAlign: 'center', opacity: 0.15 }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '80px', fontWeight: '900', fontSize: '2.2rem', textTransform: 'uppercase' }}>
          {["Childcare", "Medical", "NDIS", "Construction", "Real Estate", "Tech", "Retail"].map(s => <span key={s}>{s}</span>)}
        </div>
      </section>

      {/* SECTION 10: TESTIMONIALS */}
      <section style={{ padding: '250px 24px', maxWidth: '1400px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '6rem', fontWeight: '900', textAlign: 'center', marginBottom: '150px' }}>Trusted Feedback</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '60px' }}>
          {["Omkar Solanki", "Harshad Pathan", "Vishal Patel"].map(n => (
            <div key={n} className="reveal-curtain" style={{ padding: '100px 80px', backgroundColor: appleGrey, borderRadius: '80px' }}>
              <Star style={{ color: gold, marginBottom: '50px' }} fill={gold} size={40} />
              <p style={{ fontSize: '2.2rem', fontWeight: '900', marginBottom: '40px', lineHeight: '1.2' }}>"An extraordinary experience from start to finish."</p>
              <p style={{ fontWeight: '900', opacity: 0.3, fontSize: '14px' }}>— {n}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 11: FOOTER (The Grand Exit) */}
      <footer style={{ padding: '350px 24px 100px', backgroundColor: appleGrey, borderRadius: '250px 250px 0 0', textAlign: 'center' }}>
        <h2 className="reveal-curtain" style={{ fontSize: 'clamp(6rem, 25vw, 18rem)', fontWeight: '900', marginBottom: '150px', letterSpacing: '-0.1em' }}>Connect.</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '120px', marginBottom: '250px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '30px', fontSize: '3rem', fontWeight: '900' }}><Phone style={{ color: gold }} size={56} /> 0425 859 901</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '30px', fontSize: '3rem', fontWeight: '900' }}><Mail style={{ color: gold }} size={56} /> info@squareconnectgroup.com</div>
        </div>
        <div style={{ borderTop: '1px solid rgba(0,0,0,0.05)', paddingTop: '100px', textAlign: 'left', maxWidth: '1400px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', opacity: 0.2, fontSize: '13px', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '0.6em' }}>
            <div>Square Connect Advisory Group © 2026</div>
            <div>Strategic advisory and referral consultancy.</div>
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
