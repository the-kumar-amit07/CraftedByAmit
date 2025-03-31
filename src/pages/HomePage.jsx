/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { IntroText } from "../components";
import downArrow from "../assets/down-arrow.png";

function HomePage() {
    useEffect(() => {
        const introImage = document.querySelector(".introImage");
        const introText = document.querySelector(".introText");
        const jobTitleOne = document.querySelector(".jobTitleOne");
        const jobTitleTwo = document.querySelector(".jobTitleTwo");
        const handleScroll = () => {
            let offSetY = window.scrollY;
            
            introText.style.transform = `translateY(${offSetY * 0.2}px)`;
            introImage.style.transform = `translateY(${offSetY * 0.2}px)`;
            jobTitleOne.style.transform = `translateX(calc(130vh - ${offSetY}px))`;
            jobTitleTwo.style.transform = `translateX(calc(-210vh + ${offSetY}px))`;
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
        window.removeEventListener("scroll", handleScroll);
        };
    },[])

    return (
        <div id="home">
            <div className="h-screen flex justify-center items-center overflow-hidden relative">
                <div className="bg-white bg-opacity-15 backdrop-blur-2xl w-3/4 h-2/3 inset-0 rounded-lg shadow-2xl z-10 top-[6%] left-[13%] absolute"></div>
                <div>
                    <div className="bg-[#2d3142]  absolute animate-move-circular rounded-full w-96 h-96 top-[50%] right-[75%] z-0"></div>
                    <div className="bg-[#4f5d75]  absolute animate-move-fast-circular rounded-full w-52 h-52 top-[10%] right-[82%] z-0"></div>
                    <div className="bg-[#2d3142]  absolute animate-move-fast-circular rounded-full w-96 h-96 top-[20%] right-[5%] z-0"></div>
                    <div className="bg-[#2d3142]  absolute animate-spin-and-move rounded-full w-64 h-64 top-[12%] right-[45%] z-0"></div>
                    <div className="bg-[#4f5d75]  absolute animate-spin-and-move rounded-full w-80 h-80 top-[80%] right-[15%] z-0"></div>
                </div>
                <div className="flex-1 flex flex-col justify-center items-center text-center gap-64 z-20">
                <div className="introText">
                    <IntroText />
                </div>
                <div className="introImage animate-bounce">
                    <img src={downArrow} alt="" className="h-28" />
                </div>
                </div>
            </div>
            <div className="h-screen bg-[#4f5d75] bg-custom-bg2 bg-blend-soft-light jobTitleContainerOne">
                <h2 className="text-[8vw] text-white h-screen flex items-center text-nowrap jobTitleOne">
                    A WEB DEVELOPER
                </h2>
            </div>
            <div className="h-screen bg-[#2d3142] bg-custom-bg1 bg-blend-multiply jobTitleContainerTwo">
                <h2 className="text-[8vw] text-white h-screen px-4 flex items-center justify-center jobTitleTwo">
                    WHO LOVES DESIGN
                </h2>
            </div>

        </div>
    );
}

export default HomePage;
