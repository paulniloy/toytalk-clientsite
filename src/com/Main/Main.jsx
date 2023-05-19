import React, { useContext, useEffect, useState } from 'react';
import deliveryboy from "../../assets/deliveryboy.png"
import toyone from "../../assets/toy1.jpg"
import toytwo from "../../assets/toy2.jpg"
import toythree from "../../assets/toy3.jpg"
import toyfour from "../../assets/toy4.jpg"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Eng from '../engsection/Eng';
import Math from '../math/Math';
import Language from '../language/Language';
import AOS from 'aos';
import 'aos/dist/aos.css';
import usertitle from '../../TItle/Title';
import { Authcontext } from '../Authprovider/Auth';
import { HiAcademicCap, HiLightBulb, HiLightningBolt } from "react-icons/hi";

const Main = () => {
    const { loggeduser } = useContext(Authcontext);
    const [eng, seteng] = useState([]);
    const [math, setmath] = useState([]);
    const [language, setlanguage] = useState([]);


    useEffect(() => {
        AOS.init();
    }, [])

    useEffect(() => {
        fetch("http://localhost:5000/eng")
            .then(res => res.json())
            .then(data => seteng(data))
    }, [])
    useEffect(() => {
        fetch("http://localhost:5000/math")
            .then(res => res.json())
            .then(data => setmath(data))
    }, [])
    useEffect(() => {
        fetch("http://localhost:5000/language")
            .then(res => res.json())
            .then(data => setlanguage(data))
    }, [])

    usertitle("Home")



    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url("https://thumbs.dreamstime.com/b/baby-kid-toys-banner-background-wooden-blocks-train-car-plane-pop-fidget-toy-yellow-background-top-view-222995646.jpg")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="">
                        <h1 className="mb-5 text-6xl font-bold">Welcome</h1>
                        <p className="">
                            At Toy Talks, we believe in the power of play and the limitless potential of a child's imagination. Our mission is to create toys that inspire creativity, spark curiosity, and bring joy to children of all ages.
                            Our toys are carefully crafted with safety and quality in mind. We adhere to the highest standards and ensure that every product undergoes rigorous testing to provide you with peace of mind while your little ones embark on their exciting adventures. </p>
                    </div>
                </div>
            </div>
            <div className='m-10'>
                <div data-aos="fade-right" className='text-center text-6xl font-bold'>Gallary</div>
                <div data-aos="zoom-out" className="carousel w-1/2 mx-auto m-10 rounded-lg h-80">
                    <div id="item1" className="carousel-item w-full">
                        <img src={toyone} className="w-full" />
                    </div>
                    <div id="item2" className="carousel-item w-full">
                        <img src={toytwo} className="w-full" />
                    </div>
                    <div id="item3" className="carousel-item w-full">
                        <img src={toythree} className="w-full" />
                    </div>
                    <div id="item4" className="carousel-item w-full">
                        <img src={toyfour} className="w-full" />
                    </div>
                </div>
                <div className="flex justify-center w-full py-2 gap-2">
                    <a href="#item1" className="btn btn-xs">1</a>
                    <a href="#item2" className="btn btn-xs">2</a>
                    <a href="#item3" className="btn btn-xs">3</a>
                    <a href="#item4" className="btn btn-xs">4</a>
                </div>
            </div>
            <div>
                <div data-aos="fade-right" className='text-center text-6xl font-bold'>Shop By Category</div>
                <div className='w-9/12 mx-auto m-10' data-aos="fade-left">
                    <Tabs>
                        <TabList>
                            <Tab>Engineering Toys</Tab>
                            <Tab>Math Toys</Tab>
                            <Tab>Language Toys</Tab>
                        </TabList>

                        <TabPanel>
                            <div className='grid sm:grid-cols-3 grid-cols-1 mx-auto gap-20'>
                                {
                                    eng.map(eng => <Eng key={eng._id} eng={eng}></Eng>)
                                }
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className='grid sm:grid-cols-3 grid-cols-1 gap-20'>
                                {
                                    math.map(math => <Math key={math._id} math={math}></Math>)
                                }
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className='grid sm:grid-cols-3 grid-cols-1 gap-20'>
                                {
                                    language.map(language => <Language key={language._id} language={language}></Language>)
                                }
                            </div>
                        </TabPanel>
                    </Tabs>
                </div>
            </div>
            <div>
                <div data-aos="slide-up" tabIndex={0} className="collapse w-96 collapse-arrow border border-base-300 bg-base-100 rounded-box mx-auto m-20">
                    <div className="collapse-title text-xl font-medium">
                        Features
                    </div>
                    <div className="collapse-content">
                        <div className='flex flex-col items-center'>
                            <p className='text-xl font-bold'>Save Money</p>
                            <p>Save $5 every year compared to the monthly plan by paying yearly.</p>
                        </div>
                        <div className='flex flex-col items-center mt-5'>
                            <p className='text-xl font-bold'>Fast Return</p>
                            <p>Money back. If the item did not suit you</p>
                        </div>
                        <div className='flex flex-col items-center mt-5'>
                            <p className='text-xl font-bold'>Online Support</p>
                            <p>Use our 24/7 customer hotline so you are not alone if you have a question</p>
                        </div>
                        <div className='flex flex-col items-center mt-5'>
                            <p className='text-xl font-bold'>24/7 Delivery option</p>
                            <p>Find tracking information and order details from Your Orders.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div data-aos="zoom-in" className='mb-10'>
                <div className="hero bg-base-200">
                    <div className="w-full  mx-auto hero-content flex-col lg:flex-row-reverse">
                        <img src={deliveryboy} className="w-1/2 rounded-lg shadow-2xl" />
                        <div className='w-9/12 mx-auto'>
                            <h1 className="text-5xl font-bold">Online Delivery</h1>
                            <p className="py-6">We accept online delivery from anywhere in the world. <br />
                                Our delivery partners :
                                Animal Planet, Playshifu, ELC Toys, Rubbabu, <br /> Go Discover
                            </p>
                            <button className="btn btn-primary">Order Now</button>
                        </div>
                    </div>
                </div>
            </div>
            <div data-aos="flip-left" className='flex-col flex items-center w-9/12 mx-auto'>
                <div className='text-4xl font-bold mb-5'>Purchasing Steps</div>
                <div>
                    <ul className="steps mt-5">
                        <li className="step">Register or Login</li>
                        <li className="step">Choose Toys</li>
                        <li className="step">Order</li>
                        <li className="step">Pay the Price</li>
                        <li className="step">Receive Product</li>
                    </ul>
                </div>
            </div>
            <div data-aos="zoom-in" className='flex justify-center m-10'>
                <div className="stats shadow">

                    <div className="stat">
                        <div className="stat-title">Total Page Views</div>
                        <div className="stat-value">1,20,400</div>
                        <div className="stat-desc mt-5">47% more than last month</div>
                    </div>
                </div>
            </div>
            <div className='m-20'>
                <p data-aos="fade-in" className='text-4xl text-center font-bold'>Here how it works</p>
                <div data-aos="zoom-in" className='flex justify-center gap-20 m-20'>
                    <div className='flex-col flex items-center bg-red-200 rounded-xl p-10'>
                        <h1><HiLightningBolt className='h-10 w-10' /></h1>
                        <h1 className='text-2xl font-bold'>Encouraging</h1>
                        <h1 className=' text-center mt-5 italic'>Learning toys often involve hands-on activities, allowing children to explore and manipulate objects. This hands-on experience encourages curiosity, problem-solving, and critical thinking skills.</h1>
                    </div>
                    <div className='flex-col flex items-center bg-red-200 rounded-xl p-10'>
                        <h1><HiLightBulb className='h-10 w-10' /></h1>
                        <h1 className='text-2xl font-bold'>Inspire</h1>
                        <h1 className=' text-center mt-5 italic'>Many learning toys, such as pretend play sets or construction toys, promote imaginative play and role-playing. Through pretend scenarios, children can explore different roles, create narratives, and express their ideas and emotions.</h1>
                    </div>
                    <div className='flex-col flex items-center bg-red-200 rounded-xl p-10'>
                        <h1><HiAcademicCap className='h-10 w-10' /></h1>
                        <h1 className='text-2xl font-bold'>Creative</h1>
                        <h1 className=' text-center mt-5 italic'>Toys that involve arts and crafts, such as drawing, painting, or sculpting materials, provide an outlet for creative expression. They allow children to explore different mediums, experiment with colors and shapes, and develop their artistic abilities.</h1>
                    </div>
                </div>
            </div>
            <div className='m-20'>
                <div>
                    <h1 data-aos="fade-right" className='text-4xl font-bold text-center'>Customers Reviews</h1>
                </div>
                <div className='mt-20 grid grid-cols-1 sm:grid-cols-3'>
                    <div data-aos="fade-up" className="card w-96 bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src="https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg" alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-3xl">Watson</h2>
                            <p className="italic">"I absolutely love the educational toy page! It offers a wide variety of toys that are not only fun but also help children learn and develop important skills. The page is well-organized, making it easy to navigate and find the perfect toy for my child." </p>
                        </div>
                    </div>
                    <div data-aos="fade-down" className="card w-96 bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src="https://img.freepik.com/free-photo/close-up-portrait-curly-handsome-european-male_176532-8133.jpg" alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-3xl">Watson</h2>
                            <p className="italic">"The educational toy page is a treasure trove of learning opportunities! The range of toys available is impressive, covering various subjects and age groups. As a homeschooling parent, I appreciate the selection of STEM toys that promote critical thinking and problem-solving skills."</p>
                        </div>
                    </div>
                    <div data-aos="fade-up" className="card w-96 bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src="https://img.freepik.com/free-photo/headshot-attractive-man-smiling-pleased-looking-intrigued-standing-blue-background_1258-65468.jpg" alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-3xl">Watson</h2>
                            <p className="italic">"I stumbled upon the educational toy page while searching for interactive toys for my toddler, and I'm thrilled with my discovery! The page offers an extensive collection of toys that are both entertaining and educational. My child is engaged for hours with the hands-on learning experiences provided by these toys." </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Main;