import React from 'react'
import { ArrowRight, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'

const Hero = () => {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
            {/* Purple Glow Background Effect */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-600/20 rounded-full blur-[120px] animate-pulse"></div>
                <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-pink-600/10 rounded-full blur-[100px]"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-8">
                    <Sparkles className="w-4 h-4 text-purple-400" />
                    <span className="text-sm text-purple-300 font-medium">Powered by Blockchain Technology</span>
                </div>

                {/* Main Headline */}
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                    <span className="gradient-text from-purple-400 via-pink-400 to-purple-400 bg-[length:200%_auto] animate-gradient">
                        Fund the Future
                    </span>
                    <br />
                    <span className="text-white">of Web3</span>
                </h1>

                {/* Subtext */}
                <p className="text-xl sm:text-2xl text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed">
                    Decentralized funding for the next generation of builders.
                    <br className="hidden sm:block" />
                    Launch your project or support innovation on the blockchain.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    {/* Primary Button */}
                    <Link to="/createfund">
                        <button className="group relative inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-200 hover:scale-105">
                            <span>Start Campaign</span>
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 group-hover:opacity-20 blur transition-opacity duration-200"></div>
                        </button>
                    </Link>

                    {/* Secondary Button */}
                    <Link to="/displayfunds">
                        <button className="group inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-slate-700 text-slate-200 font-semibold hover:border-purple-500 hover:text-white transition-all duration-200 hover:bg-purple-500/5">
                            <span>Explore Projects</span>
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </Link>
                </div>

                {/* Stats */}
                <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
                    <div className="glass-dark rounded-2xl p-6 backdrop-blur-sm">
                        <div className="text-3xl font-bold gradient-text from-purple-400 to-pink-600 mb-2">$2.5M+</div>
                        <div className="text-slate-400 text-sm">Total Funded</div>
                    </div>
                    <div className="glass-dark rounded-2xl p-6 backdrop-blur-sm">
                        <div className="text-3xl font-bold gradient-text from-purple-400 to-pink-600 mb-2">500+</div>
                        <div className="text-slate-400 text-sm">Active Campaigns</div>
                    </div>
                    <div className="glass-dark rounded-2xl p-6 backdrop-blur-sm">
                        <div className="text-3xl font-bold gradient-text from-purple-400 to-pink-600 mb-2">10K+</div>
                        <div className="text-slate-400 text-sm">Backers</div>
                    </div>
                </div>
            </div>

            {/* Gradient animation keyframes */}
            <style jsx>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          animation: gradient 3s ease infinite;
        }
      `}</style>
        </section>
    )
}

export default Hero
