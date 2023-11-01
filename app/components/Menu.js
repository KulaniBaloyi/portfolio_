'use client'
import { useState,useEffect } from "react"
import Link from "next/link"
import { motion,AnimatePresence } from "framer-motion"
import useMenu from "@/actions/use-menu"
import { useRouter } from "next/navigation"


const navLinks = [
  { title: "What I do", href: "/about" },
  { title: "Projects", href: "/projects" },
  { title: "Blog", href: "/blog" },
  { title: "Contact", href: "/contact" },
];
const handleEmailClick = () => {
  const email = 'kulani17@yahoo.com'
  const subject = 'Hi'
  const body = 'Lets get to know one another'
  const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  window.location.href = mailtoLink;
}

const Menu = () => {
  

  const isOpen = useMenu(state=>state.isOpen)
  const close = useMenu((state)=>state.onClose)
 


  const menuVars = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        delay: 0.5,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };
  const containerVars = {
    initial: {
      transition: {
        staggerChildren: 0.09,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.09,
        staggerDirection: 1,
      },
    },
  };

  if(!isOpen)return

  return (

    <AnimatePresence>
          <motion.div
            variants={menuVars}
            initial="initial"
            animate="animate"
            exit="exit"
            className="z-[999] fixed left-0 top-0 w-full h-screen origin-top bg-yellow-400 text-black p-10"
          >
            <div className="flex h-full flex-col">
              <div className="flex justify-between">
                <h1 className="text-lg text-black">Portfolio</h1>
                <p
                  className="cursor-pointer text-md"
                  onClick={()=>close()}
                >
                  Close
                </p>
              </div>
              <motion.div
                variants={containerVars}
                initial="initial"
                animate="open"
                exit="initial"
                className="flex flex-col h-full justify-center font-lora items-center gap-4 "
              >
                {navLinks.map((link, index) => {
                  return (
                    <div key={index} className="overflow-hidden">
                      <MobileNavLink
                        key={index}
                        title={link.title}
                        href={link.href}
                      />
                    </div>
                  );
                })}
              </motion.div>
            </div>
          </motion.div>
           </AnimatePresence>
  )}

export default Menu

const mobileLinkVars = {
  initial: {
    y: "30vh",
    transition: {
      duration: 0.5,
      ease: [0.37, 0, 0.63, 1],
    },
  },
  open: {
    y: 0,
    transition: {
      ease: [0, 0.55, 0.45, 1],
      duration: 0.7,
    },
  },
};


const MobileNavLink = ({ title, href }) => {
  const close = useMenu((state)=>state.onClose)
  
  const router = useRouter();

  const onLinkClick = () => {
   
   if(href=="/contact"){
    handleEmailClick()
    close()

   }
   
    if(href!=="/contact"){
      close();
      router.push(`${href}`);

    }
  
  };

  return (
    <motion.div
      variants={mobileLinkVars}
      className="text-5xl uppercase text-black"
      href={href}
    >
      <p className="cursor-pointer" onClick={onLinkClick}>
        {title}
      </p>
      {/* <Link  href={href}>{title}</Link> */}
    </motion.div>
  );
};