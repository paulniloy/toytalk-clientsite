import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Table from '../Table/Table';
import usertitle from '../../TItle/Title';

const Alltoys = () => {

    const [searchitem, setsearchitem] = useState('');



    usertitle("All_Toys")

    const alltoys = useLoaderData();
    const { toyname, toypic, email, sellername, price, rating, quantity, description, category } = alltoys;

    return (
        <div className='sm:m-20'>
            {searchitem}
            <div className='mb-5 flex sm:flex-row items-center sm:gap-10 sm:justify-center flex-col'>
                <input onChange={(e)=>setsearchitem(e.target.value)} placeholder='search' className='bg-red-200 p-5 rounded-lg' type="search" name="" id="" />
                {/* <button className='btn btn-primary'>Search result</button> */}

            </div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Seller name</th>
                            <th>Email</th>
                            <th>Category</th>
                            <th>Toy Name</th>
                            <th>Toy Pic</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            alltoys.filter((toy)=>{
                                return searchitem.toLowerCase() === '' ? toy : toy.toyname.toLowerCase().includes(searchitem);
                            }).map(toy=><Table
                            key={toy._id}
                            toy={toy}
                            ></Table>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Alltoys;