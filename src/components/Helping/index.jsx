import React from 'react';
import { HelpingDataCard } from '../HelpingDataCard';
import { HelpingSectionText } from '../HelpingSectionText';

import clubs from '../../assets/HelpingSectionIcons/clubs.svg';
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
    img: clubs,
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
        <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-16 mb-20'>
          <div className='flex flex-col md:flex-row justify-between items-center gap-8'>
            <HelpingSectionText />
            <div className='md:w-1/2 mx-auto flex sm:flex-row flex-col sm:items-center justify-around gap-12 '>
              <div className='space-y-8'>
                <HelpingDataCard description={'Members'} img={members} number={'2,245,341'} />
                <HelpingDataCard description={'Clubs'} img={clubs} number={'46,328'} />
              </div>
              <div className='space-y-8'>
                <HelpingDataCard
                  description={'Event Bookings'}
                  img={members}
                  number={'2,245,341'}
                />
                <HelpingDataCard description={'Payments'} img={payment} number={'1,926,436'} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
