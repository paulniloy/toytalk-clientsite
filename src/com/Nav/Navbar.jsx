import React, { useContext } from 'react';
import logo from "../../assets/toysbrand.png"
import { Link, useNavigate } from 'react-router-dom';
import { Authcontext } from '../Authprovider/Auth';
import "./Nav.css"

const Navbar = () => {
    const { loggeduser, logout, photourl, username, useremail } = useContext(Authcontext);


    const handlelogout = () => {
        logout()
        .then()
        .catch()
    }


    const conditional =
        <>
            <Link className='hover:bg-gray-200 px-2 rounded ' to={'/mytoys'}>My Toys</Link>
            <Link className='hover:bg-gray-200 px-2 rounded ' to={"/addtoy"}>Add Toys</Link>
            <div className="indicator">
                <span className="indicator-item badge bg-green-400"></span>
                <div className="tooltip tooltip-bottom tooltip-primary" data-tip={username}>
                    {
                        loggeduser ? <img className='w-24 rounded-full' src={photourl} alt="" /> : <p className='hover:bg-gray-200 px-2 rounded'>{username}</p>
                    }
                </div>
            </div>
            <Link className='hover:bg-gray-200 px-2 rounded ' onClick={handlelogout} to={"/login"}>logout</Link>
        </>


    return (
        <div className='flex flex-col sm:flex-row sm:justify-evenly justify-between p-5 bg-red-200'>
            <div className='flex items-center gap-10'>
                <img  className='w-20 round' src={logo} alt="" />
                <h1 className='text-3xl font-bold italic'>Toy Talks</h1>
            </div>
            <div className='flex flex-col sm:flex-row gap-10 items-center'>
                <Link className='hover:bg-gray-200 px-2 rounded ' to={"/"}>Home</Link>
                <Link className='hover:bg-gray-200 px-2 rounded ' to={"/alltoys"}>All Toys</Link>
                <Link className='hover:bg-gray-200 px-2 rounded ' to={"/blog"}>Blogs</Link>
                {
                    loggeduser ? conditional : <Link to={"/login"} className=''>Login</Link>
                }
            </div>
        </div>
    );
};

export default Navbar;