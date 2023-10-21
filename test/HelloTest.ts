import { ethers } from "hardhat";
import { expect } from "chai";
import { Contract } from "ethers";

describe("HelloWorld", () => {
    let HelloWorldContract: Contract;

    beforeEach(async () => {
        // Get contract factory and Signers
        const HelloWorld = await ethers.getContractFactory("HelloWorld");
        const [owner] = await ethers.getSigners();

        // Deploy the contract and wait for it to be mined
        HelloWorldContract = await HelloWorld.deploy();
        await HelloWorldContract.deployed();
    }); 
    
    it ("Should update the greeting", async () => {
        const newGreeting = "Hello, Hardhat!";
        await HelloWorldContract.printHello(newGreeting);

        // Access the public variable using a call
        const storedGreeting = await HelloWorldContract.greeting();
        expect(storedGreeting).to.equal(newGreeting);
    });
});