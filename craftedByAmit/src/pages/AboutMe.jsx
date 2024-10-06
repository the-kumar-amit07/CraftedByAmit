/* eslint-disable no-unused-vars */
import React from "react";
import myImage from "../assets/MyPhoto2.png";

function AboutMe() {
    return (
        <div id="about-me" className="relative overflow-hidden bg-[#f0f4f9]">
        <div className="hidden lg:block">
            <h1 className="text-[10vw] text-gray-500 font-oswald p-7">More About Me</h1>
            {/* Image Section */}
            <img
            src={myImage}
            alt="Seamless"
            className="absolute top-1/2 lg:left-1/3 h-[300vh] hover:scale-105 lg:w-full object-cover transform -translate-y-1/2 "
            />
            {/* Part One */}
            <div className="h-screen flex-1 flex items-center justify-start pl-8 mr-[40rem]">
            <p className="text-[3vw] text-gray-500 font-bold leading-[110%]">
                I’m a passionate <span className="text-gray-800 text-[3.5vw]">Web Developer</span> and <span className="text-gray-800 text-[3.5vw]">UI/UX Designer </span>with a knack for crafting seamless digital experiences.
                    With a deep understanding of user-centric design principles, I build intuitive and visually appealing interfaces
                    that enhance user engagement. I enjoy translating complex problems into simple, beautiful solutions through clean 
                    code and thoughtful design.
            </p>
            </div>

            {/* Part Two */}
            <div className="h-screen flex items-center justify-start pl-8 mr-[40rem]">
            <ul className="list-none list-inside text-gray-600 text-xl leading-loose">
                <li className="border-b-2 border-t-2 border-gray-300 hover:bg-[#405782] hover:text-white px-2 py-6">
                Proficient in React, JavaScript, and Tailwind CSS
                </li>
                <li className="border-b-2 border-gray-300 hover:bg-[#405782] hover:text-white px-2  py-6">
                Experienced in wireframing, prototyping, and user testing
                </li>
                <li className="border-b-2 border-gray-300 hover:bg-[#405782] hover:text-white px-2  py-6">
                Strong understanding of design principles and UX best practices
                </li>
                <li className="border-b-2 border-gray-300 hover:bg-[#405782] hover:text-white px-2  py-6">
                Passionate about learning and staying updated with the latest web
                technologies
                </li>
                <li className="border-b-2 border-gray-300 hover:bg-[#405782] hover:text-white px-2  py-6">
                Committed to delivering seamless, engaging user experiences
                </li>
            </ul>
            </div>
        </div>
        </div>
    );
}

export default AboutMe;
