import React from 'react';
import Navbar from '../Nav/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';

const Homepage = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Homepage;