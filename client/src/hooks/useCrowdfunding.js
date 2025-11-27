import { useState, useEffect, useCallback } from 'react';
import { useWeb3 } from '../context/Web3Context';
import { getContract, createCampaign, getCampaigns, donate } from '../services/contractService';

const useCrowdfunding = () => {
    const { provider, signer, address } = useWeb3();
    const [contract, setContract] = useState(null);
    const [campaigns, setCampaigns] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (signer) {
            const _contract = getContract(signer);
            setContract(_contract);
        } else if (provider) {
            // Read-only mode
            const _contract = getContract(provider);
            setContract(_contract);
        }
    }, [signer, provider]);

    const publishCampaign = async (form) => {
        if (!contract) return;
        setIsLoading(true);
        setError(null);
        try {
            await createCampaign(contract, { ...form, owner: address });
            setIsLoading(false);
        } catch (err) {
            console.error(err);
            setError("Failed to create campaign.");
            setIsLoading(false);
            throw err;
        }
    };

    const fetchCampaigns = useCallback(async () => {
        if (!contract) return;
        setIsLoading(true);
        try {
            const data = await getCampaigns(contract);
            setCampaigns(data);
        } catch (err) {
            console.error(err);
            setError("Failed to fetch campaigns.");
        } finally {
            setIsLoading(false);
        }
    }, [contract]);

    const donateToCampaign = async (pId, amount) => {
        if (!contract) return;
        setIsLoading(true);
        try {
            await donate(contract, pId, amount);
        } catch (err) {
            console.error(err);
            setError("Failed to donate.");
            throw err;
        } finally {
            setIsLoading(false);
        }
    };

    return {
        campaigns,
        createCampaign: publishCampaign,
        donate: donateToCampaign,
        getCampaigns: fetchCampaigns,
        isLoading,
        error,
        contract
    };
};

export default useCrowdfunding;
