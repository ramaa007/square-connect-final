"use client";
import Link from 'next/link';

export default function FounderPage() {
  return (
    <div className="pt-40 pb-20 px-6 max-w-4xl mx-auto">
      <Link href="/" className="text-gold font-bold mb-8 inline-block">← Back Home</Link>
      <h1 className="text-6xl font-bold mb-6 text-charcoal">Meet Bhavin Patel</h1>
      <p className="text-gold font-bold uppercase tracking-widest mb-10">Founder & Lead Advisor</p>
      <div className="prose prose-xl text-gray-600 leading-relaxed">
        <p className="mb-6">
          Bhavin Patel is the Founder & Lead Advisor of Square Connect Advisory Group. 
          With over 5 years of experience, he simplifies complexity and builds long-term 
          wealth structures for individuals and businesses.
        </p>
        <blockquote className="border-l-4 border-gold pl-6 italic text-2xl text-charcoal my-12">
          “I am committed to being your long-term advisory partner.”
        </blockquote>
      </div>
      <button className="mt-12 bg-charcoal text-white px-10 py-5 rounded-full font-bold">
        Connect with Bhavin
      </button>
    </div>
  );
}