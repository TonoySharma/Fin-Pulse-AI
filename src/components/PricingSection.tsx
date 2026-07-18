"use client";

import React from "react";
import { Check, ArrowRight } from "lucide-react";
import FadeUp from "./FadeUp";

interface PricingPlan {
  title: string;
  badge: string;
  price: string;
  features: { text: string; included: boolean }[];
  isPopular?: boolean;
}

export function PricingSection() {
  const plans: PricingPlan[] = [
    {
      title: "AI Essentials",
      badge: "Starter",
      price: "29.99",
      features: [
        { text: "Access to pre-trained models", included: true },
        { text: "Basic API usage (5k req/mo)", included: true },
        { text: "Email support", included: true },
        { text: "Custom model training", included: false },
        { text: "Priority support", included: false },
        { text: "AI workflow automation tools", included: false },
      ],
    },
    {
      title: "AI Pro",
      badge: "Professional",
      price: "149.99",
      features: [
        { text: "Access to all pre-trained models", included: true },
        { text: "Advanced API usage (100k req/mo)", included: true },
        { text: "Custom model training", included: true },
        { text: "Slack community support", included: true },
        { text: "Dedicated AI consultant", included: false },
        { text: "On-premise deployment options", included: false },
      ],
      isPopular: true, // মাঝের কার্ডটিকে হাইলাইট করার জন্য
    },
    {
      title: "AI Scale",
      badge: "Enterprise",
      price: "399.99",
      features: [
        { text: "Unlimited API usage", included: true },
        { text: "Custom & fine-tuned models", included: true },
        { text: "Dedicated AI consultant", included: true },
        { text: "On-premise deployment", included: true },
        { text: "24/7 priority support", included: true },
        { text: "Enterprise-grade SLAs", included: true },
      ],
    },
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-950 text-slate-100 relative overflow-hidden">

      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-emerald-500/5 blur-[150px] rounded-full pointer-events-none" />

      {/* Section Header */}
      <FadeUp className="text-center space-y-4 mb-16 max-w-7xl mx-auto">
        <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
          Pricing action
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight max-w-3xl mx-auto leading-tight text-white">
          Stay ahead of the competition <br className="hidden sm:block" />
          with AI <span className="text-emerald-400 bg-clip-text">intelligence</span>
        </h2>
      </FadeUp>

      {/* 3 Column Cards Grid */}
      <FadeUp className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
        {plans.map((plan, idx) => (
          <div
            key={idx}
            className={`relative rounded-[2rem] p-8 bg-slate-900/40 backdrop-blur-sm border transition-all duration-300 flex flex-col justify-between space-y-8 ${
              plan.isPopular
                ? "border-emerald-500/30 shadow-[0_0_50px_rgba(16,185,129,0.05)] md:-translate-y-2 bg-slate-900/60"
                : "border-slate-800/80 hover:border-slate-700"
            }`}
          >
            {/* Upper Content */}
            <div className="space-y-6">
              <div className="space-y-1">
                <h3 className="text-xl font-bold text-white tracking-wide">
                  {plan.title}
                </h3>
                <p className="text-xs text-slate-400 font-medium">{plan.badge}</p>
              </div>

              {/* Pricing Line */}
              <div className="flex items-baseline font-mono text-white">
                <span className="text-3xl sm:text-4xl font-black">$</span>
                <span className="text-4xl sm:text-5xl font-black tracking-tight">
                  {plan.price.split(".")[0]}
                </span>
                <span className="text-xl font-bold text-slate-400">
                  .{plan.price.split(".")[1]}
                </span>
                <span className="text-xs text-slate-500 font-sans font-medium ml-1">
                  /mo
                </span>
              </div>

              {/* Divider Line */}
              <div className="h-px bg-slate-800/60" />

              {/* Features List */}
              <ul className="space-y-4">
                {plan.features.map((feature, fIdx) => (
                  <li
                    key={fIdx}
                    className={`flex items-start gap-3 text-xs sm:text-sm transition-colors ${
                      feature.included ? "text-slate-300" : "text-slate-600 line-through"
                    }`}
                  >
                    <Check
                      size={16}
                      className={`shrink-0 mt-0.5 ${
                        feature.included ? "text-emerald-400" : "text-slate-700"
                      }`}
                    />
                    <span>{feature.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Bottom Action Button */}
            <div className="pt-4">
              <button
                className={`w-full py-3 px-6 rounded-xl border font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all active:scale-[0.98] group ${
                  plan.isPopular
                    ? "bg-slate-950 text-white border-emerald-500/30 hover:bg-slate-900 shadow-[0_4px_20px_rgba(16,185,129,0.1)]"
                    : "bg-transparent text-slate-300 border-slate-800 hover:bg-slate-900/50 hover:border-slate-700"
                }`}
              >
                <span>Get Started</span>
                <ArrowRight
                  size={14}
                  className="group-hover:translate-x-0.5 transition-transform"
                />
              </button>
            </div>
          </div>
        ))}
      </FadeUp>
    </section>
  );
}