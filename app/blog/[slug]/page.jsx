import React from 'react'

const Page = ({params}) => {
    
  return (
    <div className='min-h-screen grid place-content-center text-3xl'>Individual Blog Page for {decodeURIComponent(params.slug)}</div>
  )
}

export default Page