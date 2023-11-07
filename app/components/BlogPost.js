"use client"
import Image from "next/image"
import { useRouter } from "next/navigation"

const BlogPost = ({id,title,coverImage,readTime,slug}) => {
  const router = useRouter()
  const handleSlug= (route)=>{
    router.push(`/blog/${route}`)
  }
  return (
    <article onClick={()=>handleSlug(slug)} className="rounded-lg border flex flex-col overflow-hidden cursor-pointer">
         <section className=" bg-gray-200 w-full h-full aspect-video relative">
          <Image fill src={`https://${coverImage}`} alt={title} className="object-cover origin-center"/>
         </section>
         <section className="bg-white p-5 flex flex-col gap-5">
            <h1>{title}</h1>
            <h2>{readTime}</h2>
            
         </section>
    </article>
   
  )
}

export default BlogPost