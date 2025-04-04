import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-top">
          <p>Questions? Call 1-800-123-4567</p>
          <div className="social-links">
            
            <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
            <a href="#" aria-label="Linkedln"><i className="fab fa-twitter"></i></a>
           
          </div>
        </div>
        
        <div className="footer-links">
          <div className="links-column">
            <a href="#">FAQ</a>
            <a href="#">Investor Relations</a>
            <a href="#">Ways to Watch</a>
            <a href="#">Corporate Information</a>
            <a href="#">Lufix daily</a>
          </div>
          <div className="links-column">
            <a href="#">Help Center</a>
       
            <a href="#">Terms of Use</a>
            <a href="#">Contact Us</a>
          </div>
          <div className="links-column">
            <a href="#">Account</a>
            <a href="#">Redeem Gift Cards</a>
            <a href="#">Privacy</a>
            <a href="#">Speed Test</a>
          </div>
          <div className="links-column">
            <a href="#">Media Center</a>
            <a href="#">Buy Gift Cards</a>
            <a href="#">Cookie Preferences</a>
            <a href="#">Legal Notices</a>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="language-selector">
            <select>
              <option value="en">English</option>
              <option value="es">Español</option>
            </select>
          </div>
          <p>© 2025 Lufix, Inc.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;