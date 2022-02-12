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
      url: `https://polygon-mumbai.g.alchemy.com/v2/${projectIDMumbai}`,
      accounts: [privateKey],
    },
    mainnet: {
      url: `https://mainnet.infura.io/v3/${projectId}`,
      accounts: [privateKey],
    },
  },
  solidity: "0.8.4",
};
