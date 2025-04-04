import React, { useState } from 'react';
import {  useNavigate } from 'react-router-dom';
import "./SignIn.scss";
import axios from 'axios';




const SignIn = () => {
    const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUp = () => {
    navigate('/SignUp');
  };

  const handleSubmit = async(e) => {
    e.preventDefault();

    try {
      const res = await axios.post(`${process.env.BACKEND_URL}/api/auth/login`,{

        email,
        password
  
      })

      console.log('Successful login:', res.data);
      localStorage.setItem("token", res.data.token);
      navigate('/Movies')
      
    } catch (error) {

      console.log(error);
      
    }
  };

  return (
    <div className="signin">
      <div className="signin-container">
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
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
          <button type="submit">Sign In</button>
        </form>
        <div className="signin-options">
          <div className="remember-me">
            <input type="checkbox" id="remember" />
            <label htmlFor="remember">Remember me</label>
          </div>
          <p className="help">Need help?</p>
        </div>
        <p>New to Lufix?  <span className="signup-link" onClick={signUp}>Sign up now</span>.</p>
        
      </div>
    </div>
  );
};

export default SignIn;
