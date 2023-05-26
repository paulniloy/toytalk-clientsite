import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Tabletwo from '../Tabletwo/Tabletwo';
import { Authcontext } from '../Authprovider/Auth';
import usertitle from '../../TItle/Title';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Mytoys = () => {
    const notify = () => toast.success("Deleted Successfully");

    const { useremail } = useContext(Authcontext);

    const [mytoys, setmytoys] = useState([]);

    usertitle('My_Toy')


    useEffect(() => {
        fetch(`https://serversite-pi.vercel.app/alltoys?email=${useremail}&sort=1`)
            .then(res => res.json())
            .then(data => setmytoys(data))
    }, [])


    const handledelete = (_id) => {
        const process = confirm("Are you sure to delete?");
        if (process) {
            fetch(`https://serversite-pi.vercel.app/alltoys/${_id}`, {
                method: "DELETE",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({ status: confirm })
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data.deletedCount);

                    if (data.deletedCount > 0) {
                        const remaining = mytoys.filter(toy => toy._id !== _id);
                        notify()
                        setmytoys(remaining);
                    }
                })
        }
        else {
            alert("Deletation Cancelled")
        }

    }

    const handleascending =()=>{
        fetch(`https://serversite-pi.vercel.app/as?email=${useremail}`)
        .then(res=>res.json())
        .then(data=>setmytoys(data))
    }
    const handledescending = () =>{
        fetch(`https://serversite-pi.vercel.app/des?email=${useremail}`)
        .then(res=>res.json())
        .then(data=>setmytoys(data))
    }


    return (
        <div className='sm:m-20'>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <ToastContainer
                        position="top-center"
                        autoClose={3000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="light"
                    />
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
                            mytoys.map(toys => <Tabletwo
                                key={toys._id}
                                toys={toys}
                                handledelete={handledelete}
                            >
                            </Tabletwo>)
                        }
                    </tbody>
                </table>
            </div>
            <div className='flex justify-center gap-20'>
                <button onClick={handleascending} className='btn btn-primary'>Ascending</button>
                <button onClick={handledescending} className='btn btn-primary'>Descending</button>
            </div>
        </div>
    );
};

export default Mytoys;