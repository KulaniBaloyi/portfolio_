'use client'

import Image from 'next/image';
//icons
import { FaDocker as Docker, FaNode as Node } from 'react-icons/fa';
import { BsGit as Git } from 'react-icons/bs';
import { SiNextdotjs as Next,SiTypescript as Typescript } from 'react-icons/si';
import { SiPostgresql as Postgres} from 'react-icons/si';
import { SiMongodb as MongoDB,SiPrisma as Prisma } from 'react-icons/si';
import { SiExpress as Express } from 'react-icons/si';
import { FaAngular as Angular,FaJava as Java } from 'react-icons/fa';
import { SiTailwindcss as Tailwind } from 'react-icons/si';
import { FaLinux as Linux } from 'react-icons/fa';
import { SiFirebase as Firebase } from 'react-icons/si';


const Skills = () => {
  return (
    <>
    <section className=' min-w-[300px] flex flex-col space-y-10'>
    <h1 className="section-heading text-center mt-20 tracking-[20px]">Skills</h1>
    <div className="bg-[rgb(35,38,45)] rounded-lg p-10 w-[90%] mx-auto space-y-10 flex flex-col text-white">
     
      <section className=" self-center gradient-border grid grid-cols-2 md:grid-cols-4 gap-10 p-5 ">
         <div className='flex flex-col space-y-4 items-center justify-center rounded-md aspect-video w-full h-full'>
            <Git className='h-10 w-10 text-white'/>
            <h1 className='text-center'>Git</h1>
         </div>
         <div className='relative flex flex-col space-y-4  items-center justify-center rounded-lg w-full h-full'>
           {/* <div className='gradient-overlay'/> */}
           <Linux className='h-10 w-10 text-white z-20'/>
            <h1 className='z-20 text-center'>Linux</h1>
         </div>
         <div className='flex flex-col space-y-4  items-center justify-center rounded-md w-full h-full'>
            <Tailwind className='h-10 w-10 text-white'/>
            <h1 className='text-center'>Tailwind Css</h1>
         </div>

         <div className='flex flex-col space-y-4  items-center justify-center rounded-md w-full h-full'>
            <Express className='h-10 w-10 text-white'/>
            <h1 className='text-center'>Express</h1>
         </div>
         <div className='flex flex-col space-y-4  items-center justify-center rounded-md w-full h-full'>
            <Firebase className='h-10 w-10 text-white'/>
            <h1 className='text-center'>Firebase</h1>
         </div>
         
         <div className='flex flex-col space-y-4  items-center justify-center rounded-md w-full h-full'>
            <Angular className='h-10 w-10 text-white'/>
            <h1 className='text-center'>Angular</h1>
         </div>
         <div className='flex flex-col space-y-4  items-center justify-center rounded-md w-full h-full'>
           <h1 className='font-bold text-3xl'>C#</h1>
            <h1 className='text-center'>C-Sharp</h1>
         </div>
         <div className='flex flex-col space-y-4  items-center justify-center rounded-md w-full h-full'>
            <Docker className='h-10 w-10 text-white'/>
            <h1 className='text-center'>Docker</h1>
         </div>
         <div className='flex flex-col space-y-4  items-center justify-center rounded-md w-full h-full'>
            <Postgres className='h-10 w-10 text-white'/>
            <h1 className='text-center'>Postgres</h1>
         </div>
         <div className='flex flex-col space-y-4 items-center justify-center rounded-md aspect-video w-full h-full'>
            <Prisma className='h-10 w-10 text-white'/>
            <h1 className='text-center'>Prisma</h1>
         </div>
         <div className='flex flex-col space-y-4  items-center justify-center rounded-md w-full h-full'>
            <Next className='h-10 w-10 text-white'/>
            <h1 className='text-center'>Next</h1>
         </div>
         <div className='flex flex-col space-y-4  items-center justify-center rounded-md w-full h-full'>
            <Typescript className='h-10 w-10 text-white'/>
            <h1 className='text-center'>Typescript</h1>
         </div>
         <div className='flex flex-col space-y-4  items-center justify-center rounded-md w-full h-full'>
            <Node className='h-10 w-10 text-white'/>
            <h1 className='text-center'>Node</h1>
         </div>
         <div className='flex flex-col space-y-4  items-center justify-center rounded-md w-full h-full'>
            <MongoDB className='h-10 w-10 text-white'/>
            <h1 className='text-center'>Mongo DB</h1>
         </div>
         <div className='flex flex-col space-y-4  items-center justify-center rounded-md w-full h-full'>
            <Java className='h-10 w-10 text-white'/>
            <h1 className='text-center'>Java</h1>
         </div>
         <div className='flex flex-col space-y-4  items-center justify-center rounded-md w-full h-full'>
            
            <h1 className='text-center text-xxl md:text-2xl lg:text-3xl'>NextAuth</h1>
         </div>
      </section>
    </div>


    </section>
    </>

  );
};

export default Skills;