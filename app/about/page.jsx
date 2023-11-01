//ABOUT PAGE
"use client"
import { useEffect,useState } from 'react'
// import moment from 'moment-timezone'
import Link from 'next/link'
import moment from 'moment-timezone'
//icons
import {FaLinkedinIn as LinkedIn,FaDocker as Docker,FaChess as Chess} from 'react-icons/fa'
import {BsGithub as Github,BsTwitter as Twitter,BsSpotify as Spotify} from 'react-icons/bs'
import {MdSportsCricket as Cricket} from 'react-icons/md'

const About = () => {
     const [midrandTime, setMidrandTime] = useState('')
    const handleDownload = () => {
        const fileUrl = '/CV.pdf'; // Update the file name if necessary
    
        window.open(fileUrl, '_blank')
      }

     

  useEffect(() => {
    const interval = setInterval(() => {
      const time = moment().tz('Africa/Johannesburg').format('HH:mm:ss');
      setMidrandTime(time);
    }, 1000); // Update every second

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  
  return (
    <main className=" min-w-[300px] flex flex-col space-y-10 pb-10  w-[90%] lg:w-[80%] m-auto mt-[5.2rem]">       
      <h1 className='font-bold text-5xl uppercase'>who am i?</h1>

        <section className='shadow-sm bg-white text-black rounded-xl flex flex-col items-start space-y-4 no-select p-5 lg:p-20'>
            <p className='font-bold text-3xl'>Hi</p>
            <p> Like most self-proclaimed developers, I thoroughly enjoy the thrill of coding, solving puzzles, and unraveling riddles.</p>
            <p>When I&apos;m not glued to the screen, you can find me seeking solace in nature and indulging in physical activities—because let&apos;s face it, we all need a break from the virtual world. I try to maintain a healthy lifestyle.</p>
            <p>Although I may claim to be boring, I strive to inject some wit and humor into the code I write, ensuring that even the most mundane tasks have a touch of entertainment. </p>
            <p>Join me on this exciting journey as I transform complex problems into elegant solutions and let laughter be the syntax of our success!</p>
            <button onClick={()=>handleDownload()}  className="hover:bg-white   rounded-md px-4 text-black py-2 bg-gradient-to-r from-yellow-700 to-yellow-300 text-sm uppercase">Download CV</button>
    
        </section>
        <section className="bg-white rounded-xl border p-10 flex flex-col space-y-20">
            <div>
                <h1 className="font-bold text-2xl mb-4 text-black">Social</h1>
                <div className="flex gap-4 flex-wrap">
                <Link href={"https://www.linkedin.com/in/kulani-baloyi-608362212/"} target='_blank'>
                    <div className="bg-[#0077b5] rounded-2xl aspect-square w-24 text-white grid place-content-center">
                            <LinkedIn className='h-6 w-6 text-white'/>
                    </div>
                </Link>
                <Link href={"https://github.com/KulaniBaloyi"} target={'_blank'}>
                    <div className="bg-[#24292f] rounded-2xl aspect-square w-24 text-white grid place-content-center">
                        <Github className='h-6 w-6 text-white'/>
                    </div>
                </Link>
                <Link href="https://twitter.com/Kulani_17" target='_blank'>
                    <div className="bg-[#00acee] rounded-2xl  aspect-square w-24 text-white grid place-content-center">

                    <Twitter className='h-6 w-6 text-white'/>
                    </div>
                </Link>
                <Link href={'https://hub.docker.com/u/kulanibaloyi'} target='_blank'>
                    <div className="bg-[#003f8c] rounded-2xl  aspect-square w-24 text-white grid place-content-center">
                    <Docker className='h-6 w-6 text-white'/>
                    </div>
                </Link>

                </div>
            </div>
            {/** */}
            <div className='my-5 text-black flex flex-col items-start space-y-2'>
                <h1 className="font-bold text-2xl mb-2 text-black">Where I live</h1>
               <h1>Johannesburg, South Africa</h1>
               <div className='rounded-md p-2 border bg-gray-700 text-white'>
                <p>{midrandTime}</p> 
               </div>
            </div>
            {/** */}
            <div className='my-5'>
        
                <h1 className="font-bold text-2xl mb-4 text-black">Languages I speak</h1>
                <div className="flex space-x-2 text-black">
                    <h2 className=" rounded-md p-2 border ">
                        English
                    </h2>
                    <h2 className=" rounded-md p-2 border ">
                        Xitsonga
                    </h2>
                    <h2 className=" rounded-md p-2 border ">
                        Afrikaans
                    </h2>
                    

                </div>
            </div>
            {/** */}
            <div className=''>
                <h1 className="font-bold text-2xl mb-4 text-black">Hobbies & Interests</h1>
                <div className="flex flex-wrap gap-4 text-black">
                    
                    <Link href='https://www.espncricinfo.com/cricketers/kulani-baloyi-596475' target='_blank'>
                    <div className="bg-[rgb(3,169,244)] rounded-md aspect-square w-24 text-white grid place-content-center">
                    <Cricket className='h-6 w-6 text-white'/>
                    </div>
                    <h2 className='text-center mt-1'>Cricket</h2>
                    </Link>
                    <Link href='https://www.chess.com/member/kulani17' target='_blank'>
                    <div className="bg-[#7fa650] rounded-md aspect-square w-24 text-white grid place-content-center">
                    <Chess className='h-6 w-6 text-white'/>
                    </div>
                    <h2 className='text-center mt-1'>Chess</h2>
                    </Link>

                    <div>
                    <div className='bg-amber-500 rounded-md aspect-square h-24 w-24 text-white grid place-content-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                    </svg>

                    </div>
                    <h2 className='text-center mt-1'>Reading</h2>
                    </div>
                    
                    <div>
                    <div className="bg-[#1fdf64] rounded-md aspect-square h-24 w-24 text-white grid place-content-center">
                    <Spotify className='h-6 w-6 text-white'/>
                    </div>
                    <h2 className='text-center mt-1'>Music</h2>
                  
                    </div>
                    
                    
                
                

                </div>
            </div>
          
            {/** */}
            
    
            
        </section>
    </main>
  )
}

export default About