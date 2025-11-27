import React from 'react';

const SocialProof = () => {
    const avatars = [
        "https://i.pravatar.cc/150?u=1",
        "https://i.pravatar.cc/150?u=2",
        "https://i.pravatar.cc/150?u=3",
        "https://i.pravatar.cc/150?u=4"
    ];

    return (
        <div className="mt-10 pt-8 border-t border-white/5">
            <div className="flex items-center justify-center gap-4">
                <div className="flex -space-x-3">
                    {avatars.map((src, i) => (
                        <img
                            key={i}
                            src={src}
                            alt={`User ${i}`}
                            className="w-8 h-8 rounded-full border-2 border-black bg-slate-700 object-cover"
                        />
                    ))}
                </div>
                <p className="text-sm text-slate-500">
                    <span className="text-white font-bold">12,400+</span> Backers
                </p>
            </div>
        </div>
    );
};

export default SocialProof;
