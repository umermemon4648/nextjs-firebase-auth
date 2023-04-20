import {auth, fbProvider, googleProvider, githubProvider} from '../../config/firebaseConfig'
import {signInWithPopup, signOut} from 'firebase/auth'
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const signin = () => {
  const router = useRouter();
    const [user, setUser] = useState(null);

    const googleSignin = async () => {
      try {
        const result = await signInWithPopup(auth, googleProvider);
        const authenticatedUser = result?.user;
        if (authenticatedUser) {
          setUser(authenticatedUser);
          router.push('/auth/success');
          localStorage.setItem('user', JSON.stringify(authenticatedUser))
          console.log("user: ", authenticatedUser);
          console.log("email: ", authenticatedUser.email);
          console.log("displayName: ", authenticatedUser.displayName);
          console.log("photoURL: ", authenticatedUser.photoURL);
        }
      } catch (error) {
        console.log("Google Signin Error: ", error);
      }
    };
    


    const signOutHandler =  async()=>{
      await signOut(auth)
      // console.log("result: ",result)
      let authenticatedUser = null
      setUser(authenticatedUser);
      localStorage.clear()
      alert("Signout SuccessFully")
      
  }

    useEffect(()=>{
      // googleSignin()
      // signOutHandler()
      console.log('useeffect: ', user)
    },[])


  return (
    <>
    
    {/* <div>signin</div> */}

    {user ? (
  <button onClick={signOutHandler} type="submit">Sign Out</button>
) : (
  <button onClick={googleSignin} type="submit">Sign in with Google</button>
)}

    
    </>
  )
}

export default signin