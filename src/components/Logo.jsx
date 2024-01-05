import React from 'react';

export const Logo = ({ logo, text }) => {
  return (
    <a href='/' className='text-2xl font-semibold items-center space-x-3 uppercase'>
      <img src={logo} alt='' className='w-10 inline-block items-center' />
      <span className='text-[#263238] '>{text}</span>
    </a>
  );
};
