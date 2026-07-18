import React from "react";
import Image from "next/image";
import { ArrowRight, CheckCircle } from "lucide-react";

export function LargeCtaSection() {
  return (
    <section className="py-10 px-4  bg-slate-950">
      <div className="relative rounded-[3rem] max-w-7xl mx-auto bg-slate-900 border border-slate-800/80 overflow-hidden min-h-[480px] flex items-center">
        
        {/* Background Image Overlay */}
        <div className="absolute inset-0 opacity-15 mix-blend-overlay">
          <Image
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1500&q=80"
            alt="Abstract AI Technology Background"
            fill
            className="object-cover"
          />
        </div>

        {/* Ambient Radial Gradient Layer */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/70 to-transparent z-0" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-8 sm:p-16 relative z-10 w-full">
          
          {/* Left Text */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              Ready to automate <br />
              your smart portfolio?
            </h2>
            <p className="text-sm sm:text-base text-slate-300 max-w-lg font-medium leading-relaxed">
              Join thousands of global startup founders, developers, and asset managers tracking millions in assets with absolute privacy.
            </p>
            
            {/* Short list checkboxes */}
            <div className="flex flex-wrap gap-x-6 gap-y-2 pt-2">
              <span className="flex items-center gap-2 text-xs font-semibold text-slate-200"><CheckCircle size={14} className="text-emerald-400"/> No credit card required</span>
              <span className="flex items-center gap-2 text-xs font-semibold text-slate-200"><CheckCircle size={14} className="text-emerald-400"/> Cancel anytime</span>
            </div>
          </div>

          {/* Right Action Button */}
          <div className="lg:col-span-5 lg:text-right">
            <button className="inline-flex items-center gap-3 px-8 py-5 rounded-2xl bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-black text-sm sm:text-base transition-all shadow-xl shadow-emerald-500/10 active:scale-95 group w-full sm:w-auto justify-center">
              <span>Create Free Account</span>
              <ArrowRight size={18} className="stroke-[2.5] group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}