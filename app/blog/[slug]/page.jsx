import { client } from "@/lib/contentful"
import Image from "next/image"


const IndividualBlog = async({params}) => {
  let data
  const slug = decodeURIComponent(params.slug)
  const title = slug.replace(/-/g, " ")
 
  const id = params.id

//   try{
//     const res = await client.getEntries({
//       'content_type': "BlogPost",
//       'fields.slug[in]': "the-future-of-cybersecurity-how-were-protecting-ourselves-in-a-digital-world",
    
//   })
//   console.log("slug : ", res)
// }  
// catch(err){
//  console.log("something went wrong!!!", err)

//   }
 
  return (
    <div className='min-h-screen flex flex-col mt-[5.2rem] gap-10 text-3xl w-[90%]  lg:w-4/5 mx-auto pb-10'>
      <h1 className="leading-[1.5em] text-5xl font-bold text-center mt-[1em] capitalize">{title}</h1>
      <section className="h-[500px] w-full relative border rounded-lg bg-neutral-950/10">
        {/* <Image fill src={data[0]?.coverImage} alt={data[0].title}/> */}
      </section>
    </div>
  )
}

export default IndividualBlog

