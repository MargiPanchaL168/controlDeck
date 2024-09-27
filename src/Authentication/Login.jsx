import * as React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { doLogin } from "../features/auth/authSlice";
import {Box, Card, CardActions, CardContent, Button, Typography, TextField} from "@mui/material";

export default function Login() {
  const navigate = useNavigate();
  const isLogin = useSelector((state) => state.auth.isLogin);
  const dispatch = useDispatch();
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
          height: "100vh",
          backgroundColor: "#dce4fc",
        }}
      >
        <Card sx={{ minWidth: 275, minHeight: 300 }}>
          <CardContent>
            <Typography
              variant="h2"
              noWrap
              component="div"
              sx={{ display: { xs: "none", sm: "block" } }}
            >
              <strong>Control Deck</strong>
              {/*  */}
            </Typography>
            <TextField
              id="standard-basic"
              label="Email"
              variant="standard"
              style={{ width: "80%" }}
            />
            <br></br>
            <TextField
              id="standard-basic"
              label="Password"
              variant="standard"
              style={{ width: "80%" }}
            />
          </CardContent>
          <CardActions>
            <Button
              variant="contained"
              sx={{ color: "#dce4fc" }}
              onClick={() => {
                dispatch(doLogin());
                console.log("isLogin",isLogin);
                navigate("/home");
              }}
            >
              Login
            </Button>
          </CardActions>
        </Card>
      </Box>
    </>
  );
}
