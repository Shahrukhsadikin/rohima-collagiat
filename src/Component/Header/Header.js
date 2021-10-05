// header section
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/rcsl.jpg';
// header css import section 
import './header.css';
const Header = () => {
    return (
        <div className="header">
            <img className="logo" src={logo} alt="" />
            <nav className="nav-link">
             {/* router links  */}
           <Link to="/Home"    style={{ textDecoration: 'none',margin:'5px',color: 'black' }}>Home</Link>
           <Link to="/About"   style={{ textDecoration: 'none',margin:'5px',color: 'black' }} >About</Link>
           <Link to="/Class"style={{ textDecoration:'none',margin:'5px',color: 'black' }}>Class</Link>
           <Link to="/Contactus"style={{ textDecoration:'none',margin:'5px',color: 'black' }}>Contactus</Link>
          
           </nav>
        </div>
    );
};

export default Header;