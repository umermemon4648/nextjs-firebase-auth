import {auth, fbProvider, googleProvider, githubProvider} from '../../config/firebaseConfig'
import {signInWithPopup, signOut} from 'firebase/auth'
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const success = () => {
  
  const router = useRouter();
    const [user, setUser] = useState(null);


    const signOutHandler =  async()=>{
        await signOut(auth)
        localStorage.clear()
        router.push('/auth/signin')
        alert("Signout SuccessFully")
        
    }

    useEffect(()=>{
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    },[])

  return (
    <>
    <h1>Firebase Signin Successfully</h1>

    <button className='mt-4 mx-auto text-white bg-gray-800 w-[10rem] p-3 font-medium rounded-lg flex align-middle gap-2 hover:bg-gray-700' onClick={signOutHandler} type="submit">Sign Out</button>

{user? (
<>
<h1>Email: {user.email}</h1>
<h1>Name: {user.displayName}</h1>
<img src={user.photoURL} width="100px" height="100px" alt="AVATAR"  />
</>
):
 (
<>
<h1>No User Found</h1>
</>
 )

}
    
    
    </>
  )
}

export default success