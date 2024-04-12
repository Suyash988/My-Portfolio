import { BrowserRouter } from "react-router-dom";
import React, {lazy, Suspense} from "react";
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";
// const Navbar = lazy(() => import("./components/Navbar").then(module => {return { default: module.Navbar}}))
// const Hero = lazy(() => import("./components/Hero").then(module => {return { default: module.Hero}}))
// const About = lazy(() => import("./components/About"))
// const Tech = lazy(() => import("./components/Tech"))
// const Works = lazy(() => import("./components/Works"))
// const Contact = lazy(() => import("./components/Contact"))
// const StarsCanvas = lazy(() => import("./components/canvas/Stars"))

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Tech />
        <Works />
        
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
      
      </BrowserRouter>
    
    
    
  );
}

export default App;
