import React from 'react';
import logofooter from "../../assets/toysbrand.png"
import { IoLogoFacebook, IoLogoGithub, IoLogoReddit, IoSend } from "react-icons/io5";

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-base-200 text-base-content">
                <div>
                    <img className='w-20' src={logofooter} alt="" />
                    <p className='text-3xl font-bold '>Toy Talk</p><span className='italic font-medium'>since 1992</span>
                </div>
                <div>
                    <span className="footer-title">Services</span>
                    <a className="link link-hover">Authentic Toys</a>
                    <a className="link link-hover">Custom Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Career</a>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <div className='font-bold'>
                        <div>Phone : +880-1745-245-508</div>
                        <div>Em@il : toytalk_info@gmail.com</div>
                    </div>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
                <div className='flex flex-col items-start'>
                    <span className="footer-title">Social</span>
                    <div className='flex gap-5'>
                        <div><IoLogoFacebook className='h-10 w-10' /></div>
                        <div><IoLogoGithub className='h-10 w-10' /></div>
                        <div><IoLogoReddit className='h-10 w-10' /></div>
                    </div>
                    <div className='mt-5 flex justify-center items-center gap-5'>
                        <div><input className='p-2 rounded-lg' placeholder='email complains' type="email" name="" id="" /></div>
                        <div><IoSend className='h-5 w-5'/></div>
                    </div>
                </div>
            </footer>
            <p className='text-center italic text-white bg-black p-2'>© 1992 - 2023 | Toy Talks | All Rights Reserved</p>
        </div>
    );
};

export default Footer;