import React from 'react';

export const Button = ({ children }) => {
  return (
    <button className='py-2 px-6 text-white bg-brandPrimary  transition-all'>{children}</button>
  );
};
