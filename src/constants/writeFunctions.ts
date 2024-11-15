

import getContract from "../../Utilities/getContract";

import { toast } from "react-hot-toast";

export const successNotification = (msg: string) => toast.success(msg , {duration: 3000});


export const errorNotification = (msg: string) => toast.error(msg , {duration: 3000});



export const uploadDataToSmartContract = async(address: `0x${string}` , value: BigInt , ipfsHash: string , activityType: string) => {


    try {

        const contract = await getContract();

        // const estimatedGas = await contract?.estimateGas.submitTransaction(address , value , ipfsHash , activityType);

        // const transaction = await contract?.submitTransaction(address , value , ipfsHash , activityType);

        const transaction = await contract?.submitTransaction(address , value , ipfsHash , activityType , {

            gasLimit: "1000000",

        });

        if(transaction){

            console.log("transaction submitted: ", transaction);

            successNotification("Transaction has been submitted successfully");

            return transaction.hash

        }else{

            errorNotification("Failed to submit the transaction,Try Again");

        }
        
    } catch (error) {

        console.log(error);
        
    }

}

