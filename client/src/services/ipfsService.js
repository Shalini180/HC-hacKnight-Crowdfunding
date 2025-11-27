import axios from 'axios';

const PINATA_JWT = import.meta.env.VITE_PINATA_JWT;

export const uploadMetadata = async (file) => {
    if (!file) return;

    if (!PINATA_JWT) {
        throw new Error("Missing VITE_PINATA_JWT in .env file");
    }

    try {
        const formData = new FormData();
        formData.append("file", file);

        const res = await axios.post("https://api.pinata.cloud/pinning/pinFileToIPFS", formData, {
            headers: {
                'Authorization': `Bearer ${PINATA_JWT}`,
                'Content-Type': 'multipart/form-data',
            },
        });

        const ipfsHash = res.data.IpfsHash;
        return `https://gateway.pinata.cloud/ipfs/${ipfsHash}`;
    } catch (error) {
        console.error("Error uploading to IPFS:", error);
        throw new Error("IPFS Upload Failed");
    }
};
