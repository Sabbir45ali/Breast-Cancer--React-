import React from 'react';

const FooterLinks = (props) => {
  return (
    <div className='flex flex-col items-center w-full'>
      
      <div className='w-full bg-gradient-to-r from-pink-300 to-pink-500 text-white text-center py-4 rounded-t-2xl font-semibold mb-0'>
        {props.FooterText1}{' '}
        <a href='/sign-up' className='font-bold'>
          {props.FooterText2}
        </a>
      </div>
    </div>
  );
};

export default FooterLinks;
