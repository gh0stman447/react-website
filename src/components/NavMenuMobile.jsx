import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { NAV_ITEMS } from './Navbar';

export const NavMenuMobile = ({ isMenuOpen, handleClickMobileMenu }) => {
  return (
    <div
      className={`space-y-4 px-4 mt-16 py-7 bg-brandPrimary ${
        isMenuOpen ? 'block fixed top-0 left-0 right-0' : 'hidden'
      }`}
    >
      {NAV_ITEMS.map(({ link, path }) => (
        <Link
          to={path}
          spy={true}
          smooth={true}
          offset={-100}
          key={path}
          className='block text-base text-white hover:text-brandPrimary hover:text-teal-500 first:font-medium cursor-pointer'
          onClick={handleClickMobileMenu}
        >
          {link}
        </Link>
      ))}
    </div>
  );
};
