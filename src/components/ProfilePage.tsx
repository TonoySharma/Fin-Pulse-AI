"use client";

import React, { useState, useEffect } from "react";


import {
    User,
    Mail,
    Calendar,
    Clock,
    ShoppingBag,
    Heart,
    CreditCard,
    ShieldCheck,
    Bell,
    LogOut,
    Edit3,
    MapPin,
    ChevronRight,
    Award,
    Loader2
} from "lucide-react";
import { authClient, useSession } from "@/lib/auth-client";
import toast from "react-hot-toast";
import { Button } from "@heroui/react";


export default function ProfilePage() {

    const handleLogout = async () => {
        const { error } = await authClient.signOut();

        if (error) {
            toast.error(error.message || "Logout failed!");
            return;
        }

        toast.success("Logged out successfully!");
        window.location.replace("/login");
    };


    const { data: session, isPending } = useSession();

    // Current Live Date & Time State
    const [dateTime, setDateTime] = useState<Date | null>(null);

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setDateTime(new Date());
        const timer = setInterval(() => setDateTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);


    if (isPending) {
        return (
            <div className="min-h-screen bg-slate-950 flex items-center justify-center text-cyan-400">
                <Loader2 size={32} className="animate-spin" />
                <span className="ml-2 font-medium">Loading profile...</span>
            </div>
        );
    }


    if (!session || !session.user) {
        return (
            <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center text-slate-300">
                <h2 className="text-2xl font-bold text-white mb-2">You are not logged in!</h2>
                <p className="text-slate-400 mb-4 text-sm">Please log in to view your profile page.</p>
            </div>
        );
    }


    const user = session?.user;

    return (
        <div className="min-h-screen bg-slate-950 text-slate-100 py-10 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto space-y-8">

                {/* Top Header Card */}
                <div className="relative overflow-hidden rounded-3xl bg-slate-900/80 border border-slate-800 p-6 sm:p-8 backdrop-blur-xl shadow-2xl">
                    <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
                    <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
                        {/* User Avatar & Basic Info */}
                        <div className="flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left">
                            <div className="relative group">

                                {user.image ? (
                                    <img
                                        src={user.image}
                                        alt={user.name || "User Avatar"}
                                        className="w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover border-2 border-cyan-500/40 p-1 bg-slate-950 shadow-lg shadow-cyan-500/10 group-hover:scale-105 transition-transform duration-300"
                                    />
                                ) : (
                                    <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border-2 border-cyan-500/40 p-1 bg-slate-900 flex items-center justify-center text-cyan-400">
                                        <User size={48} />
                                    </div>
                                )}
                                <button className="absolute bottom-1 right-1 p-2 bg-cyan-500 text-slate-950 rounded-full hover:bg-cyan-400 transition-colors shadow-md">
                                    <Edit3 size={14} className="font-bold" />
                                </button>
                            </div>

                            <div className="space-y-1">
                                <div className="flex items-center justify-center sm:justify-start gap-2">

                                    <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                                        {user.name || "Anonymous User"}
                                    </h1>
                                    <span className="inline-flex items-center gap-1 text-xs px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 font-medium">
                                        <Award size={12} /> Verified Member
                                    </span>
                                </div>


                                <p className="flex items-center justify-center sm:justify-start gap-2 text-slate-400 text-sm">
                                    <Mail size={15} className="text-cyan-400" />
                                    {user.email || "No email available"}
                                </p>

                                <p className="text-xs text-slate-500">
                                    Logged in with active session
                                </p>
                            </div>
                        </div>

                        {/* Date & Live Time Widget */}
                        <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row gap-3 bg-slate-950/60 p-4 rounded-2xl border border-slate-800/80 backdrop-blur-md justify-center items-center">
                            <div className="flex items-center gap-3 px-3 py-1.5">
                                <div className="p-2 bg-slate-900 rounded-lg text-cyan-400 border border-slate-800">
                                    <Calendar size={18} />
                                </div>
                                <div>
                                    <p className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold">Today&apos;s Date</p>
                                    <p className="text-sm font-medium text-slate-200">
                                        {dateTime ? dateTime.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : "--"}
                                    </p>
                                </div>
                            </div>

                            <div className="hidden sm:block md:hidden lg:block w-px h-8 bg-slate-800" />

                            <div className="flex items-center gap-3 px-3 py-1.5">
                                <div className="p-2 bg-slate-900 rounded-lg text-cyan-400 border border-slate-800">
                                    <Clock size={18} />
                                </div>
                                <div>
                                    <p className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold">Live Time</p>
                                    <p className="text-sm font-mono font-bold text-cyan-400">
                                        {dateTime ? dateTime.toLocaleTimeString() : "--:--:--"}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    {[
                        { label: "Total Orders", value: "18", icon: ShoppingBag, color: "text-blue-400", bg: "bg-blue-500/10" },
                        { label: "Wishlist Items", value: "12", icon: Heart, color: "text-pink-400", bg: "bg-pink-500/10" },
                        { label: "Saved Cards", value: "3", icon: CreditCard, color: "text-emerald-400", bg: "bg-emerald-500/10" },
                        { label: "Saved Addresses", value: "2", icon: MapPin, color: "text-amber-400", bg: "bg-amber-500/10" },
                    ].map((stat, i) => (
                        <div key={i} className="bg-slate-900/60 border border-slate-800 rounded-2xl p-4 sm:p-5 flex items-center gap-4 hover:border-slate-700 transition-all">
                            <div className={`p-3 rounded-xl ${stat.bg} ${stat.color}`}>
                                <stat.icon size={22} />
                            </div>
                            <div>
                                <p className="text-xs text-slate-400 font-medium">{stat.label}</p>
                                <h3 className="text-xl font-bold text-white mt-0.5">{stat.value}</h3>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Main Content Sections */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* Quick Settings & Navigation */}
                    <div className="lg:col-span-2 space-y-4">
                        <h2 className="text-lg font-bold text-white flex items-center gap-2">
                            <User size={18} className="text-cyan-400" /> Account Dashboard
                        </h2>

                        <div className="bg-slate-900/60 border border-slate-800 rounded-2xl overflow-hidden divide-y divide-slate-800/80">
                            {[
                                { title: "Personal Details", desc: "Update your name, phone number, and avatar", icon: User, action: "Edit" },
                                { title: "Order History", desc: "Track ongoing orders and view past receipts", icon: ShoppingBag, action: "View All" },
                                { title: "Security & Password", desc: "Manage 2FA, password, and active sessions", icon: ShieldCheck, action: "Manage" },
                                { title: "Notification Preferences", desc: "Control email alerts and SMS notifications", icon: Bell, action: "Configure" },
                            ].map((item, index) => (
                                <div key={index} className="p-4 sm:p-5 flex items-center justify-between hover:bg-slate-800/30 transition-colors group cursor-pointer">
                                    <div className="flex items-center gap-4">
                                        <div className="p-2.5 rounded-xl bg-slate-800/80 text-cyan-400 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-colors">
                                            <item.icon size={20} />
                                        </div>
                                        <div>
                                            <h3 className="text-sm font-semibold text-white group-hover:text-cyan-400 transition-colors">
                                                {item.title}
                                            </h3>
                                            <p className="text-xs text-slate-400 mt-0.5">{item.desc}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2 text-xs text-cyan-400 font-medium">
                                        <span className="hidden sm:inline">{item.action}</span>
                                        <ChevronRight size={16} className="text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Sidebar / Security & Actions */}
                    <div className="space-y-6">
                        <h2 className="text-lg font-bold text-white flex items-center gap-2">
                            <ShieldCheck size={18} className="text-cyan-400" /> Account Status
                        </h2>

                        {/* Account Status Card */}
                        <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-5 space-y-4">
                            <div className="flex items-center justify-between">
                                <span className="text-xs text-slate-400">Email Verification</span>
                                <span className="text-xs font-semibold px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                                    Verified
                                </span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-xs text-slate-400">Two-Factor Auth (2FA)</span>
                                <span className="text-xs font-semibold px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20">
                                    Disabled
                                </span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-xs text-slate-400">Account Type</span>
                                <span className="text-xs font-semibold text-white">VIP Buyer</span>
                            </div>
                        </div>

                        {/* Logout Action */}
                        <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-5">
                            <p className="text-xs text-slate-400 mb-4">
                                Want to switch accounts or safely exit? Log out of your session anytime.
                            </p>
                            <Button
                                onClick={handleLogout}
                                className="w-full flex items-center justify-center gap-2 py-2.5 px-4
                                 rounded bg-red-500/10 text-red-400 border border-red-500/20
                                  hover:bg-red-500 hover:text-white font-medium text-sm transition-all
                                   shadow-lg shadow-red-500/5 cursor-pointer duration-300"
                            >
                                <LogOut size={16} /> Log Out Account
                            </Button>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
}