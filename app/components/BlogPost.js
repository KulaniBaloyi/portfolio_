const BlogPost = () => {
  return (
    <div className="rounded-lg border flex flex-col overflow-hidden">
         <section className=" bg-gray-200 w-full h-full aspect-video"></section>
         <section className="bg-white p-5 flex flex-col gap-5">
            <h1>First Blog Post</h1>
            <h2>Date</h2>
            <p>Short Description of the blog post where i will be rambling on for about this length about nothing really</p>
         </section>
    </div>
   
  )
}

export default BlogPost