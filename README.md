# CrowdCoin: Decentralized Crowdfunding Platform

![License](https://img.shields.io/badge/License-MIT-green.svg)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=flat&logo=react&logoColor=%2361DAFB)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=flat&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=flat&logo=tailwind-css&logoColor=white)
![Solidity](https://img.shields.io/badge/Solidity-%23363636.svg?style=flat&logo=solidity&logoColor=white)
![Hardhat](https://img.shields.io/badge/Hardhat-yellow.svg)

> **A high-fidelity, dark-mode Web3 platform for fundraising on the Ethereum Sepolia network.**

CrowdCoin redefines decentralized funding with a premium, immersive user experience. Built for the modern web, it combines the security of Ethereum smart contracts with a sophisticated interface design.

![Dashboard Screenshot](./screenshots/dashboard.png)

## Key Features

### Portal Authentication
Deep-space glassmorphism login experience. Seamlessly connects with MetaMask, displaying user avatars and truncated addresses with a premium glow effect.

### Campaign Minting
Intuitive creation wizard. Drag-and-drop your campaign visuals to IPFS (via Pinata) and mint your fundraising smart contract with real-time feedback and loading states.

### Mission Control
A "Command Center" dashboard giving you a bird's-eye view of your activities. Features sparkline charts, animated statistics for Total Raised, and active campaign tracking.

### Immersive Feed
Discover the next big thing in a masonry-style feed. Campaign cards feature hover-reveal effects, progress bars, and interactive elements that enhance browsing.

### Sticky Donation
High-conversion checkout flow. The "Funding Dock" stays with you as you read the campaign story, offering a bank-terminal style input and real-time progress updates.

## Tech Stack

**Frontend**
*   **Framework**: React 18 + Vite
*   **Styling**: Tailwind CSS + Glassmorphism Utilities
*   **Animation**: Framer Motion
*   **Icons**: Lucide React

**Backend & Web3**
*   **Smart Contracts**: Solidity (Ethereum)
*   **Deployment**: Hardhat
*   **Storage**: IPFS (Pinata)
*   **Network**: Sepolia Testnet

## Installation & Setup

Follow these steps to launch CrowdCoin on your local machine.

### 1. Clone the Repository
```bash
git clone https://github.com/Shalini180/HC-hacKnight-Crowdfunding.git
cd HC-hacKnight-Crowdfunding
```

### 2. Install Dependencies
Install dependencies for both the root (Hardhat) and the client (React).

```bash
# Root dependencies
npm install

# Client dependencies
cd client
npm install
cd ..
```

### 3. Environment Secrets
You need to configure secrets for both the backend deployment and the frontend client.

**Root `.env` (For Hardhat Deployment)**
Create a `.env` file in the root directory:
```env
SEPOLIA_RPC_URL=https://eth-sepolia.g.alchemy.com/v2/YOUR_ALCHEMY_KEY
PRIVATE_KEY=YOUR_WALLET_PRIVATE_KEY
```

**Client `client/.env` (For Frontend)**
Create a `.env` file in the `client/` directory:
```env
VITE_PINATA_JWT=YOUR_PINATA_JWT_TOKEN
VITE_CONTRACT_ADDRESS=0x... (Will be updated after deployment)
```

### 4. Deploy Smart Contract
Deploy the `CrowdCoin` contract to the Sepolia testnet.

```bash
npx hardhat run scripts/deploy.js --network sepolia
```
*Copy the deployed contract address from the terminal output and update `VITE_CONTRACT_ADDRESS` in `client/.env`.*

### 5. Run Locally
Start the development server.

```bash
cd client
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) to view the app.

## Screenshots

| Dashboard | Campaign Feed |
|:---:|:---:|
| ![Dashboard](./screenshots/dashboard.png) | ![Feed](./screenshots/feed.png) |

| Creation Wizard | Donation Dock |
|:---:|:---:|
| ![Create](./screenshots/create.png) | ![Donate](./screenshots/donate.png) |

---

*Built for the Future of Decentralized Funding.*
