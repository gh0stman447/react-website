import React from 'react';
import { Button } from 'react-scroll';

export const ElementCarousel = ({ img }) => {
  return (
    <div className='my-28 md:my-8 py-36 flex flex-col md:flex-row-reverse items-center justify-between gap-12'>
      <div>
        <img src={img} alt='' />
      </div>
      <div className='md:w-1/2'>
        <h1 className='text-5xl font-semibold text-NeutralDGrey md:w-3/4 leading-snug'>
          Lessons and insights <span className='text-brandPrimary'>from 8 years</span>
        </h1>
        <p className='text-NeutralGrey text-base mb-8'>
          Where to grow your business as a photographer: site or social media?
        </p>
        <Button>Register</Button>
      </div>
    </div>
  );
};
