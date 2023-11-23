import { ButtonGroup, Button } from "@mui/material";
import Link from "next/link";
import React from "react";
import Management from "./Management";

export default function MainMenu() {
  const [selectedButton, setSelectedButton] = React.useState("Dashboard"); // State to manage the selected button

  const selectedStyle = {
    backgroundColor: "#778CCC",
  };

  const notSelectedStyle = {
    backgroundColor: "transparent",
  };
  const handleButtonClick = (button: any) => {
    setSelectedButton(button === selectedButton ? "" : button);
  };

  return (
    <div className="flex flex-col pt-6">
      <div className="h-3/4 w-full flex justify-center flex-col pt-20 col-md-4 space-y-4">
        {/*Top*/}
        <ButtonGroup variant="outlined" aria-label="outlined button group">
          <Link href={`/`}>
            <Button
              onClick={() => handleButtonClick("Dashboard")}
              variant={
                selectedButton === "Dashboard" ? "contained" : "outlined"
              }
              style={
                selectedButton === "Dashboard"
                  ? selectedStyle
                  : notSelectedStyle
              }
            >
              Dashboard
            </Button>
          </Link>
          <Link href={`/profile`}>
            <Button
              onClick={() => handleButtonClick("Profile")}
              variant={selectedButton === "Profile" ? "contained" : "outlined"}
              style={
                selectedButton === "Profile" ? selectedStyle : notSelectedStyle
              }
            >
              Profile
            </Button>
          </Link>
          <Link href={`/management`}>
            <Button
              onClick={() => handleButtonClick("Management")}
              variant={
                selectedButton === "Management" ? "contained" : "outlined"
              }
              style={
                selectedButton === "Management"
                  ? selectedStyle
                  : notSelectedStyle
              }
            >
              Management
            </Button>
          </Link>

          <Link href={`/order`}>
            <Button
              onClick={() => handleButtonClick("Order")}
              variant={selectedButton === "Order" ? "contained" : "outlined"}
              style={
                selectedButton === "Order" ? selectedStyle : notSelectedStyle
              }
            >
              Order
            </Button>
          </Link>

          <Link href={`/setting`}>
            <Button
              onClick={() => handleButtonClick("Setting")}
              variant={selectedButton === "Setting" ? "contained" : "outlined"}
              style={
                selectedButton === "Setting" ? selectedStyle : notSelectedStyle
              }
            >
              Setting
            </Button>
          </Link>
        </ButtonGroup>
      </div>

      <div className="flex justify-center pt-5 pb-5">
        {selectedButton === "Management" && <Management />}
      </div>
    </div>
  );
}
