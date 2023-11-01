
const ProjectCard = ({title,summary,github,live,category}) => {
  return (
    <>
    <li>
    <div className="border rounded-lg md:w-[640px] w-full max-w-full aspect-square bg-gray-400"></div>
    <div className="flex flex-col gap-5 p-2 py-5">
      <h1 className="font-bold text-xl uppercase">{title}</h1>
      <h2 className="text-gray-600 text-xs uppercase">{category}</h2>
      <p className="flex-wrap text-base leading-7">{summary}</p>
      <div className="text-sm flex flex-col gap-2">
  <button className='uppercase font-bold self-start flex items-center gap-2 group'>
    <h2 className="relative ">
    <p className='h-[2px] w-full rounded-full bg-black absolute -bottom-1 scale-0 group-hover:scale-100 duration-500 origin-left transition-all ease-in-out'></p>
      LIVE WEBSITE</h2>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-400 group-hover:translate-x-2 duration-500 transition-all ease-in-out">
<path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
</svg>

  </button>
  <button className='uppercase font-bold self-start flex items-center gap-2 group'>
    <h2 className="relative ">
    <p className='h-[2px] w-full rounded-full bg-black absolute -bottom-1 scale-0 group-hover:scale-100 duration-500 origin-left transition-all ease-in-out'></p>
      GITHUB</h2>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-400 group-hover:translate-x-2 duration-500 transition-all ease-in-out">
<path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
</svg>

  </button>
  </div>
 
    </div>
    </li>
    </>
    
  )
}

export default ProjectCard