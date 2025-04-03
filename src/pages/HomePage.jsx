/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import heroImg from "../assets/Ghibili.jpg";

function HomePage() {
    useEffect(() => {
        const jobTitleOne = document.querySelector(".jobTitleOne");
        const jobTitleTwo = document.querySelector(".jobTitleTwo");
        const handleScroll = () => {
            let offSetY = window.scrollY;
            jobTitleOne.style.transform = `translateX(calc(130vh - ${offSetY}px))`;
            jobTitleTwo.style.transform = `translateX(calc(-210vh + ${offSetY}px))`;
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div id="home">
            <div className="lg:h-screen flex justify-center items-center overflow-hidden">
                <img src={heroImg} alt="" className="rounded-xl" />
            </div>
            <div className="lg:h-screen lg:bg-[#4f5d75] lg:bg-custom-bg2 lg:bg-blend-soft-light jobTitleContainerOne">
                <h2 className="lg:text-[8vw] lg:text-white lg:h-screen lg:flex lg:items-center lg:text-nowrap jobTitleOne">
                    A WEB DEVELOPER
                </h2>
            </div>
            <div className="lg:h-screen lg:bg-[#2d3142] lg:bg-custom-bg1 lg:bg-blend-multiply jobTitleContainerTwo">
                <h2 className="lg:text-[8vw] lg:text-white lg:h-screen lg:px-4 lg:flex lg:items-center lg:justify-center jobTitleTwo">
                    WHO LOVES DESIGN
                </h2>
            </div>
        </div>
    );
}

export default HomePage;