import React, { useState } from "react";
import BoxOne from "./BoxOne";
import BoxTwo from "./BoxTwo";
import './Box.css';

const Carousel = () => {
    const [slide, setSlide] = useState(false);

    const handleSlide = () => {
        setSlide(!slide);
    };

    return (
        <div className="grandParent">
            <div className="carasouselParent">
                <div className={`carouselInner ${slide ? 'slideLeft' : ''}`}>
                    <BoxOne />
                    <BoxTwo />
                </div>
            </div>
            <div className="buttonOuter">
                <div className="buttonInner">
                    <button className="button" onClick={handleSlide}>Slide</button>
                </div>
            </div>
        </div>
    );
}

export default Carousel;
