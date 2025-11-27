import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import ImageUploadZone from './create/ImageUploadZone';
import { Loader2, Rocket } from 'lucide-react';

const CreateFundNew = () => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [form, setForm] = useState({
        title: '',
        description: '',
        target: '',
        deadline: '',
        image: null
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        // Mock contract call
        try {
            await new Promise(resolve => setTimeout(resolve, 2000));
            console.log("Campaign Created:", form);
            navigate('/dashboard');
        } catch (error) {
            console.error("Error creating campaign:", error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-slate-950 text-slate-200">
            <Navbar />

            <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-white mb-2">Start a Campaign</h1>
                    <p className="text-slate-400">Bring your creative project to life</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-8">
                    {/* Image Upload */}
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-300">Campaign Image</label>
                        <ImageUploadZone onImageSelect={(file) => setForm({ ...form, image: file })} />
                    </div>

                    {/* Basic Info */}
                    <div className="grid gap-6">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-300">Campaign Title</label>
                            <input
                                type="text"
                                required
                                className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all"
                                placeholder="e.g., The Future of Energy"
                                value={form.title}
                                onChange={(e) => setForm({ ...form, title: e.target.value })}
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-300">Story</label>
                            <textarea
                                required
                                rows={5}
                                className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all resize-none"
                                placeholder="Tell potential backers what you're building..."
                                value={form.description}
                                onChange={(e) => setForm({ ...form, description: e.target.value })}
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-300">Target Amount (ETH)</label>
                                <input
                                    type="number"
                                    step="0.01"
                                    required
                                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all"
                                    placeholder="0.00"
                                    value={form.target}
                                    onChange={(e) => setForm({ ...form, target: e.target.value })}
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-300">Deadline</label>
                                <input
                                    type="date"
                                    required
                                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all text-slate-200"
                                    value={form.deadline}
                                    onChange={(e) => setForm({ ...form, deadline: e.target.value })}
                                />
                            </div>
                        </div>
                    </div>

                    <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-bold py-4 rounded-xl hover:shadow-[0_0_30px_rgba(124,58,237,0.5)] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                        {isLoading ? (
                            <>
                                <Loader2 className="w-5 h-5 animate-spin" />
                                <span>Minting Campaign...</span>
                            </>
                        ) : (
                            <>
                                <Rocket className="w-5 h-5" />
                                <span>Launch Campaign</span>
                            </>
                        )}
                    </button>
                </form>
            </main>

            {/* Loading Overlay */}
            {isLoading && (
                <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-50 flex items-center justify-center">
                    <div className="text-center space-y-4">
                        <div className="relative w-16 h-16 mx-auto">
                            <div className="absolute inset-0 border-4 border-slate-700 rounded-full"></div>
                            <div className="absolute inset-0 border-4 border-violet-500 rounded-full border-t-transparent animate-spin"></div>
                        </div>
                        <h3 className="text-xl font-bold text-white">Creating on Blockchain</h3>
                        <p className="text-slate-400">Please confirm the transaction in your wallet...</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CreateFundNew;
