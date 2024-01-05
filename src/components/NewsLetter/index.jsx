import React from 'react';
import { Button } from '../../UI/Button';

export const NewsLetter = () => {
  return (
    <div className='bg-neutralSilver'>
      <div className='lg:w-3/5 mx-auto py-20 flex flex-col items-center gap-6 text-center px-4'>
        <h1 className='leading-tight text-5xl font-semibold text-[#263238]'>
          Pellentesque suscipit fringilla libero eu.
        </h1>
        <Button>Get a demo</Button>
      </div>
    </div>
  );
};
