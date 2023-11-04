import { client } from "@/lib/contentful"

const Projects = async() => {
  // try{
  //   const res = await client.getEntries()
  //   const data = res?.items.map((item)=>{
  //    const {sys,fields}=item
  //    const {id} =sys
  //    const title = fields.title
  //    const readTime = fields.readTime
  //    const coverImage = fields.coverImage.fields.file.url
  //    const blog = {id,title,readTime,coverImage}
  //    console.log("blog: ", blog)
 
    
  //     return (
  //       blog
  //     )
      
  //   })

  // }catch(err){
  //   console.error(err)
  // }
  
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