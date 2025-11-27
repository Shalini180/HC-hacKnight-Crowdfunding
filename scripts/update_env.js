const fs = require('fs');
const path = require('path');

const walletInfo = fs.readFileSync('wallet_info.txt', 'utf8');
const pkMatch = walletInfo.match(/NEW_PRIVATE_KEY=(.+)/);
const addrMatch = walletInfo.match(/NEW_ADDRESS=(.+)/);

if (pkMatch && addrMatch) {
    const pk = pkMatch[1].trim();
    const addr = addrMatch[1].trim();

    const envContent = `SEPOLIA_RPC_URL=https://eth-sepolia.g.alchemy.com/v2/GexWZZn4Jh8c6yy_glodn\nPRIVATE_KEY=${pk}`;
    fs.writeFileSync('.env', envContent);

    console.log("UPDATED_ENV_WITH_ADDRESS=" + addr);
} else {
    console.error("Could not parse wallet info");
    process.exit(1);
}
