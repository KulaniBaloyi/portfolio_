import { client } from "@/lib/contentful"
import Image from "next/image"

let newdata
const IndividualBlog = async({params}) => {
  const slug = params.slug
  const title = decodeURIComponent(slug.replace(/-/g, " "))
  const id = params.id

  try{
    const res = await client.getEntries({
      "content_type": "blogPost",
       "fields.slug[in]": slug,
    
  })
  newdata = res?.items.map((item)=>{
    const {sys,fields}=item
    const {id} =sys
    console.log("fields: ",fields)
    const title = fields.title
    const slug = fields.slug
    const readTime = fields.readTime
    const summary = fields.summary
    const intro = fields.introduction
    const conclusion = fields.conclusion
    const tableOfContents = fields.tableOfContents
    //console.log("table of contents: ", tableOfContents)

    const coverImage = fields.coverImage.fields.file.url
    const blog = {id,title,readTime,coverImage,slug,intro,conclusion,summary,tableOfContents}
    console.log("blog: ", blog)

   
     return (
       blog
     )
     
   })
  console.log("slug : ", res)
}  
catch(err){
 console.log("something went wrong!!!", err)

  }
  return (
    <div className='min-h-screen flex flex-col mt-[5.2rem] gap-10 text-3xl w-[90%]  lg:w-4/5 mx-auto pb-10'>
      <h1 className="leading-[1.5em] text-5xl font-bold text-center mt-[1em] capitalize">{title}</h1>
      {newdata&&newdata.map(d=>{
          return(
            <>
           
             <section className="h-[500px] w-full relative border rounded-lg overflow-hidden">
        
             <Image fill src={`https://${d.coverImage}`} alt={title} priority className="object-cover origin-center"/>
      </section>
      <p>read time {d.readTime}min</p>
      <p className="text-sm text-gray-600">Summary</p>
      <p>{d.summary}</p>
      <p>Topics covered: </p>
      {d.tableOfContents.map((item,index)=>{
        return<>
        
        <p className="text-sm text-gray-600" key={index}>{item}</p></> 

      })}
     
      <p>{d.intro}</p>
      <p>{d.conclusion}</p>
            
            </>
          )
        })}
     
    </div>
  )
}

export default IndividualBlog

