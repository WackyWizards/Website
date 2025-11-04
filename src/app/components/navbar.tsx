'use client';

import { organization } from '@/constants';
import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { FaGamepad, FaNewspaper } from 'react-icons/fa';
import { redirect } from 'next/navigation';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    setIsOpen(false);

    if (window.location.pathname !== '/') {
      window.location.href = '/#' + sectionId;
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleRedirect = (url: string) => {
    setIsOpen(false);
    redirect(url);
  };

  const menuItems = [
    { name: 'Games', icon: <FaGamepad size={24} />, action: () => handleRedirect('/games') },
    { name: 'News', icon: <FaNewspaper size={24} />, action: () => handleRedirect('/news') },
  ];

  return (
    <nav className="fixed top-0 w-full bg-gray-900 text-white z-50 p-4">
      <div className="flex items-center justify-between w-full">
        <button
          onClick={() => scrollToSection('home')}
          className="text-xl font-bold cursor-pointer"
        >
          {organization.name}
        </button>

        {/* Desktop menu */}
        <div className="hidden md:flex space-x-6">
          {menuItems.map((item) => (
            <div
              key={item.name}
              onClick={item.action}
              className="flex items-center space-x-2 cursor-pointer hover:text-gray-400"
            >
              <span>{item.name}</span>
              {item.icon}
            </div>
          ))}
        </div>

        {/* Mobile toggle button */}
        <button
          className="md:hidden cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-16 right-2 w-64 bg-gray-800 p-4 rounded shadow-lg flex flex-col space-y-4 z-20">
          {menuItems.map((item) => (
            <div
              key={item.name}
              onClick={item.action}
              className="flex items-center justify-between w-full p-2 cursor-pointer hover:text-gray-400"
            >
              <span>{item.name}</span>
              {item.icon}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
}
