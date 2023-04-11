import React, { useState } from 'react';
import "./nav.css";
import { BiMenu } from "react-icons/bi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { Link } from "react-router-dom";

const Nav = () => {

    const [toggleMenu, setToggleMenu] = useState(false);

    const mobileMenu = () => {
        toggleMenu ? setToggleMenu(false) : setToggleMenu(true)
    }

  return (
    <nav className="nav">
        <div className="navLogo">
          <Link to="/"><span className="logo">Bon Bakery</span></Link>
        </div>
        <ul className="navLinks">
          <Link to="/"><li className='navLink'>Home</li></Link> 
          <Link to="/about"><li className='navLink'>About</li></Link>  
          <Link to="/menu"><li className='navLink'>Menu</li></Link>
         <Link to="/order"><li className='navLink'>Order</li></Link>  
         <Link to="/spotlight"><li className='navLink'>Spotlight</li></Link> 
        <Link to="/contact"><li className='navLink'>Contact</li></Link>
        </ul>
        <div className="navMobileScreen">
            <BiMenu onClick={mobileMenu} className="mobScreen" />
            {toggleMenu && (
               <div className="navMobileScreenOverlay">
                <MdOutlineRestaurantMenu fontSize={25} className="overlayClose" onClick={mobileMenu}/>
                <ul className="navMobileScreenLinks">
                   <Link to="/"><li onClick={() => setToggleMenu(false)}>Home</li></Link>
                    <Link to="/about"><li  onClick={() => setToggleMenu(false)}>About</li></Link>
                    <Link to="/menu"> <li onClick={() => setToggleMenu(false)}>Menu</li></Link>
                    <Link to="/order"><li onClick={() => setToggleMenu(false)}>Order</li></Link> 
                    <Link to="/spotlight"><li onClick={() => setToggleMenu(false)}>Spotlight</li></Link> 
                    <Link to="/contact"><li onClick={() => setToggleMenu(false)}>Contact</li></Link> 
                </ul>
               </div>
            )}
        </div>
    </nav>
  );
};

export default Nav;
