// import * as React from "react";
import { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteIcon from '@mui/icons-material/Delete';
import "./Table.css";
import axios from 'axios'

function createData(name, trackingId, date, status) {
  return { name, trackingId, date, status };
}



const rows = [
  createData("Rebook Air", 18908424, "2 March 2022", "Approved"),
  createData("Nike Blue ", 18908424, "2 March 2022", "Pending"),
  createData("Park Avenue", 18908424, "2 March 2022", "Approved"),
  createData("Wild Storm Soap", 18908421, "2 March 2022", "Delivered"),
];


const makeStyle=(status)=>{
  if(status === 'Approved')
  {
    return {
      background: 'rgb(145 254 159 / 47%)',
      color: 'green',
    }
  }
  else if(status === 'Pending')
  {
    return{
      background: '#ffadad8f',
      color: 'red',
    }
  }
  else{
    return{
      background: '#59bfff',
      color: 'white',
    }
  }
}

export default function BasicTable() {
  
  const [billing, setbilling] = useState([])
  
  const fetchBilling = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/billing');
      setbilling(response.data);
      // console.log(billing)
    } catch (error) {
      console.error('Error fetching exercises: ', error);
    }
  };

  const deletebilling = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/billing/${id}`);
      fetchBilling(); // Refresh the billings after deletion
    } catch (error) {
      console.error('Error deleting billing: ', error);
    }
  };

  useEffect(() => {
    fetchBilling();
  }, []);

  return (
      <div className="Table">
      <h3>Orders</h3>
        <TableContainer
          component={Paper}
          style={{ boxShadow: "0px 13px 20px 0px #80808029" }}
        >
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="left">Address</TableCell>
                <TableCell align="left">Email</TableCell>
                <TableCell align="left">Phone</TableCell>
                <TableCell align="left">PaymentType</TableCell>
              </TableRow>
            </TableHead>
            <TableBody style={{ color: "white" }}>
              {billing.map((row) => (
                <TableRow
                  key={row._id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="left">{row.address}</TableCell>
                  <TableCell align="left">{row.email}</TableCell>
                  <TableCell align="left">
                    {/* <span className="status" style={makeStyle(row.status)}>{row.status}</span> */}
                    {row.phone}
                  </TableCell>
                  <TableCell align="left" className="Details">{row.paymentmethod}</TableCell>
                  <TableCell><DeleteIcon style={{ cursor: 'pointer' }} onClick={() => deletebilling(row._id)} /></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
  );
}