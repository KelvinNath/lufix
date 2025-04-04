import React from 'react';
import './NetflixLanding.scss';
import { useNavigate } from 'react-router-dom';

const NetflixLanding = () => {
    const navigate = useNavigate();
    
    const handleGetStarted = () => {
        // Check if user token exists in localStorage
        const userToken = localStorage.getItem('userToken');
        
        if (userToken) {
            // If token exists, redirect to Movies page
            navigate('/Movies');
        } else {
            // If no token exists, redirect to SignUp page
            navigate('/SignUp');
        }
    };
    
    return (
        <div className="netflix-landing">
            <header className="header">
                <div className="logo">LUFIX</div>
            </header>

            <main className="hero">
                <div className="hero-content">
                    <h1 className="slogan">Unlimited entertainment, one destination.</h1>
                    <h2 className="sub-slogan">Watch anywhere. Cancel anytime.</h2>
                    <p className="description">
                        Ready to watch? Enter your email to create or restart your membership.
                    </p>
                    
                    <div className="cta-container">
                        <button className="get-started-button" onClick={handleGetStarted}>
                            Get Started
                            <span className="arrow">›</span>
                        </button>
                    </div>
                </div>
            </main>

            <footer className="footer">
                <div className="footer-content">
                    <p>Questions? Contact us.</p>
                    <div className="footer-links">
                        <a href="#">FAQ</a>
                        <a href="#">Help Center</a>
                        <a href="#">Terms of Use</a>
                        <a href="#">Privacy</a>
                    </div>
                    <p className="copyright">© 2025 Lufix, Inc.</p>
                </div>
            </footer>
        </div>
    );
};

export default NetflixLanding;