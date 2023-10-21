const { ethers } = require('hardhat');

async function main() {
  // Fetching of the ContractFactory
  const HelloWorld = await ethers.getContractFactory("HelloWorld");
  
  // Return promise that resolves to the contract object
  const helloWorld = await HelloWorld.deploy();

  // Awaiting minting
  await helloWorld.deployed();

  // Return contract address
  console.log('Contract deployed to address: ' + helloWorld.address);

  // Returning the transaction hash
  console.log('Transaction: ' + helloWorld.deployTransaction.hash);
}

main()
  .then(() => {
    process.exit(0);
  })
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
