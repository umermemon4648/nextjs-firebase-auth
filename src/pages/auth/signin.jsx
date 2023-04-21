import {auth, fbProvider, googleProvider, githubProvider} from '../../config/firebaseConfig'
import {signInWithPopup, signOut} from 'firebase/auth'
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import {AiFillFacebook,AiFillGithub} from 'react-icons/ai'
import {FcGoogle} from 'react-icons/fc'

const signin = () => {
  const router = useRouter();
    const [user, setUser] = useState(null);
    const [saveuser, setSavedUser] = useState(null);


    const googleSignin = async () => {
      try {
        const result = await signInWithPopup(auth, googleProvider);
        const authenticatedUser = result?.user;
        if (authenticatedUser) {
          setUser(localStorage.setItem('user', JSON.stringify(authenticatedUser)))
          router.push('/auth/success');
          console.log("user: ", authenticatedUser);
          console.log("email: ", authenticatedUser.email);
          console.log("displayName: ", authenticatedUser.displayName);
          console.log("photoURL: ", authenticatedUser.photoURL);
        }
      } catch (error) {
        console.log("Google Signin Error: ", error);
      }
    };
    


  //   const signOutHandler =  async()=>{
  //     await signOut(auth)
  //     let authenticatedUser = null
  //     setUser(authenticatedUser);
  //     localUser = localStorage.clear()
  //     alert("Signout SuccessFully")
  // }

    useEffect(()=>{
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        setSavedUser(JSON.parse(storedUser));
      }
    },[])


  return (
    <>
  
  {saveuser? 
(
  <button className='mt-4 mx-auto text-white bg-gray-800 w-[12rem] p-3 font-medium rounded-lg flex align-middle gap-2 hover:bg-gray-700' onClick={()=> router.push('/auth/success')} type="submit">Go to the Dashboard</button>

):
(
  <>
  <div className='w-2/5 mx-auto  shadow-xl mt-32 bg-[#fafafa] p-10 text-gray-700 rounded-lg border-2 '>

<h1 className='text-red-400 text-3xl font-bold underline'>Register your account </h1>

<div className='items-center  flex flex-col gap-4 mt-4'>
  <button className='text-white bg-gray-800 w-1/2 p-3 font-medium rounded-lg flex align-middle gap-2 hover:bg-gray-700' onClick={googleSignin} type="submit">
    <FcGoogle className='text-2xl'/>
    Continue with Google</button>
  
  <button className='text-white bg-gray-800 w-1/2 p-3 font-medium rounded-lg flex align-middle gap-2 hover:bg-gray-700' onClick={googleSignin} type="submit">
    <AiFillFacebook className='text-2xl text-blue-400'/>
    Continue with Facebook</button>

    <button className='text-white bg-gray-800 w-1/2 p-3 font-medium rounded-lg flex align-middle gap-2 hover:bg-gray-700' onClick={googleSignin} type="submit">
    <AiFillGithub className='text-2xl '/>
    Continue with Github</button>

</div>

  <div>
    <p className='mt-3 text-gray-700'>By joining, you agree to our <strong>Terms of Service</strong>  and <strong>Privacy Policy</strong></p>
  </div>
</div>
  </>
)  
  
}






    </>
  )
}

export default signin