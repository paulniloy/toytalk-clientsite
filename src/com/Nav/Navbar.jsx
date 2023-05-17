import React from 'react';
import logo from "../../assets/toysbrand.png"
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='flex justify-between p-5 bg-red-200'>
            <div className='flex items-center gap-10'>
                <img className='w-20' src={logo} alt="" />
                <h1 className='text-3xl font-bold italic'>Toy Talks</h1>
            </div>
            <div className='flex gap-10 items-center'>
                <Link to={""}>Home</Link>
                <Link to={""}>All Toys</Link>
                <Link to={""}>My Toys</Link>
                <Link to={""}>Add Toys</Link>
                <Link to={""}>Blogs</Link>
                <Link to={""}>User profile</Link>
            </div>
        </div>
    );
};

export default Navbar;