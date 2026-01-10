"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { useRef } from "react"

const fadeUpVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
}

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
}

const wordReveal = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
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
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  })

  const parallaxY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"])

  return (
    <main className="bg-white overflow-x-hidden">
      {/* HERO - White */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center px-6 py-32 md:px-12">
        <motion.div
          className="absolute inset-0 -z-10"
          style={{ y: parallaxY }}
        >
          <Image
            src="/images/hero.png"
            alt="Premium abstract advisory environment, white minimal interior, soft daylight, glass and light shadows, Apple-style, trust-focused, editorial"
            fill
            className="object-cover opacity-25"
            priority
          />
        </motion.div>

        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-br from-gold-default to-charcoal-default bg-clip-text text-transparent"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            {"One Group. All Business Solutions.".split(" ").map((word, i) => (
              <motion.span key={i} variants={wordReveal} className="inline-block">
                {word}{" "}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p
            className="mt-6 text-2xl md:text-3xl text-charcoal-default"
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
          >
            Your Trusted Advisory Partner
          </motion.p>

          <motion.p
            className="mt-3 text-xl text-charcoal-light"
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
          >
            Mortgage • Accounting • Legal • Real Estate • Commercial
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.1, duration: 0.8 }}
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

      {/* INTEGRATED VISION - Gray 1 */}
      <motion.section
        className="py-32 px-6 md:px-12 bg-grayLight"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUpVariants}
      >
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2
            className="text-4xl md:text-6xl font-bold bg-gradient-to-br from-gold-default to-charcoal-default bg-clip-text text-transparent"
            variants={fadeUpVariants}
          >
            Advisory Services That Work Together for You
          </motion.h2>

          <motion.p
            className="mt-10 text-xl max-w-4xl mx-auto text-charcoal-default"
            variants={fadeUpVariants}
          >
            We integrate finance, legal, and property expertise to provide streamlined solutions under one roof, ensuring clear and efficient guidance every step of the way.
          </motion.p>

          <motion.div variants={fadeUpVariants} className="mt-16">
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

      {/* QUICK STATS - Gray 2 */}
      <motion.section
        className="py-32 px-6 md:px-12 bg-grayLight"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-16 text-center">
          {[
            { value: "5+", label: "Years" },
            { value: "12+", label: "Industries" },
            { value: "1", label: "Contact" },
          ].map((stat, i) => (
            <motion.div key={i} variants={fadeUpVariants}>
              <div className="text-7xl font-bold text-gold-default">{stat.value}</div>
              <p className="mt-4 text-2xl text-charcoal-default">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <motion.div variants={fadeUpVariants} className="mt-20">
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
        className="py-32 px-6 md:px-12 bg-grayLight"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="max-w-7xl mx-auto text-center">
          {values.map((value, i) => (
            <motion.p
              key={i}
              className="text-3xl md:text-5xl font-light text-charcoal-default my-6"
              variants={fadeUpVariants}
            >
              {value}
            </motion.p>
          ))}
        </div>

        <motion.div variants={fadeUpVariants} className="mt-20">
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
        variants={staggerContainer}
      >
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2
            className="text-4xl md:text-6xl font-bold bg-gradient-to-br from-gold-default to-charcoal-default bg-clip-text text-transparent"
            variants={fadeUpVariants}
          >
            A smarter way to manage your world
          </motion.h2>

          <motion.p
            className="mt-10 text-xl max-w-4xl mx-auto text-charcoal-default"
            variants={fadeUpVariants}
          >
            Square Connect removes the burden of coordinating multiple professionals. Your dedicated advisor oversees the entire journey—bringing together finance, legal, tax and strategic partners.
          </motion.p>

          <motion.ul
            className="mt-16 grid md:grid-cols-2 gap-8 max-w-4xl mx-auto text-left text-lg"
            variants={staggerContainer}
          >
            {features.map((f, i) => (
              <motion.li key={i} variants={fadeUpVariants} className="text-charcoal-default">
                {f}
              </motion.li>
            ))}
          </motion.ul>

          <motion.div variants={fadeUpVariants} className="mt-20">
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
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
          >
            Our Services
          </motion.h2>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {services.map((s) => (
              <motion.div
                key={s.num}
                className="group bg-white p-10 rounded-2xl border border-transparent hover:border-gold-default hover:shadow-xl transition-all duration-500"
                variants={fadeUpVariants}
                whileHover={{ y: -12, transition: { duration: 0.4 } }}
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

          <motion.div variants={fadeUpVariants} className="mt-20">
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
        variants={staggerContainer}
      >
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2
            className="text-4xl md:text-6xl font-bold bg-gradient-to-br from-gold-default to-charcoal-default bg-clip-text text-transparent"
            variants={fadeUpVariants}
          >
            The Square Connect Advantage
          </motion.h2>

          <motion.ul className="mt-16 space-y-10 text-xl text-left max-w-4xl mx-auto">
            {advantages.map((a, i) => (
              <motion.li key={i} variants={fadeUpVariants}>
                {a}
              </motion.li>
            ))}
          </motion.ul>

          <motion.div variants={fadeUpVariants} className="mt-20">
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
        variants={staggerContainer}
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div variants={fadeUpVariants}>
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
              variants={fadeUpVariants}
            >
              BHAVIN PATEL
            </motion.h3>
            <motion.p
              className="mt-4 text-2xl text-charcoal-light"
              variants={fadeUpVariants}
            >
              Founder & Lead Advisor
            </motion.p>
            <motion.p
              className="mt-10 text-xl text-charcoal-default"
              variants={fadeUpVariants}
            >
              With over 5 years of relentless drive and trusted expertise, Bhavin transforms complexity into clarity. "I founded Square Connect to revolutionise the way people build wealth."
            </motion.p>

            <motion.div variants={fadeUpVariants} className="mt-12">
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
        variants={staggerContainer}
      >
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2
            className="text-4xl md:text-6xl font-bold bg-gradient-to-br from-gold-default to-charcoal-default bg-clip-text text-transparent"
            variants={fadeUpVariants}
          >
            Industries We Support
          </motion.h2>

          <motion.div
            className="mt-16 grid grid-cols-2 md:grid-cols-5 gap-8"
            variants={staggerContainer}
          >
            {industries.map((ind, i) => (
              <motion.div
                key={i}
                className="text-xl font-medium text-charcoal-default"
                variants={fadeUpVariants}
              >
                {ind}
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={fadeUpVariants} className="mt-20">
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
            variants={fadeUpVariants}
          >
            Client Testimonials
          </motion.h2>

          <motion.div
            className="mt-16 space-y-16"
            variants={staggerContainer}
          >
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                className="text-2xl md:text-3xl italic text-charcoal-default"
                variants={fadeUpVariants}
              >
                “{t.text}”
                <p className="mt-6 text-xl text-charcoal-light not-italic">
                  — {t.author}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={fadeUpVariants} className="mt-20">
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
        variants={fadeUpVariants}
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-4xl md:text-6xl font-bold bg-gradient-to-br from-gold-default to-charcoal-default bg-clip-text text-transparent"
          >
            Ready to Connect?
          </motion.h2>

          <motion.p className="mt-8 text-xl text-charcoal-default">
            We’re here to help you navigate your financial and legal journey with confidence.
          </motion.p>

          <motion.div className="mt-12 space-y-4 text-lg text-charcoal-default">
            <p>1644 Logan Road, Mount Gravatt QLD</p>
            <p>0425 859 901</p>
            <p>info@squareconnectgroup.com</p>
          </motion.div>

          <motion.div className="mt-16">
            <Link
              href="/contact"
              className="inline-block px-12 py-6 bg-gold-default text-white font-medium rounded-full text-xl hover:bg-gold-dark transition-colors"
            >
              Get in Touch
            </Link>
          </motion.div>

          <motion.div variants={fadeUpVariants} className="mt-20">
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
