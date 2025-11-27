import React from 'react'
import { Wallet } from 'lucide-react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="sticky top-0 z-50 glass-dark border-b border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link to="/" className="flex items-center space-x-2">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center">
                            <span className="text-white font-bold text-xl">₿</span>
                        </div>
                        <h1 className="text-2xl font-bold gradient-text from-purple-400 to-pink-600">
                            CrowdCoin
                        </h1>
                    </Link>

                    {/* Navigation Links */}
                    <div className="hidden md:flex items-center space-x-8">
                        <Link to="/" className="text-slate-300 hover:text-white transition-colors duration-200">
                            Home
                        </Link>
                        <Link to="/displayfunds" className="text-slate-300 hover:text-white transition-colors duration-200">
                            Explore
                        </Link>
                        <Link to="/createfund" className="text-slate-300 hover:text-white transition-colors duration-200">
                            Create
                        </Link>
                        <Link to="/dashboard" className="text-slate-300 hover:text-white transition-colors duration-200">
                            Dashboard
                        </Link>
                    </div>

                    {/* Connect Wallet Button */}
                    <button className="group relative inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-200 hover:scale-105 ring-2 ring-purple-500/20 ring-offset-2 ring-offset-slate-950">
                        <Wallet className="w-4 h-4" />
                        <span>Connect Wallet</span>
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 group-hover:opacity-20 blur transition-opacity duration-200"></div>
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            <div className="md:hidden px-4 pb-3">
                <div className="flex flex-col space-y-2">
                    <Link to="/" className="text-slate-300 hover:text-white py-2">Home</Link>
                    <Link to="/displayfunds" className="text-slate-300 hover:text-white py-2">Explore</Link>
                    <Link to="/createfund" className="text-slate-300 hover:text-white py-2">Create</Link>
                    <Link to="/dashboard" className="text-slate-300 hover:text-white py-2">Dashboard</Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
