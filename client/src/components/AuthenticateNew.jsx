import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Shield } from 'lucide-react';
import AuthModal from './auth/AuthModal';
import WalletConnectButton from './auth/WalletConnectButton';
import SocialProof from './auth/SocialProof';
import { useWeb3 } from '../context/Web3Context';

const AuthenticateNew = () => {
    const { connectWallet, isConnecting, address } = useWeb3();
    const navigate = useNavigate();

    useEffect(() => {
        if (address) {
            navigate('/dashboard');
        }
    }, [address, navigate]);

    const handleConnect = () => {
        connectWallet();
    };

    return (
        <div className="min-h-screen bg-[#050507] text-white flex items-center justify-center relative overflow-hidden">
            {/* Space Background Effects */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
                {/* Stars would go here with CSS */}
            </div>

            <AuthModal>
                <div className="text-center mb-10">
                    <div className="w-16 h-16 bg-gradient-to-tr from-purple-500 to-pink-500 rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-lg shadow-purple-500/30 transform rotate-3">
                        <Shield size={32} className="text-white" />
                    </div>
                    <h1 className="text-3xl font-bold mb-2">Welcome to FutureFund</h1>
                    <p className="text-slate-400">Connect your wallet to access the future of funding.</p>
                </div>

                <div className="space-y-4">
                    <WalletConnectButton
                        status={isConnecting ? 'connecting' : address ? 'connected' : 'idle'}
                        onClick={handleConnect}
                    />

                    <button className="w-full py-4 rounded-xl bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-colors">
                        Read Documentation
                    </button>
                </div>

                <SocialProof />
            </AuthModal>
        </div>
    );
};

export default AuthenticateNew;
