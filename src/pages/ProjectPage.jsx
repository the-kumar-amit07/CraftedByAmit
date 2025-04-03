/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import Laptop from "../assets/apple macbook pro laptop mockup.png";
import quirknest from "../assets/screencapture QuirkNest.png";
import timetracer from "../assets/screencapture TimeTracer.png";
import { Button } from "../components";

function ProjectPage() {
    useEffect(() => {
        document.documentElement.style.overflowX = "hidden";
        const laptopOne = document.querySelector(".laptopOne");
        const laptopTwo = document.querySelector(".laptopTwo");
        const handleScroll = () => {
            let offSetY = window.scrollY;
            laptopOne.style.transform = `translateX(calc(-430vh + ${offSetY}px))`;
            laptopTwo.style.transform = `translateX(calc(580vh - ${offSetY}px))`;
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div id="projects" className="lg:flex lg:flex-col lg:bg-[#f0f4f9] lg:gap-[30vw] projects">
            <h2 className="lg:text-[10vw] lg:text-gray-500 lg:p-7 lg:font-oswald projectTitle">
                Here Are My Recent Projects
            </h2>
            {/* Project One */}
            <div className="lg:h-screen lg:flex lg:items-center lg:justify-center lg:gap-7 lg:flex-row project">
                <div className="lg:relative lg:flex-1 lg:w-full laptopOne">
                    <img src={Laptop} alt="project_one" />
                    <div className="lg:absolute lg:top-[20.6%] lg:left-[16.2%] lg:w-[67.3%] lg:h-[42.5%] lg:overflow-scroll laptopScreen">
                        <img src={quirknest} alt="" className="lg:w-full" />
                    </div>
                </div>
                {/* projectDetail */}
                <div className="lg:flex-1 lg:flex lg:flex-col lg:p-7 lg:gap-12 lg:items-center">
                    <h1 className="lg:text-[7vw] lg:text-gray-500">QuirkNest</h1>
                    <p className="lg:text-gray-500 lg:text-base lg:text-justify lg:leading-10">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia
                        debitis, aspernatur consequatur distinctio, aliquam recusandae
                        voluptate quasi quam a reprehenderit voluptatibus. Id similique
                        nulla optio at aliquam impedit recusandae! Porro.
                    </p>
                    {/* Button */}
                    <Button className="" bgcolor="#bb4625" textColor="#f0f4f9">
                        Live Demo
                    </Button>
                </div>
            </div>
            {/* Project Two */}
            <div className="lg:h-screen lg:flex lg:items-center lg:justify-center lg:gap-7 lg:flex-row-reverse">
                <div className="lg:relative lg:flex-1 lg:w-full laptopTwo">
                    <img src={Laptop} alt="project_one" />
                    <div className="lg:absolute lg:top-[20.6%] lg:left-[16.2%] lg:w-[67.3%] lg:h-[42.5%] lg:overflow-scroll">
                        <img src={timetracer} alt="" className="lg:w-full" />
                    </div>
                </div>
                {/* projectDetail */}
                <div className="lg:flex-1 lg:flex lg:flex-col lg:p-7 lg:gap-12 lg:items-center">
                    <h1 className="lg:text-[7vw] lg:text-gray-500">TimeTracer</h1>
                    <p className="lg:text-gray-500 lg:text-base lg:text-justify lg:leading-10">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia
                        debitis, aspernatur consequatur distinctio, aliquam recusandae
                        voluptate quasi quam a reprehenderit voluptatibus. Id similique
                        nulla optio at aliquam impedit recusandae! Porro.
                    </p>
                    {/* Button */}
                    <Button className="" bgcolor="#bb4625" textColor="#f0f4f9">
                        Live Demo
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default ProjectPage;