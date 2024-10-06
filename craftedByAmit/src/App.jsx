/* eslint-disable no-unused-vars */
import { useEffect, useRef, useState } from "react";
import "./App.css";
// import MyPhoto from "./assets/MyPhoto.png";
import { Button, IntroText, Navbar } from "./components";
import { Outlet } from "react-router-dom";
import { HomePage,AboutMe,ProjectPage } from "./pages";

function App() {
  const [loader, setLoader] = useState(0)
  const [showLoader, setShowLoader] = useState(true)
  const introRef = useRef(null)
  
  useEffect(() => {
    // const loaderCounter = document.querySelector(".loader")
    const interval = setInterval(() => {
      setLoader((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => {
            // loaderCounter.style.transform = "translateY(-100vh)"
            setShowLoader(false)
            // window.scrollTo({
            //   top: introRef.current.offsetTop,
            //   behavior:"smooth"
            // })
            introRef.current.scrollIntoView({behavior:"smooth"})
          }, 1000);
          return 100
        }
        return prev + 1
      })
    }, 20)
    
    return () => clearInterval(interval)
  },[])


  useEffect(() => {
    document.documentElement.style.overflowX = "hidden";
    const introImage = document.querySelector(".introImage");
    const introText = document.querySelector(".introText");
    const myName = document.querySelector(".myName");
    const jobTitleContainerOne = document.querySelector(
      ".jobTitleContainerOne"
    );
    const jobTitleOne = document.querySelector(".jobTitleOne");
    const jobTitleContainerTwo = document.querySelector(
      ".jobTitleContainerTwo"
    );
    const jobTitleTwo = document.querySelector(".jobTitleTwo");
    const projects = document.querySelector(".projects");
    const projectTitle = document.querySelector(".projectTitle");
    const laptopOne = document.querySelector(".laptopOne");
    const laptopTwo = document.querySelector(".laptopTwo");
    const laptopScreen = document.querySelector(".laptopScreen");

    const handleScroll = () => {
      let offSetY = window.scrollY;

      introText.style.transform = `translateY(${offSetY * 0.1}px)`;
      introImage.style.transform = `translateY(${offSetY * 0.2}px)`;
      // introImage.style.transform = `translate(${offSetY * 0.4}px, ${offSetY * 0.7}px)`
      // myName.style.transform = `translateX(${offSetY * 0.1}px)`
      jobTitleOne.style.transform = `translateX(calc(130vh - ${offSetY}px))`;
      jobTitleTwo.style.transform = `translateX(calc(-210vh + ${offSetY}px))`;
      laptopOne.style.transform = `translateX(calc(-430vh + ${offSetY}px))`;
      laptopTwo.style.transform = `translateX(calc(580vh - ${offSetY}px))`;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>  
        {showLoader && ( <div className={`h-screen flex items-center justify-center lg:items-end lg:justify-end bg-[#2d2d38] text-gray-600 font-montserrat loader transition-transform duration-700 `}>
          <div className="p-10 text-9xl font-bold">
            <h1>{loader}%</h1>
          </div>
        </div>)}
      <div ref={introRef} className="overflow-x-hidden overflow-hidden bg-[#72d2bb]">
        {/* NavBar */}
        <div className="flex justify-center my-4 z-50">
          <Navbar/>
        </div>
        <HomePage/>
        <ProjectPage />
        <AboutMe/>
        {/* name container */}
        {/* <div className="h-screen bg-slate-600 flex items-center">
          <h2 className="text-[20vw] text-gray-500 cursor-default myName">{`I'm Amit`}</h2>
        </div> */}
        {/* job tittle container */}
      </div>
      {/*Projects*/}
    </>
  );
}

export default App;
