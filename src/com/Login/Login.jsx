import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Authcontext } from '../Authprovider/Auth';
import { GoogleAuthProvider } from 'firebase/auth';
import { IoLogoGoogle } from "react-icons/io5";

const Login = () => {
    const [success, setsuccess] = useState('');
    const [error, seterror] = useState('');

    const {google, signin} = useContext(Authcontext);

    const navigate = useNavigate();

    const handlegoogle = () => {
        google()
        .then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            const user = result.user;
            navigate("/")
            setsuccess('Successfully signed in');
            seterror('')
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.customData.email;
            const credential = GoogleAuthProvider.credentialFromError(error);
            seterror(errorMessage);
            setsuccess('');
        });
    }
    
    const handlelogin = (event) => {
        event.preventDefault()
        const form = event.target;
        const email =  form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signin(email, password)
        .then((userCredential)=>{
            navigate("/")
            const user = userCredential.user;
            setsuccess('Successfully signed in');
            seterror('')
            
        })
        .catch((error)=>{
            const errorCode = error.code;
            const errorMessage = error.message;
            seterror(errorMessage);
            setsuccess('');
        })
    }
    


    return (
        <div className='flex flex-col justify-center items-center p-10 m-10 w-3/4 mx-auto border'>
            <form onSubmit={handlelogin}>
                <div className='text-3xl mb-10 text-center'>Login Page</div>
                <div>
                    <div>
                        <p>Email</p>
                        <input className=' h-10 w-60 border-2 p-5 rounded-xl mt-2' type="email" name="email" id="email" placeholder='email' required />
                    </div>
                    <div>
                        <p>Password</p>
                        <input className=' h-10 w-60 border-2 p-5 rounded-xl mt-2' type="password" name="password" required id="password" placeholder='password' />
                    </div>
                </div>
                <button type='submit' className='border mt-4 px-5 py-2 rounded-xl hover:bg-green-600 hover:text-white shadow-lg'>Sign in</button>
                <p className='mt-5'>Don't you have account? <Link to={"/register"} className='underline text-blue-400 hover:text-green-600'>Register</Link></p>
                <div className='flex justify-center gap-10 mt-5'>
                </div>
                {/* {
                    loggeduser ? <p className='text-green-400'>{success}</p> : <p className='text-red-400'>{error}</p>
                } */}
            </form>
            <button className='' onClick={handlegoogle}><IoLogoGoogle className='h-10 w-10'/></button>
            <p className='text-green-600'>{success}</p>
            <p className='text-red-600'>{error}</p>
        </div>
    );
};

export default Login;