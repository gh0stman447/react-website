import React from 'react';

export const ServicesCard = ({ image, title, subtitle }) => {
  return (
    <div className='text-center text-neutralGrey shadow-md rounded-md mt-4 flex-1 p-4 cursor-pointer hover:-translate-y-5 transition-all duration-200 hover:border-b-4 hover:border-y-slate-200'>
      <div>
        <img className='w-[45px] inline-block' src={image} alt='' />
        {/* <div className='absolute top-0 right-0 left-0 bottom-0 rounded-l-lg bg-brandPrimary w-8'></div> */}
      </div>
      <div className='font-bold text-2xl mb-1'>{title}</div>
      {subtitle}
    </div>
  );
};
