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
    const [error, setError] = useState(null);

    // Check for persisted session on mount
    useEffect(() => {
        const checkConnection = async () => {
            const persistedConnect = localStorage.getItem('isConnected');
            if (persistedConnect === 'true' && window.ethereum) {
                try {
                    const accounts = await window.ethereum.request({ method: 'eth_accounts' });
                    if (accounts.length > 0) {
                        // Silent connect
                        const _provider = new ethers.BrowserProvider(window.ethereum);
                        const _signer = await _provider.getSigner();
                        const _address = await _signer.getAddress();
                        const _network = await _provider.getNetwork();

                        setProvider(_provider);
                        setSigner(_signer);
                        setAddress(_address);
                        setChainId(_network.chainId);
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
            setError("Please install MetaMask!");
            return;
        }

        setIsConnecting(true);
        setError(null);
        try {
            const _provider = new ethers.BrowserProvider(window.ethereum);
            // Request accounts (opens popup)
            await _provider.send("eth_requestAccounts", []);

            const _signer = await _provider.getSigner();
            const _address = await _signer.getAddress();
            const _network = await _provider.getNetwork();

            // Network Guard (Force Sepolia ID 11155111)
            if (_network.chainId !== 11155111n) {
                await switchNetwork();
            }

            setProvider(_provider);
            setSigner(_signer);
            setAddress(_address);
            setChainId(_network.chainId);

            localStorage.setItem('isConnected', 'true');
        } catch (err) {
            console.error("Connection failed:", err);
            if (err.code === 4001) {
                setError("Connection rejected by user.");
            } else {
                setError("Failed to connect wallet.");
            }
        } finally {
            setIsConnecting(false);
        }
    };

    const switchNetwork = async () => {
        try {
            await window.ethereum.request({
                method: 'wallet_switchEthereumChain',
                params: [{ chainId: '0xaa36a7' }], // Sepolia
            });
        } catch (switchError) {
            // This error code indicates that the chain has not been added to MetaMask.
            if (switchError.code === 4902) {
                // Add chain logic here if needed
            }
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
            error,
            connectWallet,
            disconnectWallet
        }}>
            {children}
        </Web3Context.Provider>
    );
};

export default Web3Context;
