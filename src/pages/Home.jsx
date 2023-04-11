import React from 'react';
import "./home.css";
import bakery from "../assets/bakery.jpg";
import treats from "../assets/treats.jpg";
import sandwich1 from "../assets/sandwich1.jpg";
import sandwich2 from "../assets/sandwich2.jpg";
import milkshake from "../assets/milkshake.jpg";
import platter1 from "../assets/platter1.jpg";
import platter2 from "../assets/platter2.jpg";
import platter3 from "../assets/platter3.jpg";
import pizza from "../assets/pizza.jpg";

const Home = () => {
  return (
    <div className='homeContainer'>
      
    
        <div className="bakery">
         <div className="text">
         <h4>Bon Bakery</h4>
            <h5>Set in the beautiful Oxton village, Bon Bakery offers a range of delicous savoury options and sweet treats to enjoy while you dine in or take away.</h5>
          </div>
          <img src={bakery} alt="bon bakery" />
          </div>
          <h5 className="gridTitle">Take a look at some of our options</h5>
      <div className="homeGrid">
        <div className="treats">
          <img src={treats} alt="sweet food" />
      
        </div>
        <div className="sandwich">
          <img src={sandwich1} alt="sandwich"/>
        </div>
         <div className="sandwich2">
          <img src={sandwich2} alt="sandwich2" />
        </div>
         <div className="milkshake">
          <img src={milkshake} alt="milkshake"/>
        </div> 
          <div className="platter1">
          <img src={platter1} alt="sandwich platter"/>
        </div>
         <div className="platter2">
          <img src={platter2} alt="platter" />
        </div>  
        <div className="platter3">
          <img src={platter3} alt="platter" />
        </div>
        <div className="pizza">
          <img src={pizza} alt="pizza" />   
        </div>
      </div>
    </div>
  )
}

export default Home;
