"use client";

import React from "react";
import { ShieldCheck, Fingerprint, RefreshCw, KeyRound } from "lucide-react";
import FadeUp from "./FadeUp";

export function SecuritySection() {
    const securityItems = [
        { icon: <Fingerprint size={22} />, title: "Biometric & 2FA Support", desc: "Add hardware security keys or secondary auth apps to lockdown withdrawals securely." },
        { icon: <KeyRound size={22} />, title: "AES-256 Encryption", desc: "Your direct transactions metadata are bank-grade encrypted before cloud storage." },
        { icon: <RefreshCw size={22} />, title: "Automated Encrypted Backups", desc: "Hourly cloud backups mean you never lose transaction snapshots even when offline." },
    ];

    return (
        <section className=" bg-slate-950">

            <FadeUp className=" max-w-7xl mx-auto py-5 px-4 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                {/* Left Text */}
                <div className="lg:col-span-5 space-y-5">
                    <div className="p-2.5 w-fit rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shadow-md">
                        <ShieldCheck size={22} />
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-[1.25]">
                        Your personal data remains completely private.
                    </h2>
                    <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-medium">
                        Security isn&apos;t an afterthought for us—it&apos;s the core framework. We never sell your balance logs, transaction amounts, or personal profiles to ad networks.
                    </p>
                </div>

                {/* Right List cards */}
                <div className="lg:col-span-7 space-y-5 ">
                    {securityItems.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-4 p-6 rounded-2xl bg-slate-900/30 border border-slate-800/60 hover:bg-slate-900/60 hover:border-slate-700/80 transition-all duration-300 shadow-md backdrop-blur-sm">
                            <div className="p-3.5 rounded-xl bg-slate-950 text-emerald-400 border border-slate-800/80 shrink-0">
                                {item.icon}
                            </div>
                            <div className="space-y-1.5">
                                <h4 className="text-base font-bold text-white tracking-wide">{item.title}</h4>
                                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-medium">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </FadeUp>
        </section>
    );
}