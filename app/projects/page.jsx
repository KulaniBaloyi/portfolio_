import { client } from "@/lib/contentful"

const Projects = async() => {

  
  return (
    <div className='min-w-[300px] flex flex-col space-y-10 pb-10  w-[90%] lg:w-[80%] m-auto mt-[5.2rem]'>

        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 ">
          
            <div className="border rounded-sm w-full aspect-square"></div>
            <div className="border rounded-sm w-full aspect-square"></div>
            <div className="border rounded-sm w-full aspect-square"></div>
            <div className="border rounded-sm w-full aspect-square"></div>
            <div className="border rounded-sm w-full aspect-square"></div>
            <div className="border rounded-sm w-full aspect-square"></div>
        </section>
    </div>
  )
}

export default Projects