import React, { useContext, useState } from "react";
import NavBar from "../components/NavBar";
import Box from "@mui/material/Box";
import {Typography, Grid2} from "@mui/material";
import { ThemeContext } from "../App";
import CardComponent from "../components/Card";
import people from '../MockData/people.json'

function Home() {
  const { theme } = useContext(ThemeContext);
  const [peopleData, setPeopleData] = useState(people?.results)
  console.log(peopleData);
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
        <Grid2 container >
        {peopleData?.map((p, index) => (
          <Grid2 item key={index}>
            <CardComponent data={p} />
          </Grid2>
          
          ))}
        </Grid2>
      </Box>
    </>
  );
}

export default Home;
