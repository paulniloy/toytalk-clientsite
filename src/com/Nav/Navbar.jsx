import React, { useContext } from 'react';
import logo from "../../assets/toysbrand.png"
import { Link } from 'react-router-dom';
import { Authcontext } from '../Authprovider/Auth';

const Navbar = () => {
    const {loggeduser} = useContext(Authcontext);
    

    const handlelogout = () =>{
        
    }


    const conditional =
        <>
            <Link to={""}>My Toys</Link>
            <Link to={""}>Add Toys</Link>
            <Link onClick={handlelogout} to={"/login"}>logout</Link>
        </>


    return (
        <div className='flex justify-between p-5 bg-red-200'>
            <div className='flex items-center gap-10'>
                <img className='w-20' src={logo} alt="" />
                <h1 className='text-3xl font-bold italic'>Toy Talks</h1>
            </div>
            <div className='flex gap-10 items-center'>
                <Link to={""}>Home</Link>
                <Link to={""}>All Toys</Link>
                <Link to={"/blog"}>Blogs</Link>
                {
                    loggeduser? conditional : <Link to={"/login"}>Login</Link> 
                }
            </div>
        </div>
    );
};

export default Navbar;