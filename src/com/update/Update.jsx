import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Update = () => {

    const loaderdata = useLoaderData();

    const handleupdate = (event) => {
        event.preventDefault();
        const form = event.target;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const description = form.description.value;
        const updateddata = {
            price, quantity, description
        }
        console.log(updateddata);

        fetch(`http://localhost:5000/alltoys/${loaderdata._id}`,{
            method: "PUT",
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(updateddata)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
        })
    }




return (
    <div className='flex flex-col items-center m-20'>
        <form onSubmit={handleupdate}>
            <div>
                <p className='text-6xl mb-20 font-bold'>Update toys</p>
                <p>Price :</p>
                <input className='p-2 rounded-lg text-black' step={0.01} type="number" name="price" id="" /> <br />
                <p>Available Quantity :</p>
                <input className='p-2 rounded-lg text-black' step={0.01} type="number" name="quantity" id="" /> <br />
                <p>Description :</p>
                <input className='p-2 rounded-lg text-black' type="text" name="description" id="" />
            </div>
            <div className='flex justify-center mt-10'>
                <button className='btn btn-primary' type="submit">Update</button>
            </div>
        </form>
    </div>
);
}

export default Update;