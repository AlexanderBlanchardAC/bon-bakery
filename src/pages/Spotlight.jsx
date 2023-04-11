import React from 'react';
import platter from "../assets/platter.jpg";
import cronuts from "../assets/cronuts.jpg";
import keg from "../assets/keg.jpg";
import "./spotlight.css";



const Spotlight = () => {

  const inTheSpotlight = [

    {
        id: 0,
        image: keg,
        text: "Our neighbours at Edward's have opened a fantastic brand new beer cave with lots of new beers, ciders and wines - perfect for the Easter weekend!"
    },
    {
        id: 1,
        image: cronuts ,
        text: "Strawberry cheesecake cronuts 😋!"
    },
    {
        id: 2,
        image: platter ,
        text: "Platters fro Good Friday and Easter Saturday 🐣!"
    }
]

  
  return (
    <div className='spotlightSection'>
       <h4>In the Spotlight</h4>
       {inTheSpotlight.map((item) => {
        return (
            <div className="spotlightItem">
                <img src={item.image} alt="in the spotlight" />
                <p className="info">{item.text}</p>
            </div>
        )
       })}
  
      
    </div>
  )
}

export default Spotlight;
