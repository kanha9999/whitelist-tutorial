import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
// import "@nomicfoundation/hardhat-etherscan";
// import * as dotenv from 'dotenv';


const config: HardhatUserConfig = {
  solidity: "0.8.17",
};

export default config;

require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({ path: ".env" });

const QUICKNODE_HTTP_URL = process.env.QUICKNODE_HTTP_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const ETHERS_API_KEY=process.env.KEY;


module.exports = {
  solidity: "0.8.9",
  // defaultNetwork:"goerli", 
  networks: {
    // hardhat:{},
    goerli: {
      url: QUICKNODE_HTTP_URL,
      accounts: [PRIVATE_KEY],
    },
  },
  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    apiKey: ETHERS_API_KEY
  }

};
