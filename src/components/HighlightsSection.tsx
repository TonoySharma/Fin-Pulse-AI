"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Briefcase, ArrowRight, ChevronDown, Award, ShieldCheck, Zap } from "lucide-react";

interface AccordionItem {
  id: number;
  title: string;
  description: string;
}

export function HighlightsSection() {
  const [activeId, setActiveId] = useState<number>(1);

  const accordionData: AccordionItem[] = [
    {
      id: 1,
      title: "Master the skills that matter to you",
      description: "Web-based training you can consume at your own pace. Courses are interactive and designed to make budget planning crystal clear.",
    },
    {
      id: 2,
      title: "Connect with effective methods",
      description: "Learn top-tier corporate frameworks and personal finance habits used by industry leaders to scale assets efficiently.",
    },
    {
      id: 3,
      title: "Increase your learning skills",
      description: "Get real-time feedback, interactive calculation spreadsheets, and dynamic toolkits to apply knowledge instantly.",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8  bg-slate-950 text-slate-100">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 max-w-7xl mx-auto items-center">
        
        {/* LEFT COLUMN: Modern Graphic Elements & Image */}
        <div className="lg:col-span-6 flex justify-center items-center relative h-[450px] sm:h-[550px] w-full">
          {/* Background Abstract Shapes - Lime and Dark Green Theme */}
          <div className="absolute w-[320px] h-[320px] sm:w-[420px] sm:h-[420px] rounded-full bg-lime-400 opacity-90 -z-10 left-12 sm:left-20" />
          
          <div className="absolute top-1/4 -left-4 sm:left-4 w-32 h-32 border-[24px] border-emerald-800 rounded-full border-t-transparent border-r-transparent rotate-45 opacity-80" />

     
          <div className="relative w-[300px] h-[400px] sm:w-[380px] sm:h-[480px] z-10">
            <Image
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80"
              alt="Instructor or Professional Representative"
              fill
              priority
              className="object-cover rounded-3xl"
            />
          </div>
        </div>

        {/* RIGHT COLUMN: Content & Accordion */}
        <div className="lg:col-span-6 space-y-6 max-w-xl mx-auto lg:mx-0">
          
          {/* Top Badge */}
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-lime-400 text-slate-950">
              <Briefcase size={16} className="stroke-[2.5]" />
            </div>
            <span className="text-xs sm:text-sm font-semibold tracking-wide text-slate-300">
              Premium learning experience
            </span>
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.15]">
            Providing amazing <br />
            online courses.
          </h2>

          {/* Dynamic Accordion Section */}
          <div className="space-y-3 pt-4">
            {accordionData.map((item) => {
              const isOpen = activeId === item.id;
              return (
                <div
                  key={item.id}
                  className={`rounded-2xl transition-all duration-300 border ${
                    isOpen
                      ? "bg-slate-900/40 border-slate-800 p-5 shadow-lg shadow-indigo-500/[0.02]"
                      : "border-transparent py-2 px-3 hover:bg-slate-900/20"
                  }`}
                >
                  {/* Trigger Header */}
                  <button
                    onClick={() => setActiveId(isOpen ? 0 : item.id)}
                    className="w-full flex items-center justify-between text-left group"
                  >
                    <span
                      className={`text-sm sm:text-base font-bold transition-colors duration-200 ${
                        isOpen ? "text-lime-400" : "text-white group-hover:text-lime-300"
                      }`}
                    >
                      {item.title}
                    </span>
                    <ChevronDown
                      size={16}
                      className={`text-slate-400 transition-transform duration-300 ${
                        isOpen ? "rotate-180 text-lime-400" : ""
                      }`}
                    />
                  </button>

                  {/* Content Collapse Panel */}
                  <div
                    className={`grid transition-all duration-300 ease-in-out overflow-hidden text-xs sm:text-sm text-slate-400 leading-relaxed ${
                      isOpen ? "grid-rows-[1fr] opacity-100 mt-2.5" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      {item.description}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Action Button */}
          <div className="pt-4">
            <button className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white border border-slate-800 font-bold text-xs sm:text-sm transition-all active:scale-95 group">
              <span>Explore courses</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}