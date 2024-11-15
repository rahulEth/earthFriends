// import React, { useState } from "react";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
//   Button,
//   Dialog,
//   DialogActions,
//   DialogContent,
//   DialogTitle,
//   Typography,
// } from "@mui/material";
// import { styled } from "@mui/system";
// import axios from "axios";
// import { Worker, Viewer } from "@react-pdf-viewer/core"; // Import PDF Viewer components
// import "@react-pdf-viewer/core/lib/styles/index.css"; // PDF Viewer styles

// import pf from "./Aman.pdf";

// // Sample data with PDF file paths
// const dummyData = [
//   {
//     id: 1,
//     name: "John Doe",
//     profile: "View PDF",
//     transaction: "Approve/Reject",
//     pdfFile: pf,
//   },
//   {
//     id: 2,
//     name: "Jane Smith",
//     profile: "View PDF",
//     transaction: "Approve/Reject",
//     pdfFile: pf,
//   },
// ];

// // Styled components for nature theme
// const NatureTableContainer = styled(TableContainer)({
//   backgroundColor: "#e0f2f1",
//   borderRadius: "10px",
//   boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
// });

// const NatureButton = styled(Button)({
//   backgroundColor: "#4caf50",
//   color: "#fff",
//   "&:hover": {
//     backgroundColor: "#388e3c",
//   },
// });

// // Main App Component
// const Table2 = () => {
//   const [pdfOpen, setPdfOpen] = useState(false);
//   const [txOpen, setTxOpen] = useState(false);
//   const [selectedUser, setSelectedUser] = useState(null);

//   // Open PDF modal
//   const handleProfileClick = (user) => {
//     setSelectedUser(user);
//     setPdfOpen(true);
//   };

//   // Open Transaction modal
//   const handleTxClick = (user) => {
//     setSelectedUser(user);
//     setTxOpen(true);
//   };

//   // Handle accept/reject actions with mock backend call
//   const handleTxAction = async (action) => {
//     try {
//       await axios.post(`/api/transaction/${selectedUser.id}`, { action });
//       alert(`${action} action sent for ${selectedUser.name}`);
//     } catch (error) {
//       console.error("Request failed", error);
//     }
//     setTxOpen(false);
//   };

//   return (
//     <div
//       style={{
//         padding: "2rem",
//         backgroundColor: "#a5d6a7",
//         minHeight: "100vh",
//         color: "#1b5e20",
//       }}
//     >
//       <Typography variant="h4" align="center" gutterBottom>
//         Nature-Themed Data Table
//       </Typography>
//       <NatureTableContainer component={Paper}>
//         <Table>
//           <TableHead>
//             <TableRow>
//               <TableCell>Name</TableCell>
//               <TableCell align="center">Profile</TableCell>
//               <TableCell align="center">Transaction</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {dummyData.map((user) => (
//               <TableRow key={user.id}>
//                 <TableCell>{user.name}</TableCell>
//                 <TableCell align="center">
//                   <NatureButton onClick={() => handleProfileClick(user)}>
//                     View PDF
//                   </NatureButton>
//                 </TableCell>
//                 <TableCell align="center">
//                   <NatureButton onClick={() => handleTxClick(user)}>
//                     Approve/Reject
//                   </NatureButton>
//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </NatureTableContainer>

//       {/* PDF Preview Modal */}
//       <Dialog
//         open={pdfOpen}
//         onClose={() => setPdfOpen(false)}
//         maxWidth="md"
//         fullWidth
//       >
//         <DialogTitle>PDF Preview</DialogTitle>
//         <DialogContent dividers>
//           {selectedUser && selectedUser.pdfFile ? (
//             // <Worker
//             //   workerUrl={`https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js`}
//             // >
//             //   <Viewer fileUrl={selectedUser.pdfFile} />
//             // </Worker>
//             <Worker
//               workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}
//             >
//               <Viewer fileUrl={selectedUser.pdfFile} />
//             </Worker>
//           ) : (
//             <Typography>No PDF available</Typography>
//           )}
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={() => setPdfOpen(false)} color="primary">
//             Close
//           </Button>
//         </DialogActions>
//       </Dialog>

