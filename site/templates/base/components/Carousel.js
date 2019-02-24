import React from "react";
import Slider from "react-slick";

import slide_one from '../../../static/images/slider-1.jpg';
import slide_two from '../../../static/images/slider-2.jpg';
import slide_three from '../../../static/images/slider-3.jpg';

const Carousel = () => {

    const settings = {
        dots: true,
        draggable: true,
        infinite: true,
        autoplay: true,
        speed: 500,

    };

    return (
        <div>
            <Slider {...settings}>
                <div>
                    <div style={{background: `url(${slide_one})`, height: '500px', backgroundSize: 'cover', backgroundPosition: 'center'}}>
                    </div>
                </div>
                <div>
                    <div style={{background: `url(${slide_two})`, height: '500px', backgroundSize: 'cover', backgroundPosition: 'center'}}>
                    </div>
                </div>
                <div>
                    <div style={{background: `url(${slide_three})`, height: '500px', backgroundSize: 'cover', backgroundPosition: 'center'}}>
                    </div>
                </div>
            </Slider>
        </div>
    );
};

export default Carousel;
