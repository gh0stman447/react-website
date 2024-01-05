import { Carousel } from 'flowbite-react';
import React from 'react';
import illustration from '../../assets/Illustration.png';
import { Button } from '../../UI/Button';
import { ElementCarousel } from '../ElementCarousel';

export const Home = () => {
  return (
    <div className=' bg-neutralSilver' id='home'>
      <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-auto min-h-screen h-screen'>
        <Carousel className='w-full mx-auto'>
          <ElementCarousel img={illustration} />
          <ElementCarousel img={illustration} />
          <ElementCarousel img={illustration} />
        </Carousel>
      </div>
    </div>
  );
};
