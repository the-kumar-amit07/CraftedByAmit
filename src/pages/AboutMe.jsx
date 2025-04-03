/* eslint-disable no-unused-vars */
import React from "react";
import myImage from "../assets/MyPhoto2.png";

function AboutMe() {
    return (
        <div id="about-me" className="lg:relative lg:overflow-hidden lg:bg-[#f0f4f9]">
            <div className="lg:block hidden">
                <h1 className="lg:text-[10vw] lg:text-gray-500 lg:font-oswald lg:p-7">
                    More About Me
                </h1>
                {/* Image Section */}
                <img
                    src={myImage}
                    alt="Seamless"
                    className="lg:absolute lg:top-1/2 lg:left-1/3 lg:h-[300vh] lg:hover:scale-105 lg:w-full lg:object-cover lg:transform lg:-translate-y-1/2"
                />
                {/* Part One */}
                <div className="lg:h-screen lg:flex-1 lg:flex lg:items-center lg:justify-start lg:pl-8 lg:mr-[40rem]">
                    <p className="lg:text-[3vw] lg:text-gray-500 lg:font-bold lg:leading-[110%]">
                        I’m a passionate{" "}
                        <span className="lg:text-[#bb4625] lg:text-[3.5vw]">Web Developer</span>{" "}
                        and{" "}
                        <span className="lg:text-[#bb4625] lg:text-[3.5vw]">UI/UX Designer</span>
                        with a knack for crafting seamless digital experiences. With a deep
                        understanding of user-centric design principles, I build intuitive
                        and visually appealing interfaces that enhance user engagement. I
                        enjoy translating complex problems into simple, beautiful solutions
                        through clean code and thoughtful design.
                    </p>
                </div>

                {/* Part Two */}
                <div className="lg:h-screen lg:flex lg:items-center lg:justify-start lg:pl-8 lg:mr-[40rem]">
                    <ul className="lg:list-none lg:list-inside lg:text-gray-600 lg:text-xl lg:leading-loose">
                        <li className="lg:border-b-2 lg:border-t-2 lg:border-gray-300 lg:hover:bg-[#4f5d75] lg:hover:text-white lg:px-2 lg:py-6">
                            Proficient in React, JavaScript, and Tailwind CSS
                        </li>
                        <li className="lg:border-b-2 lg:border-gray-300 lg:hover:bg-[#4f5d75] lg:hover:text-white lg:px-2 lg:py-6">
                            Experienced in wireframing, prototyping, and user testing
                        </li>
                        <li className="lg:border-b-2 lg:border-gray-300 lg:hover:bg-[#4f5d75] lg:hover:text-white lg:px-2 lg:py-6">
                            Strong understanding of design principles and UX best practices
                        </li>
                        <li className="lg:border-b-2 lg:border-gray-300 lg:hover:bg-[#4f5d75] lg:hover:text-white lg:px-2 lg:py-6">
                            Passionate about learning and staying updated with the latest web
                            technologies
                        </li>
                        <li className="lg:border-b-2 lg:border-gray-300 lg:hover:bg-[#4f5d75] lg:hover:text-white lg:px-2 lg:py-6">
                            Committed to delivering seamless, engaging user experiences
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;