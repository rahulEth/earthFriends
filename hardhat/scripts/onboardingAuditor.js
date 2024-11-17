require('dotenv').config()
const { ethers } = require('ethers');
// const  {abi} = require('../artifacts/contracts/EarthAuditor.sol/EarthAuditor.json');
const  {abi} = require('../artifacts/contracts/EarthFriends.sol/EarthFriends.json');
const provider = new ethers.JsonRpcProvider(process.env.TAIKO_HELKA_TESTNET);

// Use a private key to sign transactions (optional, if interacting with state-changing methods)
const privateKey = process.env.META_MASK_PRIVATE_KEY;  // Don't expose this in production!
const wallet = new ethers.Wallet(privateKey, provider);

console.log("rpviate---- ", privateKey)
// Contract address and ABI (replace with actual values)
const contractAddress = process.env.AUDITOR_CONTRACT;


const contractToken = process.env.TOKEN_CONTRACT;

// Create the contract instance
// const contract = new ethers.Contract(contractAddress, abi, wallet);

const contract_token = new ethers.Contract(contractToken, abi, wallet);



const onboardAuditor = (auiditor)=>{
    return new Promise(async (resolve, reject)=>{
      try{
          const tx = await contract.onboardAuditor(auiditor);
          await tx.wait();  // Wait for the transaction to be mined
          console.log(`onboardAuditor ${auiditor}. Tx Hash: ${tx.hash}`);
          return resolve(tx.hash);
  
      }catch(err){
        console.log("error while sending the transaction-------", err)
        return reject(err);
      }
    }) 
  
}

//Aman
// onboardAuditor("0xc24854850037e54C4e7F989BeBe0D8c2896B25C3")
// Yash
//onboardAuditor("0x61A08abc9987B71c05d887F8bC6d7235C52Ee7ba")
// rahul
// onboardAuditor("0x290ABcfdbB5046EDeDC589eFef2BB2EfAfc6b6ca")


const assignAuditor = (audiContractAddr)=>{
  return new Promise(async (resolve, reject)=>{
    try{
        const tx = await contract_token.assignAuditor(audiContractAddr);
        await tx.wait();  // Wait for the transaction to be mined
        console.log(`assignAuditor  Tx Hash: ${tx.hash}`);
        return resolve(tx.hash);

    }catch(err){
      console.log("error while sending the transaction-------", err)
      return reject(err);
    }
  }) 

}

// assignAuditor("0xb24b69f1890CD81F0f7A0D0af04Ea4B9cCCf9e8e")  //auditor smart contract address
