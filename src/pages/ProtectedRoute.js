import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

import React from "react";

const ProtectedRoute = ({ children }) => {
  const { user } = useSelector;
  return <div>ProtectedRoute</div>;
};

export default ProtectedRoute;
