import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useWeb3 } from '../context/Web3Context';
import WalletConnectButton from './auth/WalletConnectButton';

const AuthenticateNew = () => {
    const navigate = useNavigate();
    const { connectWallet, address, isConnecting } = useWeb3();

    useEffect(() => {
        if (address) {
            navigate('/dashboard');
        }
    }, [address, navigate]);

    return (
        <div className="min-h-screen bg-slate-950 flex items-center justify-center relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-violet-600/20 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-600/20 rounded-full blur-[120px]" />
            </div>

            <div className="glass p-8 rounded-2xl w-full max-w-md relative z-10 flex flex-col items-center text-center border border-white/10 shadow-2xl">
                <div className="mb-8">
                    <h1 className="text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-indigo-400">
                        CrowdCoin
                    </h1>
                    <p className="text-slate-400">
                        The future of decentralized funding
                    </p>
                </div>

                <div className="w-full flex justify-center">
                    <WalletConnectButton
                        isConnecting={isConnecting}
                        address={address}
                        onConnect={connectWallet}
                    />
                </div>
            </div>
        </div>
    );
};

export default AuthenticateNew;
