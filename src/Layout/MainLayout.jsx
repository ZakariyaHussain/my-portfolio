import React from 'react';
//import Navbar from '../Components/Header/Navbar';
//import { Outlet } from 'react-router';
//import Footer from '../Components/Footer';
import Navbar from '../Component/Navbar/Navbar';
import { Outlet } from 'react-router';

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            {/* <Footer></Footer> */}
        </div>
    );
};

export default MainLayout;