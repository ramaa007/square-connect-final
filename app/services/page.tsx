"use client";
import Link from 'next/link';
import { Landmark, Building2, ShieldCheck, Briefcase, Zap, Globe, ArrowRight } from "lucide-react";

export default function ServicesPage() {
  const services = [
    { title: "Mortgage & Home Finance", icon: <Landmark />, desc: "From first homes to complex refinancing, we secure the most competitive structures for your property journey." },
    { title: "Tax & Accounting", icon: <Building2 />, desc: "Strategic compliance and proactive tax planning to protect and grow your personal or business wealth." },
    { title: "Legal Services", icon: <ShieldCheck />, desc: "Comprehensive legal support ensuring your structures, contracts, and assets are fully protected." },
    { title: "Real Estate Advisory", icon: <Briefcase />, desc: "Independent property insights and acquisition strategies to build a high-performing portfolio." },
    { title: "Commercial Finance", icon: <Zap />, desc: "Capital solutions for business growth, equipment leasing, and commercial property acquisitions." },
    { title: "Digital Services", icon: <Globe />, desc: "Modernizing your business with digital strategy and automated workflows for the new economy." }
  ];

  return (
    <div className="pt-40 pb-32 px-6 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24">
          <span className="text-gold font-bold tracking-widest text-xs uppercase">Expertise</span>
          <h1 className="text-6xl md:text-8xl font-bold text-charcoal mt-6 mb-8 tracking-tighter">Integrated Solutions.</h1>
          <p className="text-xl text-gray-500 max-w-2xl leading-relaxed">We remove the friction of managing separate professionals by providing a single, unified advisory group for your entire world.</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div key={i} className="group p-12 bg-appleGrey rounded-[3rem] border border-transparent hover:bg-white hover:shadow-2xl hover:shadow-gold/5 transition-all duration-500">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-10 group-hover:bg-gold group-hover:text-white transition-colors shadow-sm">
                {s.icon}
              </div>
              <h3 className="text-2xl font-bold mb-6 text-charcoal">{s.title}</h3>
              <p className="text-gray-600 mb-10 leading-relaxed">{s.desc}</p>
              <Link href="/contact" className="text-gold font-bold flex items-center gap-2">
                Consultation <ArrowRight size={18} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}