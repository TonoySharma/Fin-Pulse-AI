import React from "react";
import Image from "next/image";
import { Star, Quote } from "lucide-react";

export function TestimonialsGridSection() {
  const reviews = [
    {
      name: "Alex Rivera",
      role: "CTO at SynthAI",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
      comment: "This system saved us over $12k in unindexed cloud server subscriptions within the very first month of AI scanning. Absolute game changer!"
    },
    {
      name: "Marcus Chen",
      role: "Founder, LedgerFlow",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
      comment: "The UI layout is extremely fast and sleek. Having real-time multi-currency support that doesn't lag is luxury for running digital tech businesses."
    },
    {
      name: "Sophia Martinez",
      role: "Independent Consultant",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
      comment: "I've recommended this platform to all my clients. The AES-256 data security guarantee gives us immense peace of mind."
    },
    {
      name: "Natasha Patel",
      role: "Independent Consultant",
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=150&q=80",
      comment: "I've recommended this platform to all my clients. The AES-256 data security guarantee gives us immense peace of mind."
    }
  ];

  return (
    <section className="py-10 px-4 bg-slate-950">
      <div className="space-y-16 max-w-7xl mx-auto">
        
        {/* Section Title */}
        <div className="text-center space-y-4">
          <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
            User Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Loved by builders and finance pros.
          </h2>
        </div>

        {/* 3 Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reviews.map((rev, idx) => (
            <div 
              key={idx} 
              className="bg-slate-900/40 border border-slate-800/70 rounded-[2rem] p-7 sm:p-8 flex flex-col justify-between space-y-8 relative overflow-hidden group hover:border-slate-700 transition-all duration-300 backdrop-blur-sm"
            >
              {/* Background Accent Icon */}
              <Quote className="absolute right-6 top-6 w-12 h-12 text-slate-800/20 pointer-events-none group-hover:text-slate-800/30 transition-colors" />

              {/* Review Content */}
              <div className="space-y-4 relative z-10">
                <div className="flex gap-0.5 text-amber-400">
                  {Array.from({ length: 5 }).map((_, sIdx) => (
                    <Star key={sIdx} size={14} className="fill-amber-400" />
                  ))}
                </div>
                <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-medium italic">
                  {rev.comment}
                </p>
              </div>

              {/* User Avatar Info */}
              <div className="flex items-center gap-3.5 pt-4 border-t border-slate-900/80">
                <div className="relative w-11 h-11 rounded-full overflow-hidden border border-slate-800">
                  <Image 
                    src={rev.avatar} 
                    alt={rev.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">{rev.name}</h4>
                  <p className="text-xs text-slate-400 font-medium">{rev.role}</p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}