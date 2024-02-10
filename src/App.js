import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Analysis from "./Pages/Analysis.js";
import Dashboard from "./Pages/Dashboard.js";
import Exercise from "./Pages/Exercise.js";
import Login from "./Pages/Login.js";
import Profile from "./Pages/Profile.js";
import TherapistConnect from "./Pages/TherapistConnect.js"; // assuming TherapistConnect is a separate component
import Navbar from "./Components/Navbar"
import ProfileBar from "./Components/ProfileBar.js"
import "./styles.css"
import "./index.css"


function App() {
  return (
    <div className="container">
      <div className="secondContainer">
        <ProfileBar className="top-component"/>
        <div className="bottom-component">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/exercise" element={<Exercise />} />
            <Route path="/analysis" element={<Analysis />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/therapist-connect" element={<TherapistConnect />} />
          </Routes>
        </BrowserRouter>
        </div>
      </div>
    </div>
  );
}

export default App;