import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { doLogin } from "../features/auth/authSlice";

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
              onClick={async () => {
                await dispatch(doLogin());
                console.log("isLogin",isLogin);
                // isLogin
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
