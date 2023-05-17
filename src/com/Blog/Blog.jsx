import React from 'react';

const Blog = () => {
    return (
        <div>
            <p className='text-center text-6xl font-bold m-10'>This is the Blog page</p>
            <div className='m-10'>
                <div className='text-2xl italic font-medium'>Qus : What is an access token and refresh token? How do they work and where should we store them on the client-side?</div>
                <div className='p-5'><span className='font-bold'>Answer:</span> Access tokens are used in token-based authentication to allow an application to access an API. The application receives an access token after a user successfully authenticates and authorizes access, then passes the access token as a credential when it calls the target API.
                    <br />
                    Refresh tokens allow the application to obtain a new access token without requiring the user to re-authenticate, making it a useful tool for long-lived or background applications. Follow along as we walk through the process of implementing refresh token functionality in React.
                    <br />
                    For web applications, it is recommended to store the access token in an HTTP-only cookie. This prevents the access token from being accessed by JavaScript, reducing the risk of cross-site scripting (XSS) attacks.
                    The refresh token, being long-lived, can be stored in either an HTTP-only cookie or secure local storage, depending on the security requirements and trade-offs.
                </div>
            </div>
        </div>
    );
};

export default Blog;