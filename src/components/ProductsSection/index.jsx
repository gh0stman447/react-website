import React from 'react';
import { ServicesSection } from '../ServicesSection';
import telephone from '../../assets/telephone.svg';
import { HeadphonesSection } from '../HeadphonesSection';

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
        <HeadphonesSection />
      </div>
    </>
  );
};
