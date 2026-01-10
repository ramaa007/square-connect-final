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

// PREMIUM DATA CONSTANTS
const SERVICES = [
  { n: "01", t: "Mortgage & Finance", d: "Optimizing personal and commercial loans.", i: <Landmark size={40} /> },
  { n: "02", t: "Tax & Accounting", d: "Precision planning & compliance strategy.", i: <Building2 size={40} /> },
  { n: "03", t: "Legal Services", d: "Robust counsel for conveyancing & structures.", i: <ShieldCheck size={40} /> },
  { n: "04", t: "Real Estate", d: "Strategic acquisition and property advice.", i: <Briefcase size={40} /> },
  { n: "05", t: "Commercial Finance", d: "Tailored funding solutions for business growth.", i: <Zap size={40} /> },
  { n: "06", t: "Digital Services", d: "Transforming operations with modern technology.", i: <Globe size={40} /> }
];

const ADVANTAGES = [
  { n: "01", t: "Integrated Intelligence", d: "Connecting dots across all professional services." },
  { n: "02", t: "Proactive Speed", d: "Anticipating and managing processes end-to-end." },
  { n: "03", t: "Vetted Excellence", d: "Direct access to our pre-vetted elite partner network." },
  { n: "04", t: "Long-Term Vision", d: "Sustainable strategies for generational growth." }
];

