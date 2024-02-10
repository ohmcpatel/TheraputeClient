import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Analysis from "./Pages/Analysis.js";
import Dashboard from "./Pages/Dashboard.js";
import Exercise from "./Pages/Exercise.js";
import Login from "./Pages/Login.js";
import Profile from "./Pages/Profile.js";
import TherapistConnect from "./Pages/TherapistConnect.js"; // assuming TherapistConnect is a separate component
import Navbar from "./Components/Navbar.js"
import ProfileBar from "./Components/ProfileBar.js"
import LandingPage from "./Pages/LandingPage.js"
import Signup from "./Pages/Signup.js"
import "./index.css"


function App() {
  return (
      <div className="secondContainer">
        <ProfileBar className="top-component" imgSrc={"./images/dude2.jpeg"} username="Ohmy"/>
        <div className="bottom-component">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/exercise" element={<Exercise />} />
            <Route path="/analysis" element={<Analysis />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/therapist-connect" element={<TherapistConnect />} />
          </Routes>
        </BrowserRouter>
        </div>
      </div>
  );
}

export default App;