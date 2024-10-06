    /* eslint-disable no-unused-vars */
import React from "react";
import Laptop from "../assets/apple macbook pro laptop mockup.png";
import quirknest from "../assets/screencapture QuirkNest.png";
import timetracer from "../assets/screencapture TimeTracer.png";
import { Button } from "../components";

function ProjectPage() {
    return (
        <div id="projects" className="flex flex-col bg-[#f0f4f9] gap-[30vw] projects">
        <h2 className="text-[10vw] text-gray-500 p-7 font-oswald  projectTitle">
            Here Are My Recent Projects
        </h2>
        {/* Project One */}
        <div className="h-screen flex items-center justify-center gap-7 flex-col lg:flex-row project">
            <div className="relative flex-1 w-full laptopOne">
            <img src={Laptop} alt="project_one" />
            <div className="absolute top-[20.6%] left-[16.2%] w-[67.3%] h-[42.5%] sm:top-[20.6%] overflow-scroll laptopScreen ">
                <img src={quirknest} alt="" className="w-full" />
            </div>
            </div>
            {/* projectDetail */}
            <div className="flex-1 flex flex-col p-7 gap-12 items-center">
            <h1 className="text-[7vw] text-gray-500">QuirkNest</h1>
            <p className="text-gray-500 text-base text-justify leading-10">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia
                debitis, aspernatur consequatur distinctio, aliquam recusandae
                voluptate quasi quam a reprehenderit voluptatibus. Id similique
                nulla optio at aliquam impedit recusandae! Porro.
            </p>
            {/* Button */}
            <Button className="" bgcolor="#2d2d38" textColor="#f0f4f9">
                Live Demo
            </Button>
            </div>
        </div>
        {/* Project Two */}
        <div className="h-screen flex items-center justify-center gap-7 flex-col lg:flex-row-reverse ">
            <div className="relative flex-1 w-full laptopTwo">
            <img src={Laptop} alt="project_one" />
            <div className="absolute top-[20.6%] left-[16.2%] w-[67.3%] h-[42.5%] sm:top-[20.6%] overflow-scroll">
                <img src={timetracer} alt="" className="w-full" />
            </div>
            </div>
            {/* projectDetail */}
            <div className="flex-1 flex flex-col p-7 gap-12 items-center">
            <h1 className="text-[7vw] text-gray-500">TimeTracer</h1>
            <p className="text-gray-500 text-base text-justify leading-10">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia
                debitis, aspernatur consequatur distinctio, aliquam recusandae
                voluptate quasi quam a reprehenderit voluptatibus. Id similique
                nulla optio at aliquam impedit recusandae! Porro.
            </p>
            {/* Button */}
            <Button className="" bgcolor="#2d2d38" textColor="#f0f4f9">
                Live Demo
            </Button>
            </div>
        </div>
        </div>
    );
}

export default ProjectPage;
