import React, { useContext, useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import Box from "@mui/material/Box";
import {Typography, Grid2} from "@mui/material";
import { ThemeContext } from "../App";
import CardComponent from "../components/Card";
import axios from 'axios';
import CircularProgress from '@mui/material/CircularProgress';

function Home() {
  const { theme } = useContext(ThemeContext);
  const [peopleData, setPeopleData] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    axios
      .get("https://swapi.dev/api/people")
      .then(function (response) {
        setPeopleData(response?.data?.results);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {
        setLoader(false);
      });
  }, []);
  return (
    <>
      <NavBar />
      <Box
        sx={{
          display: "flex",
          backgroundColor: theme ? "black" : "white",
          color: theme ? "white" : "black",
          height: "100%",
        }}
      >
        {loader ?  <CircularProgress /> : 
        ( <Grid2 container >
          {peopleData?.map((p, index) => (
            <Grid2 item key={index}>
              <CardComponent data={p} />
            </Grid2>
            
            ))}
          </Grid2>)
        }
       
      </Box>
    </>
  );
}

export default Home;
