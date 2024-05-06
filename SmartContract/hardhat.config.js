
require ('@nomiclabs/hardhat-waffle');


module.exports = {
  solidity: "0.8.10",

  defaultNetwork: "Testnet",
  // networks:{
  //   hardhat:{},
  //   Testnet: {
  //     chainId: 842,
  //     url: "https://rpc.testnet.taraxa.io",
  //     accounts: ["5753e65f56865a161fbf41932a0d855139a4ce9dc20d82fb655bff393fc41702"],
  //   }
  // }
  networks:{
    hardhat:{},
    Testnet:{
      chainId:1029,
      url:"https://pre-rpc.bt.io",
    }
  }
};


// THis  dapp is deployed on the bttc testnet: 0x14f96E014fdb4f0d7F38474f992FB76e759450c1
