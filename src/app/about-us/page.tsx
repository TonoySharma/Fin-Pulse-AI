import FadeUp from '@/components/FadeUp';
import React from 'react';
import { BsCpu, BsShieldCheck, BsGraphUpArrow, BsLightningCharge } from 'react-icons/bs';

export default function AboutPage() {
    return (
        <div className="bg-slate-950 text-slate-300 min-h-screen font-sans">
            
            {/* 🌌 Hero Section */}
            <FadeUp className="relative overflow-hidden py-20 lg:py-32 border-b border-slate-900">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />
                
                <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-indigo-950 text-indigo-400 border border-indigo-800/60 mb-6">
                        <BsCpu className="animate-pulse" /> Inside FinAgent AI
                    </span>
                    <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-tight">
                        Redefining Financial Intelligence with <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Agentic AI</span>
                    </h1>
                    <p className="mt-6 text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed">
                        FinAgent is not just a budget tracker. We are building the next generation of autonomous AI financial agents capable of analyzing complex economic data, optimizing personal wealth, and automating decisions to secure your financial future.
                    </p>
                </div>
            </FadeUp>
           {/* 📈 Stats Section */}
            <FadeUp className="py-16 max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-slate-900/40 p-8 rounded-3xl border border-slate-900 backdrop-blur-sm">
                    <div className="text-center">
                        <h3 className="text-3xl sm:text-4xl font-extrabold text-white">$250M+</h3>
                        <p className="text-xs text-slate-500 mt-1 uppercase tracking-wider">Transactions Tracked</p>
                    </div>
                    <div className="text-center border-l border-slate-800/80">
                        <h3 className="text-3xl sm:text-4xl font-extrabold text-white">99.8%</h3>
                        <p className="text-xs text-slate-500 mt-1 uppercase tracking-wider">AI Analysis Accuracy</p>
                    </div>
                    <div className="text-center border-l border-slate-800/80">
                        <h3 className="text-3xl sm:text-4xl font-extrabold text-white">45%</h3>
                        <p className="text-xs text-slate-500 mt-1 uppercase tracking-wider">Average Savings Growth</p>
                    </div>
                    <div className="text-center border-l border-slate-800/80">
                        <h3 className="text-3xl sm:text-4xl font-extrabold text-white">10K+</h3>
                        <p className="text-xs text-slate-500 mt-1 uppercase tracking-wider">Active Smart Wallets</p>
                    </div>
                </div>
            </FadeUp>
            {/* 🛠 What Makes Us Unique */}
            <FadeUp className="py-20 max-w-7xl mx-auto px-4">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold text-white tracking-tight">Engineered for Autonomous Wealth Management</h2>
                    <p className="text-slate-400 text-sm mt-2">Why individuals and enterprises trust FinAgent to execute their financial directives.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Pillar 1 */}
                    <div className="bg-slate-900/30 border border-slate-900 hover:border-indigo-500/30 p-8 rounded-2xl transition-all duration-300 group">
                        <div className="h-12 w-12 rounded-xl bg-indigo-950 text-indigo-400 flex items-center justify-center mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                            <BsLightningCharge size={22} />
                        </div>
                        <h4 className="text-lg font-bold text-white mb-2">Autonomous Execution</h4>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            Our AI agents don't just notify you; they autonomously predict upcoming bills, optimize asset allocations, and execute internal micro-savings rules.
                        </p>
                    </div>

                    {/* Pillar 2 */}
                    <div className="bg-slate-900/30 border border-slate-900 hover:border-purple-500/30 p-8 rounded-2xl transition-all duration-300 group">
                        <div className="h-12 w-12 rounded-xl bg-purple-950 text-purple-400 flex items-center justify-center mb-6 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300">
                            <BsGraphUpArrow size={20} />
                        </div>
                        <h4 className="text-lg font-bold text-white mb-2">Predictive Modeling</h4>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            Utilizing state-of-the-art LLMs, we map out multi-year asset curves based on current incomes, inflation spikes, and historical expense data.
                        </p>
                    </div>

                    {/* Pillar 3 */}
                    <div className="bg-slate-900/30 border border-slate-900 hover:border-pink-500/30 p-8 rounded-2xl transition-all duration-300 group">
                        <div className="h-12 w-12 rounded-xl bg-pink-950 text-pink-400 flex items-center justify-center mb-6 group-hover:bg-pink-600 group-hover:text-white transition-all duration-300">
                            <BsShieldCheck size={22} />
                        </div>
                        <h4 className="text-lg font-bold text-white mb-2">Bank-Grade Cryptography</h4>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            Security is our baseline. All data layers undergo end-to-end zero-knowledge encryptions ensuring your internal transactions remain strictly private.
                        </p>
                    </div>
                </div>
            </FadeUp>
            {/* 💻 Technology Grid */}
            <FadeUp className="py-20 bg-slate-900/20 border-t border-b border-slate-900">
                <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold text-white tracking-tight">
                            The tech stack driving your hyper-personalized dashboard
                        </h2>
                        <p className="text-slate-400 text-sm mt-4 leading-relaxed">
                            We bridge advanced machine learning frameworks with high-throughput database systems to calculate, update, and secure millions of rows of data points in real time.
                        </p>
                        <ul className="mt-6 space-y-3 text-sm">
                            <li className="flex items-center gap-2.5">
                                <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
                                <span>Deep Learning Context Windows for Pattern Matching</span>
                            </li>
                            <li className="flex items-center gap-2.5">
                                <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
                                <span>Vector Embeddings for Semantic Transaction Tagging</span>
                            </li>
                            <li className="flex items-center gap-2.5">
                                <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
                                <span>Zero-latency Webhook Sync via Next.js Edge System</span>
                            </li>
                        </ul>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 text-center">
                            <span className="text-xs text-indigo-400 font-mono">AGENTS</span>
                            <p className="text-white font-semibold mt-1">LangChain & OpenAI</p>
                        </div>
                        <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 text-center">
                            <span className="text-xs text-purple-400 font-mono">FRAMEWORK</span>
                            <p className="text-white font-semibold mt-1">Next.js 15 & TS</p>
                        </div>
                        <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 text-center">
                            <span className="text-xs text-pink-400 font-mono">DATABASE</span>
                            <p className="text-white font-semibold mt-1">PostgreSQL Vector</p>
                        </div>
                        <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 text-center">
                            <span className="text-xs text-emerald-400 font-mono">INFRA</span>
                            <p className="text-white font-semibold mt-1">Vercel HyperEdge</p>
                        </div>
                    </div>
                </div>
            </FadeUp>
            {/* 🚀 Final CTA Section */}
            <FadeUp className="py-24 max-w-5xl mx-auto px-4 text-center">
                <div className="bg-gradient-to-br from-indigo-950/50 via-slate-900/80 to-purple-950/40 border border-slate-800 p-12 rounded-3xl relative overflow-hidden shadow-2xl">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/10 rounded-full blur-[80px] pointer-events-none" />
                    
                    <h2 className="text-3xl font-extrabold text-white tracking-tight">
                        Ready to automate your financial strategy?
                    </h2>
                    <p className="text-slate-400 text-sm mt-3 max-w-xl mx-auto">
                        Join thousands of users who let their personal AI agent handle tracking, reporting, and investment intelligence.
                    </p>
                    <div className="mt-8 flex justify-center gap-4">
                        <button className="bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-sm px-6 py-3 rounded-xl transition-all shadow-lg shadow-indigo-600/20 active:scale-95">
                            Launch AI Analyzer
                        </button>
                        <button className="bg-slate-950 hover:bg-slate-900 text-slate-300 border border-slate-800 font-medium text-sm px-6 py-3 rounded-xl transition-all active:scale-95">
                            Read Documentation
                        </button>
                    </div>
                </div>
            </FadeUp>

        </div>
    );
}