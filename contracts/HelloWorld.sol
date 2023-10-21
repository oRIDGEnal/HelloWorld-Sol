// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.19;

contract HelloWorld {
    string public greeting;

    function printHello(string memory greet) public {
        greeting = greet;
    }
}
