import React from 'react';
import Banner from '../Banner/Banner';
import HowitWorks from '../../HowitWorks/HowitWorks';
import Services from '../../Services/Services';
import Brands from '../brands/Brands';
import Features from '../Features/Features';

const Home = () => {
    return (
        <div>
        <Banner></Banner>
        <HowitWorks></HowitWorks>
        <Services></Services>
       <Brands></Brands>
       <Features></Features>
        </div>
    );
};

export default Home;