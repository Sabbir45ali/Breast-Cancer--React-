import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, allowedRoles }) => {
  const uid = localStorage.getItem("uid");
  const role = localStorage.getItem("role");

  // ❌ Not logged in
  if (!uid || !role) {
    return <Navigate to="/signin" replace />;
  }

  // ❌ Logged in but wrong role
  if (allowedRoles && !allowedRoles.includes(role)) {
    return <Navigate to="/signin" replace />;
  }

  // ✅ Allowed
  return children;
};

export default ProtectedRoute;
