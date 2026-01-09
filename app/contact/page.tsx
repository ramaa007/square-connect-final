"use client";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="pt-40 pb-32 px-6 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24">
        
        {/* LEFT: INFO */}
        <div>
          <h1 className="text-7xl font-bold mb-12 text-charcoal tracking-tighter">Start the <br/>Conversation.</h1>
          <div className="space-y-12">
            <div className="flex gap-6">
              <div className="w-14 h-14 bg-appleGrey rounded-full flex items-center justify-center flex-shrink-0 text-gold"><MapPin /></div>
              <div>
                <h4 className="font-bold text-charcoal mb-1">Our Office</h4>
                <p className="text-gray-500">1644 Logan Road, Mount Gravatt QLD</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-14 h-14 bg-appleGrey rounded-full flex items-center justify-center flex-shrink-0 text-gold"><Phone /></div>
              <div>
                <h4 className="font-bold text-charcoal mb-1">Phone</h4>
                <p className="text-gray-500">0425 859 901</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-14 h-14 bg-appleGrey rounded-full flex items-center justify-center flex-shrink-0 text-gold"><Mail /></div>
              <div>
                <h4 className="font-bold text-charcoal mb-1">Email</h4>
                <p className="text-gray-500">info@squareconnectgroup.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT: FORM */}
        <div className="bg-appleGrey p-12 rounded-[4rem] border border-gray-100 shadow-xl shadow-black/5">
          <form className="grid gap-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-charcoal/50 ml-2">Name</label>
                <input type="text" className="w-full p-5 bg-white rounded-3xl outline-none focus:ring-2 focus:ring-gold/20 transition-all border-none" placeholder="Your full name" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-charcoal/50 ml-2">Phone</label>
                <input type="text" className="w-full p-5 bg-white rounded-3xl outline-none focus:ring-2 focus:ring-gold/20 transition-all border-none" placeholder="0400 000 000" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-charcoal/50 ml-2">Service</label>
              <select className="w-full p-5 bg-white rounded-3xl outline-none focus:ring-2 focus:ring-gold/20 transition-all border-none appearance-none cursor-pointer">
                <option>Mortgage & Finance</option>
                <option>Tax & Accounting</option>
                <option>Legal Services</option>
                <option>Real Estate Advisory</option>
                <option>Commercial Finance</option>
                <option>Digital Services</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-charcoal/50 ml-2">Message</label>
              <textarea className="w-full p-5 bg-white rounded-3xl outline-none focus:ring-2 focus:ring-gold/20 transition-all border-none h-40 resize-none" placeholder="How can we help?"></textarea>
            </div>
            <button className="w-full bg-charcoal text-white py-6 rounded-[2rem] font-bold text-lg hover:bg-gold transition-all shadow-lg shadow-gold/10">
              Send Message
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}