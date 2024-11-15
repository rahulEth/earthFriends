import getContract from "../../Utilities/getContract";

import { toast } from "react-hot-toast";

export const successNotification = (msg: string) => toast.success(msg , {duration: 3000});


export const errorNotification = (msg: string) => toast.error(msg , {duration: 3000});



export const uploadDataToSmartContract = async(address: `0x${string}` , value: number , ipfsHash: string , activityType: string) => {


    try {
        
        const contract = await getContract();

        const estimatedGas = await contract?.submitTransaction.estimateGas(address , value , ipfsHash , activityType);


        console.log("The estimated gas is" , estimatedGas?.toString());

        const transaction = await contract?.submitTransaction(address , value , ipfsHash , activityType , {

            gasLimit: estimatedGas?.toString(),

        });

        console.log("The transaction hash is" , transaction?.hash);

        return transaction?.hash;



    } catch (error) {

        console.log(error);
        
    }

   

}
