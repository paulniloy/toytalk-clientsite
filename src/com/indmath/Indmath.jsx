import React from 'react';
import { useLoaderData } from 'react-router-dom';
import usertitle from '../../TItle/Title';
import Rating from 'react-rating';
import { FaStar, FaRegStar, FaStarHalf } from "react-icons/fa";

const Indmath = () => {


    usertitle("Math_Toy")
    const math = useLoaderData();
    const {_id, picture, name, price, rating, category} = math;
    return (
        <div>
            <h1 className='text-center text-5xl font-bold m-10'>Toy Details</h1>
            <div className='flex justify-center m-20'>
                <div className="card w-96 bg-base-100 shadow-xl">
                        <h2 className="text-2xl m-5 text-center font-bold">{name}</h2>
                    <figure className="px-10 pt-10">
                        <img src={picture} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <p><span className='font-bold'>Price :</span> <span className='italic font-medium'>{price}</span></p>
                        {/* <p>rating : {rating}</p> */}
                        <Rating
                            placeholderRating={rating}
                            emptySymbol={<FaStarHalf />}
                            placeholderSymbol={<FaStar />}
                            fullSymbol={<FaStar />}
                        />
                        <h2 className=""><span className='font-bold'>Sub_category :</span> <span className='italic font-medium'>{category}</span></h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Indmath;