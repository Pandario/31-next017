import ContactUs from "./(components)/ContactUs";
import Hero from "./(components)/Hero";
import Nav from "./(components)/Nav";
import Projects from "./(components)/Projects";
import Skills from "./(components)/Skills";
import { Top } from "./(components)/Top";



export default function Home() {
  
  return (
    <div className="">
      <Nav/>
      <Hero/>
      <Skills/>
      <Projects/>
      <Top/>
      <ContactUs/>
    

      


    </div>

  )
}
