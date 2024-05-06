
require ('@nomiclabs/hardhat-waffle');


module.exports = {
  solidity: "0.8.10",

  defaultNetwork: "Testnet",
  networks:{
    hardhat:{},
    Testnet: {
      chainId: 1029,
      url: "https://pre-rpc.bt.io",
      accounts: ["5753e65f56865a161fbf41932a0d855139a4ce9dc20d82fb655bff393fc41702"],
    }
  }
  
};


// THis  dapp is deployed on the bttc testnet: 0x2C8e10de89319BEdD4535fe668B659e6e1dF5593
