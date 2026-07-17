"use client";

import React from "react";

const marqueeItems = [
  {
    title: "Autonomous AI Support",
    category: "Customer Agent",
    icon: "🤖",
    status: "Active",
    badge: "Featured",
  },
  {
    title: "Code Review Assistant",
    category: "Developer Tools",
    icon: "⚡",
    status: "Deploying",
    badge: "Trending",
  },
  {
    title: "Noise Canceling Headphones",
    category: "Audio",
    icon: "🎧",
    status: "In Stock",
    badge: "Best Seller",
  },
  {
    title: "Smart Fitness Watch",
    category: "Wearables",
    icon: "⌚",
    status: "In Stock",
    badge: "Popular",
  },
  {
    title: "Automated Workflow Agent",
    category: "Productivity",
    icon: "🚀",
    status: "Active",
    badge: "New",
  },
];

export default function Marquee() {
  const doubleItems = [...marqueeItems, ...marqueeItems];

  return (
    <section className="w-full overflow-hidden py-2 bg-gray-50 border-y border-gray-200">
      <div className="flex animate-marquee gap-4">
        {doubleItems.map((item, index) => (
          <div
            key={index}
            className="flex min-w-[240px] items-center gap-3 rounded-lg border border-gray-200 bg-white p-3 shadow-sm hover:border-gray-300 transition-colors"
          >
            {/* Icon */}
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-gray-100 text-xl">
              {item.icon}
            </div>

            {/* Details */}
            <div className="flex flex-col overflow-hidden">
              <div className="flex items-center gap-1.5">
                <span className="text-[11px] font-medium text-indigo-600">
                  {item.category}
                </span>
                <span className="text-[10px] text-gray-400">•</span>
                <span className="text-[10px] text-gray-500 font-medium">
                  {item.badge}
                </span>
              </div>

              <h4 className="truncate text-sm font-medium text-gray-800">
                {item.title}
              </h4>

              <div className="flex items-center gap-1.5 text-xs text-gray-500 mt-0.5">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                <span>{item.status}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}