import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { GoSearch } from "react-icons/go";
import { FiLogOut } from "react-icons/fi"; // Import logout icon

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  const isLandingPage = location.pathname === '/';
  const isSignInPage = location.pathname === '/SignIn';
  const isSignUpPage = location.pathname === '/SignUp';
  
  // Check if user is logged in whenever component mounts or location changes
  useEffect(() => {
    const checkAuthStatus = () => {
      // Check for both 'token' and 'userToken' in case both are being used
      const token = localStorage.getItem('token');
      const userToken = localStorage.getItem('userToken');
      const isAuthenticated = !!(token || userToken);
      
      setIsLoggedIn(isAuthenticated);
      console.log("User Logged in:", isAuthenticated); // Debugging output
    };
    
    checkAuthStatus();
    
    // Also check auth status when localStorage changes
    window.addEventListener('storage', checkAuthStatus);
    
    return () => {
      window.removeEventListener('storage', checkAuthStatus);
    };
  }, [location]); // Re-check when location changes
  
  const signIn = () => {
    navigate('/SignIn');
  };
  
  const logout = () => {
    // Remove both possible token keys
    localStorage.removeItem('token');
    localStorage.removeItem('userToken');
    
    setIsLoggedIn(false);
    
    navigate('/');
  };

  if(isSignUpPage){
    return<></>;
  }
   
  if (isSignInPage) {
    return <></>;
  }

  return (
    <>
      <nav className='header'>
        <img src="/log.png" alt="Logo" />
        
        {!isLandingPage && (
          <>
            <div className="nav-links">
              <Link to="/Movies">Movies</Link>
              <Link to="/tvshows">TV Shows</Link>
              <Link to="/contact">Contact</Link>
            </div>
            <div className="header-actions">
              <GoSearch className="search-icon" />
              
              {isLoggedIn && (
                <button className="logout-button" onClick={logout} title="Logout">
                  <FiLogOut />
                </button>
              )}
            </div>
          </>
        )}
        
        {isLandingPage && (
          <div className="header-actions landing-actions">
            {isLoggedIn ? (
              <button className="logout-button" onClick={logout}>Logout</button>
            ) : (
              <button className="sign-in-button" onClick={signIn}>Sign In</button>
            )}
          </div>
        )}
      </nav>
    </>
  );
};

export default Header;