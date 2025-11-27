const hre = require("hardhat");

async function main() {
    const Fundraiser = await hre.ethers.getContractFactory("fundraiser");
    const fundraiser = await Fundraiser.deploy();

    await fundraiser.deployed();

    console.log("Fundraiser deployed to:", fundraiser.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
