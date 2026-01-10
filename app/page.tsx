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
  const gold = "#DFA528";
  const charcoal = "#383838";
  const appleGrey = "#F5F5F7";

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. HIGH-END HEADING REVEAL (Word-by-word feel)
      gsap.utils.toArray<HTMLElement>(".reveal-heading").forEach((heading) => {
        gsap.fromTo(heading, 
          { y: 80, opacity: 0 },
          { 
            y: 0, opacity: 1, duration: 1.5, ease: "power4.out",
            scrollTrigger: { trigger: heading, start: "top 85%" }
          }
        );
      });

      // 2. PREMIUM FADE-UP FOR CARDS & TEXT
      gsap.utils.toArray<HTMLElement>(".fade-up").forEach((el) => {
        gsap.from(el, {
          scrollTrigger: { trigger: el, start: "top 90%" },
          y: 40, opacity: 0, duration: 1, ease: "power3.out", stagger: 0.2
        });
      });

      // 3. STATS COUNTER
      gsap.utils.toArray<HTMLElement>(".counter-val").forEach((counter) => {
        const target = parseInt(counter.getAttribute("data-target") || "0");
        gsap.fromTo(counter, 
          { innerText: 0 },
          { 
            innerText: target, duration: 2.5, ease: "power2.out",
            scrollTrigger: { trigger: counter, start: "top 90%" },
            snap: { innerText: 1 }
          }
        );
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  // Shared Premium Card Style
  const cardStyle = {
    padding: '60px', backgroundColor: appleGrey, borderRadius: '50px',
    transition: 'all 0.5s ease', border: '1px solid transparent'
  };

  return (
    <div ref={containerRef} style={{ backgroundColor: '#ffffff', color: charcoal, fontFamily: 'system-ui, -apple-system, sans-serif', margin: 0, padding: 0 }}>
      
      {/* 1. HERO SECTION */}
      <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: appleGrey, padding: '0 24px' }}>
        <div style={{ maxWidth: '1200px', textAlign: 'center' }}>
          <p className="fade-up" style={{ color: gold, fontWeight: '900', letterSpacing: '0.4em', fontSize: '11px', marginBottom: '30px', textTransform: 'uppercase' }}>Square Connect Advisory Group</p>
          <h1 className="reveal-heading" style={{ fontSize: 'clamp(3.5rem, 12vw, 8.5rem)', fontWeight: '900', lineHeight: '0.85', letterSpacing: '-0.06em', marginBottom: '40px' }}>
            One Group.<br/>All Solutions.
          </h1>
          <p className="fade-up" style={{ fontSize: 'clamp(1.2rem, 3vw, 1.8rem)', opacity: 0.5, maxWidth: '800px', margin: '0 auto 50px' }}>Integrated Mortgage, Legal, and Financial Strategy.</p>
          <button style={{ backgroundColor: charcoal, color: 'white', padding: '24px 50px', borderRadius: '100px', fontWeight: 'bold', fontSize: '18px', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '15px', margin: '0 auto' }}>
            Explore Expertise <ArrowRight size={22} />
          </button>
        </div>
      </section>

      {/* 2. VISION */}
      <section style={{ padding: '160px 24px', maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '100px', alignItems: 'center' }}>
        <div className="fade-up">
          <h2 style={{ fontSize: '4rem', fontWeight: '800', marginBottom: '40px', lineHeight: '1.1' }}>Unified Strategy.<br/>Seamless Growth.</h2>
          <p style={{ fontSize: '1.25rem', lineHeight: '1.8', opacity: 0.6 }}>We remove the friction of coordinating multiple professionals by integrating finance, legal, and property expertise under one roof.</p>
        </div>
        <div style={{ borderRadius: '60px', overflow: 'hidden', height: '600px', backgroundColor: appleGrey }}>
          <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80" style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="Vision" />
        </div>
      </section>

      {/* 3. STATS (Counters) */}
      <section style={{ margin: '0 20px', padding: '120px 24px', backgroundColor: charcoal, color: 'white', borderRadius: '80px', textAlign: 'center' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '60px' }}>
          <div><h2 style={{ fontSize: '6rem', color: gold, margin: 0 }}><span className="counter-val" data-target="5">5</span>+</h2><p style={{ opacity: 0.4, letterSpacing: '0.2em', fontSize: '12px', fontWeight: 'bold' }}>YEARS EXCELLENCE</p></div>
          <div><h2 style={{ fontSize: '6rem', color: gold, margin: 0 }}><span className="counter-val" data-target="12">12</span>+</h2><p style={{ opacity: 0.4, letterSpacing: '0.2em', fontSize: '12px', fontWeight: 'bold' }}>INDUSTRIES SERVED</p></div>
          <div><h2 style={{ fontSize: '6rem', color: gold, margin: 0 }}>1</h2><p style={{ opacity: 0.4, letterSpacing: '0.2em', fontSize: '12px', fontWeight: 'bold' }}>UNIFIED CONTACT</p></div>
        </div>
      </section>

      {/* 4. VALUES MARQUEE */}
      <div style={{ padding: '80px 0', borderY: '1px solid #eee', overflow: 'hidden' }}>
        <div style={{ display: 'flex', gap: '50px', fontSize: '6rem', fontWeight: '900', opacity: 0.05, textTransform: 'uppercase', whiteSpace: 'nowrap' }}>
           <span>Strategic Alignment ✱ Professional Guidance ✱ Holistic Vision ✱ Collaborative Solutions ✱</span>
        </div>
      </div>

      {/* 5. ABOUT PREVIEW */}
      <section style={{ padding: '160px 24px', backgroundColor: appleGrey }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 className="reveal-heading" style={{ fontSize: '5rem', fontWeight: '800', textAlign: 'center', marginBottom: '100px' }}>A smarter way to manage your world</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
            {["Proactive", "Responsive", "Data-driven", "Accountable"].map(f => (
              <div key={f} className="fade-up" style={{ backgroundColor: 'white', padding: '50px', borderRadius: '40px', textAlign: 'center' }}>
                <CheckCircle2 size={40} style={{ color: gold, marginBottom: '20px' }} />
                <h4 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{f}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. SERVICES GRID (6 CARDS) */}
      <section style={{ padding: '160px 24px', maxWidth: '1200px', margin: '0 auto' }}>
        <h2 className="reveal-heading" style={{ fontSize: '4rem', fontWeight: '800', textAlign: 'center', marginBottom: '100px' }}>Integrated Services</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px' }}>
          {[
            { t: "Mortgage & Finance", i: <Landmark /> }, { t: "Tax & Accounting", i: <Building2 /> },
            { t: "Legal Services", i: <ShieldCheck /> }, { t: "Real Estate", i: <Briefcase /> },
            { t: "Commercial Finance", i: <Zap /> }, { t: "Digital Services", i: <Globe /> }
          ].map((s, i) => (
            <div key={i} className="fade-up" style={cardStyle}>
              <div style={{ color: gold, marginBottom: '40px' }}>{s.i}</div>
              <h3 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '20px' }}>{s.t}</h3>
              <p style={{ opacity: 0.5, fontSize: '1.1rem' }}>Bespoke strategy designed for your unique growth journey.</p>
            </div>
          ))}
        </div>
      </section>

      {/* 7. THE ADVANTAGE */}
      <section style={{ margin: '0 20px', padding: '160px 24px', backgroundColor: charcoal, color: 'white', borderRadius: '80px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 className="reveal-heading" style={{ fontSize: '4rem', fontWeight: '800', textAlign: 'center', marginBottom: '100px' }}>The Advantage</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '40px' }}>
            {["Integrated Intelligence", "Proactive Speed", "Vetted Excellence", "Long-Term Vision"].map((adv, i) => (
              <div key={i} className="fade-up" style={{ padding: '60px', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '50px' }}>
                <h4 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '20px', color: gold }}>0{i+1}</h4>
                <h5 style={{ fontSize: '1.75rem', fontWeight: 'bold', marginBottom: '20px' }}>{adv}</h5>
                <p style={{ opacity: 0.4 }}>Anticipating and managing complex processes end-to-end.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FOUNDER HIGHLIGHT */}
      <section style={{ padding: '160px 24px', maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '100px', alignItems: 'center' }}>
        <div className="fade-up" style={{ borderRadius: '60px', overflow: 'hidden', height: '700px' }}>
          <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(1)' }} alt="Founder" />
        </div>
        <div className="fade-up">
          <p style={{ color: gold, fontWeight: '900', fontSize: '12px', letterSpacing: '0.4em', marginBottom: '30px' }}>FOUNDER & LEAD ADVISOR</p>
          <h2 style={{ fontSize: '5rem', fontWeight: '900', marginBottom: '40px', lineHeight: '1' }}>BHAVIN PATEL</h2>
          <p style={{ fontSize: '2rem', fontStyle: 'italic', opacity: 0.5, borderLeft: `6px solid ${gold}`, paddingLeft: '30px' }}>
            "We transform professional complexity into absolute clarity for your wealth building."
          </p>
        </div>
      </section>

      {/* 9. SECTORS */}
      <section style={{ padding: '100px 24px', textAlign: 'center', opacity: 0.3 }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '50px', fontWeight: '900', fontSize: '1.5rem', textTransform: 'uppercase' }}>
          {["Childcare", "Medical", "NDIS", "Construction", "Real Estate", "Tech", "Retail"].map(s => <span key={s}>{s}</span>)}
        </div>
      </section>

      {/* 10. TESTIMONIALS */}
      <section style={{ padding: '160px 24px', maxWidth: '1200px', margin: '0 auto' }}>
        <h2 className="reveal-heading" style={{ fontSize: '4rem', fontWeight: '800', textAlign: 'center', marginBottom: '100px' }}>Trusted Feedback</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '40px' }}>
          {["Omkar Solanki", "Harshad Pathan", "Vishal Patel"].map(n => (
            <div key={n} className="fade-up" style={{ padding: '60px', backgroundColor: appleGrey, borderRadius: '50px' }}>
              <Star style={{ color: gold, marginBottom: '30px' }} fill={gold} />
              <p style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '30px' }}>"Fantastic experience... saved us countless hours."</p>
              <p style={{ fontWeight: 'bold', opacity: 0.3 }}>— {n}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 11. FOOTER */}
      <footer style={{ padding: '160px 24px', backgroundColor: appleGrey, borderRadius: '80px 80px 0 0', textAlign: 'center' }}>
        <h2 className="reveal-heading" style={{ fontSize: 'clamp(4rem, 15vw, 10rem)', fontWeight: '900', marginBottom: '80px', letterSpacing: '-0.05em' }}>Ready to Connect?</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '80px', marginBottom: '120px', fontSize: '1.5rem', fontWeight: 'bold' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}><Phone style={{ color: gold }} /> 0425 859 901</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}><Mail style={{ color: gold }} /> info@squareconnectgroup.com</div>
        </div>
        <p style={{ opacity: 0.2, fontSize: '12px', fontWeight: 'bold', textTransform: 'uppercase', tracking: '0.4em' }}>Square Connect Advisory Group © 2026</p>
      </footer>

    </div>
  );
}