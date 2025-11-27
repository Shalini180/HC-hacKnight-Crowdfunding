import React from 'react';
import { ChevronLeft, ShieldCheck, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const StorySection = () => {
    return (
        <div className="w-full md:w-2/3 p-8 md:p-16 overflow-y-auto">
            <Link to="/campaigns" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-8 group">
                <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" /> Back to Campaigns
            </Link>

            <div className="max-w-3xl">
                <span className="text-purple-500 font-semibold tracking-wider uppercase text-sm">Technology</span>
                <h1 className="text-5xl md:text-6xl font-bold mt-4 mb-6 leading-tight">
                    NextGen Quantum <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Internet Protocol</span>
                </h1>

                <div className="flex items-center gap-6 mb-12 text-sm">
                    <div className="flex items-center gap-2 text-slate-300">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-purple-500 to-blue-500" />
                        By <span className="text-white font-medium">Dr. Sarah Connors</span>
                    </div>
                    <div className="flex items-center gap-2 text-green-400 bg-green-500/10 px-3 py-1 rounded-full">
                        <ShieldCheck size={16} /> Verified Project
                    </div>
                </div>

                <div className="prose prose-invert prose-lg max-w-none text-slate-300">
                    <p className="lead text-xl text-slate-200">
                        We are building the foundation for a decentralized, censorship-resistant quantum network that connects humanity at the speed of light.
                    </p>
                    <p>
                        Traditional internet infrastructure is centralized, fragile, and prone to surveillance. Our protocol leverages quantum entanglement to create unhackable communication channels.
                    </p>
                    <div className="my-8 p-6 rounded-2xl bg-white/5 border border-white/10">
                        <h3 className="text-white font-bold text-lg mb-2 flex items-center gap-2">
                            <Zap className="text-yellow-400" /> Why this matters
                        </h3>
                        <p className="m-0 text-sm">
                            Quantum supremacy is approaching. Without a decentralized quantum layer, the future of digital privacy is at risk. Your contribution helps us secure the open web.
                        </p>
                    </div>
                    <p>
                        Join us in this revolution. Every ETH contributed goes directly to hardware acquisition and open-source research.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default StorySection;
