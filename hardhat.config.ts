import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@typechain/hardhat";
import "@nomiclabs/hardhat-ethers";  // Use "import" instead of "require" for consistency

// Dotenv config
import dotenv from "dotenv";  // Using "import" instead of "require"
dotenv.config();

const config: HardhatUserConfig = {
  networks: {
    mumbai: {
      url: process.env.INFURA_RPC_URL as string,
      accounts: [process.env.ACCOUNT_PRIVATE_KEY as string],
    },
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY
  },
  solidity: "0.8.19",
};

export default config;
