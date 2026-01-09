"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, CheckCircle2, Phone, Mail, Star, Zap, Building2, Landmark, ShieldCheck, Briefcase, Globe, Users2 } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function HomePage() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".reveal-text").forEach((text) => {
        gsap.from(text, {
          scrollTrigger: { trigger: text, start: "top 92%" },
          y: 30, opacity: 0, duration: 0.8, ease: "power3.out"
        });
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} style={{ backgroundColor: '#ffffff', color: '#383838' }}>
      
      {/* 1. HERO */}
      <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 24px', backgroundColor: '#F5F5F7', overflow: 'hidden' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', textAlign: 'center' }}>
          <p className="reveal-text" style={{ fontWeight: 'bold', letterSpacing: '0.3em', color: '#DFA528', fontSize: '12px', marginBottom: '24px', textTransform: 'uppercase' }}>Square Connect Advisory Group</p>
          <h1 className="reveal-text" style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', fontWeight: '900', letterSpacing: '-0.05em', lineHeight: '0.9', marginBottom: '32px' }}>
            One Group.<br/>All Solutions.
          </h1>
          <p className="reveal-text" style={{ fontSize: '1.25rem', opacity: 0.7, marginBottom: '48px' }}>Integrated Mortgage, Legal, and Financial Strategy.</p>
          <button className="reveal-text" style={{ backgroundColor: '#383838', color: 'white', padding: '20px 40px', borderRadius: '50px', fontWeight: 'bold', border: 'none', cursor: 'pointer' }}>
            Explore Expertise
          </button>
        </div>
      </section>

      {/* 2. VISION */}
      <section style={{ padding: '120px 24px', maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '80px', alignItems: 'center' }}>
        <div className="reveal-text">
          <h2 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '32px' }}>Integrated Intelligence</h2>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', opacity: 0.6 }}>We bring together every professional vertical to ensure your wealth is protected and your growth is seamless.</p>
        </div>
        <div style={{ backgroundColor: '#F5F5F7', borderRadius: '40px', height: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontStyle: 'italic', color: '#ccc' }}>
          <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '40px' }} alt="Vision" />
        </div>
      </section>

      {/* 3. STATS */}
      <section style={{ margin: '0 16px', padding: '100px 24px', backgroundColor: '#383838', color: 'white', borderRadius: '64px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '48px', textAlign: 'center' }}>
          <div><h2 style={{ fontSize: '4.5rem', fontWeight: 'bold', color: '#DFA528' }}>5+</h2><p style={{ letterSpacing: '0.2em', fontSize: '10px', opacity: 0.5 }}>YEARS OF EXCELLENCE</p></div>
          <div><h2 style={{ fontSize: '4.5rem', fontWeight: 'bold', color: '#DFA528' }}>12+</h2><p style={{ letterSpacing: '0.2em', fontSize: '10px', opacity: 0.5 }}>INDUSTRIES SERVED</p></div>
          <div><h2 style={{ fontSize: '4.5rem', fontWeight: 'bold', color: '#DFA528' }}>1</h2><p style={{ letterSpacing: '0.2em', fontSize: '10px', opacity: 0.5 }}>UNIFIED PARTNER</p></div>
        </div>
      </section>

      {/* 4. VALUES TICKER */}
      <div style={{ padding: '60px 0', overflow: 'hidden', borderBottom: '1px solid #eee' }}>
        <div className="animate-marquee" style={{ fontSize: '1.5rem', fontWeight: '900', textTransform: 'uppercase', opacity: 0.2, display: 'flex', gap: '40px', whiteSpace: 'nowrap' }}>
           <span>Strategic ✱ Professional ✱ Holistic ✱ Collaborative ✱ Strategic ✱ Professional ✱ Holistic ✱ Collaborative</span>
        </div>
      </div>

      {/* 5. ABOUT PREVIEW */}
      <section style={{ padding: '120px 24px', backgroundColor: '#F5F5F7' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px' }}>
          <h2 style={{ fontSize: '3.5rem', fontWeight: 'bold', lineHeight: '1.1' }}>A smarter way to manage your world.</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            {["Proactive", "Responsive", "Data-Driven", "Accountable"].map(v => (
              <div key={v} style={{ backgroundColor: 'white', padding: '30px', borderRadius: '24px', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <CheckCircle2 style={{ color: '#DFA528' }} /> {v}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. SERVICES GRID */}
      <section style={{ padding: '120px 24px', maxWidth: '1280px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '3rem', fontWeight: 'bold', textAlign: 'center', marginBottom: '80px' }}>Our Services</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
          {[
            { t: "Mortgage & Finance", i: <Landmark /> },
            { t: "Tax & Accounting", i: <Building2 /> },
            { t: "Legal Services", i: <ShieldCheck /> },
            { t: "Real Estate Advisory", i: <Briefcase /> },
            { t: "Commercial Finance", i: <Zap /> },
            { t: "Digital Services", i: <Globe /> }
          ].map((s, i) => (
            <div key={i} style={{ padding: '50px', backgroundColor: '#F5F5F7', borderRadius: '40px', transition: 'all 0.3s' }}>
              <div style={{ marginBottom: '32px', color: '#DFA528' }}>{s.i}</div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '16px' }}>{s.t}</h3>
              <p style={{ opacity: 0.6 }}>Bespoke strategy designed for your specific journey.</p>
            </div>
          ))}
        </div>
      </section>

      {/* 7. WHY CHOOSE US */}
      <section style={{ margin: '0 16px', padding: '120px 24px', backgroundColor: '#383838', color: 'white', borderRadius: '64px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '60px' }}>Why Choose Us</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px' }}>
          {["Vetted Excellence", "Proactive Speed", "Long-term Vision", "Integrated Logic"].map(w => (
            <div key={w} style={{ padding: '40px', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '32px' }}>
              <Star style={{ color: '#DFA528', marginBottom: '16px' }} />
              <p style={{ fontWeight: 'bold' }}>{w}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 8. FOUNDER */}
      <section style={{ padding: '120px 24px', maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '80px', alignItems: 'center', backgroundColor: '#F5F5F7', padding: '60px', borderRadius: '64px' }}>
          <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80" style={{ width: '300px', height: '400px', objectFit: 'cover', borderRadius: '40px' }} alt="Founder" />
          <div style={{ flex: 1 }}>
            <p style={{ color: '#DFA528', fontWeight: 'bold', letterSpacing: '0.2em', fontSize: '12px' }}>LEAD ADVISOR</p>
            <h2 style={{ fontSize: '4rem', fontWeight: '900', margin: '16px 0' }}>BHAVIN PATEL</h2>
            <p style={{ fontSize: '1.5rem', fontStyle: 'italic', opacity: 0.6 }}>"I founded Square Connect to revolutionise wealth building through integration."</p>
          </div>
        </div>
      </section>

      {/* 9. INDUSTRIES */}
      <section style={{ padding: '100px 24px', textAlign: 'center', opacity: 0.4 }}>
        <p style={{ fontSize: '12px', fontWeight: 'bold', letterSpacing: '0.4em', marginBottom: '40px' }}>INDUSTRIES WE SUPPORT</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '40px', fontWeight: 'bold' }}>
          {["Childcare", "Medical", "NDIS", "Construction", "Real Estate", "Professional"].map(ind => <span key={ind}>{ind}</span>)}
        </div>
      </section>

      {/* 10. FEEDBACK */}
      <section style={{ padding: '120px 0', backgroundColor: '#fff', overflow: 'hidden' }}>
        <div className="animate-marquee" style={{ display: 'flex', gap: '32px' }}>
          {[1,2,3,4,5].map(n => (
            <div key={n} style={{ minWidth: '400px', padding: '60px', backgroundColor: '#F5F5F7', borderRadius: '40px' }}>
              <p style={{ fontSize: '1.2rem', fontStyle: 'italic', marginBottom: '24px' }}>"Professional, knowledgeable, and proactive. Transformed our business finances."</p>
              <p style={{ fontWeight: 'bold', color: '#DFA528' }}>— Client {n}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 11. CTA / FOOTER */}
      <footer style={{ padding: '120px 24px', backgroundColor: '#F5F5F7', borderRadius: '64px 64px 0 0', textAlign: 'center' }}>
        <h2 style={{ fontSize: '5rem', fontWeight: 'bold', marginBottom: '64px' }}>Ready to Connect?</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '60px', marginBottom: '100px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', fontSize: '1.5rem', fontWeight: 'bold' }}><Phone style={{ color: '#DFA528' }} /> 0425 859 901</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', fontSize: '1.5rem', fontWeight: 'bold' }}><Mail style={{ color: '#DFA528' }} /> info@squareconnectgroup.com</div>
        </div>
        <div style={{ paddingTop: '60px', borderTop: '1px solid #ddd', fontSize: '10px', opacity: 0.4 }}>
          © 2026 Square Connect Advisory Group. Independent Referral & Advisory.
        </div>
      </footer>

    </div>
  );
}