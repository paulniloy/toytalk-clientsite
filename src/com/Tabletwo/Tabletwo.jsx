import React from 'react';
import { Link } from 'react-router-dom';

const Tabletwo = ({toys, handledelete}) => {
    
    const { _id, toyname, toypic, email, sellername, price, rating, quantity, description, category } = toys;

    return (
        <tr>
            <th>*</th>
            <td>{sellername}</td>
            <td>{email}</td>
            <td>{category}</td>
            <td>{toyname}</td>
            <td><img className='h-10 w-10' src={toypic} alt="" /></td>
            <td>{price}</td>
            <td>{quantity}</td>
            <td>{rating}</td>
            <td>{description}</td>
            <td>
                <button onClick={()=> handledelete(_id)} className='btn btn-primary'>Delete</button>
            </td>
            <td>
                <Link to={`/update/${_id}`}><button className='btn btn-secondary'>Update</button></Link>
            </td>
        </tr>
    );
};

export default Tabletwo;