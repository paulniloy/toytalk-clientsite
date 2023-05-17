import React, { useContext } from 'react';
import { Authcontext } from '../Authprovider/Auth';
import { Navigate } from 'react-router-dom';

const Private = ({children}) => {

    const {loggeduser, loader} = useContext(Authcontext);

    if(loader){
        <div>loading...</div>
    }
    if(loggeduser){
        return children;
    }
    return (
        <Navigate to={"/login"}></Navigate>
    );
};

export default Private;