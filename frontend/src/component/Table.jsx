import React, { useEffect, useState } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";
import { Worker, Viewer } from "@react-pdf-viewer/core"; // Import PDF Viewer components
import "@react-pdf-viewer/core/lib/styles/index.css"; // PDF Viewer styles
import pf from "./Aman.pdf"; // Sample PDF file
import axios from "axios";
import getContract from "../utils/getContract";

// Sample data with PDF file paths

// Columns for DataGrid

// export const uploadDataToSmartContract = async(address: `0x${string}` , value: BigInt , ipfsHash: string , activityType: string) => {

//     try {

//         const contract = await getContract();

//         console.log("The generated contract is " , contract);

//         // const estimatedGas = await contract?.estimateGas.submitTransaction(address , value , ipfsHash , activityType);

//         // const transaction = await contract?.submitTransaction(address , value , ipfsHash , activityType);

//         const transaction = await contract?.submitTransaction(address , value , ipfsHash , activityType , {

//             gasLimit: "1000000",

//         });

//         if(transaction){

//             console.log(transaction);

//             successNotification("Transaction has been submitted successfully");

//             return transaction.hash

//         }else{

//             errorNotification("Failed to submit the transaction,Try Again");

//         }

//     } catch (error) {

//         console.log(error);

//     }

// }
// Main App Component
const DataTableWithModals = () => {
  const [pdfOpen, setPdfOpen] = useState(false);
  const [txOpen, setTxOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  // Open PDF modal
  const handleProfileClick = (user) => {
    setSelectedUser(user);
    setPdfOpen(true);
  };

  // Open Transaction modal
  const handleTxClick = (user) => {
    setSelectedUser(user);
    setTxOpen(true);
  };

  const uploadDataToSmartContract = async (IndId) => {
    try {
      const contract = await getContract();

      const estimatedGas = await contract?.executeTransaction.estimateGas(
        IndId
      );

      console.log("The estimated gas is", estimatedGas?.toString());

      const transaction = await contract?.executeTransaction(IndId, {
        gasLimit: estimatedGas?.toString(),
      });

      console.log("The transaction hash is", transaction?.hash);

      return transaction?.hash;
    } catch (error) {
      console.log(error);
    }
  };

  // Handle accept/reject actions with mock backend call
  const handleTxActionAccept = async () => {
    try {
      const formdata = new FormData();
      formdata.append("fhlas", selectedUser.txIndexId);
      // Simulate a backend call
      const transactionHash = await uploadDataToSmartContract(
        selectedUser.txIndexId
      );

      // console.log(`Action sent for ${selectedUser?.userAddr}`);
      // alert(`action sent for ${selectedUser?.userAddr}`);
      const res = await axios.post(
        "http://localhost:3001/api/execTransaction",
        {
          userAddr: selectedUser.userAddr,
          txIndexId: selectedUser.txIndexId,
          txId: `https://hekla.taikoexplorer.com/token/${transactionHash}`,
          status: "success",
        }
      );
      console.log("accept button", res.data);
    } catch (error) {
      console.error("Request failed", error);
    }
    setTxOpen(false);
  };
  const handleTxActionReject = async () => {
    try {
      // Simulate a backend call
      console.log(`Action sent for ${selectedUser?.userAddr}`);
      alert(`action sent for ${selectedUser?.userAddr}`);
    } catch (error) {
      console.error("Request failed", error);
    }
    setTxOpen(false);
  };

  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data from API
    const fetchTransactions = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3001/api/getAllTransaction"
        );
        setTransactions(response.data); // Assuming the response is an array of transactions
        console.log(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchTransactions();
  }, []);
  return (
    <div
      style={{
        padding: "2rem",
        // backgroundColor: "#a5d6a7",
        // minHeight: "100vh",
        color: "#fff",
      }}
      className="max-w-[1190px] mx-auto"
    >
      {/* <Typography variant="h4" align="center" gutterBottom>
        Nature-Themed Data Table
      </Typography> */}

      <div
        className="table"
        style={{ height: 400, width: "50%", color: "#1b5e20" }}
      >
        {/* <DataGrid
          rows={transactions}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5, 10]}
          checkboxSelection
          getRowId={(row) => row._id}
        /> */}

        <div className="overflow-x-auto  max-w-[1090px]">
          <table className=" w-[50%] border-collapse border border-gray-200">
            <thead className="bg-gray-100">
              <tr className="text-[#000]">
                {/* <th className="border border-gray-300  !w-[90px]  px-4 py-2">
                  Transaction ID
                </th> */}
                <th className="border border-gray-300 px-4 py-2">userAddres</th>
                <th className="border border-gray-300 px-4 py-2">Activity</th>
                <th className="border border-gray-300 px-4 py-2">Proofs</th>
                <th className="border border-gray-300 px-4 py-2">
                  transaction
                </th>
                <th className="border border-gray-300 px-4 py-2">
                  tokenAmount
                </th>
                <th className="border border-gray-300 px-4 py-2">date</th>
                <th className="border border-gray-300 px-4 py-2">status</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction) => (
                <tr key={transaction._id}>
                  <td className="border text-wrap border-gray-300 w-[90px] px-4 py-2">
                    {transaction.userAddr}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {transaction.activityType}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {/* {transaction.date} */}
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => handleProfileClick(transaction)}
                    >
                      View PDF
                    </Button>
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {/* {transaction.tokenAmount} */}
                    {transaction.status === "success" ? (
                      transaction.exeTxId
                    ) : (
                      <Button
                        variant="contained"
                        color="secondary"
                        onClick={() => handleTxClick(transaction)}
                      >
                        Approve/Reject
                      </Button>
                    )}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {transaction.tokenAmount}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {transaction.date}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {transaction.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* PDF Preview Modal */}
      <Dialog
        open={pdfOpen}
        onClose={() => setPdfOpen(false)}
        maxWidth="md"
        fullWidth
        style={{ zIndex: 9999999999999999 }}
      >
        <DialogTitle>PDF Preview</DialogTitle>
        <DialogContent dividers>
          {selectedUser && selectedUser.Proofs ? (
            <Worker
              workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}
            >
              <Viewer fileUrl={selectedUser.ipfsPath} />
            </Worker>
          ) : (
            <Typography>No PDF available</Typography>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setPdfOpen(false)} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>

      {/* Transaction Modal */}
      <Dialog
        style={{ zIndex: 9999999999999999 }}
        open={txOpen}
        onClose={() => setTxOpen(false)}
      >
        <DialogTitle>Transaction Approval</DialogTitle>
        <DialogContent>
          <Typography>
            Approve or Reject the transaction for {selectedUser?.name}
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => handleTxActionAccept("Accepted")}
            color="primary"
          >
            Accept
          </Button>
          <Button
            onClick={() => handleTxActionReject("Rejected")}
            color="secondary"
          >
            Reject
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default DataTableWithModals;
