import React from "react";
import { Navigate } from "react-router-dom";

function Logout() {
  localStorage.removeItem("user_id");
  return <Navigate to="/login" />;
}

export default Logout;