//       {/* Transaction Modal */}
//       <Dialog open={txOpen} onClose={() => setTxOpen(false)}>
//         <DialogTitle>Transaction Approval</DialogTitle>
//         <DialogContent>
//           <Typography>
//             Approve or Reject the transaction for {selectedUser?.name}
//           </Typography>
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={() => handleTxAction("Accepted")} color="primary">
//             Accept
//           </Button>
//           <Button onClick={() => handleTxAction("Rejected")} color="secondary">
//             Reject
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </div>
//   );
// };

// export default Table2;

import React, { useState } from "react";
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

// Sample data with PDF file paths
const dummyData = [
  {
    id: 1,
    userAddres: "Aman",
    Activity: "Tree Planted",
    Proofs: pf,
    token: "100 EFRND",
    transaction: "Approve/Reject",
    date: "value 2",
    status: "success",
  },
  {
    id: 2,
    userAddres: "Aman",
    Activity: "Tree Planted",
    Proofs: pf,
    token: "100 EFRND",
    transaction: "Approve/Reject",
    date: "value 2",
    status: "success",
  },
  {
    id: 3,
    userAddres: "Aman",
    Activity: "Tree Planted",
    Proofs: pf,
    token: "100 EFRND",
    transaction: "Approve/Reject",
    date: "value 2",
    status: "success",
  },
  {
    id: 4,
    userAddres: "Aman",
    Activity: "Tree Planted",
    Proofs: pf,
    token: "100 EFRND",
    transaction: "Approve/Reject",
    date: "value 2",
    status: "success",
  },
];

// Columns for DataGrid

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

  // Handle accept/reject actions with mock backend call
  const handleTxAction = async () => {
    try {
      // Simulate a backend call
      console.log(`Action sent for ${selectedUser?.name}`);
      alert(`action sent for ${selectedUser?.name}`);
    } catch (error) {
      console.error("Request failed", error);
    }
    setTxOpen(false);
  };

  const columns = [
    { field: "userAddres", headerName: "userAddres", width: 80 },
    { field: "Activity", headerName: "Activity", width: 120 },
    // { field: "Activity", headerName: "Activity", width: 180 },
    {
      field: "Proofs",
      headerName: "Proofs",
      renderCell: (params) => (
        <Button
          variant="contained"
          color="primary"
          onClick={() => handleProfileClick(params.row)}
        >
          View PDF
        </Button>
      ),
      width: 150,
    },
    { field: "token", headerName: "token", width: 180 },

    {
      field: "transaction",
      headerName: "Transaction",
      renderCell: (params) => (
        <Button
          variant="contained"
          color="secondary"
          onClick={() => handleTxClick(params.row)}
        >
          Approve/Reject
        </Button>
      ),
      width: 180,
    },
    { field: "date", headerName: "date", width: 180 },
    { field: "status", headerName: "status", width: 180 },
  ];
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
        style={{ height: 400, width: "100%", color: "#1b5e20" }}
      >
        <DataGrid
          rows={dummyData}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5, 10]}
          checkboxSelection
        />
      </div>

      {/* PDF Preview Modal */}
      <Dialog
        open={pdfOpen}
        onClose={() => setPdfOpen(false)}
        maxWidth="md"
        fullWidth
      >
        <DialogTitle>PDF Preview</DialogTitle>
        <DialogContent dividers>
          {selectedUser && selectedUser.Proofs ? (
            <Worker
              workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}
            >
              <Viewer fileUrl={selectedUser.pdfFile} />
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
          <Button onClick={() => handleTxAction("Accepted")} color="primary">
            Accept
          </Button>
          <Button onClick={() => handleTxAction("Rejected")} color="secondary">
            Reject
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default DataTableWithModals;
