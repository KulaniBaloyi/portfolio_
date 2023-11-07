import React from 'react'

const Page = ({params}) => {
  const slug = decodeURIComponent(params.slug)
  const title = slug.replace(/-/g, " ")
    
  return (
    <div className='min-h-screen grid place-content-center text-3xl'>Individual Blog Page for {title}</div>
  )
}

export default Page