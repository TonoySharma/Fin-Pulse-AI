"use client";

import { useState, useEffect } from "react";
import Image from "next/image";


import {
    Star,
    MapPin,
    Calendar,
    ArrowRight,
    CreditCard,
    Tag,
    ArrowUpRight,
    ArrowDownLeft,
} from "lucide-react";
import { Button } from "@heroui/react";
import Link from "next/link";
import SkeletonCard from "@/components/SkeletonCard";


// Data Interface matching your backend structure
export interface FeatureProduct {
    _id: string | { $oid: string };
    title: string;
    shortDescription: string;
    fullDescription: string;
    category: string;
    type: "Income" | "Expense" | string;
    amount: number;
    currency: string;
    date: string;
    location: string;
    paymentMethod: string;
    status: string;
    rating: number;
    priority: string;
    image: string;
    aiInsight?: string;
}

export default function FeaturesPage() {
    const [Features, setFeatures] = useState<FeatureProduct[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);


    useEffect(() => {
        const fetchFeatures = async () => {
            try {
                setLoading(true);
                const res = await fetch("http://localhost:8000/api/all-features");
                if (!res.ok) throw new Error("Failed to fetch data from backend");

                const data = await res.json();

                if (data.success && Array.isArray(data.data)) {
                    setFeatures(data.data);
                } else if (Array.isArray(data)) {
                    setFeatures(data);
                }
            } catch (err) {
                console.error("Fetch error:", err);
                setError("Failed to load records. Check backend connection.");
            } finally {
                setLoading(false);
            }
        };

        fetchFeatures();
    }, []);

    // Helper function to extract Mongo ID safely
    const getItemId = (item: FeatureProduct) => {
        return typeof item._id === "object" ? item._id.$oid : item._id;
    };

    return (
        <div className="min-h-screen bg-slate-950 text-slate-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto space-y-8">

                {/* Header */}
                <div className="text-center space-y-3 max-w-2xl mx-auto">
                    <span className="text-xs font-semibold uppercase tracking-widest text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20">
                        Financial Insights
                    </span>
                    <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
                        Transactions & Records
                    </h1>
                    <p className="text-sm text-slate-400 leading-relaxed">
                        Manage, review, and analyze all your financial transactions powered by AI insights.
                    </p>
                </div>

                {/* Error Notification */}
                {error && (
                    <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-center text-sm">
                        {error}
                    </div>
                )}

                {/* Grid: Desktop 4 Columns */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {loading ? (
                        Array.from({ length: 8 }).map((_, i) => <SkeletonCard key={i} />)
                    ) : (
                        Features.map((item) => {
                            const id = getItemId(item);
                            const isExpense = item.type?.toLowerCase() === "expense";

                            return (
                                <div
                                    key={id}
                                    className="group flex flex-col bg-slate-900/60 border border-slate-800/80 rounded-2xl overflow-hidden h-[450px] transition-all duration-300 hover:border-indigo-500/40 hover:shadow-[0_0_25px_rgba(99,102,241,0.15)] backdrop-blur-md"
                                >
                                    {/* Image Container */}
                                    <div className="relative w-full h-44 overflow-hidden bg-slate-950 shrink-0">
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            fill
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        />

                                        {/* Amount Badge */}
                                        <div className="absolute top-3 right-3 bg-slate-950/80 backdrop-blur-md border border-slate-700/80 px-2.5 py-1 rounded-lg text-xs font-mono font-bold flex items-center gap-1 shadow-md">
                                            {isExpense ? (
                                                <ArrowUpRight size={13} className="text-red-400" />
                                            ) : (
                                                <ArrowDownLeft size={13} className="text-emerald-400" />
                                            )}
                                            <span className={isExpense ? "text-red-400" : "text-emerald-400"}>
                                                {item.amount.toLocaleString()} {item.currency}
                                            </span>
                                        </div>

                                        {/* Category Badge */}
                                        <div className="absolute bottom-3 left-3 bg-indigo-950/80 backdrop-blur-md border border-indigo-700/50 text-indigo-300 px-2 py-0.5 rounded-md text-[11px] font-medium flex items-center gap-1">
                                            <Tag size={10} />
                                            <span>{item.category}</span>
                                        </div>
                                    </div>

                                    {/* Body Content */}
                                    <div className="p-5 flex flex-col justify-between flex-1">

                                        {/* Title & Short Description */}
                                        <div className="space-y-2">
                                            <h3 className="text-base font-bold text-white group-hover:text-indigo-400 transition-colors line-clamp-1">
                                                {item.title}
                                            </h3>
                                            <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                                                {item.shortDescription}
                                            </p>
                                        </div>

                                        {/* Meta Info Grid */}
                                        <div className="grid grid-cols-2 gap-y-2 text-[11px] text-slate-400 pt-3 border-t border-slate-800/80 my-2">
                                            <div className="flex items-center gap-1 text-amber-400 font-semibold">
                                                <Star size={12} className="fill-amber-400" />
                                                <span>{item.rating} / 5</span>
                                            </div>

                                            <div className="flex items-center justify-end gap-1 text-slate-300">
                                                <Calendar size={12} className="text-indigo-400" />
                                                <span>{item.date}</span>
                                            </div>

                                            <div className="flex items-center gap-1 col-span-2 text-slate-400">
                                                <MapPin size={12} className="text-indigo-400 shrink-0" />
                                                <span className="truncate">{item.location}</span>
                                            </div>

                                            <div className="flex items-center gap-1 col-span-2 text-slate-400">
                                                <CreditCard size={12} className="text-indigo-400 shrink-0" />
                                                <span className="truncate">{item.paymentMethod}</span>
                                            </div>
                                        </div>

                                        {/* Modal Trigger Button */}
                                        <Link href = {`/features/${item._id}`}>
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
                        })
                    )}
                </div>
            </div>
        </div>
    );
}

