import React, { useContext } from 'react';
import logo from "../../assets/toysbrand.png"
import { Link, useNavigate } from 'react-router-dom';
import { Authcontext } from '../Authprovider/Auth';
import "./Nav.css"

const Navbar = () => {
    const { loggeduser, logout, photourl, username, loader } = useContext(Authcontext);
    const navigate = useNavigate();


    const handlelogout = () => {
        logout()
        .then()
        .catch()
    }


    const conditional =
        <>
            <Link className='hover:bg-gray-200 px-2 rounded ' to={""}>My Toys</Link>
            <Link className='hover:bg-gray-200 px-2 rounded ' to={""}>Add Toys</Link>
            <div className="indicator">
                <span className="indicator-item badge bg-green-400"></span>
                <div className="tooltip tooltip-bottom tooltip-primary" data-tip={username}>
                    <img className='w-24 rounded-full' src={photourl} alt="" />
                </div>
            </div>
            <Link className='hover:bg-gray-200 px-2 rounded ' onClick={handlelogout} to={"/login"}>logout</Link>
        </>


    return (
        <div className='flex justify-between p-5 bg-red-200'>
            <div className='flex items-center gap-10'>
                <img className='w-20 round' src={logo} alt="" />
                <h1 className='text-3xl font-bold italic'>Toy Talks</h1>
            </div>
            <div className='flex gap-10 items-center'>
                <Link className='hover:bg-gray-200 px-2 rounded ' to={"/"}>Home</Link>
                <Link className='hover:bg-gray-200 px-2 rounded ' to={""}>All Toys</Link>
                <Link className='hover:bg-gray-200 px-2 rounded ' to={"/blog"}>Blogs</Link>
                {
                    loggeduser ? conditional : <Link to={"/login"} className=''>Login</Link>
                }
            </div>
        </div>
    );
};

export default Navbar;