import React from 'react';
import { ThinButton } from '../../UI/ThinButton';

import notebook1 from '../../assets/CaringSection/notebook1.png';
import notebook2 from '../../assets/CaringSection/notebook2.png';
import notebook3 from '../../assets/CaringSection/notebook3.png';
import { CaringCard } from '../CaringCard';

const BLOGS = [
  {
    id: 1,
    title: 'Creating Streamlined Safeguarding Processes with OneRen',
    image: notebook1,
  },
  {
    id: 2,
    title: 'What are your safeguarding responsibilities and how can you manage them?',
    image: notebook2,
  },
  {
    id: 3,
    title: 'Revamping the Membership Model with Triathlon Australia',
    image: notebook3,
  },
];
export const CaringSection = ({}) => {
  return (
    <div className='px-4 lg:px-14 max-w-[1024px] mx-auto my-12 mb-24' id='faq'>
      <div className='text-center md:w-1/2 mx-auto'>
        <h2 className='text-4xl text-NeutralDGrey font-semibold mb-4'>
          Caring is the new marketing
        </h2>
        <p className='text-sm text-neutralGrey mb-8 md:w-3/4 mx-auto'>
          The Nextcent blog is the best place to read about the latest membership insights, trends
          and more. See who's joining the community, read about how our community are increasing
          their membership income and lot's more.​
        </p>
      </div>
      <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-20 lg:gap-0 items-center justify-between'>
        {BLOGS.map((blog) => (
          <CaringCard
            key={blog.id}
            src={blog.image}
            text={blog.title}
            image={blog.image}
            textButton={'Readmore'}
          />
        ))}
      </div>
    </div>
  );
};
