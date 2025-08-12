import React from 'react';
import Navbar from '../../Component/Navbar/Navbar';
import Banner from '../../Component/Banner/Banner';
import About from '../About/About';
import Course from '../Course/Course';
import Skills from '../../Component/Skills/Skills';
import Project from '../Project/Project';
import Contact from '../Contact/Contact';
import Experience from '../Experience/Experience';

const Home = () => {
    return (
        
        <>
            <Banner></Banner>
            <About></About>
            <Course></Course>
            <Skills></Skills>
            <Experience></Experience>
            <Project></Project>
            <Contact></Contact>
        </>
    );
};

export default Home;