
import Image from "next/image"
import BlogPost from "../components/BlogPost"


export default async function Blog () {
  
  return (
  <div className="min-h-screen  mt-[5.2rem] m-auto  w-[90%] lg:w-[80%] flex flex-col">
    <section className="rounded-sm relative overflow-hidden h-[300px] lg:h-[500px] w-full">
      <Image className="object-cover" fill alt="blog-cover-image" src={"/pexels-juan-alvarado-18113138.jpg"}/>
    </section>
    <section className="w-full my-10">
          <div className="flex items-center flex-wrap gap-5 justify-center uppercase font-bold text-xs">
            <p className="">Filter by:</p>
            <p className="rounded-full cursor-pointer text-white bg-amber-500 p-1 px-2">Show All</p>
            <p className=" rounded-full cursor-pointer text-[rgb(74,85,104)] bg-[rgb(237,242,247)] p-1 px-2">Release</p>
            <p className="rounded-full cursor-pointer text-[rgb(74,85,104)] bg-[rgb(237,242,247)] p-1 px-2">Databases</p>
            <p className="rounded-full cursor-pointer text-[rgb(74,85,104)] bg-[rgb(237,242,247)] p-1 px-2">CSS</p>
            <p className="rounded-full cursor-pointer text-[rgb(74,85,104)] bg-[rgb(237,242,247)] p-1 px-2">Algorithms</p>
            <p className="rounded-full cursor-pointer text-[rgb(74,85,104)] bg-[rgb(237,242,247)] p-1 px-2">Security</p>
            <p className="rounded-full cursor-pointer text-[rgb(74,85,104)] bg-[rgb(237,242,247)] p-1 px-2">Cloud Computing</p>
            <p className="rounded-full cursor-pointer text-[rgb(74,85,104)] bg-[rgb(237,242,247)] p-1 px-2">Kubernetes</p>
            <p className="rounded-full cursor-pointer text-[rgb(74,85,104)] bg-[rgb(237,242,247)] p-1 px-2">Golang</p>
            <p className="rounded-full cursor-pointer text-[rgb(74,85,104)] bg-[rgb(237,242,247)] p-1 px-2">Authentication</p>
            <p className="rounded-full cursor-pointer text-[rgb(74,85,104)] bg-[rgb(237,242,247)] p-1 px-2">Artificial Intelligence</p>

          </div>
        </section>
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-10 md:gap-5 my-10">
            <BlogPost/>
            <BlogPost/>
            <BlogPost/>
            <BlogPost/>
            <BlogPost/>
            <BlogPost/>
          
        </section>
        <button className="px-4 py-2 rounded-md border border-gray-800 text-gray-800 self-center my-5">View</button>
  </div>
  )
}
