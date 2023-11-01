"use client"
import Link from "next/link"
import { useRouter } from 'next/navigation';

const Footer = () => {
  const router = useRouter()
  const handleClick = (route)=>{
    router.push(`/${route}`)
  }
  const handleEmailClick = () => {
    const email = 'kulani17@yahoo.com'
    const subject = 'Hi'
    const body = 'Lets get to know one another'
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    window.location.href = mailtoLink;
  }
  return (
    <>
    <div className=' min-w-[300px] grid grid-cols-1 md:grid-cols-4 gap-10 text-[rgb(242,246,250)] p-10 md:p-20 bg-[#191a17] border-t border-[rgb(52,56,65)]'>
      <section className=" md:col-span-3 flex flex-col gap-5">
      <h2 className="uppercase text-xs text-[#fdbb07] tracking-[0.5px">Like What You See?</h2>
        <h3 className="text-[40px] leading-[52px] font-bold uppercase">Lets work together</h3>
        <p className="text-[hsla(80,0%,100%,0.7)] leading-7 font-normal">I am currently around Johannesburg. If you would like to talk about a project or have any advice for me do not hesitate to drop me a message.</p>
        <button onClick={()=>handleEmailClick()} className="cursor-pointer bg-[#fdbb07] text-black p-5 px-10 self-start uppercase font-semibold">Write Email</button>
      </section>
      <section className="md:col-span-1 flex flex-col gap-5">
        <h2 className="uppercase text-xs text-[#fdbb07] tracking-[0.5px">Missed something?</h2>
        <h3 className="text-[40px] leading-[52px] font-bold uppercase">MENU</h3>
        <ul className="flex flex-col gap-2 my-5">
          <li onClick={()=>handleClick("about")} className="cursor-pointer text-[12px] leading-5 tracking-[0.5px] font-semibold uppercase text-[hsla(80,0%,100%,0.7)]">What I do?</li>
          <li onClick={()=>handleClick("projects")} className="cursor-pointer text-[12px] leading-5 tracking-[0.5px] font-semibold uppercase text-[hsla(80,0%,100%,0.7)]">Projects</li>
          <li onClick={()=>handleClick("blog")} className="cursor-pointer text-[12px] leading-5 tracking-[0.5px] font-semibold uppercase text-[hsla(80,0%,100%,0.7)]">Blog</li>
          <li onClick={()=>handleClick("newsletter")} className="cursor-pointer text-[12px] leading-5 tracking-[0.5px] font-semibold uppercase text-[hsla(80,0%,100%,0.7)]">Newsletter - Stay in touch!<span>👋</span></li>
          <Link href={"https://www.buymeacoffee.com/kulani17"} target="_blank">
          <li className="text-[12px] leading-5 tracking-[0.5px] font-semibold uppercase text-[hsla(80,0%,100%,0.7)]">Buy me a coffee</li>
          </Link>
        </ul>
      </section>
      <section className="md:col-span-3">
        <ul className="flex gap-5">
          <Link href={'https://www.linkedin.com/in/kulani-baloyi-608362212/'} target="_blank"> <li className="text-[12px] leading-5 tracking-[0.5px] font-semibold uppercase text-[hsla(80,0%,100%,0.7)]">LinkedIn</li></Link>
          <Link href={'https://twitter.com/Kulani_17'} target="_blank"> <li className="text-[12px] leading-5 tracking-[0.5px] font-semibold uppercase text-[hsla(80,0%,100%,0.7)]">Twitter</li></Link>
          <Link href={'https://github.com/KulaniBaloyi'} target="_blank"> <li className="text-[12px] leading-5 tracking-[0.5px] font-semibold uppercase text-[hsla(80,0%,100%,0.7)]">Github</li></Link>
          <Link href={'https://hub.docker.com/u/kulanibaloyi'} target="_blank"> <li className="text-[12px] leading-5 tracking-[0.5px] font-semibold uppercase text-[hsla(80,0%,100%,0.7)]">Docker</li></Link>

       
        </ul>
      </section>
      <section className=" text-[12px] leading-5 tracking-[0.5px] font-semibold uppercase text-[hsla(80,0%,100%,0.7)] md:col-span-1" >built with ❤️ from Johannesburg</section>
    
    </div>
    </>
   
  )
}

export default Footer