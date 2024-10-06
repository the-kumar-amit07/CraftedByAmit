/* eslint-disable no-unused-vars */
// import React, { useEffect, useRef } from 'react';

// function IntroText() {
//     const titlesRef = useRef([]);

//     useEffect(() => {
//         const titles = titlesRef.current;

//         // Function to animate each title
//         const animateTitles = () => {
//         titles.forEach((title, index) => {
//             setTimeout(() => {
//             title.classList.remove('opacity-0', 'translate-y-10');
//             title.classList.add('opacity-100', 'translate-y-0');
            
//             // Revert back after some time
//             setTimeout(() => {
//                 title.classList.remove('opacity-100', 'translate-y-0');
//                 title.classList.add('opacity-0', 'translate-y-10');
//             }, 2000); // Adjust delay for each title
//             }, index * 2000); // Delay for the next title's animation
//         });
//         };

//         animateTitles(); // Start the animation

//         // Optional: Repeat animation
//         const intervalId = setInterval(animateTitles, titles.length * 2000);

//         return () => clearInterval(intervalId); // Clean up on unmount
//     }, []);

//     return (
//         <div className="container font-oswald font-bold">
//         <div className="text-wrapper">
//             <h1
//             ref={(el) => titlesRef.current[0] = el}
//             className="text-white text-[30vw] cursor-default leading-0 m-0 opacity-0 transform translate-y-10 transition duration-500"
//             >
//             Hello!
//             </h1>
//             <h1
//             ref={(el) => titlesRef.current[1] = el}
//             className="text-white text-[20vw] cursor-default leading-0 m-0 opacity-0 transform translate-y-10 transition duration-500"
//             >
//             {`I'm Amit`}
//             </h1>
//         </div>
//         </div>
//     );
// }

// export default IntroText;


//--->Using GSAP
import gsap from 'gsap'
import React, { useEffect } from 'react'
import SplitTextJS from 'split-text-js';

function IntroText() {
    useEffect(() => {
        const titles = gsap.utils.toArray(".text-wrapper h1")
        const titlesTL = gsap.timeline({ repeat: -1, repeatDelay: 0.1 })
        
        titles.forEach(title => {
            const splitTitle = new SplitTextJS(title)
            titlesTL.from(splitTitle.chars, {
                opacity: 0,
                y: 90,
                rotateX: -90,
                stagger: .03,
            }, "<")
                .to(splitTitle.chars, {
                    opacity: 0,
                    y: -90,
                    rotateX: 90,
                    stagger:.03,
            },"<1")
        })
    })

    return (
        <div className='container font-oswald font-bold cursor-default'>
            <div className='text-wrapper'>
                <h1 className='text-center  text-white text-[20vw]  leading-0 m-0'>Hello</h1>
                <h1 className='text-center text-white text-[20vw]  leading-0 m-0'>I’m Amit</h1>
            </div>
        </div>
    )
}

export default IntroText

