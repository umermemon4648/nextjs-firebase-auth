import Link from "next/link"
const Navbar = () => {
  return (

    <>
    
        
    <nav>
        <ul>
            <Link href="/auth/signin"><li >Sign in</li></Link>
            <Link href="/product"><li >Product</li></Link>
            <Link href="/contact"><li >Contact</li></Link>
        </ul>
    </nav>

    

    </>
  )
}

export default Navbar