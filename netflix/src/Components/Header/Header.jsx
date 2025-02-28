import React from 'react'
import logo from "../../Components/Header/log.png";
import { Link } from 'react-router-dom'
import { GoSearch } from "react-icons/go";



const Header = () => {
  return (
    <nav className='header'>
      <img src={logo} alt="Logo" />
      
      <div>
        <Link to="/Movies">Movies</Link>
        <Link to="/tvshows">TV Shows</Link>
        <Link to="/contact">Contact</Link>
      </div>
      
      <GoSearch />
    </nav>
  );
}

export default Header;
