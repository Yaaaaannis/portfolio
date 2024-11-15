import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useRef, useEffect } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);


  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current && 
        !menuRef.current.contains(event.target) &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='fixed top-0 left-0 right-0 z-50 backdrop-blur-sm opacity-90'>
      <div className='flex justify-between items-center px-12 py-4'>
        <Link 
          to="/" 
          className="text-xl font-bold relative group"
        >
          <span className="relative inline-block transition-colors duration-300 bg-gradient-to-r from-white to-white bg-clip-text group-hover:from-blue-400 group-hover:to-blue-600 group-hover:text-transparent">
            YF Studio
          </span>
        </Link>

        <div className="relative" ref={menuRef}>
          <button 
            onClick={toggleMenu} 
            className="text-lg relative group" 
            ref={buttonRef}
          > 
            <span className="relative inline-block transition-colors duration-300 bg-gradient-to-r from-white to-white bg-clip-text group-hover:from-blue-400 group-hover:to-blue-600 group-hover:text-transparent font-bold">
              Contact
            </span>
          </button>
          <div 
            className={`absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 transition-all duration-300 ease-in-out origin-top ${
              isMenuOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'
            }`}
          >
            <a href="mailto:yannisfebvre@gmail.com" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
              Email
            </a>
            <a href="tel:+33606434948" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
              06 06 43 49 48
            </a>
            <a href="https://cal.com/yannis-febvre-studio" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
              Réserver un rendez-vous
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
