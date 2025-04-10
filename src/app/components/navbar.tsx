"use client";

import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    function scrollToSection(sectionId: string) {
        setIsOpen(false);
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className="bg-gray-900 text-white p-4 sticky top-0 z-10 w-full">
            <div className="flex justify-between items-center w-full">
                <button onClick={() => scrollToSection('home')} className="text-xl font-bold cursor-pointer">Unnamed Org</button>

                {/* Desktop Navigation */}
                <div className="hidden md:flex flex-grow justify-end space-x-4"> {/* flex-grow and justify-end to align "Games" to the right */}
                    <button onClick={() => scrollToSection('games')} className="hover:text-gray-400 cursor-pointer">Games</button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden cursor-pointer"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                </button>

                {/* Mobile Menu Dropdown */}
                {isOpen && (
                    <div className="absolute top-16 right-4 bg-gray-900 p-4 rounded shadow-lg md:hidden">
                        <div className="flex flex-col items-start space-y-4">
                            <button onClick={() => scrollToSection('games')} className="hover:text-gray-400 cursor-pointer">Games</button>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}

export default Navbar;
