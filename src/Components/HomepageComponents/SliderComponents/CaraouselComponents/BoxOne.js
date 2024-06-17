import React from "react";
import './Box.css';
import denimHerPic from '../../Pics/denim-1.png'
import './BoxOne.css';

const BoxOne = () => {
    return (
        <div className="boxOneParent">
            <div className="picForHer">
                <img src={denimHerPic} alt="Denim Her Pic" className="denimHerPic" />
                <div className="parentTextForDenimHer">
                    <div className="exactPositionForText">
                        <h4 className="denimHeading">Trending Today</h4>
                        <h1 className="denimHeaderOne">DENIM WEAR FOR HER</h1>
                        <p className="denimDesc">Explore our collection of premium <a style={{color:"#FF5100"}}><i><b>denim for her</b></i></a>, featuring trendy styles and unbeatable comfort for every occasion and outfit.</p>
                        <div className="denimShopNow"><button className="shopNowButton">SHOP NOW</button></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BoxOne;