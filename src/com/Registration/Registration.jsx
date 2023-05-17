import React, { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Authcontext } from '../Authprovider/Auth';

const Registration = () => {

    const {register, profileupdate} = useContext(Authcontext);
    const navigate = useNavigate()
    
    const handleregister = (event) =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const name = form.name.value;
        const photo = form.photo.value;
        console.log(name, photo);
        register(email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            profileupdate(name, photo);
            navigate("/")
            
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
          });
    }
    
    
    return (
        <div>
            <form onSubmit={handleregister}  className='flex flex-col justify-center items-center p-10 m-10 w-3/4 mx-auto border'>
                <div className='text-3xl mb-10'>Registration Page</div>
                <div>
                    <div>
                        <p>Email</p>
                        <input className=' h-10 w-60  border-2 p-5 rounded-xl mt-2'  type="email" name="email" id="e" required placeholder='email' />
                    </div>
                    <div>
                        <p>Password</p>
                        <input className=' h-10 w-60  border-2 p-5 rounded-xl mt-2'  type="password" name="password" id="p" required placeholder='password' />
                    </div>
                    <div>
                        <p>Name</p>
                        <input className=' h-10 w-60  border-2 p-5 rounded-xl mt-2' required type="text" name="name" id="t" placeholder='name' />
                    </div>
                    <div>
                        <p>Photo Url</p>
                        <input className=' h-10 w-60  border-2 p-5 rounded-xl mt-2' required type="url" name="photo" id="u" placeholder='url' />
                    </div>
                </div>
                <button type='submit' className='border mt-4 px-5 py-2 rounded-xl hover:bg-green-600 hover:text-white shadow-lg'>Sign up</button>
                <p className='mt-5'>Do you have existing account? <NavLink to={"/login"} className='underline text-blue-400 hover:text-green-600'>Login</NavLink></p>
                {/* <div className='text-red-600'>
                    {error}
                </div>
                <div className='text-green-600'>
                    {success}
                </div> */}
            </form>
            
        </div>
    );
};

export default Registration;