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

// 1. DATA OBJECTS (Defined globally for rendering stability)
const SERVICES = [
  { t: "Mortgage & Finance", d: "Optimizing personal and commercial loans.", i: <Landmark size={40} /> },
  { t: "Tax & Accounting", d: "Precision planning & compliance strategy.", i: <Building2 size={40} /> },
  { t: "Legal Services", d: "Robust counsel for conveyancing & structures.", i: <ShieldCheck size={40} /> },
  { t: "Real Estate", d: "Strategic acquisition and property advice.", i: <Briefcase size={40} /> },
  { t: "Commercial Finance", d: "Tailored funding solutions for business growth.", i: <Zap size={40} /> },
  { t: "Digital Services", d: "Transforming operations with modern technology.", i: <Globe size={40} /> }
];

const ADVANTAGES = [
  { n: "01", t: "Integrated Intelligence", d: "Connecting dots across all professional verticals." },
  { n: "02", t: "Proactive Speed", d: "Anticipating and managing processes end-to-end." },
  { n: "03", t: "Vetted Excellence", d: "Direct access to our pre-vetted elite partner network." },
  { n: "04", t: "Long-Term Vision", d: "Sustainable strategies built for generational growth." }
];

export default function HomePage() {
  const containerRef = useRef(null);
  const gold = "#DFA528";
  const charcoal = "#383838";
  const appleGrey = "#F5F5F7";

  useEffect(() => {
    const ctx = gsap.context(() => {
      // PREMIUM REVEAL: Headings slide up from a "mask"
      gsap.utils.toArray<HTMLElement>(".mask-reveal").forEach((el) => {
        gsap.fromTo(el, 
          { y: "100%", opacity: 0 },
          { y: "0%", opacity: 1, duration: 1.4, ease: "power4.out", scrollTrigger: { trigger: el, start: "top 90%" } }
        );
      });

      // PREMIUM FADE: Elements stagger into view
      gsap.utils.toArray<HTMLElement>(".stagger-fade").forEach((group) => {
        gsap.from(group.children, {
          y: 60, opacity: 0, duration: 1, stagger: 0.2, ease: "expo.out",
          scrollTrigger: { trigger: group, start: "top 85%" }
        });
      });

      // STATS COUNTER: Numbers count up
      gsap.utils.toArray<HTMLElement>(".counter").forEach((counter) => {
        const target = parseInt(counter.getAttribute("data-target") || "0");
        gsap.to(counter, {
          innerText: target, duration: 3, ease: "power2.out",
          scrollTrigger: { trigger: counter, start: "top 95%" },
          snap: { innerText: 1 }
        });
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} style={{ backgroundColor: '#ffffff', color: charcoal, fontFamily: 'system-ui, -apple-system, sans-serif', margin: 0, padding: 0, overflowX: 'hidden' }}>
      
      {/* SECTION 1: HERO */}
      <section style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: appleGrey, position: 'relative' }}>
        <div style={{ maxWidth: '1400px', textAlign: 'center', padding: '0 24px' }}>
          <div style={{ overflow: 'hidden', marginBottom: '20px' }}>
            <p className="mask-reveal" style={{ color: gold, fontWeight: '900', letterSpacing: '0.5em', fontSize: '12px', textTransform: 'uppercase' }}>Square Connect Advisory Group</p>
          </div>
          <div style={{ overflow: 'hidden' }}>
            <h1 className="mask-reveal" style={{ fontSize: 'clamp(3rem, 12vw, 9rem)', fontWeight: '900', lineHeight: '0.8', letterSpacing: '-0.06em', marginBottom: '40px', background: `linear-gradient(135deg, ${gold}, ${charcoal})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              One Group.<br/>All Solutions.
            </h1>
          </div>
          <p className="stagger-fade" style={{ fontSize: 'clamp(1.2rem, 3vw, 1.8rem)', opacity: 0.4, fontWeight: '500', marginBottom: '60px' }}>Mortgage • Accounting • Legal • Real Estate • Commercial</p>
          <button style={{ backgroundColor: charcoal, color: 'white', padding: '25px 60px', borderRadius: '100px', fontWeight: '900', fontSize: '18px', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '15px', margin: '0 auto', transition: 'transform 0.3s ease' }}>
            Explore Expertise <ArrowRight size={24} />
          </button>
        </div>
      </section>

      {/* SECTION 2: INTEGRATED VISION */}
      <section style={{ padding: '200px 24px', maxWidth: '1300px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '100px', alignItems: 'center' }}>
        <div className="stagger-fade">
          <h2 style={{ fontSize: '4.5rem', fontWeight: '900', lineHeight: '1', marginBottom: '40px' }}>Advisory Services That Work Together.</h2>
          <p style={{ fontSize: '1.4rem', lineHeight: '1.8', opacity: 0.6 }}>We remove the friction of coordinating multiple professionals by integrating finance, legal, and property expertise under one roof.</p>
        </div>
        <div style={{ borderRadius: '80px', overflow: 'hidden', height: '700px', boxShadow: '0 50px 100px -20px rgba(0,0,0,0.1)' }}>
          <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80" style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="Modern Office" />
        </div>
      </section>

      {/* SECTION 3: QUICK STATS */}
      <section style={{ margin: '0 30px', padding: '150px 24px', backgroundColor: charcoal, color: 'white', borderRadius: '100px', display: 'flex', justifyContent: 'center', gap: '100px', flexWrap: 'wrap' }}>
        <div style={{ textAlign: 'center' }}><h3 style={{ fontSize: '7rem', fontWeight: '900', color: gold, margin: 0 }}><span className="counter" data-target="5">0</span>+</h3><p style={{ opacity: 0.3, letterSpacing: '0.4em', fontSize: '11px', fontWeight: '900' }}>YEARS EXCELLENCE</p></div>
        <div style={{ textAlign: 'center' }}><h3 style={{ fontSize: '7rem', fontWeight: '900', color: gold, margin: 0 }}><span className="counter" data-target="12">0</span>+</h3><p style={{ opacity: 0.3, letterSpacing: '0.4em', fontSize: '11px', fontWeight: '900' }}>INDUSTRIES SERVED</p></div>
        <div style={{ textAlign: 'center' }}><h3 style={{ fontSize: '7rem', fontWeight: '900', color: gold, margin: 0 }}>1</h3><p style={{ opacity: 0.3, letterSpacing: '0.4em', fontSize: '11px', fontWeight: '900' }}>UNIFIED PARTNER</p></div>
      </section>

      {/* SECTION 4: KEY VALUES TICKER */}
      <div style={{ padding: '100px 0', borderY: '1px solid #eee', overflow: 'hidden', backgroundColor: 'white' }}>
        <div style={{ display: 'flex', gap: '80px', fontSize: '6rem', fontWeight: '900', opacity: 0.05, textTransform: 'uppercase', whiteSpace: 'nowrap' }}>
           <span>Strategic Alignment ✱ Professional Guidance ✱ Holistic Vision ✱ Collaborative Solutions ✱</span>
        </div>
      </div>

      {/* SECTION 5: ABOUT US */}
      <section style={{ padding: '200px 24px', backgroundColor: appleGrey }}>
        <div style={{ maxWidth: '1300px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '5rem', fontWeight: '900', textAlign: 'center', marginBottom: '120px', lineHeight: '0.9' }}>A smarter way to manage your world</h2>
          <div className="stagger-fade" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
            {["Proactive", "Responsive", "Data-driven", "Accountable"].map(f => (
              <div key={f} style={{ backgroundColor: 'white', padding: '60px', borderRadius: '50px', textAlign: 'center', boxShadow: '0 20px 40px rgba(0,0,0,0.02)' }}>
                <CheckCircle2 size={50} style={{ color: gold, marginBottom: '30px' }} />
                <h4 style={{ fontSize: '1.8rem', fontWeight: '900' }}>{f}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: SERVICES GRID */}
      <section style={{ padding: '200px 24px', maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '50px' }}>
          {SERVICES.map((s, i) => (
            <div key={i} className="stagger-fade" style={{ padding: '80px', backgroundColor: appleGrey, borderRadius: '60px', transition: 'transform 0.5s ease' }}>
              <div style={{ color: gold, marginBottom: '50px' }}>{s.i}</div>
              <h3 style={{ fontSize: '2.5rem', fontWeight: '900', marginBottom: '25px' }}>{s.t}</h3>
              <p style={{ opacity: 0.5, fontSize: '1.2rem', lineHeight: '1.6' }}>{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 7: THE ADVANTAGE */}
      <section style={{ margin: '0 30px', padding: '200px 24px', backgroundColor: charcoal, color: 'white', borderRadius: '100px' }}>
        <div style={{ maxWidth: '1300px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '5rem', fontWeight: '900', textAlign: 'center', marginBottom: '120px' }}>The Advantage</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))', gap: '50px' }}>
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

      {/* SECTION 8: FOUNDER HIGHLIGHT */}
      <section style={{ padding: '200px 24px', maxWidth: '1300px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))', gap: '120px', alignItems: 'center' }}>
        <div style={{ borderRadius: '100px', overflow: 'hidden', height: '800px' }}>
          <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(1)' }} alt="Bhavin Patel" />
        </div>
        <div>
          <p style={{ color: gold, fontWeight: '900', fontSize: '14px', letterSpacing: '0.6em', marginBottom: '40px' }}>FOUNDER & LEAD ADVISOR</p>
          <h2 style={{ fontSize: '6rem', fontWeight: '900', marginBottom: '50px', lineHeight: '0.9' }}>BHAVIN PATEL</h2>
          <p style={{ fontSize: '2.2rem', fontStyle: 'italic', opacity: 0.5, borderLeft: `8px solid ${gold}`, paddingLeft: '40px', lineHeight: '1.3' }}>
            "We transform professional complexity into absolute clarity for your wealth building."
          </p>
        </div>
      </section>

      {/* SECTION 9: SECTORS */}
      <section style={{ padding: '150px 24px', textAlign: 'center', opacity: 0.2 }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '80px', fontWeight: '900', fontSize: '2rem', textTransform: 'uppercase' }}>
          {["Childcare", "Medical", "NDIS", "Construction", "Real Estate", "Tech", "Retail"].map(s => <span key={s}>{s}</span>)}
        </div>
      </section>

      {/* SECTION 10: TESTIMONIALS */}
      <section style={{ padding: '200px 24px', maxWidth: '1300px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '5rem', fontWeight: '900', textAlign: 'center', marginBottom: '120px' }}>Trusted Feedback</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', gap: '50px' }}>
          {["Omkar Solanki", "Harshad Pathan", "Vishal Patel"].map(n => (
            <div key={n} style={{ padding: '80px', backgroundColor: appleGrey, borderRadius: '60px' }}>
              <Star style={{ color: gold, marginBottom: '40px' }} fill={gold} size={30} />
              <p style={{ fontSize: '1.8rem', fontWeight: '900', marginBottom: '40px', lineHeight: '1.3' }}>"Fantastic experience... saved us countless hours."</p>
              <p style={{ fontWeight: '900', opacity: 0.3, fontSize: '14px' }}>— {n}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 11: FOOTER */}
      <footer style={{ padding: '200px 24px', backgroundColor: appleGrey, borderRadius: '120px 120px 0 0', textAlign: 'center' }}>
        <h2 style={{ fontSize: 'clamp(4rem, 15vw, 12rem)', fontWeight: '900', marginBottom: '100px', letterSpacing: '-0.06em' }}>Ready to Connect?</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '100px', marginBottom: '150px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px', fontSize: '2rem', fontWeight: '900' }}><Phone style={{ color: gold }} size={32} /> 0425 859 901</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px', fontSize: '2rem', fontWeight: '900' }}><Mail style={{ color: gold }} size={32} /> info@squareconnectgroup.com</div>
        </div>
        <div style={{ borderTop: '1px solid rgba(0,0,0,0.05)', paddingTop: '80px', textAlign: 'left', maxWidth: '1300px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', opacity: 0.3, fontSize: '11px', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '0.3em' }}>
            <div>Square Connect Advisory Group © 2026</div>
            <div style={{ maxWidth: '450px' }}>Strategic Advisory and Referral Consultancy. Not an ACL or AFSL holder.</div>
        </div>
      </footer>

    </div>
  );
}