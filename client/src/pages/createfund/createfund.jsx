import React from 'react';

const CreateFund = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center">
      <div className="p-8 border border-purple-500 rounded-xl bg-slate-900">
        <h1 className="text-3xl font-bold mb-4 gradient-text from-purple-400 to-pink-600">
          Safe Mode: Page Loaded ✅
        </h1>
        <p className="text-slate-400 mb-4">
          If you can see this, the routing works. The error was in the form code.
        </p>
        <div className="space-y-2 text-sm text-slate-500">
          <p>✓ Component imported correctly</p>
          <p>✓ Route configured properly</p>
          <p>✓ React rendering working</p>
        </div>
        <button className="mt-6 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold hover:scale-105 transition-transform">
          Test Button
        </button>
      </div>
    </div>
  );
};

export default CreateFund;