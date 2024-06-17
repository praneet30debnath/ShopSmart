import React from "react";
import './CSS/DealOfTheDay.css';
import Carasousel from "./SliderComponents/CaraouselComponents/Caraousel";

const DealOfTheDay = () => {


    return (
        <div className="parentDealOfTheDay">
            
            <div className="dealOneParent">
                <Carasousel />
            </div>
            <div className="dealsInOneColumn">
                <div className="dealTwo">
                    <div className="title2">
                        <h1 className="denimHeaderOne">ELECTRONICS</h1>
                        <p className="denimDesc">Get best deals on all electronic items.</p>
                        <div className="denimShopNow"><button className="shopNowButton">EXPLORE NOW</button></div>
                    </div>
                    <div className="childDealTwo">
                    </div>
                </div>
                <div className="dealThree">DEAL THREE</div>
            </div>
        </div>
    )
}

export default DealOfTheDay;