import { Carousel } from 'flowbite-react';
import React from 'react';
import illustration from '../../assets/Illustration.png';
import { Button } from '../../UI/Button';

export const Home = () => {
  return (
    <div className=' bg-neutralSilver' id='home'>
      <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen'>
        <Carousel className='w-full mx-auto'>
          <div className='my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12'>
            <div>
              <img src={illustration} alt='' />
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
          <div className='my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12'>
            <div>
              <img src={illustration} alt='' />
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
          <div className='my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12'>
            <div>
              <img src={illustration} alt='' />
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
        </Carousel>
      </div>
    </div>
  );
};
