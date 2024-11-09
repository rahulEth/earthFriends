// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

import "@openzeppelin/contracts/access/Ownable.sol";

interface IERC20{
    function mint(address to, uint256 amount) external;
    function assignAuditor(address auditor) external;
    function remokeAuditor(address auditor) external;
}

contract EarthAuditor is Ownable{
    // bytes32 public constant ADMIN_ROLE = keccak256("DEFAULT_ADMIN_ROLE"); // Default admin role
    // bytes32 public constant AUDITOR_ROLE = keccak256("AUDITOR_ROLE");
    event Deposit(address indexed sender, uint256 amount, uint256 balance);
    event SubmitTransaction(
        address indexed owner,
        uint256 indexed txIndex,
        address indexed to,
        uint256 value,
        string proofId,
        string activityType
    );
    event ConfirmTransaction(address indexed owner, uint256 indexed txIndex);
    event RevokeConfirmation(address indexed owner, uint256 indexed txIndex);
    event ExecuteTransaction(address indexed owner, uint256 indexed txIndex);

    mapping(address => bool) public users;
    uint256 public usersCount;
    IERC20 EFRND_ADDRESS;
    uint256 public approvedTx;
    // mapping(address => bool) public isOwner;
    uint256 public numConfirmationsRequired;
    mapping(address => bool) public auditors;

    struct Transaction {
        address to;
        uint256 value;
        string proofId;
        string activity;
        bool executed;
        uint256 numConfirmations;
    }
    
    
    // mapping from tx index => owner => bool
    mapping(uint256 => mapping(address => bool)) public isConfirmed;

    Transaction[] public transactions;

    // modifier onlyOwner() {
    //     require(isOwner[msg.sender], "not owner");
    //     _;
    // }

    modifier txExists(uint256 _txIndex) {
        require(_txIndex < transactions.length, "tx does not exist");
        _;
    }

    modifier notExecuted(uint256 _txIndex) {
        require(!transactions[_txIndex].executed, "tx already executed");
        _;
    }

    modifier notConfirmed(uint256 _txIndex) {
        require(!isConfirmed[_txIndex][msg.sender], "tx already confirmed");
        _;
    }
    modifier onlyAuditor(){
        require(auditors[msg.sender], "only auditor is allowed");
        _;
    }

    constructor(address _auditor, address _token, uint256 _numConfirmationsRequired) Ownable(msg.sender){
        require(
            _numConfirmationsRequired > 0,
            "invalid number of required confirmations"
        );
        // _grantRole(DEFAULT_ADMIN_ROLE, msg.sender); // Initializing admin role
        numConfirmationsRequired = _numConfirmationsRequired;
        EFRND_ADDRESS = IERC20(_token);
        auditors[_auditor] = true;
    }

    receive() external payable {
        emit Deposit(msg.sender, msg.value, address(this).balance);
    }

    function onboardAuditor(address _auditor) public onlyOwner{
        auditors[_auditor] = true;
        // grantRole(AUDITOR_ROLE, _auditor);

        // EFRND_ADDRESS.addAuditor(_auditor);
        
    } 

        // Function to remove an auditor
    function removeAuditor(address auditor) public onlyOwner {
        // revokeRole(AUDITOR_ROLE, auditor);
        auditors[msg.sender] = false;
        EFRND_ADDRESS.remokeAuditor(auditor);
    }

    function submitTransaction(address _to, uint256 _value, string memory proofId, string memory activityType)
        public
        
    {
        uint256 txIndex = transactions.length;

        transactions.push(
            Transaction({
                to: _to,
                value: _value,
                proofId: proofId,
                activity: activityType,
                executed: false,
                numConfirmations: 0
            })
        );
        if(!users[msg.sender]){
           usersCount++;
        }

        emit SubmitTransaction(msg.sender, txIndex, _to, _value, proofId, activityType);
    }

    // function confirmTransaction(uint256 _txIndex)
    //     public
    //     onlyOwner
    //     txExists(_txIndex)
    //     notExecuted(_txIndex)
    //     notConfirmed(_txIndex)
    // {
    //     Transaction memory transaction = transactions[_txIndex];
    //     transaction.numConfirmations += 1;
    //     isConfirmed[_txIndex][msg.sender] = true;

    //     emit ConfirmTransaction(msg.sender, _txIndex);
    // }

    function executeTransaction(uint256 _txIndex)
        public
        onlyAuditor
        txExists(_txIndex)
        notExecuted(_txIndex)
    {
        Transaction memory transaction = transactions[_txIndex];

        // require(
        //     transaction.numConfirmations >= numConfirmationsRequired,
        //     "cannot execute tx"
        // );


        // (bool success,) = EFRND_ADDRESS.delegatecall(abi.encodeWithSignature("transfer(uint256)", transaction.value));
        EFRND_ADDRESS.mint(transaction.to, transaction.value);
        transaction.executed = true;
        approvedTx +=1; 
        emit ExecuteTransaction(msg.sender, _txIndex);
    }

    // function revokeConfirmation(uint256 _txIndex)
    //     public
    //     onlyOwner
    //     txExists(_txIndex)
    //     notExecuted(_txIndex)
    // {
    //     Transaction storage transaction = transactions[_txIndex];

    //     require(isConfirmed[_txIndex][msg.sender], "tx not confirmed");

    //     transaction.numConfirmations -= 1;
    //     isConfirmed[_txIndex][msg.sender] = false;

    //     emit RevokeConfirmation(msg.sender, _txIndex);
    // }

    // function getOwners() public view returns (address[] memory) {
    //     return owners;
    // }

    function getTransactionCount() public view returns (uint256) {
        return transactions.length;
    }

    function getTransaction(uint256 _txIndex)
        public
        view
        returns (
            address to,
            uint256 value,
            string memory activity,
            bool executed,
            uint256 numConfirmations)
    {
        Transaction memory transaction = transactions[_txIndex];

        return (
            transaction.to,
            transaction.value,
            transaction.activity,
            transaction.executed,
            transaction.numConfirmations
        );
    }
}