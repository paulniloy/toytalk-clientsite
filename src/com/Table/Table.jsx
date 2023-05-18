import React from 'react';
import { Link } from 'react-router-dom';

const Table = ({ toy }) => {
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
            <Link className='btn btn-primary' to={`/toydetails/${_id}`}>View Details</Link>
        </td>
      </tr>
    );
};

export default Table;