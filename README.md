# Crowdfunding Project

This is a web3-based platform for collecting funds for education, health, or any animal-related causes. It is built using Next.js and Hardhat.
Site is live at 👉 [Crowdfunding](https://crowd-funding-sigma.vercel.app/)

## Table of Contents

- [Crowdfunding Project](#crowdfunding-project)
  - [Table of Contents](#table-of-contents)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
    - [Setting Environment Variables](#setting-environment-variables)
    - [Usage](#usage)

## Getting Started

### Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm installed
- MetaMask wallet with a funded account
- Infura API Key (for RPC and IPFS)

### Installation

To set up the project on your local system, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/mayankbohra/CrowdFunding.git
    ```

2. Change directory to the project folder:
   
   ```bash
   cd crowdfunding-project
    ```

3. Install dependencies:

    ```bash
    npm instal
    ```

### Setting Environment Variables
Create a `.env.local` file in the root of your project and add the following environment variables:
    
    NEXT_PUBLIC_RPC_URL = https://polygon-mumbai.infura.io/v3/YOUR_INFURA_API_KEY
    NEXT_PUBLIC_PRIVATE_KEY = YOUR_METAMASK_PRIVATE_KEY
    NEXT_PUBLIC_ADDRESS = YOUR_SMART_CONTRACT_ADDRESS
    NEXT_PUBLIC_IPFS_ID = YOUR_INFURA_IPFS_API_ID
    NEXT_PUBLIC_IPFS_KEY = YOUR_INFURA_IPFS_API_KEY
Make sure to replace the placeholders with your actual values.

### Usage
To start the development server, run the following command:

    npm run dev

Visit `http://localhost:3000` in your web browser to access the crowdfunding platform.
