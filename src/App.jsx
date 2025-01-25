import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/LoginPage/Login";
import Signup from "./pages/signuppage/Signup";
import Mobile_landingPage from "./pages/Mobile_LandingPage/Mobile_landingPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/landing_M" element={<Mobile_landingPage />} />
      </Routes>
    </Router>

  );
};
export default App;