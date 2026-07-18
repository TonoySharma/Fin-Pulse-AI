"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import {
    Star,
    MapPin,
    Calendar,
    CreditCard,
    Tag,
    ArrowDownLeft,
    ArrowUpRight,
    ShieldCheck,
    CheckCircle2,
    Sparkles,
    Share2,
    Heart,
    ArrowLeft,
    ShoppingCart,
    Building2,
    MessageSquare,
    AlertCircle,
    Loader2
} from "lucide-react";
import { Button } from "@heroui/react";
import toast from "react-hot-toast";

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


const extraGalleryImages = [
    "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80",
];

export default function DetailsPage() {
    const [isProcessing, setIsProcessing] = useState(false);
    const params = useParams();
    const id = params?.id as string;

    const [data, setData] = useState<FeatureProduct | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [selectedImage, setSelectedImage] = useState<string>("");
    const [isLiked, setIsLiked] = useState<boolean>(false);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const handleConfirmAndPay = () => {
        setIsProcessing(true);


        setTimeout(() => {
            setIsProcessing(false);
            toast.success("Transaction Processed Successfully!");
            setIsModalOpen(false);
        }, 2000);
    };


    useEffect(() => {
        if (!id) return;

        const fetchProductDetails = async () => {
            try {
                setLoading(true);
                setError(null);


                const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/feature/${id}`);
                const result = await res.json();

                if (res.ok && result.success && result.data) {
                    setData(result.data);
                    setSelectedImage(result.data.image || "");
                } else {
                    setError(result.message || "Failed to load product details.");
                }
            } catch (err) {
                console.error("Fetch error:", err);
                setError("Could not connect to the server. Check your backend.");
            } fontantly: {
                setLoading(false);
            }
        };

        fetchProductDetails();
    }, [id]);

    if (loading) {
        return (
            <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center space-y-3">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
                <p className="text-sm text-slate-400">Loading record details...</p>
            </div>
        );
    }

    if (error || !data) {
        return (
            <div className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center space-y-4 px-4 text-center">
                <AlertCircle size={48} className="text-red-400" />
                <h2 className="text-xl font-bold">Record Not Found</h2>
                <p className="text-sm text-slate-400 max-w-md">{error || "The requested item does not exist."}</p>
                <Link href="/all-features" className="text-xs bg-indigo-600 hover:bg-indigo-500 text-white
                 px-4 py-2 rounded-xl transition-colors">
                    Back to Listing
                </Link>
            </div>
        );
    }

    const isExpense = data.type?.toLowerCase() === "expense";
    const allImages = data.image ? [data.image, ...extraGalleryImages] : extraGalleryImages;

    return (
        <div className="min-h-screen bg-slate-950 text-slate-100 py-10 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto space-y-10">

                {/* Navigation */}
                <div className="flex items-center justify-between">
                    <Link
                        href="/all-features"
                        className="inline-flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-white transition-colors bg-slate-900/80 px-4 py-2 rounded-xl border border-slate-800"
                    >
                        <ArrowLeft size={16} /> Back to Records
                    </Link>

                    <div className="flex items-center gap-3">
                        <button
                            onClick={() => setIsLiked(!isLiked)}
                            className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-red-400 transition-colors"
                        >
                            <Heart size={18} className={isLiked ? "fill-red-500 text-red-500" : ""} />
                        </button>
                        <button className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-indigo-400 transition-colors">
                            <Share2 size={18} />
                        </button>
                    </div>
                </div>

                {/* Hero Section */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

                    {/* Gallery */}
                    <div className="lg:col-span-7 space-y-4">
                        <div className="relative w-full h-[380px] sm:h-[450px] bg-slate-900 rounded-3xl overflow-hidden border border-slate-800">
                            {selectedImage && (
                                <Image
                                    src={selectedImage}
                                    alt={data.title}
                                    fill
                                    priority
                                    className="object-cover transition-all duration-300"
                                />
                            )}
                            <div className="absolute top-4 left-4 bg-slate-950/80 backdrop-blur-md border border-slate-700/80 px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5">
                                <Tag size={12} className="text-indigo-400" />
                                <span>{data.category}</span>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 overflow-x-auto pb-2">
                            {allImages.map((img, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setSelectedImage(img)}
                                    className={`relative w-20 h-20 rounded-2xl overflow-hidden border-2 shrink-0 transition-all ${selectedImage === img
                                        ? "border-indigo-500 scale-95"
                                        : "border-slate-800 opacity-60 hover:opacity-100"
                                        }`}
                                >
                                    <Image src={img} alt={`Thumbnail ${idx}`} fill className="object-cover" />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Details & Action */}
                    <div className="lg:col-span-5 flex flex-col justify-between bg-slate-900/50 border border-slate-800/80 rounded-3xl p-6 sm:p-8 backdrop-blur-md">
                        <div className="space-y-6">
                            <div className="flex items-center justify-between">
                                <span
                                    className={`px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase border flex items-center gap-1 ${isExpense
                                        ? "bg-red-500/10 text-red-400 border-red-500/20"
                                        : "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
                                        }`}
                                >
                                    {isExpense ? <ArrowUpRight size={14} /> : <ArrowDownLeft size={14} />}
                                    {data.type}
                                </span>

                                <div className="flex items-center gap-1 bg-amber-500/10 border border-amber-500/20 px-2.5 py-1 rounded-xl text-amber-400 font-semibold text-xs">
                                    <Star size={14} className="fill-amber-400" />
                                    <span>{data.rating ?? 5}.0 / 5.0</span>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <h1 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                                    {data.title}
                                </h1>
                                <p className="text-sm text-slate-400">{data.shortDescription}</p>
                            </div>

                            <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800 flex items-baseline justify-between">
                                <span className="text-xs text-slate-400 font-medium">Total Amount</span>
                                <div className="text-2xl sm:text-3xl font-mono font-black text-white">
                                    {(data.amount ?? 0).toLocaleString()}{" "}
                                    <span className="text-sm text-indigo-400 font-normal">{data.currency}</span>
                                </div>
                            </div>

                            {data.aiInsight && (
                                <div className="p-4 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 space-y-1">
                                    <div className="flex items-center gap-1.5 text-xs font-bold text-indigo-400 uppercase tracking-wider">
                                        <Sparkles size={14} /> AI Financial Insight
                                    </div>
                                    <p className="text-xs text-indigo-200/90 leading-relaxed">
                                        {data.aiInsight}
                                    </p>
                                </div>
                            )}
                        </div>

                        <div className="pt-6 space-y-3 border-t border-slate-800/80 mt-6">
                            <Button
                                onClick={() => setIsModalOpen(true)}
                                className="w-full py-3.5 px-6 bg-indigo-600 hover:bg-indigo-500
                 text-white font-bold text-sm transition-all duration-300 shadow-[0_0_25px_rgba(99,102,241,0.3)]
                  flex items-center justify-center gap-2 rounded"
                            >
                                <ShoppingCart size={18} />
                                <span>Pay Now / Process Order</span>
                            </Button>

                            <p className="text-[11px] text-center text-slate-500 flex items-center justify-center gap-1">
                                <ShieldCheck size={13} className="text-emerald-400" />
                                Encrypted & Secure Transaction Guaranteed
                            </p>
                        </div>

                    </div>
                </div>

                {/* Specifications */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    <div className="lg:col-span-7 bg-slate-900/50 border border-slate-800/80 rounded-3xl p-6 sm:p-8 space-y-4">
                        <h2 className="text-lg font-bold text-white flex items-center gap-2">
                            <Building2 size={20} className="text-indigo-400" /> Overview & Description
                        </h2>
                        <div className="h-px bg-slate-800/80" />
                        <p className="text-sm text-slate-300 leading-relaxed whitespace-pre-line">
                            {data.fullDescription}
                        </p>
                    </div>

                    <div className="lg:col-span-5 bg-slate-900/50 border border-slate-800/80 rounded-3xl p-6 sm:p-8 space-y-4">
                        <h2 className="text-lg font-bold text-white">Specifications & Details</h2>
                        <div className="h-px bg-slate-800/80" />

                        <div className="space-y-3 text-xs sm:text-sm">
                            <div className="flex items-center justify-between py-2 border-b border-slate-800/50">
                                <span className="text-slate-400 flex items-center gap-2">
                                    <Calendar size={14} className="text-indigo-400" /> Transaction Date
                                </span>
                                <span className="font-medium text-slate-200">{data.date}</span>
                            </div>

                            <div className="flex items-center justify-between py-2 border-b border-slate-800/50">
                                <span className="text-slate-400 flex items-center gap-2">
                                    <MapPin size={14} className="text-indigo-400" /> Location
                                </span>
                                <span className="font-medium text-slate-200">{data.location}</span>
                            </div>

                            <div className="flex items-center justify-between py-2 border-b border-slate-800/50">
                                <span className="text-slate-400 flex items-center gap-2">
                                    <CreditCard size={14} className="text-indigo-400" /> Payment Method
                                </span>
                                <span className="font-medium text-slate-200">{data.paymentMethod}</span>
                            </div>

                            <div className="flex items-center justify-between py-2 border-b border-slate-800/50">
                                <span className="text-slate-400">Priority Level</span>
                                <span className="px-2 py-0.5 rounded-md bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-semibold">
                                    {data.priority}
                                </span>
                            </div>

                            <div className="flex items-center justify-between py-2">
                                <span className="text-slate-400">Payment Status</span>
                                <span className="px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold flex items-center gap-1">
                                    <CheckCircle2 size={12} /> {data.status}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Reviews Section */}
                <div className="bg-slate-900/50 border border-slate-800/80 rounded-3xl p-6 sm:p-8 space-y-6">
                    <div className="flex items-center justify-between">
                        <h2 className="text-lg font-bold text-white flex items-center gap-2">
                            <MessageSquare size={20} className="text-indigo-400" /> Ratings & Reviews
                        </h2>
                    </div>
                    <div className="h-px bg-slate-800/80" />

                    <div className="p-4 rounded-2xl bg-slate-950/50 border border-slate-800/60 space-y-2">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 rounded-full bg-indigo-600/30 text-indigo-400 font-bold flex items-center justify-center text-xs">
                                    AA
                                </div>
                                <div>
                                    <h4 className="text-xs font-bold text-slate-200">System Verified</h4>
                                    <p className="text-[10px] text-slate-500">Auto-Generated Confirmation</p>
                                </div>
                            </div>
                            <div className="flex items-center text-amber-400">
                                {Array.from({ length: 5 }).map((_, i) => (
                                    <Star key={i} size={12} className="fill-amber-400" />
                                ))}
                            </div>
                        </div>
                        <p className="text-xs text-slate-400 leading-relaxed">
                            Record verified and saved successfully with full payment metadata.
                        </p>
                    </div>
                </div>

            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
                    <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-md w-full p-6 space-y-6 shadow-2xl relative">
                        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                            <h3 className="text-base font-bold text-white">Confirm Payment / Process</h3>
                            <Button
                                onClick={() => setIsModalOpen(false)}
                                className="text-slate-400 hover:text-white text-sm
                                 bg-slate-800 w-7 h-7 rounded-full flex items-center justify-center">
                                ✕
                            </Button>
                        </div>

                        <div className="space-y-4">
                            <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
                                <p className="text-xs text-slate-400">Item Summary</p>
                                <div className="flex justify-between items-center text-sm font-bold text-white">
                                    <span>{data.title}</span>
                                    <span className="font-mono text-indigo-400">{(data.amount ?? 0).toLocaleString()} {data.currency}</span>
                                </div>
                            </div>
                        </div>

                        <Button
                            onClick={handleConfirmAndPay}
                            isDisabled={isProcessing} 
                            className={`w-full py-3.5 rounded bg-indigo-600 font-bold text-xs
                                 text-white transition-all shadow-lg flex items-center justify-center gap-2 ${isProcessing
                                    ? "opacity-75 cursor-not-allowed bg-indigo-700"
                                    : "hover:bg-indigo-500 active:scale-95"
                                }`}
                        >
                            {isProcessing ? (
                                <>
                                 
                                    <Loader2 className="w-4 h-4 animate-spin text-white" />
                                    <span>Processing...</span>
                                </>
                            ) : (
                                <span>Confirm & Complete</span>
                            )}
                        </Button>
                    </div>
                </div>
            )}
        </div>
    );
}