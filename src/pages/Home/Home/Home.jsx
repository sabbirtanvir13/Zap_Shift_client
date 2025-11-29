import React from 'react';
import Banner from '../Banner/Banner';
import HowitWorks from '../../HowitWorks/HowitWorks';
import Services from '../../Services/Services';
import Brands from '../brands/Brands';
import Features from '../Features/Features';
import Reviews from '../Reveiws/Reviews';
const ReviewsPromise = fetch('./reviews.json').then(res=>res.json())
const Home = () => {
    return (
        <div>
        <Banner></Banner>
        <HowitWorks></HowitWorks>
        <Services></Services>
       <Brands></Brands>
       <Features></Features>
       <Reviews  ReviewsPromise={ ReviewsPromise}></Reviews>
        </div>
    );
};

export default Home;