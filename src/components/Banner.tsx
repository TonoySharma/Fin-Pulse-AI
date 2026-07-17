"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { BsArrowRight, BsCpu } from "react-icons/bs";

const slideData = [
  {
    id: 1,
    title: "Autonomous AI Financial Intelligence",
    subtitle: "Empower your business with real-time financial tracking and predictive decision making.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2560&auto=format&fit=crop",
    badge: "Agentic AI v2.4 Active",
    primaryCta: "Start Free Trial",
    ctaLink: "/dashboard",
  },
  {
    id: 2,
    title: "Automated Data Analytics & Insights",
    subtitle: "Upload statement CSVs or financial reports to instantly reveal hidden spending trends.",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2560&auto=format&fit=crop",
    badge: "Smart Analytics",
    primaryCta: "Analyze Data",
    ctaLink: "/dashboard/ai-analyzer",
  },
  {
    id: 3,
    title: "Precision Budgeting & Forecasting",
    subtitle: "Tailored wealth-building strategy generated dynamically based on your financial goals.",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2560&auto=format&fit=crop",
    badge: "Strategic Planning",
    primaryCta: "Generate Plan",
    ctaLink: "/dashboard/ai-planner",
  },
  {
    id: 4,
    title: "Enterprise Grade Asset Protection",
    subtitle: "Military-grade data encryption ensuring seamless privacy across all tracking channels.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2560&auto=format&fit=crop",
    badge: "Bank-Level Security",
    primaryCta: "Explore Features",
    ctaLink: "/explore",
  },
  {
    id: 5,
    title: "Real-Time Portfolio Optimization",
    subtitle: "Continuous execution and optimization powered by context-aware LLM agents.",
    image: "https://images.unsplash.com/photo-1590283603385-fc7ff2073e4b?q=80&w=2560&auto=format&fit=crop",
    badge: "Autonomous Agents",
    primaryCta: "Get Started Now",
    ctaLink: "/items/add",
  },
];

export const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      // eslint-disable-next-line react-hooks/immutability
      handleNext();
    }, 10000);
    return () => clearInterval(interval);
  }, [currentSlide, isPaused]);

  const handleNext = () => setCurrentSlide((prev) => (prev + 1) % slideData.length);
  const handlePrev = () => setCurrentSlide((prev) => (prev - 1 + slideData.length) % slideData.length);

  return (
    <section 
      className="relative w-full h-screen bg-slate-950 overflow-hidden select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={slideData[currentSlide].id}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full"
        >
          <div
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${slideData[currentSlide].image})` }}
          />
          {/* Reduced shadow: Subtle overlay to keep text readable without hiding the image */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/70 via-slate-950/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 max-w-7xl mx-auto h-full px-6 flex flex-col justify-center">
        <div className="max-w-2xl">
          <motion.div
            key={`badge-${currentSlide}`}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-600/20 border border-indigo-500/30 text-indigo-300 text-xs font-medium uppercase tracking-wider mb-6"
          >
            <BsCpu className="animate-pulse" />
            {slideData[currentSlide].badge}
          </motion.div>

          <motion.h1
            key={`title-${currentSlide}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-6 leading-[1.1]"
          >
            {slideData[currentSlide].title}
          </motion.h1>

          <motion.p
            key={`sub-${currentSlide}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-200 mb-8 max-w-lg leading-relaxed"
          >
            {slideData[currentSlide].subtitle}
          </motion.p>

          <motion.div
            key={`cta-${currentSlide}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex items-center gap-4"
          >
            <Link
              href={slideData[currentSlide].ctaLink}
              className="bg-indigo-600 hover:bg-indigo-500 text-white font-medium px-8 py-4 rounded-full transition-all flex items-center gap-2 shadow-lg hover:shadow-indigo-500/25"
            >
              {slideData[currentSlide].primaryCta}
              <BsArrowRight />
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Navigation & Progress */}
      <div className="absolute bottom-8 left-0 right-0 z-20 flex justify-center gap-2">
        {slideData.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              currentSlide === index ? "w-12 bg-white" : "w-4 bg-white/30 hover:bg-white/60"
            }`}
          />
        ))}
      </div>
    </section>
  );
};