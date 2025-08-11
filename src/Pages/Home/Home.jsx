import React from 'react';
import Navbar from '../../Component/Navbar/Navbar';
import Banner from '../../Component/Banner/Banner';
import About from '../About/About';
import Course from '../Course/Course';

const Home = () => {
    return (
        
        <>
            <Banner></Banner>
            <About></About>
            <Course></Course>
            
        </>
    );
};

export default Home;