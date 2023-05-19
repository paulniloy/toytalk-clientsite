import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import usertitle from '../../TItle/Title';
import { Authcontext } from '../Authprovider/Auth';

const Toydetails = () => {


    const {loggeduser} = useContext(Authcontext);


    usertitle("Toy_Details")
    const toydata = useLoaderData();
    const { _id, toyname, toypic, email, sellername, price, rating, quantity, description, category } = toydata;



    return (
        <div>
            <div className="card w-1/2 m-20 mx-auto min-h-screen bg-base-100 shadow-xl">
                <figure><img src={toypic} alt="Shoes" /></figure>
                <div className="card-body w-1/2 mx-auto text-center">
                    <h2 className="text-3xl font-bold p-5">{toyname}</h2>
                    <p>{description}</p>
                    <p>Sub-Category : {category}</p>
                    <p>Price : {price}</p>
                    <p>rating : {rating}</p>
                    <p>Quantity : {quantity}</p>
                    <p>Seller's Email : {email}</p>
                </div>
            </div>
        </div>
    );
};

export default Toydetails;