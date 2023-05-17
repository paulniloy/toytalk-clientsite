import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='flex flex-col justify-center items-center p-10 m-10 w-3/4 mx-auto border'>
            <form >
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
            {/* <div className='flex justify-center gap-20 w-1/2 mx-auto'>
                <div>
                    <button className='shadow-lg rounded-full p-2 hover:bg-gray-900' ><IoLogoGoogle className='h-10 w-10' /></button>
                </div>
                <div>
                    <button className='rounded-full p-2 hover:bg-gray-900' ><IoLogoGithub className='h-10 w-10' /></button>
                </div>
            </div> */}
        </div>
    );
};

export default Login;