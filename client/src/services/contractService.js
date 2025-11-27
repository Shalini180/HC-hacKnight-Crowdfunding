import { ethers } from 'ethers';

const CONTRACT_ADDRESS = import.meta.env.VITE_CONTRACT_ADDRESS || "0xYourContractAddressHere";
const CONTRACT_ABI = [
    "function createCampaign(address _owner, string memory _title, string memory _description, uint256 _target, uint256 _deadline, string memory _image) public returns (uint256)",
    "function donateToCampaign(uint256 _id) public payable",
    "function getCampaigns() public view returns (tuple(address owner, string title, string description, uint256 target, uint256 deadline, uint256 amountCollected, string image, address[] donators, uint256[] donations)[])",
    "function numberOfCampaigns() public view returns (uint256)"
];

export const getContract = (signerOrProvider) => {
    return new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signerOrProvider);
};

export const createCampaign = async (contract, form) => {
    try {
        const data = await contract.createCampaign(
            form.owner, // owner
            form.title, // title
            form.description, // description
            ethers.parseUnits(form.target, 18), // target
            new Date(form.deadline).getTime(), // deadline
            form.image // image URL
        );
        await data.wait();
        console.log("Campaign created successfully");
        return data;
    } catch (error) {
        console.error("Error creating campaign:", error);
        throw error;
    }
};

export const getCampaigns = async (contract) => {
    try {
        const campaigns = await contract.getCampaigns();
        const parsedCampaigns = campaigns.map((campaign, i) => ({
            owner: campaign.owner,
            title: campaign.title,
            description: campaign.description,
            target: ethers.formatEther(campaign.target.toString()),
            deadline: campaign.deadline.toString(), // Check if this needs conversion
            amountCollected: ethers.formatEther(campaign.amountCollected.toString()),
            image: campaign.image,
            pId: i
        }));
        return parsedCampaigns;
    } catch (error) {
        console.error("Error fetching campaigns:", error);
        return [];
    }
};

export const donate = async (contract, pId, amount) => {
    try {
        const data = await contract.donateToCampaign(pId, { value: ethers.parseEther(amount) });
        await data.wait();
        return data;
    } catch (error) {
        console.error("Error donating:", error);
        throw error;
    }
};
