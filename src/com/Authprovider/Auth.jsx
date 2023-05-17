import React, { createContext, useEffect, useState } from 'react';
import app from "../../../firebase.config"
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";



export const Authcontext = createContext(null);
const auth = getAuth(app);

const Auth = ({children}) => {
    const [loggeduser, setloggeduser] = useState('');
    const [username, setusername] = useState('');
    const [photourl, setphotourl] = useState('')
    console.log(username, photourl);

    const profileupdate = (name, url) => {
        
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
        return signInWithEmailAndPassword(auth, email, password)
    }

    const register = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const google = () => {
        const provider = new GoogleAuthProvider();
        return signInWithPopup(auth, provider)
    }

    const authinfo = {
        google, signin, register, profileupdate
    }

    useEffect(()=>{
        const unsubscribe =  onAuthStateChanged(auth, (user)=>{
            if(user){
                const uid = user.uid;
                console.log(user);
                setloggeduser(user);
                setusername(user.displayName);
                setphotourl(user.photoURL);
            }
        })
        return ()=> {
           return unsubscribe()
        }
    })




    return (
        <Authcontext.Provider value={authinfo}>
            {children}
        </Authcontext.Provider>
    );
};

export default Auth;