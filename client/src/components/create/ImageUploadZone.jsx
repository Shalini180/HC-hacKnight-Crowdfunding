import React, { useState, useRef } from 'react';
import { Upload, X, Image as ImageIcon } from 'lucide-react';

const ImageUploadZone = ({ onImageSelect }) => {
    const [preview, setPreview] = useState(null);
    const [isDragging, setIsDragging] = useState(false);
    const fileInputRef = useRef(null);

    const handleFile = (file) => {
        if (file && file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreview(reader.result);
                onImageSelect(file);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleDrop = (e) => {
        e.preventDefault();
        setIsDragging(false);
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            handleFile(e.dataTransfer.files[0]);
        }
    };

    const handleChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            handleFile(e.target.files[0]);
        }
    };

    const clearImage = (e) => {
        e.stopPropagation();
        setPreview(null);
        onImageSelect(null);
        if (fileInputRef.current) fileInputRef.current.value = '';
    };

    return (
        <div
            className={`
        relative w-full h-64 rounded-xl border-2 border-dashed transition-all duration-300 cursor-pointer overflow-hidden group
        ${isDragging
                    ? 'border-violet-500 bg-violet-500/10'
                    : 'border-slate-700 bg-slate-900/50 hover:border-slate-500 hover:bg-slate-800/50'
                }
      `}
            onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
            onDragLeave={() => setIsDragging(false)}
            onDrop={handleDrop}
            onClick={() => fileInputRef.current?.click()}
        >
            <input
                type="file"
                ref={fileInputRef}
                className="hidden"
                accept="image/*"
                onChange={handleChange}
            />

            {preview ? (
                <div className="w-full h-full relative">
                    <img src={preview} alt="Preview" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <button
                            onClick={clearImage}
                            className="p-2 rounded-full bg-red-500/20 text-red-400 hover:bg-red-500 hover:text-white transition-colors"
                        >
                            <X className="w-6 h-6" />
                        </button>
                    </div>
                </div>
            ) : (
                <div className="flex flex-col items-center justify-center h-full text-slate-400">
                    <div className={`p-4 rounded-full bg-slate-800 mb-4 transition-transform duration-300 ${isDragging ? 'scale-110' : 'group-hover:scale-110'}`}>
                        {isDragging ? <Upload className="w-8 h-8 text-violet-400" /> : <ImageIcon className="w-8 h-8" />}
                    </div>
                    <p className="font-medium text-lg mb-1">Drop your campaign image here</p>
                    <p className="text-sm text-slate-500">or click to browse</p>
                </div>
            )}
        </div>
    );
};

export default ImageUploadZone;
