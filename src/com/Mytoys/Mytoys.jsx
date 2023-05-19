import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Tabletwo from '../Tabletwo/Tabletwo';
import { Authcontext } from '../Authprovider/Auth';
import usertitle from '../../TItle/Title';

const Mytoys = () => {

    const {useremail} = useContext(Authcontext);

    const [mytoys, setmytoys] = useState([]);

    usertitle('My_Toy')


    useEffect(()=>{
        fetch(`http://localhost:5000/alltoys?email=${useremail}&sort=1`)
        .then(res=>res.json())
        .then(data=>setmytoys(data))
    },[])


    const handledelete = (_id) =>{
        fetch(`http://localhost:5000/alltoys/${_id}`,{
            method: "DELETE",
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify({status: confirm})
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.deletedCount>0){
                const remaining = mytoys.filter(toy=> toy._id !== _id);
                setmytoys(remaining);
            }
        })

        console.log(_id);
    }


    return (
        <div className='sm:m-20'>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Category</th>
                            <th>Toy's Name</th>
                            <th>Toy's pic</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Rating</th>
                            <th>Description</th>
                            <th>Delete</th>
                            <th>Update</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            mytoys.map(toys=><Tabletwo
                            key={toys._id}
                            toys={toys}
                            handledelete={handledelete}
                            >
                            </Tabletwo>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Mytoys;