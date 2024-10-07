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
        <div className='w-1/3 '> {/**/}
            <div className='mx-auto flex items-center justify-center py-4 px-4'>
                <div className='flex items-center space-x-8'>
                    {menuItems.map((item) => 
                            <Link
                                key={item.id}
                                // onClick={() => navigate(item.link)}
                                to={item.id}
                                smooth={true}
                                duration={500}
                                className='text-lg text-white hover:text-[#e66c34] font-oswald font-normal hover:scale-150 cursor-pointer'
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