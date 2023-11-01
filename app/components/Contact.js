'use client'

const Contact = () => {
    const handleEmailClick = () => {
        const email = 'kulani17@yahoo.com';
        const subject = 'Hi';
        const body = 'Lets get to know one another';
    
        const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
        window.location.href = mailtoLink;
      };
  return (
    <div className='mt-16 text-[rgb(242,246,250)]  min-w-[300px] p-5 flex items-center justify-between  bg-[rgb(23,25,30)] border-t border-[rgb(52,56,65)]'>
        <h1 className="text-xs sm:text-base md:text-lg xl:text-xl ">Intrested in having coffee?</h1>
        
        <button onClick={()=>handleEmailClick()} className="border text-xs sm:text-base  md:text-lg xl:text-xl  transition-colors duration-300 border-[#F7AB0A] text-[#F7AB0A] hover:border-black hover:text-black hover:bg-[#F7AB0A] p-2 rounded-md cursor-pointer">Send me a message</button>
    </div>
  )
}

export default Contact