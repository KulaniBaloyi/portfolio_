import { client } from "@/lib/contentful"
import Image from "next/image"


const Page = async({params}) => {
  let data
  const slug = decodeURIComponent(params.slug)
  const title = slug.replace(/-/g, " ")
 
  const id = params.id

  try{
    const res = await client.getEntry(`${slug}`)
    console.log("response: ", res)
    data = res?.items.map((item)=>{
      const {sys,fields}=item
      const {id} =sys
     //  console.log("fields: ",fields)
      const title = fields.title
      const slug = fields.slug
      const readTime = fields.readTime
      const coverImage = fields.coverImage.fields.file.url
      const blog = {id,title,readTime,coverImage,slug}
     //  console.log("blog: ", blog)
  
     
       return (
         blog
       )
       
     })
     


  }catch(err){

  }
  console.log('data: ', data)
    
  return (
    <div className='min-h-screen flex flex-col mt-[5.2rem] gap-10 text-3xl w-[90%]  lg:w-4/5 mx-auto'>
      <h1 className="leading-[1.5em] text-4xl font-bold text-center mt-[1em]">{title}</h1>
      <section className="h-[500px] w-full relative border rounded-lg bg-neutral-950/10">
        {/* <Image fill src={data[0]?.coverImage} alt={data[0].title}/> */}
      </section>
    </div>
  )
}

export default Page

