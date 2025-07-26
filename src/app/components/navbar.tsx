'use client';

import { OrgName } from '@/constants';
import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { FaHome, FaGamepad } from 'react-icons/fa';
import { LuUsers } from 'react-icons/lu';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    function scrollToSection(sectionId: string) {
        if (location.pathname !== '/') {
            location.href = '/#' + sectionId;
        }

        setIsOpen(false);
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className="fixed bg-gray-900 text-white p-4 top-0 z-50 w-full">
            <div className="flex items-center w-full">
                <button
                    onClick={() => scrollToSection('home')}
                    className="text-xl font-bold cursor-pointer flex-grow text-left"
                >
                    {OrgName}
                </button>

                <div className="h-full flex items-center space-x-4 md:flex">
                    <button
                        className="cursor-pointer"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                    </button>
                </div>

                {isOpen && (
                    <div className="absolute w-70 top-16 right-2 bg-gray-800 p-4 rounded shadow-lg z-20">
                        <div className="flex w-full flex-col items-start space-y-4">
                            <div onClick={() => scrollToSection('home')} className="flex p-1  w-full hover:text-gray-400 cursor-pointer">
                                <p className="w-full">Home</p>
                                <FaHome className="text-gray-400" size={24} />
                            </div>
                            <div onClick={() => scrollToSection('games')} className="flex p-1  w-full hover:border-left hover:text-gray-400 cursor-pointer">
                                <p className="w-full">Games</p>
                                <FaGamepad className="text-gray-400" size={24} />
                            </div>
                            <div onClick={() => scrollToSection('team')} className="flex p-1  w-full hover:border-left hover:text-gray-400 cursor-pointer">
                                <p className="w-full">Team</p>
                                <LuUsers className="text-gray-400" size={24} />
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}
