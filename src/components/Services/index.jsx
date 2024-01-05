import React from 'react';
import Services1 from '../../assets/servicesIcons/services1.svg';
import Services2 from '../../assets/servicesIcons/services2.svg';
import Services3 from '../../assets/servicesIcons/services3.svg';
import Services4 from '../../assets/servicesIcons/services4.svg';
import Services5 from '../../assets/servicesIcons/services5.svg';
import Services7 from '../../assets/servicesIcons/services7.svg';

import ServicesPictureIcon from '../../assets/ServicePictureIcon.svg';

import { Title } from '../Title';
import { ServicesCard } from '../ServicesCard';
import { ServicesSection } from '../ServicesSection';

export const SERVICES_ICONS = [
  { id: 1, img: Services1 },
  { id: 2, img: Services2 },
  { id: 3, img: Services3 },
  { id: 4, img: Services4 },
  { id: 5, img: Services5 },
  { id: 7, img: Services7 },
];

export const SERVICES = [
  {
    id: 1,
    title: 'Membership Organisations',
    subtitle:
      'Our membership management software provides full automation of membership renewals and payments',
    img: '../../assets/ServicesCardIcons/ServicesCardIcon1.svg',
  },
  {
    id: 2,
    title: 'National Associations',
    subtitle:
      'Our membership management software provides full automation of membership renewals and payments',
    img: '../../assets/ServicesCardIcons/ServicesCardIcon2.svg',
  },
  {
    id: 3,
    title: 'Clubs And Groups',
    subtitle:
      'Our membership management software provides full automation of membership renewals and payments',
    img: '../../assets/ServicesCardIcons/ServicesCardIcon3.svg',
  },
];
export const Services = () => {
  return (
    <div className='max-w-[1024px] mx-auto text-center px-6' id='service'>
      <Title
        title={'Our Clients'}
        subtitle={'We have been working with some Fortune 500+ clients'}
        id='service'
      />
      <div className='flex items-center justify-between mt-8 mb-12'>
        {SERVICES_ICONS.map(({ id, img }) => (
          <img src={img} key={id} alt='' />
        ))}
      </div>
      <div className='max-w-[477px] mx-auto'>
        <Title
          title={'Manage your entire community in a single system'}
          subtitle={'Who is Nextcent suitable for?'}
        />
      </div>

      <div className='flex flex-col gap-4 md:gap-10 md:flex-row'>
        {SERVICES.map(({ id, title, subtitle, img }) => (
          <ServicesCard key={id} title={title} subtitle={subtitle} image={img} />
        ))}
      </div>
      <div className='my-20 mx-auto' id='about'>
        <ServicesSection
          img={ServicesPictureIcon}
          title={'The unseen of spending three years at Pixelgrade'}
          subtitle={
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.'
          }
          btnText={'Learn More'}
        />
      </div>
    </div>
  );
};
