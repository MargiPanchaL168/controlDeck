import * as React from "react";
import { Box, Modal, Button, TextField } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

export default function ModelComponent({ open, handleClose, data }) {
  console.log({ ModelComponent: "", data });
  const {
    name = "Default",
    height,
    mass,
    skin_color,
    eye_color,
    films,
    birth_year,
    url,
  } = data;

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: "70vw" }}>
          <h2 id="parent-modal-title">Update Profile</h2>
          <TextField
            id="standard-basic"
            placeholder="Name"
            variant="standard"
            sx={{ width: "60%", marginBottom: 3 }}
            value={name}
          />
          <br />
          <TextField
            id="standard-basic"
            placeholder="Height"
            variant="standard"
            sx={{ width: "60%", marginBottom: 3 }}
            value={height}
          />
          <TextField
            id="standard-basic"
            placeholder="Mass"
            variant="standard"
            sx={{ width: "60%", marginBottom: 3 }}
            value={mass}
          />
          <br />
          <Button variant="contained" onClick={handleClose}>
            Save
          </Button>
          {/* <ChildModal /> */}
        </Box>
      </Modal>
    </div>
  );
}
