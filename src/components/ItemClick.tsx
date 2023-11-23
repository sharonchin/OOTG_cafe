"use client";
import {
  Button,
  ButtonGroup,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tooltip,
} from "@mui/material";
import React from "react";
import CustomizedSwitches from "@/components/Switch";
import Image from "next/image";
import currychicken from "../../public/assets/currychicken.jpg";

import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import LoopOutlinedIcon from "@mui/icons-material/LoopOutlined";
import Availability from "./Availability";
import Link from "next/link";

const selectedStyle = {
  backgroundColor: "#778CCC",
};

function createData(
  id: string,
  img: string,
  name: string,
  category: string,
  desc: string,
  price: number,
  product_availability: number
) {
  return { id, name, img, category, desc, price, product_availability };
}

const rows = [
  createData(
    "1",
    "laksa_j87qge",
    "Laksa",
    "Noodle",
    "This is good Laksa",
    6,
    1
  ),
  createData(
    "2",
    "seazes6upiorcqduvoc6",
    "Chicken Rice",
    "Rice",
    "This is good rice",
    5,
    2
  ),
];

export default function ItemManagement() {
  const [open, setOpen] = React.useState(false);
  const [check, setCheck] = React.useState(true);
  const handleOpen = () => setOpen(true);
  const handleCheck = (
    event: React.SyntheticEvent<Element, Event>,
    checked: boolean
  ) => {
    setCheck(!check);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="flex flex-col justify-center gap-5">
      <div className="justify-center items-center ">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Image</TableCell>
                <TableCell align="center">Product ID</TableCell>
                <TableCell align="center">Name</TableCell>
                <TableCell align="center">Category</TableCell>
                <TableCell align="center">Desc</TableCell>
                <TableCell align="center">Price</TableCell>
                <TableCell align="center">Product Availability</TableCell>
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
                    <img
                      src={`https://res.cloudinary.com/devlognxn/image/upload/v1699984254/${row.img}.jpg`}
                      alt={row.name}
                      width={100}
                      height={100}
                    />
                  </TableCell>
                  <TableCell align="center" component="th" scope="row">
                    {row.id}
                  </TableCell>
                  <TableCell align="center">{row.name}</TableCell>
                  <TableCell align="center">{row.category}</TableCell>
                  <TableCell align="center">{row.desc}</TableCell>
                  <TableCell align="center">{row.price}</TableCell>
                  <TableCell align="center">
                    <Availability availability={row.product_availability} />
                  </TableCell>
                  <TableCell align="center">
                    <Tooltip title="Edit">
                      <IconButton>
                        <EditOutlinedIcon />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Change Availability">
                      <IconButton>
                        <LoopOutlinedIcon />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Delete">
                      <IconButton>
                        <DeleteOutlineOutlinedIcon />
                      </IconButton>
                    </Tooltip>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>

      <div className="flex space-x-4 justify-end">
        <Link href={`/management/item/newItem`}>
          <Button
            variant="contained"
            style={selectedStyle}
            className=" bg-[#778ccc] text-white"
          >
            Add Item
          </Button>
        </Link>
        <Button
          variant="contained"
          style={selectedStyle}
          className=" bg-[#778ccc] text-white"
        >
          Save
        </Button>
      </div>
    </div>
  );
}
