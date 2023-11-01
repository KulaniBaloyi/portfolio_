"use client"
import Link from "next/link"
import Image from "next/image"
import {FaLinkedinIn as LinkedIn} from 'react-icons/fa'
import {BsGithub as Github,BsTwitter as Twitter,} from 'react-icons/bs'

const About = () => {
  const handleEmailClick = () => {
    const email = 'kulani17@yahoo.com'
    const subject = 'Hi'
    const body = 'Lets get to know one another'
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    window.location.href = mailtoLink;
  }
  return (
    <>
    <section className="my-10 flex flex-col space-y-10 min-w-[300px] w-[90%] mx-auto ">
    <h1 className='font-bold text-5xl'>ABOUT ME</h1>
    <section className="bg-[rgb(35,38,45)] rounded-lg border border-[rgb(84,88,100)] flex flex-col items-center space-y-5 gap-10 p-5 lg:flex-row">
      
        <div className=" overflow-hidden flex-1 relative  rounded-xl  min-w-[200px] min-h-[200px] sm:min-w-[300px] sm:min-h-[300px] md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[40pm0px] -skew-x-1 -skew-y-1 -rotate-1 ">
            <Image src='/profile.jpg' className="object-cover" alt='profile pic' fill priority/>
        </div>
     
      <div className="flex-1 flex flex-col items-start space-y-4 p-10 text-[rgb(191,193,201)] font-monospace">
        <h1 className="text-3xl text-yellow-500 ">Hi </h1>
        <section className="flex flex-col space-y-4 no-select">
           <p>My name is <span className="rounded-sm p-1 bg-yellow-500 text-black">Kulani Baloyi</span></p>
            <p> I am a highly motivated individual with a strong passion for learning and a natural curiosity. </p>
            <p>I am dedicated to exploring diverse subjects and expanding my knowledge.</p>
     
           
        </section>
       
            <Link className="hover:bg-white hover:text-[rgb(23,25,30)] rounded-md px-2 py-1 bg-inherit border-white border text-sm uppercase transition-all duration-300" href='/about'>Read More.</Link>

    
        <ul className="flex space-x-4">
        <Link href={"https://www.linkedin.com/in/kulani-baloyi-608362212/"} target='_blank'>
        <li className="rounded-md shadow-sm shadow-[rgb(84,88,100)] hover:shadow-blue-500 hover:bg-blue-500 transition-all duration-500 p-2"><LinkedIn className="text-inherit h-6 w-6 " /></li>
        </Link>
        <Link href={"https://github.com/KulaniBaloyi"} target={'_blank'}>
        <li className="rounded-md shadow-sm shadow-[rgb(84,88,100)] hover:shadow-blue-500 hover:bg-blue-500 transition-all duration-500 p-2"><Github className="text-inherit h-6 w-6" /></li>
        </Link>
        <Link href="https://twitter.com/Kulani_17" target='_blank'>
        <li className="rounded-md shadow-sm shadow-[rgb(84,88,100)] hover:shadow-blue-500 hover:bg-blue-500 transition-all duration-500 p-2"><Twitter className="text-inherit h-6 w-6" /></li>
        </Link>
        </ul>
        <div className="flex flex-col space-y-5">
       
          <h2>Email: <span onClick={()=>handleEmailClick()} className="text-blue-500 cursor-pointer">kulani17@yahoo.com</span></h2>
        </div>
      </div>
      
    </section>
    </section>
    </>
    
  )
}

export default About