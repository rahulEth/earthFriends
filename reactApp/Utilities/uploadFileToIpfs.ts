import { errorNotification } from "@/constants/writeFunctions";
import axios from "axios";

import {configDotenv} from "dotenv";

configDotenv();

export const uploadFileToIpfs = async(blob: Blob) => {

    const pinataApiKey: string = process.env.NEXT_PUBLIC_PINATA_API_KEY as string;
    const pinataSecretApiKey: string =  process.env.NEXT_PUBLIC_PINATA_SECRET_API_KEY as string;

    const formData = new FormData();

    formData.append('file' , blob , "uploaded-file.pdf");

    try {

        const headers = {

            'pinata_api_key': pinataApiKey,
            'pinata_secret_api_key': pinataSecretApiKey,
            "Content-Type": "multipart/form-data"

        }
        
        const response = await axios.post("https://api.pinata.cloud/pinning/pinFileToIPFS" , formData , {headers});

        console.log(response);

        if(response.status === 200){

            return response?.data?.IpfsHash;

        }else{

            errorNotification("Some Error Occured In Uploading File")

        }

    } catch (error) {

        console.log(error);
        
    }

}