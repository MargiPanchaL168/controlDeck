import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation, Outlet } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const isLogin = useSelector((state) => state.auth.isLogin);
  // let location = useLocation();

  // if (!isLogin) {
    return(isLogin ?  <Outlet /> :  <Navigate to="/login" />);
  // }
  // return children;
};

export default ProtectedRoute;
