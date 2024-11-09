//SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";


contract EarthFriends is ERC20, ERC20Burnable, Ownable{
    // mapping(address => bool) public auditors;
    address public auditor;
    uint8 private DECIMALS;
    constructor() 
    Ownable(msg.sender) 
    ERC20("EarthFrineds", "EFRND")
    {
        // auditors[auditor]= true;
        DECIMALS = 8;
    }
    modifier onlyAuditor(){
        require(msg.sender == auditor, "only auditor can mint the token");
        _;
    }

    function decimals() public view virtual override returns (uint8) {
        return DECIMALS;
    }
    function assignAuditor(address _auditor) external onlyOwner{
        // require(!auditors[auditor], "auditor alreay exist!");
        auditor = _auditor;
    }

    // function remokeAuditor(address auditor) external  onlyOwner {
    //     auditors[auditor] = false;
    // }

    function mint(address _to, uint256 _value) external  onlyAuditor{
        _mint(_to, _value); 
    }   
}