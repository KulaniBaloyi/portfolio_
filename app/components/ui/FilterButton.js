"use client"
import { useEffect, useState } from "react"

import useFilter from "@/actions/use-filter"

const FilterButton = () => {
  const [isMounted,setIsMounted] =useState(false)
  const filter = useFilter(state=>state.filter)
  const toggleFilter = useFilter(state=>state.toggleFilter)

useEffect(()=>{
  setIsMounted(true)

},[])

if(!isMounted)return

  return (
    <>
    <div className="border hover:bg-[#F7AB0A] transition-colors duration-500 cursor-pointer border-[#f7ac0aca] h-16 rounded-sm w-40 grid place-content-center">
    <div className="flex gap-2 items-center cursor-pointer"  onClick={()=>toggleFilter()}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 cursor-pointer">
    <path d="M10 3.75a2 2 0 10-4 0 2 2 0 004 0zM17.25 4.5a.75.75 0 000-1.5h-5.5a.75.75 0 000 1.5h5.5zM5 3.75a.75.75 0 01-.75.75h-1.5a.75.75 0 010-1.5h1.5a.75.75 0 01.75.75zM4.25 17a.75.75 0 000-1.5h-1.5a.75.75 0 000 1.5h1.5zM17.25 17a.75.75 0 000-1.5h-5.5a.75.75 0 000 1.5h5.5zM9 10a.75.75 0 01-.75.75h-5.5a.75.75 0 010-1.5h5.5A.75.75 0 019 10zM17.25 10.75a.75.75 0 000-1.5h-1.5a.75.75 0 000 1.5h1.5zM14 10a2 2 0 10-4 0 2 2 0 004 0zM10 16.25a2 2 0 10-4 0 2 2 0 004 0z" />
  </svg>
  <h2>Filters</h2>
  
  
    </div>
       
      </div>
    
    {filter&&<div className="grid grid-cols-1 md:grid-cols-2  gap-5 mx-[5%] transition-all duration-1000">
  <div className="w-full flex flex-col space-y-4 ">
   
    <h2 className="tracking-[5px] text-lg">Status</h2>
    <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 w-full gap-5 px-5 ">
      <div className="w-full h-12 aspect-video border border-cyan-800 rounded-sm grid place-content-center text-sm">
        <div className="flex gap-2">
          <h2>All</h2>
        </div>
      </div>
      <div className="w-full h-12 aspect-video border border-cyan-800 rounded-sm grid place-content-center text-sm">Upcoming</div>
      <div className="w-full h-12 aspect-video border border-cyan-800 rounded-sm grid place-content-center text-sm">Finished</div>
      <div className="w-full h-12 aspect-video border border-cyan-800 rounded-sm grid place-content-center text-sm">Deployed</div>
    </div>
  </div>
  <div className="w-full flex flex-col space-y-4">
    <h2 className="tracking-[5px] text-lg">Tech</h2>
    <div className="flex w-full gap-5 px-5 ">
      <div className="w-full h-12 aspect-video border border-cyan-800 rounded-sm grid place-content-center text-sm">Database</div>
      <div className="w-full h-12 aspect-video border border-cyan-800 rounded-sm grid place-content-center text-sm">API</div>
      <div className="w-full h-12 aspect-video text-xs uppercase text-white grid place-content-center bg-cyan-800 rounded-sm">Apply</div>
    </div>
  </div>
</div>}
    
    </>
    
  )
}

export default FilterButton