import {auth, fbProvider, googleProvider, githubProvider} from '../../config/firebaseConfig'
const signin = () => {
    console.log("auth: ",auth)
    console.log("googleProvider: ",googleProvider)
  return (
    <div>signin</div>
  )
}

export default signin