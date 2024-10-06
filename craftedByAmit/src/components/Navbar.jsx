/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from "react-scroll";

function Navbar() {
    const menuItems = [
        {
            name: "Home",
            id: "home",
        },
        {
            name: "Projects",
            id: "projects",
        },
        {
            name: "AboutMe",
            id: "about-me",
        },
    ]
    return (
        <div className='w-1/3 '> {/*rounded-lg  bg-gray-500 bg-opacity-15 border-gray-50 backdrop-blur-md shadow-lg */}
            <div className='mx-auto flex items-center justify-center py-4 px-4'>
                <div className='flex items-center space-x-8'>
                    {menuItems.map((item) => 
                            <Link
                                key={item.id}
                                // onClick={() => navigate(item.link)}
                                to={item.id}
                                smooth={true}
                                duration={500}
                                className='text-lg text-white font-oswald font-normal hover:scale-110 cursor-pointer'
                            >
                                {item.name}
                            </Link>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Navbar