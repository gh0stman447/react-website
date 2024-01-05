import React from 'react';
import { ServicesSection } from '../ServicesSection';
import telephone from '../../assets/telephone.svg';
import airpods from '../../assets/airpods.jpg';

import { SERVICES_ICONS } from '../Services';

export const ProductsSection = () => {
  return (
    <>
      <div className='px-4 max-w-[1024px] mx-auto' id='product'>
        <ServicesSection
          img={telephone}
          title={'How to design your site footer like we did'}
          subtitle={
            'Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.'
          }
          btnText={'Learn More'}
        />
        <div className='flex flex-col items-center justify-between md:flex-row md:gap-20 mt-20 px-4 py-6'>
          <div className='md:w-1/3'>
            <img className='w-full' src={airpods} alt='' />
          </div>
          <div className='md:w-2/3 mx-auto'>
            <div>
              <p className='text-sm text-NeutralDGrey mb-8 leading-7' id='testimonial'>
                Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel
                rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare,
                tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi
                laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus
                sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis
                vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae
                placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero
                condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.
              </p>
              <p className='text-brandPrimary text-xl font-semibold mb-2'>Tim Smith</p>
              <p className='mb-8 text-neutralGrey'>British Dragon Boat Racing Association</p>
              <div className='flex items-center justify-between'>
                {SERVICES_ICONS.map(({ id, img }) => (
                  <img src={img} key={id} />
                ))}
                <div className='flex items-center gap-8'>
                  <a href='/' className='font-bold text-brandPrimary'>
                    Meet all customer{''}
                    <svg
                      width='18'
                      height='17'
                      viewBox='0 0 18 17'
                      fill='currentColor'
                      xmlns='http://www.w3.org/2000/svg'
                      className='inline-block ml-2'
                    >
                      <path
                        d='M12.0179 11.4389L14.3099 9.14683C14.5818 8.875 14.5818 8.43428 14.3099 8.16244L12.0179 5.87036M14.1061 8.65464L4.36108 8.65464'
                        stroke='#4CAF4F'
                        stroke-width='1.0441'
                        stroke-linecap='round'
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
