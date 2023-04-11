import React from 'react';
import "./about.css";

const About = () => {
  return (
    <div className="aboutContainer">
        <div className="aboutOverlay">
            {/* <img /> */}
        </div>
        <div className="aboutContent">
            <div className="about">
                <h1 className="title">About Us</h1>
                <p className="aboutDesc">
                    We are a modern bakery with homemade cakes and brownies, pies and pasties, sandwiches, breakfasts, bread, coffee and tea, milkshakes, ice cream, tango ice blast, waffles and amazing pizzas!
                </p>
            </div>
            <div className="openingTimesSection">
                <h4>Opening Times</h4>
                <div className="aboutOpeningTimes">
                    <div className="gridItem1">Monday</div>
                    <div className="gridItem2">08:00 - 16:00</div>
                    <div className="gridItem3">Tuesday</div>
                    <div className="gridItem4">08:00 - 16:00</div>
                    <div className="gridItem5">Wednesday</div>
                    <div className="gridItem6">08:00 - 16:00</div>
                    <div className="gridItem7">Thursday</div>
                    <div className="gridItem8">08:00 - 16:00</div>
              
                    <div className="gridItem9">Friday</div>
                    <div className="gridItem10">08:00 - 16:00</div>
                    <div className="gridItem11">Saturday</div>
                    <div className="gridItem12">08:00 - 16:00</div>
                    <div className="gridItem13">Sunday</div>
                    <div className="gridItem14">Closed</div>  
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default About
