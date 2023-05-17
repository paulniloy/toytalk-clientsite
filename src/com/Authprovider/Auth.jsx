import React, { createContext, useEffect } from 'react';
import app from "../../../firebase.config"
import { GoogleAuthProvider, getAuth, onAuthStateChanged, signInWithPopup } from "firebase/auth";



export const Authcontext = createContext(null);
const auth = getAuth(app);

const Auth = ({children}) => {


    const google = () => {
        const provider = new GoogleAuthProvider();
        return signInWithPopup(auth, provider)
    }

    const authinfo = {
        google
    }

    useEffect(()=>{
        const unsubscribe =  onAuthStateChanged(auth, (loggeduser)=>{
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