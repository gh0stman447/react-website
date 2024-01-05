import React from 'react';
import { ThinButton } from '../UI/ThinButton';

export const CaringCard = ({ text, textButton, image }) => {
  return (
    <div className='mx-auto relative mb-12'>
      <img src={image} alt='' className='hover:scale-95 transition-all duration-300' />
      <div className='text-center px-4 py-8 rounded-md shadow-lg bg-white md:w-11/12 absolute left-0 right-0 -bottom-24 mx-auto'>
        <h3 className='mb-3 text-neutralGrey font-semibold'>{text}</h3>
        <ThinButton text={textButton} />
      </div>
    </div>
  );
};
