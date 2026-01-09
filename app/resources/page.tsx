"use client";
import Link from 'next/link';

export default function ResourcesPage() {
  const tools = [
    { title: "ASIC MoneySmart", link: "https://moneysmart.gov.au", desc: "Financial guidance and tools." },
    { title: "Borrowing Calculator", link: "#", desc: "Estimate your loan potential." },
    { title: "Realestate.com.au", link: "https://realestate.com.au", desc: "Browse properties and market data." },
    { title: "Domain", link: "https://domain.com.au", desc: "Property listings and insights." }
  ];

  return (
    <div className="pt-40 pb-20 px-6 bg-appleGrey min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-6xl font-bold mb-4 text-charcoal">Client Toolkit</h1>
        <p className="text-xl text-gray-500 mb-16">Essential resources to help you manage your financial journey.</p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {tools.map((tool, i) => (
            <a key={i} href={tool.link} target="_blank" className="p-10 bg-white rounded-3xl hover:shadow-xl transition-all group">
              <h3 className="text-xl font-bold mb-2 group-hover:text-gold transition-colors">{tool.title}</h3>
              <p className="text-sm text-gray-400">{tool.desc}</p>
            </a>
          ))}
        </div>

        <div className="bg-charcoal text-white p-16 rounded-[3rem] text-center">
          <h2 className="text-3xl font-bold mb-6">Need expert guidance?</h2>
          <Link href="/services" className="bg-gold text-white px-10 py-4 rounded-full font-bold inline-block hover:bg-gold-dark transition-all">Explore Our Services</Link>
        </div>
      </div>
    </div>
  );
}