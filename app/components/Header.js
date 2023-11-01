"use client"
import Image from "next/image"
import Link from "next/link"

import { useState,useEffect } from "react"
import useMenu from "@/actions/use-menu"
import { usePathname } from "next/navigation"


const Header = () => {
  const [isMounted,setIsMounted] = useState(false)
  const [isScrolled,setIsScrolled]= useState(false)
  const openMenu = useMenu(state=>state.onOpen)

  const handleEmailClick = () => {
    const email = 'kulani17@yahoo.com'
    const subject = 'Hi'
    const body = 'Lets get to know one another'
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    window.location.href = mailtoLink;
  }
  useEffect(() => {
    setIsMounted(true)
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100); // Adjust the threshold as needed
    }
  
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }

  }, [])

if(!isMounted)return
  return (
    <>
     <header className={`fixed top-0 left-0 right-0 z-[999] transition-all duration-500 ease-in-out ${isScrolled&&'bg-white border-b shadow-sm'}`}>
      <nav className="flex justify-between items-center p-5">
        <Link href="/">
        <div className="flex items-center gap-[1ch]">
          <div className="w-5 h-5 bg-yellow-400 rounded-full relative overflow-hidden">
            <Image alt={"profile-photo"} fill src={"/profile.jpg"} className="object-cover"/>
          </div>
          <span className="text-sm font-semibold tracking-widest">
            PORTFOLIO
          </span>
        </div>
        </Link>
      
        <div className="lg:flex hidden gap-12 text-md text-zinc-400">
          <Link href="/about" className="text-black font-medium">
           <p>What I do</p>
          </Link>
          <Link href={"/projects"}>
           <p>Projects</p>
          </Link>
          <Link href={"/blog"}>
           <p>Blog</p>
          </Link>
          
           <p className="cursor-pointer" onClick={()=>handleEmailClick()}>Contact</p>
          
        </div>
        <div
          className="cursor-pointer lg:hidden text-md"
          onClick={()=>openMenu()}
        >
          Menu
        </div>
      </nav>
      
       
     
    </header>
   
    </>
   
  )
}

export default Header