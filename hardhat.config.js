require("@nomiclabs/hardhat-waffle");
const fs = require("fs");
const projectId = fs.readFileSync(".mainNet").toString();
const projectIDMumbai = fs.readFileSync(".polygonMumbai").toString();
const privateKey = fs.readFileSync(".secret").toString();

module.exports = {
  networks: {
    hardhat: {
      chainID: 1337,
    },
    mumbai: {
      url: `https://polygon-mumbai.g.alchemy.com/v2/xpeYvimlq5xX4GAGJ5RyBqfMOYU4-b-z`,
      accounts: [privateKey],
    },
    mainnet: {
      url: `https://rpc-mainnet.matic.network`,
      accounts: [privateKey],
    },
  },
  solidity: "0.8.4",
};
