import React from 'react';
import { HelpingDataCard } from '../HelpingDataCard';

import club from '../../assets/HelpingSectionIcons/clubs.svg';
import event from '../../assets/HelpingSectionIcons/event.svg';
import members from '../../assets/HelpingSectionIcons/members.svg';
import payment from '../../assets/HelpingSectionIcons/payment.svg';

const HELPING_DATA = [
  {
    id: 1,
    img: members,
    number: 2_245_341,
    description: 'Members',
  },
  {
    id: 2,
    img: club,
    number: 46_328,
    description: 'Clubs',
  },
  {
    id: 3,
    img: event,
    number: 828_867,
    description: 'Event Booking',
  },
  {
    id: 4,
    img: payment,
    number: 1_926_436,
    description: 'Payments',
  },
];
export const HelpingSection = () => {
  return (
    <div className='bg-neutralSilver'>
      <div className='max-w-[1024px] mx-auto px-4'>
        {' '}
        <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-16 mb-20'>
          <div className='flex flex-col md:flex-row justify-between items-center gap-8'>
            <div className='md:w-1/2'>
              <h2 className='text-4xl text-NeutralDGrey font-semibold mb-4 md:w-2/3'>
                Helping a local <span className='text-brandPrimary'> business reinvent itself</span>
              </h2>
              <p className=''>We reached here with our hard work and dedication</p>
            </div>
            <div className='md:w-1/2 mx-auto flex sm:flex-row flex-col sm:items-center justify-around gap-12 '>
              <div className='space-y-8'>
                <div className='flex items-center gap-4'>
                  <img src={payment} alt='' />
                  <div>
                    <h4 className='text-2xl text-neutralDGrey font-semibold'>123234</h4>
                    <p>Members</p>
                  </div>
                </div>
                <div className='flex items-center gap-4'>
                  <img src={payment} alt='' />
                  <div>
                    <h4 className='text-2xl text-neutralDGrey font-semibold'>123234</h4>
                    <p>Members</p>
                  </div>
                </div>
              </div>
              <div className='space-y-8'>
                <div className='flex items-center gap-4'>
                  <img src={payment} alt='' />
                  <div>
                    <h4 className='text-2xl text-neutralDGrey font-semibold'>123234</h4>
                    <p>Members</p>
                  </div>
                </div>
                <div className='flex items-center gap-4'>
                  <img src={payment} alt='' />
                  <div>
                    <h4 className='text-2xl text-neutralDGrey font-semibold'>123234</h4>
                    <p>Members</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
