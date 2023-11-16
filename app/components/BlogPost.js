"use client"
import Image from "next/image"
import { useRouter } from "next/navigation"

const BlogPost = ({id,title,coverImage,readTime,slug,summary}) => {
  const router = useRouter()
  const handleSlug= (route)=>{

   const d = router.push(`/blog/${route}`)

  }
  console.log(coverImage)
  return (
<article onClick={() => handleSlug(slug)} className=" w-full h-full duration-500 ease-in-out transition-all flex flex-col overflow-hidden cursor-pointer">
  <section className="bg-gray-200 w-full h-full aspect-video relative overflow-hidden">
    <Image fill src={`https://${coverImage}`} alt={title} className="object-cover origin-center" />
  </section>
  <section className=" h-full  py-5 flex flex-col gap-10 overflow-hidden ">
    <h1 className="text-cyan-500 uppercase font-semibold leading-[1.5em] text-lg">Blog post</h1>
    <h1 className="text-3xl font-semibold leading-[1em] text-[#17212b]">{title}</h1>
    <h2 className="text-[#707070] text-lg font-normal opacity-70 overflow-hidden text-ellipsis ">{summary}</h2>
  </section>
</article>
   
  )
}

export default BlogPost