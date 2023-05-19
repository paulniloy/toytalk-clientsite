import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Authcontext } from '../Authprovider/Auth';

const Table = ({ toy }) => {

    const {loggeduser} = useContext(Authcontext)


    const handletoast = () =>{
        if(!loggeduser){
            
            alert("Please Log in First")
        }
    }

    const {_id, toyname, toypic, email, sellername, price, rating, quantity, description, category} = toy;
    return (
        <tr>
        <th>*</th>
        <td>{sellername}</td>
        <td>{email}</td>
        <td>{category}</td>
        <td>{toyname}</td>
        <td><img className='h-10 w-10' src={toypic} alt="" /></td>
        <td>
            <Link onClick={handletoast} className='btn btn-primary' to={`/toydetails/${_id}`}>View Details</Link>
        </td>
      </tr>
    );
};

export default Table;