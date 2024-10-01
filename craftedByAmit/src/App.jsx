import { useEffect } from "react";
import "./App.css";
import MyPhoto from "./assets/MyPhoto.png";
import Laptop from "./assets/apple macbook pro laptop mockup.png";
import quirknest from "./assets/screencapture QuirkNest.png";
import timetracer from "./assets/screencapture TimeTracer.png"

function App() {

  useEffect(() => {
    document.documentElement.style.overflowX = "hidden"; 
    const introImage = document.querySelector('.introImage')
    const introText = document.querySelector('.intoText')
    const myName = document.querySelector('.myName')
    const jobTitleContainerOne = document.querySelector('.jobTitleContainerOne')
    const jobTitleOne = document.querySelector('.jobTitleOne')
    const jobTitleContainerTwo = document.querySelector('.jobTitleContainerTwo')
    const jobTitleTwo = document.querySelector('.jobTitleTwo')
    const projects = document.querySelector('.projects')
    const projectTitle = document.querySelector('.projectTitle')
    const laptopOne = document.querySelector('.laptopOne')
    const laptopTwo = document.querySelector('.laptopTwo')
    const laptopScreen = document.querySelector('.laptopScreen')
      
    const handleScroll = () => {
      let offSetY = window.scrollY
      
      introText.style.transform =  `translateY(${offSetY * 0.1}px)`
      introImage.style.transform = `translate(${offSetY * 0.4}px, ${offSetY * 0.7}px)`
      myName.style.transform = `translateX(${offSetY * 0.1}px)`
      jobTitleOne.style.transform = `translateX(calc(230vh - ${offSetY}px))`
      jobTitleTwo.style.transform = `translateX(calc(-300vh + ${offSetY}px))`
      laptopOne.style.transform = `translateX(calc(-510vh + ${offSetY}px))`
      laptopTwo.style.transform = `translateX(calc(660vh - ${offSetY}px))`
    }
    
    window.addEventListener("scroll",handleScroll)
    return () => {
      window.removeEventListener("scroll",handleScroll)
    }
  },[])

  return (
    <>
      <div className="bg-[#BFA2DB] overflow-x-hidden overflow-hidden font-montserrat">
        {/* Introduction */}
        <div className="h-screen flex items-center overflow-hidden">
          <div className="flex-3 intoText">
            <h1 className="text-[#F3F1F5] text-[60vw] cursor-default">{`Hi`}</h1>
          </div>
          <div className="flex-1 introImage ">
            <img src={MyPhoto} alt="" className="w-full " />
          </div>
        </div>
        {/* name container */}
        <div className="h-screen bg-slate-600 flex items-center">
          <h2 className="text-[20vw] text-gray-500 cursor-default myName">{`I'm Amit`}</h2>
        </div>
        {/* job tittle container */}
        <div className="h-screen bg-slate-800 jobTitleContainerOne">
          <h2 className="text-[8vw] text-gray-500 h-screen flex items-center jobTitleOne">
            a Web Developer
          </h2>
        </div>
        <div className="h-screen bg-slate-600 jobTitleContainerTwo">
          <h2 className="text-[8vw] text-gray-800 h-screen px-4 flex items-center justify-center jobTitleTwo">
            and UI/UX Designer
          </h2>
        </div>
      </div>
      {/*Projects*/}
      <div className="flex flex-col gap-[30vw] px-[100px] projects">
        <h2 className="text-[10vw] text-gray-500 projectTitle">
          Here are my recent projects
        </h2>
        {/* Project One */}
        <div className="flex items-center gap-[100px] h-screen flex-col lg:flex-row ">
          <div className="relative flex-1 w-[300px] h-[600px] laptopOne">
            <img src={Laptop} alt="project_one" />
            <div className="absolute top-[135px] left-[105px] w-[438px] h-[275px] overflow-scroll laptopScreen ">
              <img src={quirknest} alt="" className="w-full" />
            </div>
          </div>
          {/* projectDetail */}
          <div className="flex-1 flex flex-col gap-12 items-center">
            <h1 className="text-[7vw] text-gray-500">QuikNest</h1>
            <p className="text-gray-500 text-base text-justify leading-10">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia
              debitis, aspernatur consequatur distinctio, aliquam recusandae
              voluptate quasi quam a reprehenderit voluptatibus. Id similique
              nulla optio at aliquam impedit recusandae! Porro.
            </p>
            {/* Button */}
            <button>View Project</button>
          </div>
        </div>
        {/* Project Two */}
        <div className="flex items-center gap-[100px] h-screen flex-col lg:flex-row-reverse ">
          <div className="relative flex-1 w-[300px] h-[600px] laptopTwo">
            <img src={Laptop} alt="project_one" />
            <div className="absolute top-[135px] left-[105px] w-[438px] h-[275px] overflow-scroll">
              <img src={timetracer} alt="" className="w-full" />
            </div>
          </div>
          {/* projectDetail */}
          <div className="flex-1 flex flex-col gap-12 items-center">
            <h1 className="text-[7vw] text-gray-500">TimeTracer</h1>
            <p className="text-gray-500 text-base text-justify leading-10">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia
              debitis, aspernatur consequatur distinctio, aliquam recusandae
              voluptate quasi quam a reprehenderit voluptatibus. Id similique
              nulla optio at aliquam impedit recusandae! Porro.
            </p>
            {/* Button */}
            <button>View Project</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
