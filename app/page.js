import About from "./components/About"
import Cover from "./components/Cover"
import ImportantUpdates from "./components/ImportantUpdates"
import Projects from "./components/Projects"


export default async function Home() {


  return (
  
      <>
      <div className="flex flex-col gap-5">   
      <Cover/>
      <About/>
      <Projects/>
      <ImportantUpdates/>
 
      </div>
      </>
 
  )
}
