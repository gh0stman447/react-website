import React from 'react';
import { FaBars, FaXmark } from 'react-icons/fa6';

export const BurgerMenu = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <div className='md:hidden'>
      <button
        onClick={() => setIsMenuOpen((prev) => !prev)}
        className='text-NeutralDGrey focus:outline-none focus: text-gray-500'
      >
        {isMenuOpen ? <FaXmark size={24} /> : <FaBars size={24} />}
      </button>
    </div>
  );
};