export default function HomePage() {
  const containerRef = useRef(null);
  const gold = "#DFA528";
  const charcoal = "#383838";
  const appleGrey = "#F5F5F7";

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. MASKED REVEAL: Text slides up from an invisible box
      gsap.utils.toArray<HTMLElement>(".mask-reveal").forEach((el) => {
        gsap.fromTo(el, 
          { y: "110%", opacity: 0 },
          { y: "0%", opacity: 1, duration: 1.4, ease: "power4.out", scrollTrigger: { trigger: el, start: "top 90%" } }
        );
      });

      // 2. COUNTER ANIMATION: Numbers count up on scroll
      gsap.utils.toArray<HTMLElement>(".counter").forEach((counter) => {
        const target = parseInt(counter.getAttribute("data-target") || "0");
        gsap.to(counter, {
          innerText: target, duration: 3, ease: "power2.out", 
          scrollTrigger: { trigger: counter, start: "top 95%" },
          snap: { innerText: 1 }
        });
      });

      // 3. STAGGER FADE: Cards and items fade up smoothly
      gsap.utils.toArray<HTMLElement>(".stagger-group").forEach((group) => {
        gsap.from(group.children, {
          y: 60, opacity: 0, duration: 1, stagger: 0.15, ease: "expo.out",
          scrollTrigger: { trigger: group, start: "top 85%" }
        });
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} style={{ backgroundColor: '#ffffff', color: charcoal, fontFamily: 'system-ui, -apple-system, sans-serif', margin: 0, padding: 0 }}>
      
      {/* 1. HERO */}
      <section style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: appleGrey, textAlign: 'center', padding: '0 24px' }}>
        <div>
          <div style={{ overflow: 'hidden', marginBottom: '20px' }}><p className="mask-reveal" style={{ color: gold, fontWeight: '900', letterSpacing: '0.5em', fontSize: '12px', textTransform: 'uppercase' }}>One Group. All Business Solutions.</p></div>
          <div style={{ overflow: 'hidden' }}>
            <h1 className="mask-reveal" style={{ fontSize: 'clamp(3rem, 12vw, 9rem)', fontWeight: '900', lineHeight: '0.8', letterSpacing: '-0.06em', marginBottom: '40px', background: `linear-gradient(135deg, ${gold}, ${charcoal})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Your Trusted<br/>Advisory Partner
            </h1>
          </div>
          <p className="stagger-group" style={{ fontSize: '1.5rem', opacity: 0.4, fontWeight: '500', marginBottom: '60px' }}>Mortgage • Accounting • Legal • Real Estate • Commercial</p>
          <button style={{ backgroundColor: charcoal, color: 'white', padding: '25px 60px', borderRadius: '100px', fontWeight: '900', fontSize: '18px', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '15px', margin: '0 auto' }}>Explore Expertise <ArrowRight size={24} /></button>
        </div>
      </section>

      {/* 2. VISION */}
      <section style={{ padding: '200px 24px', maxWidth: '1300px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '100px', alignItems: 'center' }}>
        <div className="stagger-group">
          <h2 style={{ fontSize: '4.5rem', fontWeight: '900', lineHeight: '1', marginBottom: '40px' }}>Advisory Services That Work Together.</h2>
          <p style={{ fontSize: '1.4rem', lineHeight: '1.8', opacity: 0.6 }}>We integrate finance, legal, and property expertise to provide streamlined solutions under one roof.</p>
        </div>
        <div style={{ borderRadius: '80px', overflow: 'hidden', height: '650px', boxShadow: '0 50px 100px -20px rgba(0,0,0,0.1)' }}>
          <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80" style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="Vision" />
        </div>
      </section>

      {/* 3. QUICK STATS */}
      <section style={{ margin: '0 30px', padding: '150px 24px', backgroundColor: charcoal, color: 'white', borderRadius: '100px', display: 'flex', justifyContent: 'center', gap: '100px', flexWrap: 'wrap' }}>
        <div style={{ textAlign: 'center' }}><h3 style={{ fontSize: '7rem', fontWeight: '900', color: gold, margin: 0 }}><span className="counter" data-target="5">0</span>+</h3><p style={{ opacity: 0.3, letterSpacing: '0.4em', fontSize: '11px', fontWeight: '900' }}>YEARS EXCELLENCE</p></div>
        <div style={{ textAlign: 'center' }}><h3 style={{ fontSize: '7rem', fontWeight: '900', color: gold, margin: 0 }}><span className="counter" data-target="12">0</span>+</h3><p style={{ opacity: 0.3, letterSpacing: '0.4em', fontSize: '11px', fontWeight: '900' }}>INDUSTRIES SERVED</p></div>
        <div style={{ textAlign: 'center' }}><h3 style={{ fontSize: '7rem', fontWeight: '900', color: gold, margin: 0 }}>1</h3><p style={{ opacity: 0.3, letterSpacing: '0.4em', fontSize: '11px', fontWeight: '900' }}>UNIFIED PARTNER</p></div>
      </section>

      {/* 4. KEY VALUES TICKER */}
      <div style={{ padding: '100px 0', borderY: '1px solid #eee', overflow: 'hidden' }}>
        <div style={{ display: 'flex', gap: '80px', fontSize: '5rem', fontWeight: '900', opacity: 0.05, textTransform: 'uppercase', whiteSpace: 'nowrap' }}>
           <span>Strategic Alignment ✱ Professional Guidance ✱ Holistic Vision ✱ Collaborative Solutions ✱ Future Pathways ✱</span>
        </div>
      </div>

      {/* 5. ABOUT US */}
      <section style={{ padding: '200px 24px', backgroundColor: appleGrey }}>
        <div style={{ maxWidth: '1300px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '5rem', fontWeight: '900', textAlign: 'center', marginBottom: '120px', lineHeight: '0.9' }}>A smarter way to manage your world</h2>
          <div className="stagger-group" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
            {["Proactive", "Responsive", "Data-driven", "Accountable"].map(f => (
              <div key={f} style={{ backgroundColor: 'white', padding: '60px', borderRadius: '50px', textAlign: 'center' }}>
                <CheckCircle2 size={50} style={{ color: gold, marginBottom: '30px' }} />
                <h4 style={{ fontSize: '1.8rem', fontWeight: '900' }}>{f}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. SERVICES OVERVIEW */}
      <section style={{ padding: '200px 24px', maxWidth: '1400px', margin: '0 auto' }}>
        <div className="stagger-group" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '40px' }}>
          {SERVICES.map((s, i) => (
            <div key={i} style={{ padding: '80px', backgroundColor: appleGrey, borderRadius: '60px' }}>
              <div style={{ color: gold, marginBottom: '50px' }}>{s.i}</div>
              <h4 style={{ opacity: 0.3, fontWeight: '900', marginBottom: '10px' }}>{s.n}</h4>
              <h3 style={{ fontSize: '2.5rem', fontWeight: '900', marginBottom: '25px' }}>{s.t}</h3>
              <p style={{ opacity: 0.5, fontSize: '1.2rem' }}>{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 7. THE ADVANTAGE */}
      <section style={{ margin: '0 30px', padding: '200px 24px', backgroundColor: charcoal, color: 'white', borderRadius: '100px' }}>
        <div style={{ maxWidth: '1300px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '5rem', fontWeight: '900', textAlign: 'center', marginBottom: '100px' }}>The Advantage</h2>
          <div className="stagger-group" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))', gap: '50px' }}>
            {ADVANTAGES.map((adv, i) => (
              <div key={i} style={{ padding: '70px', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '60px' }}>
                <h4 style={{ fontSize: '2.5rem', fontWeight: '900', marginBottom: '25px', color: gold }}>{adv.n}</h4>
                <h5 style={{ fontSize: '2rem', fontWeight: '900', marginBottom: '25px' }}>{adv.t}</h5>
                <p style={{ opacity: 0.4, fontSize: '1.2rem' }}>{adv.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FOUNDER HIGHLIGHT */}
      <section style={{ padding: '200px 24px', maxWidth: '1300px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))', gap: '120px', alignItems: 'center' }}>
        <div style={{ borderRadius: '100px', overflow: 'hidden', height: '750px' }}>
          <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(1)' }} alt="Bhavin Patel" />
        </div>
        <div>
          <p style={{ color: gold, fontWeight: '900', fontSize: '14px', letterSpacing: '0.6em', marginBottom: '40px' }}>FOUNDER & LEAD ADVISOR</p>
          <h2 style={{ fontSize: '6rem', fontWeight: '900', marginBottom: '50px', lineHeight: '0.9' }}>BHAVIN PATEL</h2>
          <p style={{ fontSize: '2.2rem', fontStyle: 'italic', opacity: 0.5, borderLeft: `8px solid ${gold}`, paddingLeft: '40px' }}>
            "I founded Square Connect to revolutionise the way people build wealth."
          </p>
        </div>
      </section>

      {/* 9. SECTORS */}
      <section style={{ padding: '150px 24px', textAlign: 'center', opacity: 0.2 }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '80px', fontWeight: '900', fontSize: '2rem', textTransform: 'uppercase' }}>
          {["Childcare", "Medical", "NDIS", "Construction", "Real Estate", "Tech", "Retail"].map(s => <span key={s}>{s}</span>)}
        </div>
      </section>

      {/* 10. TESTIMONIALS */}
      <section style={{ padding: '200px 24px', maxWidth: '1300px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '5rem', fontWeight: '900', textAlign: 'center', marginBottom: '120px' }}>Trusted Feedback</h2>
        <div className="stagger-group" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '50px' }}>
          {["Omkar Solanki", "Harshad Pathan", "Vishal Patel", "Jaydeep Tank", "Poojan Patel"].map(n => (
            <div key={n} style={{ padding: '80px', backgroundColor: appleGrey, borderRadius: '60px' }}>
              <Star style={{ color: gold, marginBottom: '40px' }} fill={gold} size={25} />
              <p style={{ fontSize: '1.5rem', fontWeight: '900', marginBottom: '40px', lineHeight: '1.4' }}>"Professional & timely... highly recommended."</p>
              <p style={{ fontWeight: '900', opacity: 0.3, fontSize: '12px' }}>— {n}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 11. FOOTER */}
      <footer style={{ padding: '200px 24px', backgroundColor: appleGrey, borderRadius: '120px 120px 0 0', textAlign: 'center' }}>
        <h2 style={{ fontSize: 'clamp(4rem, 15vw, 12rem)', fontWeight: '900', marginBottom: '100px', letterSpacing: '-0.06em' }}>Ready to Connect?</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '100px', marginBottom: '150px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px', fontSize: '2rem', fontWeight: '900' }}><Phone style={{ color: gold }} size={32} /> 0425 859 901</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px', fontSize: '2rem', fontWeight: '900' }}><Mail style={{ color: gold }} size={32} /> info@squareconnectgroup.com</div>
        </div>
        <div style={{ borderTop: '1px solid rgba(0,0,0,0.05)', paddingTop: '80px', textAlign: 'left', maxWidth: '1300px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', opacity: 0.3, fontSize: '11px', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '0.3em' }}>
            <div>Square Connect Advisory Group © 2026 | 1644 Logan Road, Mount Gravatt QLD</div>
            <div style={{ maxWidth: '450px' }}>Legal Notice: Strategic advisory and referral consultancy. Not an ACL or AFSL holder.</div>
        </div>
      </footer>

    </div>
  );
}
