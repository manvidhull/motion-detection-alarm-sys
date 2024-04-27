import React, { useState, useEffect } from 'react';
import NavLinks2 from './NavLinks2.js';
import { HashLink } from 'react-router-hash-link';
import { PiPottedPlantFill } from "react-icons/pi";

const NavBar = () => {
    const [top, setTop] = useState(true); 
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const scrollHandler = () => {
            setTop(window.pageYOffset <= 10); 
        };

        window.addEventListener('scroll', scrollHandler);
        return () => {
            window.removeEventListener('scroll', scrollHandler);
        };
    }, []); 

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav>
            <div className="flex flex-row justify-start items-center py-2">
                <div className="flex flex-row justify-center md:px-2 items-center text-center font-semibold">
                    <HashLink smooth to="/newhome">
                        <img src="/logo.svg" style={{ width: '170px' }} alt="Logo" />
                    </HashLink>
                </div>
                <div className="group flex flex-col items-center">
                    <button className="p-2 rounded-lg lg:hidden text-green-700 bg-green-700 bg-opacity-25" onClick={toggleMenu}>
                        <svg className="h-6 w-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            {isOpen ? (
                                <path fillRule="evenodd" clipRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />
                            ) : (
                                <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
                            )}
                        </svg>
                    </button>
                    <div className="hidden space-x-5 lg:inline-block">
                        <NavLinks2 />
                    </div>
                    <div className={`fixed left-0 w-full bg-white lg:hidden shadow-xl top-14 ${isOpen ? "block" : "hidden"}`}>
                        <div className="flex flex-col space-y-6">
                            <NavLinks2 />
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;

