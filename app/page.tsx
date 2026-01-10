"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { useRef } from "react"

const springEasing = {
  type: "spring",
  stiffness: 100,
  damping: 20,
}

const mindBlowReveal = {
  hidden: { opacity: 0, y: 100, scale: 0.8, rotate: -5, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotate: 0,
    filter: "blur(0px)",
    transition: { duration: 1.2, ease: [0.6, -0.05, 0.01, 0.99], ...springEasing },
  },
}

const staggerMindBlow = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
}

const wordExplode = {
  hidden: { opacity: 0, scale: 0.5, rotate: 180 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { duration: 1, ...springEasing },
  },
}

const hoverExtraordinary = {
  scale: 1.05,
  rotate: 2,
  boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
  transition: { duration: 0.4, ease: "easeInOut" },
}

const services = [
  { num: "01", title: "Mortgage & Finance", desc: "Optimizing personal and commercial loans" },
  { num: "02", title: "Tax & Accounting", desc: "Precision planning & compliance" },
  { num: "03", title: "Legal Services", desc: "Robust counsel for conveyancing & structures" },
  { num: "04", title: "Real Estate", desc: "Strategic acquisition advice" },
  { num: "05", title: "Commercial Finance", desc: "Tailored funding solutions" },
  { num: "06", title: "Digital Services", desc: "Transforming business operations with tech" },
]

const values = [
  "Strategic Alignment ✱",
  "Professional Guidance ✱",
  "Holistic Vision ✱",
  "Collaborative Solutions ✱",
  "Future Pathways ✱",
  "Tailored Roadmaps ✱",
]

const features = [
  "Proactive: We anticipate needs before they arise",
  "Responsive: Fast, professional replies always",
  "Data-driven: Backed by real market insight",
  "Accountable: One clear point of contact",
]

const advantages = [
  "01 Integrated Intelligence - We connect the dots across services",
  "02 Proactive Speed - Anticipate and manage processes end-to-end",
  "03 Vetted Excellence - Direct access to pre-vetted elite network",
  "04 Long-Term Vision - Sustainable strategies for generational growth",
]

const industries = [
  "Childcare", "NDIS", "Medical", "Construction", "Real Estate",
  "Tech", "Retail", "Hospitality", "Professional", "Renewable",
]

