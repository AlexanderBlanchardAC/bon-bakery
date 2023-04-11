import React from 'react';
import "./breakfastmenu.css";
import { breakfast, bonBreakfast, kidsBreakfast } from "../../constants/menuData";

const BreakfastMenu = () => {
  return (
<div className="container">
    <div className="menuContainer">
        <div className="breakfast">
            <div className="sectionTitle">Breakfasts</div>
            {breakfast.map((item) => {
                return (
                    <div className="breakfastOption"> 
                    <div className="main"> 
                       <p className="title"> {item.title} </p>
                      
                            <p className="desc">{item.desc}</p>
                        </div>
                            <div className="priceContainer">
                                {/* <p className="price">{item.price}</p> */}
                                {item.price.length  > 1 ? <p><span>{item.price[0]}</span>  <span className="additional">{item.price[1]}</span></p> : <p>{item.price}</p>}
                            </div>
                    </div>
               
                )
            })}
        </div>
        <br></br>
        <div className="bonBreakfast">
            <div className="sectionTitle">Bon Breakfast</div>
            {bonBreakfast.map((item) => {
                return (
                    <div className="breakfastOption">
                        <div className="main">
                            <p className="title">{item.title}</p>
                            <p className="desc">{item.desc}</p>
                        </div>
                        <div className="priceContainer">
                        {item.price.length  > 1 ? <p><span>{item.price[0]}</span><span className="additional">{item.price[1]}</span></p> : <p>{item.price}</p>}

                        </div>
                    </div>
                )
            })}

        </div>
        <br></br>
        <div className="kidsBreakfast">
            <div className="sectionTitle">
                Kids' Breakfast
            </div>
            {kidsBreakfast.map((item) => {
                return (
                    <div className="breakfastOption">
                        <div className="main">
                            <p className="title">{item.title}</p>
                            <p>{item.desc}</p>
                        </div>
                        <div className="priceContainer">
                        {item.price.length  > 1 ? <p><span>{item.price[0]}</span>  <span className="additional">{item.price[1]}</span></p> : <p>{item.price}</p>}

                        </div>
                    </div>
                )
            })}
        </div>
      
    </div>
    </div>
  )
}

export default BreakfastMenu;
