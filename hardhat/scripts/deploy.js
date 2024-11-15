 // We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
  const currentTimestampInSeconds = Math.round(Date.now() / 1000);
  const unlockTime = currentTimestampInSeconds + 60;

  const lockedAmount = hre.ethers.parseEther("0.01");

  // const lock = await hre.ethers.deployContract("EarthFriends");
  
  // await lock.waitForDeployment();
  // const addr = await lock.getAddress()
  // console.log('contract address: ', addr)
  // console.log(
  //   `EarthFriends with ${ethers.formatEther(
  //     lockedAmount
  //   )}ETH and unlock timestamp ${unlockTime} deployed to ${lock.target}`
  // );
  
  // const lock = await hre.ethers.deployContract("EarthAuditor", ["0x290ABcfdbB5046EDeDC589eFef2BB2EfAfc6b6ca", "0xA338BB7Ded469dF044390403c1Bec3D699B546D4", 1]);
  // const addr = await lock.getAddress()
  // console.log('contract address: ', addr)
  // console.log(
  //   `EarthAuditor with ${ethers.formatEther(
  //     lockedAmount
  //   )}ETH and unlock timestamp ${unlockTime} deployed to ${lock.target}`
  // );

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error('-----------',error);
  process.exitCode = 1;
});


// const verifyContract = async ()=>{
//   console.log("Verifying EarthFriends...")
//   await hre.run("verify:verify", {
//     address: '0xb24b69f1890CD81F0f7A0D0af04Ea4B9cCCf9e8e',   //lock.address
//     constructorArguments: ["0x290ABcfdbB5046EDeDC589eFef2BB2EfAfc6b6ca", "0xA338BB7Ded469dF044390403c1Bec3D699B546D4", 1]
//   })
// }
// verifyContract()