const testimonials = [
  { text: "Fantastic experience… saved us countless hours.", author: "Omkar Solanki" },
  { text: "Clear, professional advice. Highly recommended.", author: "Harshad Pathan" },
  { text: "Professional & Timely.", author: "Vishal Patel" },
  { text: "Transformed our finances.", author: "Jaydeep Tank" },
  { text: "Highly recommended.", author: "Poojan Patel" },
]

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null)
  const integratedRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)
  const valuesRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress: heroProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] })
  const heroParallax = useTransform(heroProgress, [0, 1], ["0%", "30%"])

  const { scrollYProgress: integratedProgress } = useScroll({ target: integratedRef, offset: ["start end", "end start"] })
  const integratedParallax = useTransform(integratedProgress, [0, 1], ["-20%", "20%"])

  const { scrollYProgress: statsProgress } = useScroll({ target: statsRef, offset: ["start end", "end start"] })
  const statsParallax = useTransform(statsProgress, [0, 1], ["10%", "-10%"])

  return (
    <main className="bg-white overflow-x-hidden">
      {/* HERO - White with Parallax 1 */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center px-6 py-32 md:px-12 overflow-hidden">
        <motion.div
          className="absolute inset-0 -z-10"
          style={{ y: heroParallax, scale: 1.1 }}
        >
          <Image
            src="/images/hero.png"
            alt="Premium abstract advisory environment, white minimal interior, soft daylight, glass and light shadows, Apple-style, trust-focused, editorial"
            fill
            className="object-cover opacity-30"
            priority
          />
        </motion.div>

        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-br from-gold-default to-charcoal-default bg-clip-text text-transparent"
            initial="hidden"
            animate="visible"
            variants={staggerMindBlow}
          >
            {"One Group. All Business Solutions.".split(" ").map((word, i) => (
              <motion.span key={i} variants={wordExplode} className="inline-block">
                {word}{" "}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p
            className="mt-6 text-2xl md:text-3xl text-charcoal-default"
            variants={mindBlowReveal}
            initial="hidden"
            animate="visible"
          >
            Your Trusted Advisory Partner
          </motion.p>

          <motion.p
            className="mt-3 text-xl text-charcoal-light"
            variants={mindBlowReveal}
            initial="hidden"
            animate="visible"
          >
            Mortgage • Accounting • Legal • Real Estate • Commercial
          </motion.p>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={mindBlowReveal}
          >
            <Link
              href="/contact"
              className="mt-10 inline-block px-10 py-5 bg-gold-default text-white font-medium rounded-full text-lg hover:bg-gold-dark transition-colors"
            >
              Explore Expertise
            </Link>
          </motion.div>
        </div>
      </section>

      {/* INTEGRATED VISION - Gray 1 with Parallax 2 */}
      <motion.section
        ref={integratedRef}
        className="py-32 px-6 md:px-12 bg-grayLight relative overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerMindBlow}
      >
        <motion.div
          className="absolute inset-0 -z-10"
          style={{ y: integratedParallax }}
        >
          <Image
            src="/images/integrated-vision.png"
            alt="Wide architectural workspace, modern advisory meeting, minimal design, neutral palette, calm confidence"
            fill
            className="object-cover opacity-10"
          />
        </motion.div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.h2
            className="text-4xl md:text-6xl font-bold bg-gradient-to-br from-gold-default to-charcoal-default bg-clip-text text-transparent"
            variants={mindBlowReveal}
          >
            Advisory Services That Work Together for You
          </motion.h2>

          <motion.p
            className="mt-10 text-xl max-w-4xl mx-auto text-charcoal-default"
            variants={mindBlowReveal}
          >
            We integrate finance, legal, and property expertise to provide streamlined solutions under one roof, ensuring clear and efficient guidance every step of the way.
          </motion.p>

          <motion.div variants={mindBlowReveal} className="mt-16">
            <Image
              src="/images/integrated-vision.png"
              alt="Wide architectural workspace, modern advisory meeting, minimal design, neutral palette, calm confidence"
              width={1400}
              height={800}
              className="rounded-2xl w-full object-cover shadow-2xl"
            />
          </motion.div>
        </div>
      </motion.section>

      {/* QUICK STATS - Gray 2 with Parallax 3 */}
      <motion.section
        ref={statsRef}
        className="py-32 px-6 md:px-12 bg-grayLight relative overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerMindBlow}
      >
        <motion.div
          className="absolute inset-0 -z-10"
          style={{ y: statsParallax }}
        >
          <Image
            src="/images/quick-stats.png"
            alt="Minimal infographic-style visuals, modern editorial style, light palette"
            fill
            className="object-cover opacity-10"
          />
        </motion.div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-16 text-center relative z-10">
          {[
            { value: "5+", label: "Years" },
            { value: "12+", label: "Industries" },
            { value: "1", label: "Contact" },
          ].map((stat, i) => (
            <motion.div key={i} variants={mindBlowReveal}>
              <div className="text-7xl font-bold text-gold-default">{stat.value}</div>
              <p className="mt-4 text-2xl text-charcoal-default">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <motion.div variants={mindBlowReveal} className="mt-20 relative z-10">
          <Image
            src="/images/quick-stats.png"
            alt="Minimal infographic-style visuals, modern editorial style, light palette"
            width={1400}
            height={600}
            className="mx-auto rounded-2xl"
          />
        </motion.div>
      </motion.section>

      {/* KEY VALUES - Gray 3 */}
      <motion.section
        ref={valuesRef}
        className="py-32 px-6 md:px-12 bg-grayLight"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerMindBlow}
      >
        <div className="max-w-7xl mx-auto text-center">
          {values.map((value, i) => (
            <motion.p
              key={i}
              className="text-3xl md:text-5xl font-light text-charcoal-default my-6"
              variants={mindBlowReveal}
            >
              {value}
            </motion.p>
          ))}
        </div>

        <motion.div variants={mindBlowReveal} className="mt-20">
          <Image
            src="/images/key-values.png"
            alt="Abstract geometric shapes representing clarity, guidance, collaboration"
            width={1400}
            height={800}
            className="rounded-2xl w-full object-cover"
          />
        </motion.div>
      </motion.section>

      {/* ABOUT / WHY - White */}
      <motion.section
        className="py-32 px-6 md:px-12 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={staggerMindBlow}
      >
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2
            className="text-4xl md:text-6xl font-bold bg-gradient-to-br from-gold-default to-charcoal-default bg-clip-text text-transparent"
            variants={mindBlowReveal}
          >
            A smarter way to manage your world
          </motion.h2>

          <motion.p
            className="mt-10 text-xl max-w-4xl mx-auto text-charcoal-default"
            variants={mindBlowReveal}
          >
            Square Connect removes the burden of coordinating multiple professionals. Your dedicated advisor oversees the entire journey—bringing together finance, legal, tax and strategic partners.
          </motion.p>

          <motion.ul
            className="mt-16 grid md:grid-cols-2 gap-8 max-w-4xl mx-auto text-left text-lg"
            variants={staggerMindBlow}
          >
            {features.map((f, i) => (
              <motion.li key={i} variants={mindBlowReveal} className="text-charcoal-default">
                {f}
              </motion.li>
            ))}
          </motion.ul>

          <motion.div variants={mindBlowReveal} className="mt-20">
            <Image
              src="/images/about-us.png"
              alt="Human-focused advisory interaction, daylight, modern professional interior"
              width={1400}
              height={800}
              className="rounded-2xl w-full object-cover"
            />
          </motion.div>
        </div>
      </motion.section>

      {/* SERVICES - White */}
      <motion.section
        className="py-32 px-6 md:px-12 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-4xl md:text-6xl font-bold text-center bg-gradient-to-br from-gold-default to-charcoal-default bg-clip-text text-transparent mb-20"
            variants={mindBlowReveal}
          >
            Our Services
          </motion.h2>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
            variants={staggerMindBlow}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {services.map((s) => (
              <motion.div
                key={s.num}
                className="group bg-white p-10 rounded-2xl border border-transparent hover:border-gold-default transition-all duration-500"
                variants={mindBlowReveal}
                whileHover={hoverExtraordinary}
              >
                <div className="text-2xl font-bold text-charcoal-default">
                  {s.num} {s.title}
                </div>
                <p className="mt-4 text-charcoal-light">{s.desc}</p>
                <div className="mt-6 h-0.5 bg-gold-default w-0 group-hover:w-full transition-all duration-500" />
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center mt-16">
            <Link
              href="/contact"
              className="inline-block px-10 py-5 bg-gold-default text-white font-medium rounded-full text-lg hover:bg-gold-dark transition-colors"
            >
              Start Conversation
            </Link>
          </div>

          <motion.div variants={mindBlowReveal} className="mt-20">
            <Image
              src="/images/services-overview.png"
              alt="Abstract symbolic visuals for finance, law, property, and digital services; minimal icons, editorial style, white background"
              width={1400}
              height={600}
              className="mx-auto rounded-2xl"
            />
          </motion.div>
        </div>
      </motion.section>

      {/* ADVANTAGE - White */}
      <motion.section
        className="py-32 px-6 md:px-12 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerMindBlow}
      >
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2
            className="text-4xl md:text-6xl font-bold bg-gradient-to-br from-gold-default to-charcoal-default bg-clip-text text-transparent"
            variants={mindBlowReveal}
          >
            The Square Connect Advantage
          </motion.h2>

          <motion.ul className="mt-16 space-y-10 text-xl text-left max-w-4xl mx-auto">
            {advantages.map((a, i) => (
              <motion.li key={i} variants={mindBlowReveal}>
                {a}
              </motion.li>
            ))}
          </motion.ul>

          <motion.div variants={mindBlowReveal} className="mt-20">
            <Image
              src="/images/the-advantage.png"
              alt="Professional collaboration scene, modern minimal environment, calm confident feel"
              width={1400}
              height={800}
              className="rounded-2xl w-full object-cover"
            />
          </motion.div>
        </div>
      </motion.section>

      {/* FOUNDER - White */}
      <motion.section
        className="py-32 px-6 md:px-12 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerMindBlow}
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div variants={mindBlowReveal}>
            <Image
              src="/images/founder-highlight.png"
              alt="Professional founder portrait, natural light, neutral background, confident and approachable, editorial style"
              width={800}
              height={1000}
              className="rounded-2xl shadow-2xl"
            />
          </motion.div>

          <div>
            <motion.h3
              className="text-5xl font-bold text-charcoal-default"
              variants={mindBlowReveal}
            >
              BHAVIN PATEL
            </motion.h3>
            <motion.p
              className="mt-4 text-2xl text-charcoal-light"
              variants={mindBlowReveal}
            >
              Founder & Lead Advisor
            </motion.p>
            <motion.p
              className="mt-10 text-xl text-charcoal-default"
              variants={mindBlowReveal}
            >
              With over 5 years of relentless drive and trusted expertise, Bhavin transforms complexity into clarity. "I founded Square Connect to revolutionise the way people build wealth."
            </motion.p>

            <motion.div variants={mindBlowReveal} className="mt-12">
              <Link
                href="/contact"
                className="inline-block px-10 py-5 bg-gold-default text-white font-medium rounded-full text-lg hover:bg-gold-dark transition-colors"
              >
                Connect with Bhavin
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* INDUSTRIES - White */}
      <motion.section
        className="py-32 px-6 md:px-12 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerMindBlow}
      >
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2
            className="text-4xl md:text-6xl font-bold bg-gradient-to-br from-gold-default to-charcoal-default bg-clip-text text-transparent"
            variants={mindBlowReveal}
          >
            Industries We Support
          </motion.h2>

          <motion.div
            className="mt-16 grid grid-cols-2 md:grid-cols-5 gap-8"
            variants={staggerMindBlow}
          >
            {industries.map((ind, i) => (
              <motion.div
                key={i}
                className="text-xl font-medium text-charcoal-default"
                variants={mindBlowReveal}
              >
                {ind}
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={mindBlowReveal} className="mt-20">
            <Image
              src="/images/sectors.png"
              alt="Editorial flat-icons representing each industry, minimal, soft daylight"
              width={1400}
              height={600}
              className="mx-auto rounded-2xl"
            />
          </motion.div>
        </div>
      </motion.section>

      {/* TESTIMONIALS - White */}
      <motion.section
        className="py-32 px-6 md:px-12 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-5xl mx-auto text-center">
          <motion.h2
            className="text-4xl md:text-6xl font-bold bg-gradient-to-br from-gold-default to-charcoal-default bg-clip-text text-transparent"
            variants={mindBlowReveal}
          >
            Client Testimonials
          </motion.h2>

          <motion.div
            className="mt-16 space-y-16"
            variants={staggerMindBlow}
          >
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                className="text-2xl md:text-3xl italic text-charcoal-default"
                variants={mindBlowReveal}
              >
                “{t.text}”
                <p className="mt-6 text-xl text-charcoal-light not-italic">
                  — {t.author}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={mindBlowReveal} className="mt-20">
            <Image
              src="/images/client-testimonials.png"
              alt="Abstract happy clients, editorial style, warm daylight, soft focus"
              width={1400}
              height={600}
              className="mx-auto rounded-2xl"
            />
          </motion.div>
        </div>
      </motion.section>

      {/* FINAL CTA - White */}
      <motion.section
        className="py-32 px-6 md:px-12 bg-white text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerMindBlow}
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-4xl md:text-6xl font-bold bg-gradient-to-br from-gold-default to-charcoal-default bg-clip-text text-transparent"
            variants={mindBlowReveal}
          >
            Ready to Connect?
          </motion.h2>

          <motion.p className="mt-8 text-xl text-charcoal-default" variants={mindBlowReveal}>
            We’re here to help you navigate your financial and legal journey with confidence.
          </motion.p>

          <motion.div className="mt-12 space-y-4 text-lg text-charcoal-default" variants={mindBlowReveal}>
            <p>1644 Logan Road, Mount Gravatt QLD</p>
            <p>0425 859 901</p>
            <p>info@squareconnectgroup.com</p>
          </motion.div>

          <motion.div className="mt-16" variants={mindBlowReveal}>
            <Link
              href="/contact"
              className="inline-block px-12 py-6 bg-gold-default text-white font-medium rounded-full text-xl hover:bg-gold-dark transition-colors"
            >
              Get in Touch
            </Link>
          </motion.div>

          <motion.div variants={mindBlowReveal} className="mt-20">
            <Image
              src="/images/call-to-action.png"
              alt="Welcoming modern office entrance, daylight, approachable advisory atmosphere"
              width={1400}
              height={800}
              className="rounded-2xl w-full object-cover"
            />
          </motion.div>
        </div>

        <footer className="mt-32 text-center text-charcoal-light text-sm">
          <p>Your integrated partner for growth</p>
          <p className="mt-4 max-w-4xl mx-auto">
            Legal Notice: Square Connect Advisory Group operates as a strategic advisory and referral consultancy. We do not hold an ACL or AFSL in our own right.
          </p>
        </footer>
      </motion.section>
    </main>
  )
}
