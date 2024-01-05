import React from 'react';
import { Link } from 'react-scroll';
import { NAV_ITEMS } from './Navbar';

export const NavMenu = () => {
  return (
    <ul className='md:flex space-x-12 hidden'>
      {NAV_ITEMS.map(({ link, path, handleClickMobileMenu }) => (
        <Link
          to={path}
          spy={true}
          smooth={true}
          offset={-100}
          key={path}
          className='block text-base text-gray900 hover:text-brandPrimary first:font-medium cursor-pointer'
          onClick={handleClickMobileMenu}
        >
          {link}
        </Link>
      ))}
    </ul>
  );
};
