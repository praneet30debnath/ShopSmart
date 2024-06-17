import React from "react";
import './Box.css';
import denimHimPic from '../../Pics/denim-him2.png'
import './BoxOne.css';

const BoxTwo = () => {
    return (
        <div className="boxTwoParent">
            <div className="picForHer">
                <img src={denimHimPic} alt="Denim Her Pic" className="denimHimPic" />
                <div className="parentTextForDenimHer">
                    <div className="exactPositionForText">
                        <h4 className="denimHeading">Trending Today</h4>
                        <h1 className="denimHeaderOne">DENIM WEAR FOR HIM</h1>
                        <p className="denimDesc">Shop our exclusive range of <a style={{color:"#FF5100"}}><i><b>denim for him</b></i></a>, offering stylish designs and exceptional comfort to elevate any wardrobe.</p>
                        <div className="denimShopNow"><button className="shopNowButton">SHOP NOW</button></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BoxTwo;