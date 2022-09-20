# Simple Blockchain Post Web Application

**NOTE:**

_I AM NOT AFFILIATED TO ANY OF THE LINKS PROVIDED BELOW. ALL LINKS ARE FOR EDUCATIONAL AND DEVELOPMENT PURPOSES_

### Table of Contents

-   [Description](#description)
    -   [About](#about)
    -   [Technologies Used](#technologies-used)
-   [Launching the application](#launching-the-application)
-   [Live Version of the application](#live-version-of-the-application)

## Description 📖

### About

This is a simple Blockchain based application with a smart contract deployed on the Ethereum **Goerli** Test Network. The smart contract allows users to post any message with their name on the **Goerli** network and also retrieve all posts.

**NOTE**: _Only posts of a particular (your) address can be retrieved_

### Technologies Used ⚙👩‍💻

#### Blockchain and Backend

-   [_Remix_](http://remix.ethereum.org/)

This was used to write and deploy the smart contract.

-   _Metamask_

A Signer and Provider platform (software wallet) for reading and writing data to any selected Blockchain network.

#### Frontend

-   _Ethers_ node package

An open source library similar to **web3.js** that allows developers to interact with the Ethereum blockchain.

-   _React_ node package

An open source frontend JavaScript library for building user interfaces based on UI components.

#### All Dev dependencies listed in the package.json file

```json
"devDependencies": {
        "@babel/core": "^7.19.1",
        "@babel/preset-env": "^7.19.1",
        "@babel/preset-react": "^7.18.6",
        "babel-loader": "^8.2.5",
        "html-webpack-plugin": "^5.5.0",
        "webpack": "^5.74.0",
        "webpack-cli": "^4.10.0",
        "webpack-dev-server": "^4.11.0"
    },
```

The above are used as a simpler alias to the CRA command.

## Launching the application 💻

#### Installing Metamask

Follow the instruction on this [article](https://www.geeksforgeeks.org/how-to-install-and-use-metamask-on-google-chrome/#:~:text=Step%201%3A%20Go%20to%20Chrome,the%20Add%20to%20Chrome%20button.) to install metamask

After installing, switch metamask network from Ethereum mainnet to the Goerli network and use [Goerli faucet page](https://goerlifaucet.com/) to get some _fake Eth_

#### Cloning the project

-   On your terminal run the command `git clone https://github.com/E-Zbox/simple_blockchain_post_application`
-   `cd` into the newly cloned project

#### Installing application dependencies

-   **Installing Node**
    In case you don't have NodeJS or npm installed, go to [NodeJS website](https://nodejs.org/en/download/) and install the correct version for your machine.

Check your node version and make sure it is compatible

```shell
node --version
v14.17.6
```

```shell
npm --version
6.14.15
```

-   **Installing Project Node dependencies**

While in the project directory on your terminal, run `npm install` to install all the project dependencies

-   **Running the application**

`npm serve` on your terminal to spin up a local webpack server for the application

Navigate to `localhost:[PORT]` on your browser to see your local version of the application.

**Congratulations** 🎉🎆you just finished installing and running the application.

Connect your metamask address to the Goerli network and use your address with the fake Goerli Ether to interact with the application

## Live Version of the Application 🌐

**coming soon**
