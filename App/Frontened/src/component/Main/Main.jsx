

import React, { useState } from 'react';

import { BorderBeamDemo } from '../Borderbeam/Borderbeam';

import { Link } from 'react-router-dom';
import MainMenuImage from '../../assets/MainMenuImage.png'




const Main = () => {

  
return (
    <div className=' w-full h-screen md:overflow-hidden items-center overflow-auto border-2 border-white flex bg-gradient-to-r from-blue-950 to-cyan-500 flex-col justify-around md:flex-row md:items-center md:gap-6'>
      <div className='w-1/2 h-full mt-32 '>
        <div className='w-full h-[600px] mt-24 flex flex-col gap-6  justify-evenly '>
          <Link to='/aiquiz' ><BorderBeamDemo name='AI Generated Quiz' /></Link>
          <Link to='/mcqtest' ><BorderBeamDemo name='Youtube Video to text Quiz' /></Link> 
          <Link to='/videoquiz' ><BorderBeamDemo name='Generate MCQ format test' /></Link>
          <Link to='/userdashboard'> <BorderBeamDemo name='User DashBoard' /></Link>
           
          
        </div>
      </div>

      <div className='w-10/12 md:w-1/3 h-1/2 mt-20 flex flex-col items-center mr-8 md:h-1/2'>
        <img src={MainMenuImage} alt="" />
      </div>
    </div>
  );
}

export default Main;
