import React from 'react';
import { User, Loader2 } from 'lucide-react';

const WalletConnectButton = ({ isConnecting, address, onConnect }) => {
    return (
        <button
            onClick={onConnect}
            disabled={isConnecting}
            className={`
        relative group flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300
        ${address
                    ? 'bg-slate-800 text-slate-200 border border-slate-700'
                    : 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white hover:shadow-[0_0_20px_rgba(124,58,237,0.5)] hover:scale-[1.02]'
                }
      `}
        >
            {isConnecting ? (
                <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Connecting...</span>
                </>
            ) : address ? (
                <>
                    <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center border border-slate-600">
                        <User className="w-4 h-4 text-slate-300" />
                    </div>
                    <span className="font-mono">
                        {address.slice(0, 6)}...{address.slice(-4)}
                    </span>
                </>
            ) : (
                <span>Connect Wallet</span>
            )}
        </button>
    );
};

export default WalletConnectButton;
