import React from 'react';
import HeaderCarousel from './HeaderCarosel/HeaderCarousel';
import HomeLayout from './HomeLayout';
import Navbar from './Navbar/Navbar';
import NewsLatter from './Newslatter/NewsLatter';
import Footer from './Shared/Footer/Footer';

const Home = () => {
    return (
        <div>
            <Navbar />
            <HeaderCarousel/>
            <HomeLayout />
            <NewsLatter/>
            <Footer/>
        </div>
    );
};

export default Home;