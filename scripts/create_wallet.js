const { ethers } = require("ethers");

async function main() {
    const wallet = ethers.Wallet.createRandom();
    console.log("NEW_ADDRESS=" + wallet.address);
    console.log("NEW_PRIVATE_KEY=" + wallet.privateKey);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
