import React from 'react';

export const Title = ({ title, subtitle }) => {
  return (
    <>
      <h1 className='leading-8 text-3xl font-semibold text-neutralGrey inline-block mb-4'>
        {title}
      </h1>
      <p className='text-neutralGrey text-sm'>{subtitle} </p>
    </>
  );
};
