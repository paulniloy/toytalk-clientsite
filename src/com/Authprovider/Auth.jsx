import React, { createContext, useEffect, useState } from 'react';
import app from "../../../firebase.config"
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";



export const Authcontext = createContext(null);
const auth = getAuth(app);

const Auth = ({children}) => {
    const [loggeduser, setloggeduser] = useState('');
    const [username, setusername] = useState('');
    const [photourl, setphotourl] = useState('');
    const [loader, setloader] = useState(true);

    const logout = () => {
        setloader(true);
        return signOut(auth);
    }

    
    const profileupdate = (name, url) => {
        setloader(true);
        updateProfile(auth.currentUser, {
            displayName : `${name}`, photoURL : `${url}`
        })
        .then(()=>{
            console.log('profile updated');
        })
        .catch((error)=>{
            console.log('not updated');
        })
    }

    const signin = (email, password) =>{
        setloader(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const register = (email, password) => {
        setloader(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const google = () => {
        setloader(true);
        const provider = new GoogleAuthProvider();
        return signInWithPopup(auth, provider)
    }

    const authinfo = {
        google, signin, register, profileupdate, loggeduser, username, photourl, logout, loader
    }

    useEffect(()=>{
        const unsubscribe =  onAuthStateChanged(auth, (user)=>{
                setloader(false);
                const uid = user.uid;
                setloggeduser(user)
                console.log(loggeduser);
                setloggeduser(user);
                setusername(user.displayName);
                setphotourl(user.photoURL);
        })
        return ()=> {
           unsubscribe();
        }
    })




    return (
        <Authcontext.Provider value={authinfo}>
            {children}
        </Authcontext.Provider>
    );
};

export default Auth;