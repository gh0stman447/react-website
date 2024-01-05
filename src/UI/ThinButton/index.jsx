import React from 'react';

export const ThinButton = ({ text }) => {
  return (
    <div>
      <a href='/' className='font-bold text-brandPrimary'>
        {text}
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
  );
};
