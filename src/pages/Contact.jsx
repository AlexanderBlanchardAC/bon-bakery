import React from 'react';
import "./contact.css";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import { Link } from "react-router-dom";

const Contact = () => {

 
  return (
    <div className="contactContainer">
        
        <div className="addressContainer">
            <h2 className="contactTitle">Contact Us</h2>
            <div className="address">
                <p>27A Rose Mount</p>
                <p> Oxton</p>
                <p>Birekenhead</p>
                <p>Prenton</p>
                <p>CH43 5SQ</p>
            </div>
            <div className="phone">
              <p><span className="number">Phone:</span> 0151 652 7000</p>
              <p><span className="email">Email:</span> bonbakeryoxton@outlook.com</p>
            </div>
        
            <div className="socials">
              <Link to="https://www.facebook.com/Bonbakeryoxton/"><img src={facebook} alt="facebook"  className="facebook"/></Link>
              <Link to="https://www.instagram.com/bonbakeryoxton/"><img src={instagram} alt="instagram" /></Link>
            </div>
        </div>
       
      
    </div>
  )
}

export default Contact;
