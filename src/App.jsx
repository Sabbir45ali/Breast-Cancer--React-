import React , {useState,useEffect} from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/LoginPage/Login";
import LandingPage from "./pages/LandingPage/LandingPage";
// import Signup from "./pages/signuppage/Signup";
import Mobile_landingPage from "./pages/Mobile_LandingPage/Mobile_landingPage";
const ResponsivePage = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return isMobile ? <Mobile_landingPage /> : <LandingPage />;
};
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<ResponsivePage />} />
        {/* <Route path="/LandingPage" element={<LandingPage />} />
        <Route path="/landing_M" element={<Mobile_landingPage />} /> */}
      </Routes>
    </Router>
  );
};
export default App;






