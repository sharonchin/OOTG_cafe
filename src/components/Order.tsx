import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";

function createData(
  id: string,
  created: string,
  orderType: string,
  loc: string,
  status: string
) {
  return { id, created, orderType, loc, status };
}

const rows = [
  createData("1", "2/11/2023", "Delivery", "KKE", "In progress"),
  createData("2", "2/11/2023", "Pick up", "KKTM", "Completed"),
  createData("3", "2/11/2023", "Delivery", "KKE", "Canceled"),
];

export default function Order() {
  return (
    <div className="px-5 w-full h-20 justify-center items-center ">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Order ID</TableCell>
              <TableCell align="center">Created</TableCell>
              <TableCell align="center">Order Type</TableCell>
              <TableCell align="center">Location</TableCell>
              <TableCell align="center">Status</TableCell>
              <TableCell align="center">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="center" component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell align="center">{row.created}</TableCell>
                <TableCell align="center">{row.orderType}</TableCell>
                <TableCell align="center">{row.loc}</TableCell>
                <TableCell align="center">{row.status}</TableCell>
                <TableCell align="center">
                  <VisibilityOutlinedIcon />
                  <ModeEditOutlineOutlinedIcon />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
