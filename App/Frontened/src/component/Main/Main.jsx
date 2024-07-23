

import React from 'react';
import Block from '../Block/Block';
import { BorderBeamDemo } from '../Borderbeam/Borderbeam';

const Main = () => {
  return (
    <div className='w-full h-screen flex bg-black flex-col justify-around md:flex-row md:items-center md:gap-6'>
      <div className='w-10/12 h-1/2 mt-52'>
        <div className='w-full h-full flex flex-wrap gap-8 justify-evenly items-center'>
          <div className='w-full md:w-1/3 h-1/3'>
            <BorderBeamDemo name='AI Generated Quiz' />
          </div>
          <div className='w-full md:w-1/3 h-1/3'>
            <BorderBeamDemo name='Youtube Video to text Quiz' />
          </div>
          <div className='w-full md:w-1/3 h-1/3'>
            <BorderBeamDemo name='Generate MCQ format test' />
          </div>
          <div className='w-full md:w-1/3 h-1/3'>
            <BorderBeamDemo name='User DashBoard' />
          </div>
        </div>
      </div>

      <div className='w-10/12 md:w-1/3 h-1/2 mt-52 flex items-center mr-8'>
        <span className='w-full h-full border-2 border-white rounded-md'></span>
      </div>
    </div>
  );
}

export default Main;
