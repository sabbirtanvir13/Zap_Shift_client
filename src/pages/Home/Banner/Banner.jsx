import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Bannerimg1 from '../../../assets/banner/banner1.png'
import Bannerimg2 from '../../../assets/banner/banner2.png'
import Bannerimg3 from '../../../assets/banner/banner3.png'
const Banner = () => {
    return (
   <Carousel>
                <div>
                    <img src={Bannerimg1} />
                 
                </div>
                <div>
                    <img src={Bannerimg2} />
                  
                </div>
                <div>
                    <img src={Bannerimg3} />
                    
                </div>
            </Carousel>
    );
};

export default Banner;