import { errorNotification } from "@/constants/writeFunctions";
import axios from "axios";



export const uploadFileToIpfs = async(files: File[]) => {

    const pinataApiKey: string =  "777625b270a9ebc7e03c"
    const pinataSecretApiKey: string =  "5ff40a6c3ee443748143eb4c0be12368c1342c675663e8648006ab88081c9c22"

    try {

        const headers = {

            'pinata_api_key': pinataApiKey,
            'pinata_secret_api_key': pinataSecretApiKey,

        }
        
        const response = await axios.post("https://api.pinata.cloud/pinning/pinFileToIPFS" , files , {headers});

        console.log(response.data);

        if(response.status === 200){

            return response.data;

        }else{

            errorNotification("Some Error Occured In Uploading File")

        }

    } catch (error) {

        console.log(error);
        
    }

}