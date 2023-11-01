import Image from "next/image"
const Newsletter = () => {
  return (
    <div className='min-h-screen  mt-[5.2rem] m-auto w-[90%] lg:w-[80%] flex flex-col gap-10'>
        <section className="border aspect-video bg-gray-200 h-[300px] lg:h-[500px] w-full relative">
            <Image priority fill alt={"vover-photo"} src={"/newsletter.jpg"} className="object-cover"/>
        </section>
        <section className="lg:px-[10%] m-auto flex flex-col gap-10">
        <h2 className="text-[rgba(25,26,23,0.5)] text-xs leading-5 font-semibold tracking-[0.5px]">NOT NECESSARILY A NEWSLETTER. JUST TO</h2>
        <h1 className="uppercase text-5xl font-bold">Stay in touch</h1>
        <p className="text-base leading-7 font-normal flex-wrap">I  am investing my time in building and contributing to open-source projects that benefit the community,  while continuously learning and upskilling myself.</p>
        <form className="flex flex-col gap-2 max-w-[300px] flex-wrap mb-10">
            <label className="text-[rgba(25,26,23,0.5)] text-xs leading-5 font-semibold tracking-[0.5px]">EMAIL ADDRESS TO REACH YOU OUT</label>
            <div className="flex flex-col md:flex-row gap-5">
                <input type={"text"} placeholder="e.g. ME@Kulani.com" className="h-[38px] text-white font-semibold placeholder:uppercase bg-neutral-800 flex-[.7] px-10 pl-5 py-8"/>
                <button className="h-[38px] py-8 bg-white border font-semibold grid place-content-center p-5 aspect-video uppercase flex-[.3]">subscribe</button>

            </div>
        </form>
        </section>
        <p  className="text-base leading-7 font-normal p-[10%] border-t-2 ">🙅🏻  <span className="text-[rgba(25,26,23,0.5)]">Do not worry this will not be a weekly or even bi-weekly newsletter spamming your inbox. I will ping you only if I find something interesting to share with you or if I release a new project, blog or a video which I think might interest you.</span></p>
       
       
    </div>
  )
}

export default Newsletter