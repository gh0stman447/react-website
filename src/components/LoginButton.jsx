import React from 'react';

export const LoginButton = ({ children }) => {
  return (
    <a href='/' className='hidden lg:flex items-center text-brandPrimary hover:text-gray900'>
      Login
    </a>
  );
};
