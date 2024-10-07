/* eslint-disable no-unused-vars */
import { useEffect, useRef, useState } from "react";
import "./App.css";
import { Navbar } from "./components";
import { HomePage,AboutMe,ProjectPage } from "./pages";

function App() {
  const [loader, setLoader] = useState(0)
  const [showLoader, setShowLoader] = useState(true)
  const introRef = useRef(null)
  
  useEffect(() => {
    const interval = setInterval(() => {
      setLoader((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => {
            setShowLoader(false)
            introRef.current.scrollIntoView({behavior:"smooth"})
          }, 1000);
          return 100
        }
        return prev + 1
      })
    }, 20)
    
    return () => clearInterval(interval)
  },[])



  return (
    <>  
        {showLoader ? ( <div className={`h-screen flex items-center justify-center lg:items-end lg:justify-end bg-[#2d2d38] text-gray-600 font-montserrat loader transition-transform duration-700 `}>
          <div className="p-10 text-9xl font-bold">
            <h1>{loader}%</h1>
          </div>
      </div>) : (
            <div ref={introRef} className="overflow-x-hidden overflow-hidden bg-[#bfc0c0]">
            <div className="flex justify-center my-4 z-50">
              <Navbar/>
            </div>
            <HomePage/>
            <ProjectPage />
            <AboutMe/>
          </div>
        ) }
    
    </>
  );
}

export default App;
