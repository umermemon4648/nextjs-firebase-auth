import React from 'react'
import { useRouter } from 'next/router'

const blogNo = () => {
    const router = useRouter()
    const blogno = router.query.blogNo
    // console.log(typeof(blogno))
    // alert(typeof(blogno))
  return (
    <>
    <h1>This is blog no: {blogno}</h1>
    </>
  )
}

export default blogNo