import React, { useContext } from 'react';
import { Authcontext } from '../Authprovider/Auth';

const Addtoy = () => {

    const { username, loggeduser, photourl, useremail } = useContext(Authcontext);

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
        const category = form.option.value;
        // console.log(toyname, toypic, email, sellername, price, rating, quantity, description);
        const userdata = {
            toyname,
            toypic,
            email,
            sellername,
            price,
            rating,
            quantity,
            description,
            category
        }

        fetch("http://localhost:5000/alltoys", {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userdata)
        })
            .then(res => res.json())
            .then(data => console.log(data))

        form.reset()
    }


    return (
        <div className='bg-indigo-200'>
                <div className='text-center text-6xl font-bold pt-10'>Add Your Toy</div>
            <form onSubmit={handletoysubmit}>
                <div className='flex sm:flex-row flex-col justify-center sm:gap-40 p-20 mx-auto'>
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
                        <input className='p-2 rounded-lg text-black' step={0.01} type="number" name="price" id="" /> <br />
                        <p>Rating :</p>
                        <input className='p-2 rounded-lg text-black' step={0.01} type="number" name="rating" id="" /> <br />
                        <p>Available Quantity :</p>
                        <input className='p-2 rounded-lg text-black' step={0.01} type="number" name="quantity" id="" /> <br />
                        <p>Description :</p>
                        <input className='p-2 rounded-lg text-black' type="text" name="description" id="" />
                    </div>
                    <div className='flex flex-col sm:flex-row gap-10'>
                        <div>
                            <input required type="radio" name="option" id="option1" value="engineering" />
                            <label for="engineering" className='text-xl font-bold italic'>Engineering toy</label>
                        </div>
                        <div>
                            <input required type="radio" name="option" id="option1" value="math" />
                            <label for="math" className='text-xl font-bold italic'>Math toy</label>
                        </div>
                        <div>
                            <input required type="radio" name="option" id="option1" value="language" />
                            <label for="language" className='text-xl font-bold italic'>Language toy</label>
                        </div>
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