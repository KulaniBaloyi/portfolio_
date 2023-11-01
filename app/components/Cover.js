'use client'
import Link from 'next/link'
import { Cursor,useTypewriter } from 'react-simple-typewriter'
//icons


const Cover = () => {
  const [text,count]= useTypewriter({
    words:[
      "Innovator",
      "Coffee-lover.tsx",
      "<Guy who likes to code/>",
      "npm i awesomeness",
      "Problem Solver"
    ],
    loop:true,
    delaySpeed:2000,

  })
  return (

    <section className='relative w-full '>
     

      <div className='h-[100dvh]  w-full mx-auto flex items-center justify-center relative'>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className=" absolute animate-bounce text-neutral-500 bottom-5 w-5 h-5">
  <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
</svg>
 
        <div className='flex flex-col gap-4 items-center'>
          <h2 className='sm:self-start tracking-[.3em] md:text-[calc((18/16)*1rem)] text-sm font-semibold' >KULANI BALOYI</h2>
      
     <h2 className='tracking-[20px] text-center font-bold text-xl md:text-3xl lg:text-5xl name-heading '>SOFTWARE ENGINEER</h2>
  <h2>
      
   <span className='text-sky-500 text-2xl'>{text}</span>
   <Cursor cursorColor='#dc2626'/>
    </h2>
    


        </div>

      </div>
    </section>
  )
}


export default Cover

