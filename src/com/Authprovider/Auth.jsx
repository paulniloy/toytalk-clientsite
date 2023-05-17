import React, { createContext, useEffect } from 'react';
import app from "../../../firebase.config"
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";



export const Authcontext = createContext(null);
const auth = getAuth(app);

const Auth = ({children}) => {

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
        google, signin, register
    }

    useEffect(()=>{
        const unsubscribe =  onAuthStateChanged(auth, (user)=>{
            if(user){
                const uid = user.uid;
            }
            else{
                console.log('user is signed out');
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