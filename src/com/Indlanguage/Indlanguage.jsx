import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Indlanguage = () => {
    const language = useLoaderData();
    const {_id, picture, name, price, rating} = language;
    return (
        <div className='flex justify-center m-20'>
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={picture} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>Price : {price}</p>
                <p>rating : {rating}</p>
            </div>
        </div>
    </div>
    );
};

export default Indlanguage;