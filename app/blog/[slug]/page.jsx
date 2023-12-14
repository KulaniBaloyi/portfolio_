import RichText from "@/app/components/RichText"
import { client } from "@/lib/contentful"
import Image from "next/image"

//import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
//documentToReactComponents(content,options)

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
    //console.log("fields: ",fields)
    const title = fields.title
    const { content } = fields
    
    //console.log('Content: ', content)
    const slug = fields.slug
    const readTime = fields.readTime
    const summary = fields.summary
    const intro = fields.introduction
    const conclusion = fields.conclusion
    const tableOfContents = fields.tableOfContents
    //console.log("table of contents: ", tableOfContents)

    const coverImage = fields.coverImage.fields.file.url
    const blog = {id,title,readTime,coverImage,slug,intro,conclusion,summary,tableOfContents,content}
    //console.log("blog: ", blog)

   
     return (
       blog
     )
     
   })
  //console.log("slug : ", res)
}  
catch(err){
 console.log("something went wrong!!!", err)

  }
  return (
    <div className='min-h-screen flex flex-col mt-[5.2rem] gap-10 text-3xl '>
      <h1 className="leading-[1.5em] text-5xl font-bold text-center mt-[1em] capitalize">{title}</h1>
      {newdata&&newdata.map(d=>{
          return(
            <>
             <section className="h-[500px] w-full relative border rounded-lg overflow-hidden">
        
             <Image fill src={`https://${d.coverImage}`} alt={title} priority className="object-cover origin-center"/>
      </section>
      <section className="border grid grid-cols-4">
        <p className="border p-5">dsf</p>
        <p className="border p-5 col-span-2">
        <p className="mx-auto prose">read time {d.readTime}min</p>
      <p className="text-sm text-gray-600 mx-auto prose">Summary</p>
      <p className="mx-auto prose">{d.summary}</p>
      {/* <p className="mx-auto prose">Topics covered: </p>
      {d.tableOfContents.map((item,index)=>{
        return<>
        <p className="text-sm text-gray-600 mx-auto prose" key={index}>{item}</p></> 
      })} */}
      <p className="mx-auto prose">{d.intro}</p>
      <div className='mx-auto prose'>
      <RichText content={d.content} />
    </div>
    
 <p className="mx-auto prose">{d.conclusion}</p>  
        </p>
        <p className="border p-5">ghgfh</p>
      </section>
         
            </>
          )
        })}
     
    </div>
  )
}

export default IndividualBlog

