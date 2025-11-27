import React, { createContext, useState, useEffect, useContext } from 'react';
import { ethers } from 'ethers';

const Web3Context = createContext();

export const useWeb3 = () => useContext(Web3Context);

export const Web3Provider = ({ children }) => {
    const [address, setAddress] = useState(null);
    const [provider, setProvider] = useState(null);
    const [signer, setSigner] = useState(null);
    const [chainId, setChainId] = useState(null);
    const [isConnecting, setIsConnecting] = useState(false);

    // Check for persisted session on mount
    useEffect(() => {
        const checkConnection = async () => {
            const persistedConnect = localStorage.getItem('isConnected');
            if (persistedConnect === 'true' && window.ethereum) {
                try {
                    const accounts = await window.ethereum.request({ method: 'eth_accounts' });
                    if (accounts.length > 0) {
                        await connectWallet();
                    } else {
                        localStorage.removeItem('isConnected');
                    }
                } catch (error) {
                    console.error("Auto-connect failed:", error);
                }
            }
        };
        checkConnection();
    }, []);

    // Listen for account/chain changes
    useEffect(() => {
        if (window.ethereum) {
            window.ethereum.on('accountsChanged', (accounts) => {
                if (accounts.length > 0) {
                    setAddress(accounts[0]);
                } else {
                    disconnectWallet();
                }
            });

            window.ethereum.on('chainChanged', () => {
                window.location.reload();
            });
        }
    }, []);

    const connectWallet = async () => {
        if (!window.ethereum) {
            alert("Please install MetaMask!");
            return;
        }

        setIsConnecting(true);
        try {
            const _provider = new ethers.BrowserProvider(window.ethereum);
            const _signer = await _provider.getSigner();
            const _address = await _signer.getAddress();
            const _network = await _provider.getNetwork();

            setProvider(_provider);
            setSigner(_signer);
            setAddress(_address);
            setChainId(_network.chainId);

            localStorage.setItem('isConnected', 'true');
        } catch (error) {
            console.error("Connection failed:", error);
            alert("Failed to connect wallet: " + error.message);
        } finally {
            setIsConnecting(false);
        }
    };

    const disconnectWallet = () => {
        setAddress(null);
        setProvider(null);
        setSigner(null);
        setChainId(null);
        localStorage.removeItem('isConnected');
    };

    return (
        <Web3Context.Provider value={{
            address,
            provider,
            signer,
            chainId,
            isConnecting,
            connectWallet,
            disconnectWallet
        }}>
            {children}
        </Web3Context.Provider>
    );
};

export default Web3Context;
