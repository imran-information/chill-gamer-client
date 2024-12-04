import React from 'react';
import Banner from '../components/Banner';
import HighestRatedGame from '../components/HighestRatedGame';
import BlogsNews from '../components/BlogsNews';
import AboutCloux from '../components/AboutCloux';




const Home = () => {

    return (
        <div className=''>
            <Banner></Banner>
            <HighestRatedGame></HighestRatedGame>
            <BlogsNews></BlogsNews>
            <AboutCloux></AboutCloux>
        
        </div>
    );
};

export default Home;