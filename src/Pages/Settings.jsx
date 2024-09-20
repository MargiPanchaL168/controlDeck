import React from "react";
import NavBar from "../components/NavBar";
import Box from '@mui/material/Box';

function Settings() {
  return (
    <>
    <NavBar />
      <Box sx={{ display: "flex" }}>
        <h1>Settings Page</h1>
      </Box>
    </>
  );
}

export default Settings;
