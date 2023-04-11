import React from 'react';
import platter from "../assets/platter.jpg";
import breakfastplatter from "../assets/breakfastplatter.jpg";
import afternoontea from "../assets/afternoontea.jpg";
import "./order.css";

const Order = () => {
  return (
    <div className="orderContainer">
        <h4>Platters</h4>
        <div className="options">
             <div className="option" id="sandwichPlatter">
               <img src={platter} alt="platter" />
             </div>
            <div className="sandwichText">
                 <p> 
                   <span className="titleOrder">Sandwich Platter</span><br></br>
                   A little something for everyone, whatever the occasion.
                </p>
            </div>

            <div className="option" id="breakfastPlater">
                 <img src={breakfastplatter} alt="breakfast" />
            </div>
            <div className="breakfastText">
                <p>
                  <span className='titleOrder'> Breakfast Platter</span><br></br>
                  Whether you prefer sweet or savoury, get the day off to a good start with our breakfast platters. 
                </p>
            </div>
    

            <div className="option" id="tea">
                <img src={afternoontea} alt="afternoon tea" />
            </div>
            <div className="teaText">
                 <p className="afternoonTea">  
                   <span className='titleOrder'> Afternoon Tea</span><br></br>
                    Have an afternoon treat with this classic afternoon tea platter.
                </p>
            </div>
       
    </div>
        <div className="toOrder">
           
            <p>To order any of our platters, please pop in to the shop or call us on: <span className='nums'> 0151 652 7000</span>. We often have special platters for occasions such as Easter and Mother's Day.</p>
        </div> 
</div>
      
   
  )
}

export default Order
