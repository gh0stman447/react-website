import React from 'react';
import { Title } from '../Title';
import { Button } from '../../UI/Button';

export const ServicesSection = ({ img, title, subtitle, btnText }) => {
  return (
    <div className='md:flex gap-10 items-center'>
      <div className='w-full flex justify-center'>
        <img className='min-w-[400px] ' src={img} alt='' />
      </div>
      <div className='md:text-left text-center'>
        <Title title={title} subtitle={subtitle} />
        <div className='mt-6'>
          <Button>{btnText}</Button>
        </div>
      </div>
    </div>
  );
};
