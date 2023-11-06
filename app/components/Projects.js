'use client'

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

//icons
const Projects = () => {
  const router = useRouter()
  const handleClick = ()=>{
    router.push('/projects')
  }

  return (
    <>
    <section className='w-[90%] mx-auto min-w-[300px] flex flex-col space-y-10 my-10'>
      
    <div className="flex justify-between items-center">
      <h1 className='font-bold text-5xl'>PROJECTS</h1>
      <button onClick={()=>handleClick()} className="border group border-black p-5 hidden md:flex cursor-pointer relative hover:text-white transition-colors">
        <p className='absolute top-0 bottom-0 left-0 w-0 bg-gray-900 group-hover:w-full transition-all duration-1000 origin-left -z-10 '></p>
       
        VIEW ALL MY PROJECTS</button>
      </div>
   
    <div className=''>
      <ul className='flex flex-col gap-10 lg:gap-32'>
        <li className='grid grid-cols-1 md:grid-cols-2 gap-5'>
        <div className='md:w-[640px] w-full max-w-full py-10 flex flex-col gap-5 rounded-lg justify-center px-5'>
        <h1 className='font-bold text-3xl uppercase'>Botany Boutique</h1>
        <h2 className='text-sm text-gray-300 uppercase'>Fullstack ecommerce app</h2>
        <p className='flex-wrap text-lg'>This is the perfect place to buy plants online, with a wide selection of plants to choose from, including succulents, cacti, and houseplants. We make it easy to find the perfect plants for your home and garden, with detailed descriptions and photos of each plant. We also offer a variety of plant care tips and resources to help you keep your plants healthy and thriving. We ship our plants carefully and securely, so you can be sure that your plants will arrive in perfect condition. And we offer a satisfaction guarantee on all of our plants, so you can shop with confidence.</p>
        <div className='flex flex-col gap-2'>
        <Link href={"https://ecommerce-store-kb.vercel.app/"} target='_blank' className='uppercase font-bold self-start flex items-center gap-2 group relative'>
        
        <h2 className='relative'>
        <p className='h-[2px] w-full rounded-full bg-black absolute -bottom-1 scale-0 group-hover:scale-100 duration-500 origin-left transition-all ease-in-out'></p>LIVE WEBSITE</h2>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-400 group-hover:translate-x-2 duration-500 transition-all ease-in-out">
<path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
</svg>

      </Link>
        <Link href={"https://github.com/KulaniBaloyi/ecommerce-store"} target='_blank' className='uppercase font-bold self-start flex items-center gap-2 group relative'>
        
        <h2 className='relative'>
        <p className='h-[2px] w-full rounded-full bg-black absolute -bottom-1 scale-0 group-hover:scale-100 duration-500 origin-left transition-all ease-in-out'></p>GITHUB</h2>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-400 group-hover:translate-x-2 duration-500 transition-all ease-in-out">
<path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
</svg>

      </Link>
        </div>
       
      </div>
      <div className='order-first w-full aspect-square relative rounded-lg overflow-hidden hover:scale-105 duration-500 transition-all ease-in-out'>
        <Image src={"/organic-products-hero.png"} alt={"boutany-boutique"} fill className='object-contain '/>
      </div>
        </li>
        <li className='grid grid-cols-1 md:grid-cols-2 gap-5'>
        <div className='md:w-[640px] w-full max-w-full py-10 flex flex-col gap-5 rounded-lg justify-center px-5'>
        <h1 className='font-bold text-3xl uppercase'>chess mania</h1>
        <h2 className='text-sm text-gray-300 uppercase'>Chess game</h2>
        <p className='flex-wrap text-lg'>You can play chess against other players from around the world in real time, challenge your friends, or play against a variety of AI opponents, from beginner to grandmaster level. You can also use the premove feature to plan your moves in advance, analyze your games to identify areas for improvement, and track your progress to see how you are stacking up against other players.</p>
        <div className='flex flex-col gap-2'>
        <button className='uppercase font-bold self-start flex items-center gap-2 group relative'>
        
        <h2 className='relative'>
        <p className='h-[2px] w-full rounded-full bg-black absolute -bottom-1 scale-0 group-hover:scale-100 duration-500 origin-left transition-all ease-in-out'></p>LIVE WEBSITE</h2>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-400 group-hover:translate-x-2 duration-500 transition-all ease-in-out">
<path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
</svg>

      </button>
        <button className='uppercase font-bold self-start flex items-center gap-2 group relative'>
        
        <h2 className='relative'>
        <p className='h-[2px] w-full rounded-full bg-black absolute -bottom-1 scale-0 group-hover:scale-100 duration-500 origin-left transition-all ease-in-out'></p>GITHUB</h2>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-400 group-hover:translate-x-2 duration-500 transition-all ease-in-out">
<path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
</svg>

      </button>
        </div>
       
      </div>
      <div className='order-first md:order-2 border w-full aspect-square relative rounded-lg overflow-hidden hover:scale-105 duration-500 transition-all ease-in-out'>
        <Image src={"/png-transparent-queen-surrounded-by-pawns-thumbnail.png"} alt={"cover-image"} fill className='object-cover'/>
      </div>
        </li>
        <li className='grid grid-cols-1 md:grid-cols-2 gap-5'>
        <div className='md:w-[640px] w-full max-w-full py-10 flex flex-col gap-5 rounded-lg justify-center px-5'>
        <h1 className='font-bold text-3xl uppercase'>Silver Screen</h1>
        <h2 className='text-sm text-gray-300 uppercase'>Streaming platform</h2>
        <p className='flex-wrap text-lg'>The app offers a wide selection of movies and TV shows to choose from, including new releases, classics, and award-winning shows. We also have a variety of original content that you can not find anywhere else. Our streaming service is easy to use and affordable, and you can watch on any device, including your TV, computer, phone, or tablet. Plus, we offer a free trial so you can try our service before you commit.</p>
        <div className='flex flex-col gap-2'>
        <button className='uppercase font-bold self-start flex items-center gap-2 group relative'>
        
        <h2 className='relative'>
        <p className='h-[2px] w-full rounded-full bg-black absolute -bottom-1 scale-0 group-hover:scale-100 duration-500 origin-left transition-all ease-in-out'></p>LIVE WEBSITE</h2>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-400 group-hover:translate-x-2 duration-500 transition-all ease-in-out">
<path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
</svg>

      </button>
        <button className='uppercase font-bold self-start flex items-center gap-2 group relative'>
        
        <h2 className='relative'>
        <p className='h-[2px] w-full rounded-full bg-black absolute -bottom-1 scale-0 group-hover:scale-100 duration-500 origin-left transition-all ease-in-out'></p>GITHUB</h2>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-400 group-hover:translate-x-2 duration-500 transition-all ease-in-out">
<path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
</svg>

      </button>
        </div>
       
      </div>
      <div className='order-first border w-full aspect-square relative rounded-lg overflow-hidden hover:scale-105 duration-500 transition-all ease-in-out'>
        <Image src={"/movie-poster.jpg"} alt={"cover-image"} fill className='object-cover'/>
      </div>
        </li>
        <li className='grid grid-cols-1 md:grid-cols-2 gap-5'>
        <div className='md:w-[640px] w-full max-w-full py-10 flex flex-col gap-5 rounded-lg justify-center px-5'>
        <h1 className='font-bold text-3xl uppercase'>Bill Buster</h1>
        <h2 className='text-sm text-gray-300 uppercase'>Invoice App</h2>
        <p className='flex-wrap text-lg'>A clean — modular, and easy-to-use invoice app that includes everything you need to get paid faster. You can create and send professional invoices in minutes, track your payments, expenses, and sales performance, and stay organized and on top of your finances.</p>
        <div className='flex flex-col gap-2'>
        <button className='uppercase font-bold self-start flex items-center gap-2 group relative'>
        
        <h2 className='relative'>
        <p className='h-[2px] w-full rounded-full bg-black absolute -bottom-1 scale-0 group-hover:scale-100 duration-500 origin-left transition-all ease-in-out'></p>LIVE WEBSITE</h2>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-400 group-hover:translate-x-2 duration-500 transition-all ease-in-out">
<path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
</svg>

      </button>
        <button className='uppercase font-bold self-start flex items-center gap-2 group relative'>
        
        <h2 className='relative'>
        <p className='h-[2px] w-full rounded-full bg-black absolute -bottom-1 scale-0 group-hover:scale-100 duration-500 origin-left transition-all ease-in-out'></p>GITHUB</h2>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-400 group-hover:translate-x-2 duration-500 transition-all ease-in-out">
<path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
</svg>

      </button>
        </div>
       
      </div>
      <div className='order-first md:order-2 border w-full aspect-square relative rounded-lg overflow-hidden hover:scale-105 duration-500 transition-all ease-in-out'>
        <Image src={"/invoice.jpg"} alt={"cover-image"} fill className='object-cover'/>
      </div>
        </li>
        <button onClick={()=>handleClick()} className="md:hidden border p-5 cursor-pointer bg-white">VIEW ALL MY PROJECTS</button>
      </ul>
    
      
    
    </div>
    


    </section>
    </>

  );
};

export default Projects