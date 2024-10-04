/* eslint-disable no-unused-vars */
import { useEffect } from "react";
import "./App.css";
// import MyPhoto from "./assets/MyPhoto.png";

import downArrow from "./assets/down-arrow.png";
import { Button, IntroText } from "./components";
import ProjectPage from "./pages/ProjectPage";

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
        {/* NavBar */}
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
      <div className="">
        <ProjectPage/>
      </div>
    </>
  );
}

export default App;
