import React, { useEffect, useState } from 'react';
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

const Main = () => {
    const [eng, seteng] = useState([]);
    const [math, setmath] = useState([]);
    const [language, setlanguage] = useState([]);

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
                <div className='text-center text-6xl font-bold'>Gallary</div>
                <div className="carousel w-1/2 mx-auto m-10 rounded-lg h-80">
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
                <div className='text-center text-6xl font-bold'>Shop By Category</div>
                <div className='w-9/12 mx-auto m-10'>
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
                <div tabIndex={0} className="collapse w-96 collapse-arrow border border-base-300 bg-base-100 rounded-box mx-auto m-20">
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
            <div className='mb-10'>
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
            <div className='flex-col flex items-center w-9/12 mx-auto'>
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
            <div className='flex justify-center m-10'>
                <div className="stats shadow">

                    <div className="stat">
                        <div className="stat-title">Total Page Views</div>
                        <div className="stat-value">1,20,400</div>
                        <div className="stat-desc mt-5">47% more than last month</div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Main;