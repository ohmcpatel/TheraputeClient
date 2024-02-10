import React from 'react';
import { useNavigate } from 'react-router-dom'; // Assuming you're using React Router v6
import '../styles.css';

function Navbar() {
  const navigate = useNavigate();
  const items = [
    {
      path: "/",
      name: "",
      icon:
    },
    {
      path: "/",
      name: "",
      icon:
    },
    {
      path: "/",
      name: "",
      icon:
    },
    {
      path: "/",
      name: "",
      icon:
    },
    {
      path: "/",
      name: "",
      icon:
    },
  ]
  return (
    <div className="navbar-container">
      <img className="navbar-image" src="../images/logo.png" alt="Logo Image" />
      <h3 onClick={() => navigate('/')}>Dashboard</h3>
      <h3 onClick={() => navigate('/exercise')}>Exercises</h3>
      <h3 onClick={() => navigate('/analysis')}>Analysis</h3>
      <h3 onClick={() => navigate('/therapist-connect')}>Therapist Connect</h3>
      <h3 onClick={() => navigate('/profile')}>Profile</h3>
    </div>
  );
}

export default Navbar;
