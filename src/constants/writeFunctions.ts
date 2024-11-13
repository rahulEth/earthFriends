import {ethers} from "ethers";

import getContract from "../../Utilities/getContract";

import { toast } from "react-hot-toast";

export const successNotification = (msg: string) => toast.success(msg , {duration: 3000});

export const errorNotification = (msg: string) => toast.error(msg , {duration: 3000});


export const uploadDataToSmartContract = async(address: string , value: number , ipfsHash: string , activityType: string) => {

    try {

        const contract = await getContract();

        const transaction = await contract?.submitTransaction(address , value , ipfsHash , activityType);

        if(transaction){

            console.log(transaction);

            successNotification("Transaction has been submitted successfully");

        }else{

            errorNotification("Failed to submit the transaction,Try Again");

        }
        
    } catch (error) {

        console.log(error);
        
    }

}

