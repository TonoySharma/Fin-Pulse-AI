"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Star,
  ArrowRight,
  TrendingUp
} from "lucide-react";
import { Button } from "@heroui/react";


export interface FeatureProduct {
  _id: string;
  title: string;
  shortDescription: string;
  category: string;
  type: "Income" | "Expense" | string;
  amount: number;
  currency: string;
  date: string;
  location: string;
  image: string;
  rating?: number;
}

export default function FeaturedCards() {
  const [products, setProducts] = useState<FeatureProduct[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);


  useEffect(() => {
    const fetchFeatures = async () => {
      try {
        setLoading(true);

        const res = await fetch("http://localhost:8000/api/features");
        const result = await res.json();

        if (res.ok && result.success) {
          setProducts(result.data);
        } else {
          setError(result.message || "Failed to load features.");
        }
      } catch (err) {
        console.error("Error fetching features:", err);
        setError("Could not connect to the server.");
      } finally {
        setLoading(false);
      }
    };

    fetchFeatures();
  }, []);


  if (loading) {
    return (
      <section className="py-20 px-4 max-w-7xl mx-auto space-y-10">
        <div className="h-8 w-64 bg-slate-800 animate-pulse rounded-xl mx-auto" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {Array.from({ length: 8 }).map((_, idx) => (
            <div key={idx} className="h-[420px] bg-slate-900/50 border border-slate-800 rounded-3xl animate-pulse" />
          ))}
        </div>
      </section>
    );
  }


  if (error || products.length === 0) {
    return (
      <div className="text-center py-20 bg-slate-950 text-slate-400 text-sm">
        {error || "No premium records available at the moment."}
      </div>
    );
  }

  return (
    <section className="py-20 px-4 space-y-12 bg-slate-950">

      {/* Section Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-end max-w-7xl mx-auto  justify-between gap-4 border-b border-slate-900 pb-6">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider">
            <TrendingUp size={12} /> Spotlight
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Featured Transactions
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 max-w-md">
            Explore the latest high-priority financial operations and recorded assets.
          </p>
        </div>

        <Link
          href="/all-features"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-400 hover:text-indigo-300 transition-colors group bg-slate-900/50 px-4 py-2 rounded-xl border border-slate-800/80"
        >
          View All features
          <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
        </Link>
      </div>

      {/* 8 Card Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto ">
        {products.map((item) => {
          const isExpense = item.type?.toLowerCase() === "expense";

          return (
            <div
              key={item._id}
              className="group bg-slate-900/40 border border-slate-800/60 hover:border-slate-700 rounded-3xl p-4 flex flex-col justify-between space-y-4 hover:shadow-[0_0_30px_rgba(99,102,241,0.05)] transition-all duration-300 relative overflow-hidden"
            >
              <div className="space-y-3">
                {/* Image Container */}
                <div className="relative w-full h-44 bg-slate-950 rounded-2xl overflow-hidden border border-slate-900">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Category Tag */}
                  <span className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-md text-slate-300 text-[10px] font-bold px-2.5 py-1 rounded-lg border border-slate-800">
                    {item.category}
                  </span>
                </div>

                {/* Title & Stats */}
                <div className="space-y-1">
                  <div className="flex items-center justify-between text-[11px] text-slate-500">
                    <span className="flex items-center gap-1"><MapPin size={11} /> {item.location}</span>
                    <span className="flex items-center gap-1 bg-amber-500/10 px-1.5 py-0.5 rounded text-amber-400"><Star size={10} className="fill-amber-400" /> {item.rating ?? 5.0}</span>
                  </div>
                  <h3 className="text-sm font-bold text-white group-hover:text-indigo-400 transition-colors line-clamp-1 pt-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                    {item.shortDescription}
                  </p>
                </div>
              </div>

              {/* Pricing & Type Footer */}
              <div className="pt-3 border-t border-slate-900/60 flex items-center justify-between gap-2">
                <div className="space-y-0.5">
                  <span className="text-[10px] text-slate-500 block">Total Value</span>
                  <div className="text-sm font-mono font-bold text-white flex items-baseline gap-0.5">
                    {item.amount.toLocaleString()}
                    <span className="text-[10px] text-indigo-400 font-normal">{item.currency || "USD"}</span>
                  </div>
                </div>


                <Link href={`/features/${item._id}`}>
                  <Button

                    className="w-full mt-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded
                       bg-slate-800 hover:bg-indigo-600 hover:text-white text-slate-200 text-xs 
                       font-bold transition-all duration-300 shadow-md group/btn"
                  >
                    <span>View Details</span>
                    <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                  </Button>

                </Link>
              </div>

            </div>
          );
        })}
      </div>

    </section>
  );
}