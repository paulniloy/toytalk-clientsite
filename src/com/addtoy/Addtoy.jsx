import React, { useContext } from 'react';
import { Authcontext } from '../Authprovider/Auth';

const Addtoy = () => {

    const {username, loggeduser, photourl, useremail} = useContext(Authcontext);

    const handletoysubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const toyname = form.toyname.value;
        const toypic = form.photo.value;
        const email = form.email.value;
        const sellername = form.seller.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const quantity = form.quantity.value;
        const description = form.description.value;
        // console.log(toyname, toypic, email, sellername, price, rating, quantity, description);
        const userdata = {
            toyname,
            toypic,
            email,
            sellername,
            price,
            rating,
            quantity,
            description
        }

        fetch("http://localhost:5000/alltoys", {
            method : "POST",
            headers : {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(userdata)
        })
        .then(res=>res.json())
        .then(data=>console.log(data))

        form.reset()
    }


    return (
        <div className='bg-indigo-200'>
            <form onSubmit={handletoysubmit}>
                <div className='text-center text-6xl font-bold pt-10'>Add Your Toy</div>
                <div className='flex justify-center gap-40 p-20 mx-auto'>
                    <div>
                        <p>Toy Name :</p>
                        <input className='p-2 rounded-lg text-black' type="text" name="toyname" id="" /> <br />
                        <p>Toy picture Url :</p>
                        <input className='p-2 rounded-lg text-black' type="url" name="photo" id="" /> <br />
                        <p>Seller Name :</p>
                        <input defaultValue={username} className='p-2 rounded-lg text-black' type="text" name="seller" id="" /> <br />
                        <p>Email :</p>
                        <input defaultValue={useremail} className='p-2 rounded-lg text-black' type="email" name="email" id="" />
                    </div>
                    <div>
                        <p>Price :</p>
                        <input className='p-2 rounded-lg text-black' type="text" name="price" id="" /> <br />
                        <p>Rating :</p>
                        <input className='p-2 rounded-lg text-black' type="text" name="rating" id="" /> <br />
                        <p>Available Quantity :</p>
                        <input className='p-2 rounded-lg text-black' type="text" name="quantity" id="" /> <br />
                        <p>Description :</p>
                        <input className='p-2 rounded-lg text-black' type="text" name="description" id="" />
                    </div>
                </div>
                <div className='flex justify-center'>
                    <button className='border mt-4 px-5 py-2 rounded-xl hover:bg-green-600 hover:text-white shadow-lg mb-5 font-bold' type='submit'>Submit</button>
                </div>
            </form>
        </div>
    );
};

export default Addtoy;