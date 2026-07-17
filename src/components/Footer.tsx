"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
    BsGlobe,
    BsGithub,
    BsLinkedin,
    BsTwitterX,
    BsEnvelopeFill,
    BsTelephoneFill,
    BsGeoAltFill,
    BsCheckCircleFill,
    BsArrowRight
} from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import FadeUp from "./FadeUp";

export const Footer = () => {
    const [email, setEmail] = useState("");
    const [subscribed, setSubscribed] = useState(false);

    const handleSubscribe = (e: React.FormEvent) => {
        e.preventDefault();
        if (email) {
            setSubscribed(true);
            setEmail("");
            setTimeout(() => setSubscribed(false), 5000); // 5 sec পর মেসেজ রিমুভ হবে
        }
    };

    return (
        <footer className="bg-slate-950 text-slate-300 border-t border-slate-800">
            {/* 1. Top Newsletter Bar */}
            <FadeUp className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 ">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-slate-900/60 p-6 sm:p-8 rounded-2xl border border-slate-800">
                    <div className="max-w-xl">
                        <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                            Stay ahead in financial intelligence
                        </h3>
                        <p className="text-slate-400 text-sm mt-1">
                            Subscribe to get the latest AI financial analysis, market trends, and smart budgeting tips.
                        </p>
                    </div>

                    <form onSubmit={handleSubscribe} className="w-full md:w-auto flex-1 max-w-md">
                        {subscribed ? (
                            <div className="flex items-center gap-2 text-emerald-400 bg-emerald-950/40 border border-emerald-800/50 p-3 rounded-xl text-sm font-medium">
                                <BsCheckCircleFill className="shrink-0" />
                                <span>Thank you for subscribing to FinAgent updates!</span>
                            </div>
                        ) : (
                            <div className="flex flex-col sm:flex-row gap-2.5">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter your work email"
                                    required
                                    className="bg-slate-950 border border-slate-700/80 text-white placeholder-slate-500 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 w-full transition-all"
                                />
                                <button
                                    type="submit"
                                    className="bg-indigo-600 hover:bg-indigo-500 text-white px-5 py-2.5 rounded-xl text-sm font-semibold transition-all flex items-center justify-center gap-2 shrink-0 shadow-lg shadow-indigo-600/20"
                                >
                                    Subscribe
                                    <BsArrowRight className="text-xs" />
                                </button>
                            </div>
                        )}
                    </form>
                </div>
            </FadeUp>

            {/* 2. Main Footer Links & Info */}
            <FadeUp className=" px-4 sm:px-6 lg:px-8 py-12 sm:py-16 border-t border-slate-800/80 ">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

                    {/* Brand Info */}
                    <div className=" space-y-4">
                        <Link href="/" className="flex items-center gap-2 group w-fit">
                            <div className="h-9 w-9 bg-indigo-600 rounded-xl flex items-center justify-center text-white font-black text-xl shadow-md shadow-indigo-600/30">
                                F
                            </div>
                            <span className="text-2xl font-bold text-white tracking-tight">
                                Fin<span className="text-indigo-400">Agent</span>
                            </span>
                        </Link>

                        <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
                            Next-generation Agentic AI platform designed to transform personal and business financial management through automated analysis and smart insights.
                        </p>

                        {/* Social Media Links */}
                        <div className="flex items-center gap-3 pt-2">
                            <a
                                href="https://github.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub Repository"
                                className="h-9 w-9 bg-slate-900 border border-slate-800 rounded-lg flex items-center justify-center text-slate-400 hover:text-white hover:border-indigo-500/50 hover:bg-slate-800 transition-all"
                            >
                                <BsGithub size={16} />
                            </a>
                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn Page"
                                className="h-9 w-9 bg-slate-900 border border-slate-800 rounded-lg flex items-center justify-center text-slate-400 hover:text-white hover:border-indigo-500/50 hover:bg-slate-800 transition-all"
                            >
                                <BsLinkedin size={16} />
                            </a>
                            <a
                                href="https://x.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Twitter Page"
                                className="h-9 w-9 bg-slate-900 border border-slate-800 rounded-lg flex items-center justify-center text-slate-400 hover:text-white hover:border-indigo-500/50 hover:bg-slate-800 transition-all"
                            >
                                <BsTwitterX size={15} />
                            </a>
                            <a
                                href="https://facebook.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Facebook Link"
                                className="h-9 w-9 bg-slate-900 border border-slate-800 rounded-lg flex items-center justify-center text-slate-400 hover:text-white hover:border-indigo-500/50 hover:bg-slate-800 transition-all"
                            >
                                <FaFacebookF size={16} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-3">
                        <h4 className="text-sm font-semibold text-white uppercase tracking-wider">
                            Navigation
                        </h4>
                        <ul className="space-y-2.5 text-sm">
                            <li>
                                <Link href="/" className="hover:text-indigo-400 transition-colors">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/explore" className="hover:text-indigo-400 transition-colors">
                                    Explore Plans
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="hover:text-indigo-400 transition-colors">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/blog" className="hover:text-indigo-400 transition-colors">
                                    Blog & Insights
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="hover:text-indigo-400 transition-colors">
                                    Contact Support
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* AI Platform Solutions */}
                    <div className="space-y-3">
                        <h4 className="text-sm font-semibold text-white uppercase tracking-wider">
                            Agentic AI
                        </h4>
                        <ul className="space-y-2.5 text-sm">
                            <li>
                                <Link href="/dashboard/ai-analyzer" className="hover:text-indigo-400 transition-colors">
                                    Data Analyzer
                                </Link>
                            </li>
                            <li>
                                <Link href="/dashboard/ai-planner" className="hover:text-indigo-400 transition-colors">
                                    Smart Recommendation
                                </Link>
                            </li>
                            <li>
                                <Link href="/items/add" className="hover:text-indigo-400 transition-colors">
                                    Add Transaction
                                </Link>
                            </li>
                            <li>
                                <Link href="/items/manage" className="hover:text-indigo-400 transition-colors">
                                    Manage Records
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Details */}
                    <div className="space-y-3">
                        <h4 className="text-sm font-semibold text-white uppercase tracking-wider">
                            Contact Us
                        </h4>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-start gap-2.5">
                                <BsGeoAltFill className="text-indigo-400 mt-1 shrink-0" />
                                <span className="text-slate-400">
                                    Gulshan 2, Dhaka, Bangladesh
                                </span>
                            </li>
                            <li className="flex items-center gap-2.5">
                                <BsEnvelopeFill className="text-indigo-400 shrink-0" />
                                <a href="mailto:support@finagent.ai" className="hover:text-white transition-colors">
                                    support@finagent.ai
                                </a>
                            </li>
                            <li className="flex items-center gap-2.5">
                                <BsTelephoneFill className="text-indigo-400 shrink-0" />
                                <a href="tel:+8801700000000" className="hover:text-white transition-colors">
                                    +880 1700-000000
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>
            </FadeUp>

            {/* 3. Bottom Bar */}
            <FadeUp className="border-t border-slate-900 bg-slate-950/80 py-6">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
                    <p>© {new Date().getFullYear()} FinAgent AI Inc. All rights reserved.</p>

                    <div className="flex items-center gap-6">
                        <Link href="/privacy" className="hover:text-slate-300 transition-colors">
                            Privacy Policy
                        </Link>
                        <Link href="/terms" className="hover:text-slate-300 transition-colors">
                            Terms of Service
                        </Link>
                        <Link href="/security" className="hover:text-slate-300 transition-colors">
                            Security
                        </Link>
                    </div>
                </div>
            </FadeUp>
        </footer>
    );
};