import React, { useContext } from "react";
import NavBar from "../components/NavBar";
import Box from "@mui/material/Box";
import { ThemeContext } from "../App";

function Settings() {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <NavBar />
      <Box
        sx={{
          display: "flex",
          backgroundColor: theme ? "black" : "white",
          color: theme ? "white" : "black",
          height: "100vh",
        }}
      >
        <h1>Settings Page</h1>
      </Box>
    </>
  );
}

export default Settings;
