import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Authcontext } from '../Authprovider/Auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Eng = ({ eng }) => {
    const {_id, picture, name, price, rating} = eng;

    const {loggeduser} = useContext(Authcontext);

    const handletoast = () =>{
        if(!loggeduser){
            
            alert("Please Log in First")
        }
    }

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
                        <Link onClick={handletoast} className="btn btn-primary" to={`eng/${_id}`}>view Details</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Eng;