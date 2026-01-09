"use client";
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="pt-40 pb-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <span className="text-gold font-bold tracking-widest text-xs uppercase">Our Story</span>
        <h1 className="text-6xl md:text-7xl font-bold text-charcoal mt-4 mb-8 leading-tight">
          From Individuals to Enterprises — One Integrated Vision.
        </h1>
        <p className="text-xl text-gray-500 leading-relaxed mb-20">
          Square Connect supports individuals, families, and business owners by aligning finance, legal, tax, and digital strategy under one roof.
        </p>

        {/* TIMELINE */}
        <div className="space-y-12 border-l-2 border-appleGrey pl-8 relative mb-32">
          <div className="relative">
            <div className="absolute -left-[41px] top-0 w-4 h-4 rounded-full bg-gold border-4 border-white shadow-sm"></div>
            <h3 className="text-2xl font-bold">2020 – Foundation</h3>
            <p className="text-gray-500">Started as Square Connect Mortgage Solutions, focusing on simplified home finance.</p>
          </div>
          <div className="relative">
            <div className="absolute -left-[41px] top-0 w-4 h-4 rounded-full bg-gold border-4 border-white shadow-sm"></div>
            <h3 className="text-2xl font-bold">2025 – Advisory Group Expansion</h3>
            <p className="text-gray-500">Evolved into a full-scale Advisory Group offering six distinct professional services.</p>
          </div>
        </div>

        {/* MORALS */}
        <div className="grid md:grid-cols-3 gap-8 border-t border-gray-100 pt-20">
          <div><h4 className="font-bold text-gold mb-2">Integrity</h4><p className="text-sm text-gray-500">Unwavering commitment to ethical advice.</p></div>
          <div><h4 className="font-bold text-gold mb-2">Radical Clarity</h4><p className="text-sm text-gray-500">Simplifying the complex for our clients.</p></div>
          <div><h4 className="font-bold text-gold mb-2">Generational Legacy</h4><p className="text-sm text-gray-500">Building wealth that lasts for years.</p></div>
        </div>
      </div>
    </div>
  );
}