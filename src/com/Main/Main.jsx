import React from 'react';
import deliveryboy from "../../assets/deliveryboy.png"
import toyone from "../../assets/toy1.jpg"
import toytwo from "../../assets/toy2.jpg"
import toythree from "../../assets/toy3.jpg"
import toyfour from "../../assets/toy4.jpg"

const Main = () => {
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
                <div></div>
            </div>
            <div className='mb-10'>
                <div className="hero min-h-screen bg-base-200">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <img src={deliveryboy} className="h-80 rounded-lg shadow-2xl" />
                        <div>
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
            <div className='flex-col flex items-center'>
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