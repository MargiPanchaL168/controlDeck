import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Settings from "./Pages/Settings";
import Home from "./Pages/Home";
import AboutUs from "./Pages/About";
import Login from "./Authentication/Login";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Login />}></Route>
          <Route path="/home" exact element={<Home />}></Route>
          <Route path="/about" exact element={<AboutUs />}></Route>
          <Route path="/settings" exact element={<Settings />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
