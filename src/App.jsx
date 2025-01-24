import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/LoginPage/Login";
// import Signup from "./pages/signuppage/Signup";
import LandingPage from "./pages/LandingPage/LandingPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/LandingPage" element={<LandingPage />} />
      </Routes>
    </Router>

  );
};
export default App;