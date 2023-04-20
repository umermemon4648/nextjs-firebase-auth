import {auth, fbProvider, googleProvider, githubProvider} from '../../config/firebaseConfig'
import {signInWithPopup, signOut} from 'firebase/auth'
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const success = () => {
  
  const router = useRouter();
    const [user, setUser] = useState(null);


    const signOutHandler =  async()=>{
        await signOut(auth)
        // console.log("result: ",result)
        let authenticatedUser = null
        setUser(authenticatedUser);
        localStorage.clear()
        router.push('/auth/signin')
        alert("Signout SuccessFully")
        
    }

  return (
    <>
    <h1>Firebase Signin Successfully</h1>

    <button onClick={signOutHandler} type="submit">Sign Out</button>
    
    
    </>
  )
}

export default success