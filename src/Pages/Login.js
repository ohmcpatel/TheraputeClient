import React, { useState } from 'react';
import './Login.css';
import { signInUserWithEmailAndPassword } from '../Config/firebaseConfig'; // Import the signInUserWithEmailAndPassword function
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      if(signInUserWithEmailAndPassword(email, password)){
        setEmail('');
        setPassword('');
        setError(null);
        navigate('/dashboard');
      }// Call the signInUserWithEmailAndPassword function
      
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="login-page">
      <header>
        <h1>Welcome Back!</h1>
        <p>Login to your account</p>
      </header>
      <main>
        <form className="login-form" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="login-btn">Login</button>
        </form>
        {error && <p className="error-message">{error}</p>}
      </main>
      <footer className='footer-login'>
        <p>Don't have an account yet? <a href="/signup">Sign up</a></p>
      </footer>
    </div>
  );
}

export default Login;
