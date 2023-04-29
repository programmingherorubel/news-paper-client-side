import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase';

export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    const GoogleProcider = new GoogleAuthProvider();
    const [user,setUser]= useState(null)
    const [error,setError]= useState('')
    const [loading,setLoading] = useState(false)
    const auth = getAuth(app);
  
   
    

    // sing in with google 
    const singInWithGoogle = ()=>{
        signInWithPopup(auth, GoogleProcider)
        .then((result)=>{
            const user = result.user;
            setUser(user)
        })
        .then((error)=>{
            const errorMessage = error?.message;
            setError(errorMessage)
        })
    }

    const logout = ()=>{
        signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          });
    }

    // on Auth change 
    useEffect(()=>{
        setLoading(true)
        const unSubscribe = onAuthStateChanged(auth,(user)=>{
            setUser(user)
            setLoading(false)
        })
        return ()=>{
            unSubscribe()
        }
           
    },[])

    // Register 
    const registerUser = (email,password,name,photo) =>{
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const user = result.user;
                setUser(user)

                // update profile 
                updateProfile(auth.currentUser, {
                    displayName: name, 
                    photoURL: photo
                  }).then(() => {
                  }).catch((error) => {
                  });
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage)
            });
    }

    // Login User 
    const LoginUser = (email,password)=>{
        setLoading(true)
        signInWithEmailAndPassword(auth, email, password)
        .then((result) => {
            const user = result.user;
            setUser(user)
            setLoading(false)
        })
        .catch((error) => {
            const errorMessage = error.message;
                setError(errorMessage)
        });
    }

    
    const info = {
        singInWithGoogle,
        error,
        user,
        logout,
        registerUser,
        LoginUser,
        loading
    }
    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;