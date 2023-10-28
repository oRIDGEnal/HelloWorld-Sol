// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.19;

contract HelloWorld {
    string public greeting;

    function setHello(string memory greet) public {
        greeting = greet;
    }

    function getGreeting() public view returns (string memory) {
        return greeting;
    }
}
