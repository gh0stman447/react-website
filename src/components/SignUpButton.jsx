import React from 'react';

export const SignUpButton = ({ children }) => {
  return (
    <button
      className='bg-brandPrimary text-white py-2 px-4 transition-all 
                duration-300 rounded hover:bg-NeutralDGrey'
    >
      {children}
    </button>
  );
};
