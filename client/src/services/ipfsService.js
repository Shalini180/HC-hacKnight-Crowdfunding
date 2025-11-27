import axios from 'axios';

const PINATA_JWT = "YOUR_PINATA_JWT_HERE"; // Replace with env variable

export const uploadMetadata = async (file) => {
    if (!file) return;

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
