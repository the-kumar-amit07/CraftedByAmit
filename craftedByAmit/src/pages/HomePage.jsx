/* eslint-disable no-unused-vars */
import React from "react";
import { IntroText } from "../components";
import downArrow from "../assets/down-arrow.png";

function HomePage() {
    return (
        <div id="home">
            <div className="h-screen flex justify-center items-center overflow-hidden relative">
                <div className="bg-white bg-opacity-15 backdrop-blur-2xl w-3/4 h-2/3 inset-0 rounded-lg shadow-lg z-10 top-[6%] left-[12%] absolute"></div>
                <div className="bg-slate-600 absolute rounded-full w-[20%] h-[36%] top-[50%] right-[75%] z-0"></div>
                <div className="bg-slate-600 absolute rounded-full w-[20%] h-[36%] top-[20%] right-[5%] z-0"></div>
                <div className="bg-slate-600 absolute rounded-full w-[20%] h-[36%] top-[12%] right-[45%] z-0"></div>
                <div className="bg-slate-600 absolute rounded-full w-[20%] h-[36%] top-[80%] right-[15%] z-0"></div>
                <div className="flex-1 flex flex-col justify-center items-center text-center gap-64 z-20">
                <div className="introText">
                    <IntroText />
                </div>
                <div className="introImage animate-bounce">
                    <img src={downArrow} alt="" className="h-28" />
                </div>
                </div>
            </div>
            <div className="h-screen bg-[#4b7fcd] bg-custom-bg2 bg-blend-soft-light jobTitleContainerOne">
                <h2 className="text-[8vw] text-white h-screen flex items-center text-nowrap jobTitleOne">
                    A WEB DEVELOPER
                </h2>
            </div>
            <div className="h-screen bg-[#405782] bg-custom-bg1 bg-blend-multiply jobTitleContainerTwo">
                <h2 className="text-[8vw] text-white h-screen px-4 flex items-center justify-center jobTitleTwo">
                    WHO LOVES DESIGN
                </h2>
            </div>

        </div>
    );
}

export default HomePage;
