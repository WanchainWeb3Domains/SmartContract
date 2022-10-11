require('hardhat-deploy');
require('hardhat-deploy-ethers');
require("hardhat-change-network");
require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: {
    version: "0.8.12",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  defaultNetwork: "Shibuya",
  namedAccounts: {
    deployer: 0
  },
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/u1hnSaxE-vlf3B8yEX_NvZ1o_GzcZAdL',
      accounts: ['']
    },
	Wanchain: {
      url: 'https://gwan-ssl.wandevs.org:56891',
      accounts: [''],
	  chainId: 888
   }
  },
  etherscan: {
	  apiKey: {
		  ropsten: "",
	  }
  }
};
