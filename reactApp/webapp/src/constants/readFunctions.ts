import axios from "axios";

export const getTransactionsByUser = async(userAddress: `0x${string}`) => {

    try {
        
        let url: string = "http://localhost:3001//api/getTransactionsByUser";

        let params = { 

            userAddr: userAddress,

        }

        const resp = await axios.get(url , {params});
        
        console.log(resp.data);

        return resp.data;

    } catch (error) {

        console.log(error);        
    }

}

export const submitTransaction = async(userAddress: `0x${string}` , filename: string , ipfsHash: string, activityType: string , txId: string , tokenAmount: number , txIndexId: string) => {

    try {
        
        const url: string = "http://localhost:3001/api/submitTransaction";

        const data = {

            userAddr: userAddress,
            fileName: filename,
            ipfsPath: ipfsHash,
            activityType: activityType,
            txId: txId,
            tokenAmount: tokenAmount,
            txIndexId: txIndexId,

        }

        const resp = await axios.post(url , data);

        console.log(resp.data);

        return resp.data;

    } catch (error) {

        console.log(error);
        
    }

}

export const execTransaction = async(userAddress: `0x${string}`, txIndexId: string , txId: string , status: string) => {

    try {

        const url: string = "http://localhost:3001/api/execTransaction";

        const data = {

            userAddr: userAddress,
            txIndexId: txIndexId,
            txId: txId,
            status: status,

        }

        const resp = await axios.post(url , data);

        console.log(resp.data);

        return resp.data;



    } catch (error) {

        console.log(error);
        
    }

}
