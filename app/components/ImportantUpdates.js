"use client"

import { useEffect,useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"

const ImportantUpdates = () => {
    const [isMounted,setIsMounted] = useState(false)
    const router = useRouter()

    useEffect(()=>{
        setIsMounted(true)
    },[])
    if(!isMounted)return

  return (
    <section className="my-10 w-[90%] mx-auto">
       <h1 className='font-bold text-5xl'>LIST OF IMPORTANT UPDATES</h1>
        <section className="my-5 py-10">
       
            <ul className="flex flex-col">
                <Link target="_blank" href={"https://www.linkedin.com/in/kulani-baloyi-608362212/"}>
                <li className="py-5 grid grid-cols-6 flex-wrap cursor-pointer gap-2 group border-b">
                <h2 className="col-span-6 lg:col-span-3 font-[500] text-gray-800 text-base ">Information Technology Specialist</h2>
                <p className="col-span-6 lg:col-span-1 lg:place-self-center rounded-md p-1 px-2 text-white bg-[#0a66c2] font-semibold place-self-start">LinkedIn</p>
                <p className="col-span-6 lg:col-span-1 text-gray-500 lg:place-self-center">12/10/2023</p>
                <div className="hidden lg:flex gap-2 items-center font-semibold lg:place-self-end">
                    <p>VIEW</p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className=" text-gray-400 group-hover:translate-x-1 ease-in-out transition-all duration-150 w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                        </svg>

                    </div>
                </li>
                </Link>
                <li className="py-5 grid grid-cols-6 flex-wrap cursor-pointer gap-2 group border-b">
                <h2 className="col-span-6 lg:col-span-3 ffont-[500] text-gray-800 text-base "> The Future of Cybersecurity: How We&apos;re Protecting Ourselves in a Digital World</h2>
                <p className="col-span-6 lg:col-span-1 lg:place-self-center rounded-md p-1 px-2 text-white bg-amber-500 font-semibold place-self-start">Article</p>
                <p className="col-span-6 lg:col-span-1 text-gray-500 lg:place-self-center">Coming Soon!</p>
                <div className="hidden lg:flex gap-2 items-center font-semibold lg:place-self-end">
                    <p>VIEW</p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className=" text-gray-400 group-hover:translate-x-1 ease-in-out transition-all duration-150 w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                        </svg>

                    </div>
                </li>
           
                <li onClick={()=>router.push("/blog/a-comprehensive-guide-to-pointers-in-go")} className="py-5 grid grid-cols-6 flex-wrap cursor-pointer gap-2 group border-b">
                <h2 className="col-span-6 lg:col-span-3 font-[500] text-gray-800 text-base ">A Comprehensive Guide To Pointers in GO</h2>
                    <p className="col-span-6 lg:col-span-1 place-self-start text-white lg:place-self-center bg-gray-800 rounded-md p-1 px-2">Blog</p>
                    <p className="col-span-6 lg:col-span-1 text-gray-500 lg:place-self-center">Coming Soon</p>
                    <div className="hidden lg:flex gap-2 items-center font-semibold lg:place-self-end">
                        <p>VIEW</p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className=" text-gray-400 group-hover:translate-x-1 ease-in-out transition-all duration-150 w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                        </svg>

                    </div>
                </li>
                <li onClick={()=>router.push("/blog/litmus-test")}  className="py-5 grid grid-cols-6 flex-wrap cursor-pointer gap-2 group border-b">
                <h2 className="col-span-6 lg:col-span-3 font-[500] text-gray-800 text-base ">Litmus test</h2>
                <p className="col-span-6 lg:col-span-1 place-self-start text-white lg:place-self-center bg-gray-800 rounded-md p-1 px-2">Blog</p>
                    <p className="col-span-6 lg:col-span-1 text-gray-500 lg:place-self-center">Coming Soon</p>
                    <div className="hidden lg:flex gap-2 items-center font-semibold lg:place-self-end">
                        <p>VIEW</p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="text-gray-400 group-hover:translate-x-1 ease-in-out transition-all duration-150 w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                        </svg>

                    </div>
                </li>
                <li onClick={()=>router.push("/article/cloud-computing-security-how-to-protect-your-data")}  className="py-5 grid grid-cols-6 flex-wrap cursor-pointer gap-2 group border-b">
                <h2 className="col-span-6 lg:col-span-3 font-[500] text-gray-800 text-base ">Cloud Computing Security: How to Protect Your Data</h2>
                <p className="col-span-6 lg:col-span-1 place-self-start text-white lg:place-self-center bg-amber-500 rounded-md p-1 px-2">Article</p>
                    <p className="col-span-6 lg:col-span-1 text-gray-500 lg:place-self-center">Coming Soon</p>
                    <div className="hidden lg:flex gap-2 items-center font-semibold lg:place-self-end">
                        <p>VIEW</p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="text-gray-400 group-hover:translate-x-1 ease-in-out transition-all duration-150 w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                        </svg>

                    </div>
                </li>
                <li onClick={()=>router.push("/blog/dinning-philosophers-problem")}  className="py-5 grid grid-cols-6 flex-wrap cursor-pointer gap-2 group border-b">
                <h2 className="col-span-6 lg:col-span-3 font-[500] text-gray-800 text-base ">Dinning philosiphers problem</h2>
                <p className="col-span-6 lg:col-span-1 place-self-start text-white lg:place-self-center bg-gray-800 rounded-md p-1 px-2">Blog</p>
                    <p className="col-span-6 lg:col-span-1 text-gray-500 lg:place-self-center">Coming Soon</p>
                    <div className="hidden lg:flex gap-2 items-center font-semibold lg:place-self-end">
                        <p>VIEW</p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="text-gray-400 group-hover:translate-x-1 ease-in-out transition-all duration-150 w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                        </svg>
                    </div>
                </li>

                <li onClick={()=>router.push("/blog/travelling-salesman-problem")}  className="py-5 grid grid-cols-6 flex-wrap cursor-pointer gap-2 group border-b">
                <h2 className="col-span-6 lg:col-span-3 font-[500] text-gray-800 text-base ">Travelling Salesman problem</h2>
                <p className="col-span-6 lg:col-span-1 place-self-start text-white lg:place-self-center bg-gray-800 rounded-md p-1 px-2">Blog</p>
                    <p className="col-span-6 lg:col-span-1 text-gray-500 lg:place-self-center">Coming Soon</p>
                    <div className="hidden lg:flex gap-2 items-center font-semibold lg:place-self-end">
                        <p>VIEW</p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="text-gray-400 group-hover:translate-x-1 ease-in-out transition-all duration-150 w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                        </svg>
                    </div>
                </li>
                {/* <li onClick={()=>router.push("/blog/caching in next13")}  className="py-5 grid grid-cols-6 flex-wrap cursor-pointer gap-2 group border-b">
                <h2 className="col-span-6 lg:col-span-3 font-[500] text-gray-800 text-base">Caching in Next 13</h2>
                <p className="col-span-6 lg:col-span-1 place-self-start text-white lg:place-self-center bg-gray-800 rounded-md p-1 px-2">Blog</p>
                    <p className="col-span-6 lg:col-span-1 text-gray-500 lg:place-self-center">Coming Soon</p>
                    <div className="hidden lg:flex gap-2 items-center font-semibold lg:place-self-end">
                        <p>VIEW</p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="text-gray-400 group-hover:translate-x-1 ease-in-out transition-all duration-150 w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                        </svg>

                    </div>
                </li> */}
                
         
              
            
                
            </ul>
        </section>
    </section>
  )
}

export default ImportantUpdates