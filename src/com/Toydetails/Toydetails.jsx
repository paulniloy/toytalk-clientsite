import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import usertitle from '../../TItle/Title';
import { Authcontext } from '../Authprovider/Auth';
import Rating from 'react-rating';
import { FaStar, FaRegStar, FaStarHalf } from "react-icons/fa";

const Toydetails = () => {


    const {loggeduser} = useContext(Authcontext);


    usertitle("Toy_Details")
    const toydata = useLoaderData();
    const { _id, toyname, toypic, email, sellername, price, rating, quantity, description, category } = toydata;



    return (
        <div>
            <div className='text-center m-20 text-5xl font-bold'>Toy Details</div>
            <div className="card w-1/2 m-20 mx-auto min-h-screen bg-base-100 shadow-xl">
                <figure><img src={toypic} alt="Shoes" /></figure>
                <div className="card-body w-1/2 mx-auto text-center">
                    <h2 className="text-3xl font-bold p-5">{toyname}</h2>
                    <p><span className='font-bold'>Price :</span> <span className='italic font-medium'>{price}</span></p>
                    
                    <Rating
                            placeholderRating={rating}
                            emptySymbol={<FaStarHalf />}
                            placeholderSymbol={<FaStar />}
                            fullSymbol={<FaStar />}
                            />
                    <p><span className='font-bold'>Quantity :</span> <span className='italic font-medium'>{quantity}</span></p>
                    <p><span className='font-bold'>Description :</span> <span className='italic font-medium'>{description}</span></p>
                    <p><span className='font-bold'>Sub_category :</span> <span className='italic font-medium'>{category}</span></p>
                    <p><span className='font-bold'>Seller's Email :</span> <span className='italic font-medium'>{sellername}</span></p>
                </div>
            </div>
        </div>
    );
};

export default Toydetails;