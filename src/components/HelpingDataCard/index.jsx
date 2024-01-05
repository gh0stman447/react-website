import React from 'react';

export const HelpingDataCard = ({ img, number, description }) => {
  return (
    <div className='flex items-center gap-4'>
      <img src={img} alt='' />
      <div>
        <h4 className='text-2xl text-neutralDGrey font-semibold'>{number}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
};
