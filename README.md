# Wanchain Web3 Domains Smart Contracts

Please run the following steps:

A. Install hardhat
Follow: https://hardhat.org/getting-started/

Hardhat is used through a local installation in your project. This way your environment will be reproducible, and you will avoid future version conflicts.

To install it, you need to create an npm project by going to an empty folder, running npm init, and following its instructions. Once your project is ready, you should run

```
$ npm install --save-dev hardhat
```

To use your local installation of Hardhat, you need to use npx to run it (i.e. npx hardhat).

Hardhat will let you know how, but, in case you missed it, you can install them with npm install --save-dev @nomiclabs/hardhat-waffle ethereum-waffle chai @nomiclabs/hardhat-ethers ethers

B. Compiling your contracts

Next, if you take a look at contracts/, you should be able to find Web3Domains_V2.sol:

To compile it, simply run:

```
npx hardhat compile
```

C. Deploying your contracts:

Next, to deploy the contract we will use a Hardhat script. Inside scripts/ you will find Web3DomainsV2.js

Run it with npx hardhat run scripts/Web3DomainsV2.js

```
$ npx hardhat run scripts/Web3DomainsV2.js
```

Contract deployed to: xxx

Well done!!

