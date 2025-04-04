import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./SignUp.scss";
import axios from 'axios';

const SignUp = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  
  const goToSignIn = () => {
    navigate('/SignIn');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await axios.post(`${process.env.BACKEND_URL}/api/auth/register`, {
        name,
        email,
        password
      });
      
      console.log("Registration successful");
      
      // Check if the response contains a token
      if (response.data && response.data.token) {
        localStorage.setItem("token", response.data.token);
        navigate('/SignIn');
      } else {
        console.log("No token received in response:", response.data);
        
        navigate('/SignIn');
      }
    } catch (error) {
      console.error("Registration error:", error);
      
     
      if (error.response) {
       
        setError(error.response.data.message || "Registration failed. Please try again.");
      } else if (error.request) {
        
        setError("No response from server. Please check your connection.");
      } else {
        
        setError("Error during registration. Please try again.");
      }
    }
  };

  return (
    <div className="signup">
      <div className="signup-container">
        <h1>Sign Up</h1>
        {error && <div className="error-message">{error}</div>}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
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
          <button type="submit">Sign Up</button>
        </form>
        <p>Already have an account? <span className="signin-link" onClick={goToSignIn}>Sign in now</span>.</p>
      </div>
    </div>
  );
};

export default SignUp;