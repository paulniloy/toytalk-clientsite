import React, { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import Table from '../Table/Table';

const Alltoys = () => {


    const alltoys = useLoaderData();
    const { toyname, toypic, email, sellername, price, rating, quantity, description, category } = alltoys;

    return (
        <div>
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
                            alltoys.map(toy=><Table
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