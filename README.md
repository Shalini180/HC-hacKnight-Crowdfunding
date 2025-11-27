<div align="center">
  <img src="./screenshots/dashboard.png" alt="CrowdCoin Dashboard" width="100%" />

  # CrowdCoin
  ### The Future of Decentralized Funding

  [![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
  [![Vite](https://img.shields.io/badge/Vite-5.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
  [![Solidity](https://img.shields.io/badge/Solidity-0.8-363636?style=for-the-badge&logo=solidity&logoColor=white)](https://soliditylang.org/)
  [![Sepolia](https://img.shields.io/badge/Network-Sepolia-blue?style=for-the-badge&logo=ethereum&logoColor=white)](https://sepolia.etherscan.io/)
  [![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](./LICENSE)
  [![Status](https://img.shields.io/badge/Status-Live-success?style=for-the-badge)]()

  <p align="center">
    <a href="https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FShalini180%2FHC-hacKnight-Crowdfunding">
      <img src="https://vercel.com/button" alt="Deploy with Vercel" />
    </a>
  </p>
</div>

---

## 🌌 Feature Spotlights

### Galactic Authentication
Experience a seamless entry into the Web3 universe. Our deep-space glassmorphism login integrates directly with MetaMask, providing secure and stylish access.
![Login](./screenshots/login.png)

### 🚀 Seamless Minting
Launch your vision in seconds. The campaign creation wizard features a drag-and-drop IPFS upload zone with real-time preview and instant smart contract minting.
![Create](./screenshots/create.png)

### 🛍️ Immersive Discovery
Explore the ecosystem through a masonry-style feed. Each campaign card is a portal to innovation, featuring glowing hover effects and live progress tracking.
![Feed](./screenshots/feed.png)

### 💸 Sticky Funding Dock
A high-conversion checkout experience. The sticky funding dock ensures backers can support projects instantly without losing context of the campaign story.
![Donate](./screenshots/donate.png)

---

## 🛠️ Tech Stack

| Frontend | Backend | Infrastructure |
| :--- | :--- | :--- |
| **React 18** | **Solidity** | **IPFS (Pinata)** |
| **Vite** | **Hardhat** | **Sepolia Testnet** |
| **Tailwind CSS** | **Ethers.js** | **Alchemy RPC** |
| **Framer Motion** | **OpenZeppelin** | **Vercel** |

---

## 🚀 Zero-Friction Setup

### 1. Clone the Repository
```bash
git clone https://github.com/Shalini180/HC-hacKnight-Crowdfunding.git
cd HC-hacKnight-Crowdfunding
```

### 2. Configure Secrets
Create a `.env` file in the `client/` directory based on the structure below:

```env
# Client Secrets (client/.env)
VITE_PINATA_JWT=your_pinata_jwt_token_here
VITE_CONTRACT_ADDRESS=0xYourDeployedContractAddress
```

For backend deployment, create a `.env` in the root:
```env
# Root Secrets (.env)
SEPOLIA_RPC_URL=https://eth-sepolia.g.alchemy.com/v2/your-api-key
PRIVATE_KEY=your_wallet_private_key
```

### 3. Launch Locally
Start the development server and blast off! 🚀

```bash
cd client
npm install
npm run dev
```

### 4. Deploy Smart Contracts
If you want to deploy your own instance of the contract:

```bash
npm install
npx hardhat run scripts/deploy.js --network sepolia
```

---

<div align="center">
  <p>Built with ❤️ for the <strong>HackNight</strong> Hackathon.</p>
  <p><i>Design inspired by the cosmos. Logic powered by Ethereum.</i></p>
</div>
