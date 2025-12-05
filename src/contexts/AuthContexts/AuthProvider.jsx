import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../../firebase/firebase.init';
const googleprovider=new GoogleAuthProvider

const AuthProvider = ({ children }) => {
  const [user,setUser]=useState(null)
  const [loding,setLoding]=useState(true)

    const registerUser=(email,password)=>{
        setLoding(true)
     return createUserWithEmailAndPassword(auth,email,password)
    }
   
    const signInUser=(email,password)=>{
         setLoding(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const SignInGoogle=()=>{
         setLoding(true)
        return signInWithPopup(auth,googleprovider)
    }

   const logout=()=>{
    setLoding(true)
    return signOut(auth)
   }

   const updateUserProfile=(profile)=>{
    return updateProfile(auth.currentUser,profile)
   }

useEffect(()=>{
    const unSubscribe=onAuthStateChanged(auth,(currentUser)=>{
         setUser(currentUser);
         setLoding(false)
    })
    return()=>{
        unSubscribe()
    }
},[])

    const authInfo = {
        user,
        loding,
     registerUser,
     signInUser,
      SignInGoogle,
      logout,
     updateUserProfile
    }


    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;