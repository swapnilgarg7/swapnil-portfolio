import React, { useState } from 'react'

export default function Navbar() {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const smoothScrollTo = (targetId) => {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className="w-full py-5 sm:px-10 px-5 sm:flex justify-between items-center ">
            <nav className="sm:flex w-full screen-max-width">
                {/* Hamburger menu button */}
                <div className="sm:hidden pt-1">
                    <button onClick={toggleMenu} className="block text-gray">
                        {/* Conditional rendering of hamburger/cross icon */}
                        {isOpen ? (
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        )}
                    </button>
                </div>

                {/* Menu items */}
                <div className={`pt-2 w-1/3 sm:w-full flex flex-col sm:flex-row justify-center items-center  ${isOpen ? 'max-sm:block' : 'max-sm:hidden'}`}>
                    <button onClick={() => smoothScrollTo('hero')} className="text-lg px-5 cursor-pointer text-gray hover:text-white transition-all">
                        Home
                    </button>
                    <button onClick={() => smoothScrollTo('experience')} className="text-lg px-5 cursor-pointer text-gray hover:text-white transition-all">
                        Experience
                    </button>
                    <button onClick={() => smoothScrollTo('skills')} className="text-lg px-5 cursor-pointer text-gray hover:text-white transition-all">
                        Skills
                    </button>
                    <button onClick={() => smoothScrollTo('projects')} className="text-lg px-5 cursor-pointer text-gray hover:text-white transition-all">
                        Projects
                    </button>
                    <button onClick={() => smoothScrollTo('contact')} className="text-lg px-5 cursor-pointer text-gray hover:text-white transition-all">
                        Contact
                    </button>
                </div>
            </nav>
        </div>
    )
}
