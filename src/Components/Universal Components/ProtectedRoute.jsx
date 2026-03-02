import { Navigate } from "react-router-dom";

const ProtectedRoute = ({children, roleRequired}) => {

  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  if(!token)
    return <Navigate to="/signin" replace />;

  if(roleRequired && role!==roleRequired)
    return <Navigate to="/signin" replace />;

  return children;
};

export default ProtectedRoute;