import React from 'react';
import { Link } from 'react-router-dom';

const Language = ({language}) => {
    const {_id, picture, name, price, rating} = language;
    return (
        <div>
            <div className="card w-9/12 bg-base-100 shadow-xl">
                {/* <figure className="px-10 pt-10">
                    <img src={picture} alt="Shoes" className="rounded-xl" />
                </figure> */}
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <img src={picture} alt="" />
                    {/* <p>Price : {price}</p>
                    <p>rating : {rating}</p> */}
                    <div className="card-actions">
                        <Link className="btn btn-primary" to={`language/${_id}`}>view Details</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Language;