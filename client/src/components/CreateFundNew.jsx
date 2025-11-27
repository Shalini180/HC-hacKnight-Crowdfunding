import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Upload, Loader2 } from 'lucide-react';
import PageHeader from './ui/PageHeader';
import GlassCard from './ui/GlassCard';
import GradientButton from './ui/GradientButton';
import useCrowdfunding from '../hooks/useCrowdfunding';
import { uploadMetadata } from '../services/ipfsService';
import { ethers } from 'ethers';

const CreateFundNew = () => {
    const navigate = useNavigate();
    const { createCampaign, isLoading } = useCrowdfunding();
    const [form, setForm] = useState({
        title: '',
        description: '',
        target: '',
        deadline: '',
        image: ''
    });
    const [imageFile, setImageFile] = useState(null);
    const [isUploading, setIsUploading] = useState(false);

    const handleFormFieldChange = (fieldName, e) => {
        setForm({ ...form, [fieldName]: e.target.value });
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImageFile(file);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!imageFile) {
            alert("Please select an image");
            return;
        }

        setIsUploading(true);
        try {
            // 1. Upload to IPFS
            const imageUrl = await uploadMetadata(imageFile);

            // 2. Create Campaign on Blockchain
            await createCampaign({
                ...form,
                image: imageUrl,
                target: form.target, // Passed as string, converted in service
                deadline: form.deadline
            });

            alert("Campaign Created Successfully!");
            navigate('/dashboard');
        } catch (error) {
            console.error("Submission failed:", error);
            alert("Failed to create campaign: " + error.message);
        } finally {
            setIsUploading(false);
        }
    };

    return (
        <div className="min-h-screen bg-slate-950 text-white p-8 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-900/20 rounded-full blur-[120px]" />
            </div>

            <div className="max-w-4xl mx-auto space-y-8">
                <PageHeader title="Start a Campaign" subtitle="Bring your creative project to life on the blockchain." />

                <GlassCard className="p-8 md:p-10">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Title */}
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-400">Campaign Title</label>
                                <input
                                    type="text"
                                    value={form.title}
                                    onChange={(e) => handleFormFieldChange('title', e)}
                                    className="w-full bg-black/30 border border-white/10 rounded-xl p-4 text-white focus:border-purple-500 focus:outline-none transition-colors"
                                    placeholder="e.g. Future Tech Initiative"
                                    required
                                />
                            </div>

                            {/* Target */}
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-400">Target Amount (ETH)</label>
                                <input
                                    type="number"
                                    step="0.01"
                                    value={form.target}
                                    onChange={(e) => handleFormFieldChange('target', e)}
                                    className="w-full bg-black/30 border border-white/10 rounded-xl p-4 text-white focus:border-purple-500 focus:outline-none transition-colors"
                                    placeholder="e.g. 10.5"
                                    required
                                />
                            </div>
                        </div>

                        {/* Description */}
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-400">Story</label>
                            <textarea
                                value={form.description}
                                onChange={(e) => handleFormFieldChange('description', e)}
                                className="w-full bg-black/30 border border-white/10 rounded-xl p-4 text-white focus:border-purple-500 focus:outline-none transition-colors min-h-[150px]"
                                placeholder="Tell your story..."
                                required
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Deadline */}
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-400">End Date</label>
                                <input
                                    type="date"
                                    value={form.deadline}
                                    onChange={(e) => handleFormFieldChange('deadline', e)}
                                    className="w-full bg-black/30 border border-white/10 rounded-xl p-4 text-white focus:border-purple-500 focus:outline-none transition-colors"
                                    required
                                />
                            </div>

                            {/* Image Upload */}
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-400">Campaign Image</label>
                                <div className="relative">
                                    <input
                                        type="file"
                                        accept="image/*"
                                        onChange={handleImageChange}
                                        className="hidden"
                                        id="image-upload"
                                    />
                                    <label
                                        htmlFor="image-upload"
                                        className="flex items-center justify-center w-full bg-black/30 border border-white/10 border-dashed rounded-xl p-4 text-slate-400 hover:text-white hover:border-purple-500 cursor-pointer transition-all"
                                    >
                                        <Upload size={20} className="mr-2" />
                                        {imageFile ? imageFile.name : "Upload Image"}
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div className="pt-4">
                            <GradientButton
                                type="submit"
                                className="w-full py-4 text-lg"
                                disabled={isLoading || isUploading}
                            >
                                {isLoading || isUploading ? (
                                    <div className="flex items-center justify-center gap-2">
                                        <Loader2 className="animate-spin" /> Processing...
                                    </div>
                                ) : "Create Campaign"}
                            </GradientButton>
                        </div>
                    </form>
                </GlassCard>
            </div>
        </div>
    );
};

export default CreateFundNew;
