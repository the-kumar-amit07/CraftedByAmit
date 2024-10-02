/* eslint-disable no-unused-vars */
import { useEffect } from "react";
import "./App.css";
// import MyPhoto from "./assets/MyPhoto.png";
import Laptop from "./assets/apple macbook pro laptop mockup.png";
import quirknest from "./assets/screencapture QuirkNest.png";
import timetracer from "./assets/screencapture TimeTracer.png";
import downArrow from "./assets/down-arrow.png";
import { Button, IntroText } from "./components";

function App() {
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
      <div className="bg-[#72d2bb] overflow-x-hidden overflow-hidden font-montserrat">
        <div></div>
        {/* Introduction */}
        <div className="h-screen flex flex-col justify-center mt-36 gap-28 items-center">
          <div className="flex-1 flex justify-center pt-20 items-center introText">
            <IntroText />
          </div>
          <div className="flex-1 flex justify-center introImage">
            <img src={downArrow} alt="" className="h-28" />
          </div>
        </div>
        {/* name container */}
        {/* <div className="h-screen bg-slate-600 flex items-center">
          <h2 className="text-[20vw] text-gray-500 cursor-default myName">{`I'm Amit`}</h2>
        </div> */}
        {/* job tittle container */}
        <div className="h-screen bg-[#4b7fcd] bg-custom-bg2 bg-blend-soft-light jobTitleContainerOne">
          <h2 className="text-[8vw] text-white h-screen flex items-center jobTitleOne">
            a Web Developer
          </h2>
        </div>
        <div className="h-screen bg-[#405782] bg-custom-bg1 bg-blend-multiply jobTitleContainerTwo">
          <h2 className="text-[8vw] text-white h-screen px-4 flex items-center justify-center jobTitleTwo">
            and UI/UX Designer
          </h2>
        </div>
      </div>
      {/*Projects*/}
      <div className="flex flex-col bg-[#f0f4f9] gap-[30vw] px-[100px] projects">
        <h2 className="text-[10vw] text-gray-500 projectTitle">
          Here are my recent projects
        </h2>
        {/* Project One */}
        <div className="h-screen  flex items-center gap-[100px] flex-col lg:flex-row ">
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
            <Button>View Project</Button>
          </div>
        </div>
        {/* Project Two */}
        <div className="h-screen flex items-center gap-[100px] flex-col lg:flex-row-reverse ">
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
            <Button>View Project</Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
