import React, { useState } from "react";
import BoxOne from "./BoxOne";
import BoxTwo from "./BoxTwo";
import './Box.css';
import Radio from '@mui/material/Radio';

const Carousel = () => {
    const [slide, setSlide] = useState(false);

    const [selectedValue1, setSelectedValue1] = React.useState('c');
    const [selectedValue2, setSelectedValue2] = React.useState('a');

    const handleChange1 = (event) => {
        setSelectedValue1(event.target.value);
        setSelectedValue2('a');
        handleSlide();
    };

    const handleChange2 = (event) => {
        setSelectedValue2(event.target.value);
        setSelectedValue1('a');
        handleSlide();
    };

    const controlProps1 = (item) => ({
        checked: selectedValue1 === item,
        onChange: handleChange1,
        value: item,
        name: 'size-radio-button-demo',
        inputProps: { 'aria-label': item },
    });

    const controlProps2 = (item) => ({
        checked: selectedValue2 === item,
        onChange: handleChange2,
        value: item,
        name: 'size-radio-button-demo',
        inputProps: { 'aria-label': item },
    });

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
                    <Radio
                        {...controlProps1('c')}
                        sx={{
                            '& .MuiSvgIcon-root': {
                                fontSize: 20,
                            },
                            '&.Mui-checked': {
                                color: '#FF5100',
                            }
                        }}
                    />
                    <Radio
                        {...controlProps2('c')}
                        sx={{
                            '& .MuiSvgIcon-root': {
                                fontSize: 20,
                            },
                            '&.Mui-checked': {
                                color: '#FF5100',
                            }
                        }}
                    />
            </div>
        </div>
    );
}

export default Carousel;
