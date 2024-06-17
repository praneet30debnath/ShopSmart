import React from "react";
import DealOfTheDay from "../HomepageComponents/DealOfTheDay";
import '../NavbarComponentsCSS/HomePage.css';

const HomePage = () => {
    return (
        <div className="parentHomePage">
            <DealOfTheDay />
        </div>
    )
}

export default HomePage;