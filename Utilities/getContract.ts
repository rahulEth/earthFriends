import {ethers} from "ethers";

import { CONTRACT_ADDRESS , ABI } from "@/constants/constants";

const getContract = async() => {

    console.log("Inside the contract function")

    try {

        const provider = new ethers.BrowserProvider(window.ethereum);

        const signer = await provider?.getSigner();

        const contract = new ethers.Contract(CONTRACT_ADDRESS , ABI , signer);

        console.log(contract);

        return contract;
        
        
    } catch (error) {

        console.log(error);
        
    }

}

export default getContract;