import React, { useEffect, useState } from 'react';
import logo from '../../assets/Icon.png';
import { Link } from 'react-scroll';

import { FaXmark, FaBars } from 'react-icons/fa6';
import { Logo } from '../Logo';
import { NavMenu } from '../NavMenu';
import { NavMenuMobile } from '../NavMenuMobile';
import { BurgerMenu } from '../BurgerMenu';
import { LoginButton } from '../LoginButton';
import { SignUpButton } from '../SignUpButton';

export const NAV_ITEMS = [
  {
    link: 'Home',
    path: 'home',
  },
  {
    link: 'Service',
    path: 'service',
  },
  {
    link: 'About',
    path: 'about',
  },
  {
    link: 'Product',
    path: 'product',
  },
  {
    link: 'Testimonial',
    path: 'testimonial',
  },
  {
    link: 'FAQ',
    path: 'faq',
  },
];

export const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleClickMobileMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (Window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.addEventListener('scroll', handleScroll);
    };
  });

  return (
    <header className='w-full bg-white sticky z-10 bg-transparent top-0 left-0 right-0'>
      <nav
        className={`py-4 lg:px-14 px-4 ${
          isSticky ? 'sticky top-0 right-0 left-0 bottom-0 border-bg-white duration-300' : ''
        }`}
      >
        <div className='flex items-center justify-between gap-8 text-base'>
          <Logo logo={logo} text={'Nexcent'} />
          <NavMenu />
          <div className='space-x-12 hidden lg:flex items-center'>
            <LoginButton>Login</LoginButton>
            <SignUpButton>Sign up</SignUpButton>
          </div>
          <BurgerMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        </div>
        <NavMenuMobile isMenuOpen={isMenuOpen} handleClickMobileMenu={handleClickMobileMenu} />
      </nav>
    </header>
  );
};
