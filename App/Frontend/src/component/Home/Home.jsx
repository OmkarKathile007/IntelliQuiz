import React from 'react';
import AIimage from '../../assets/AI-Image.png';
import Block from '../Block/Block';
import Card from '../Card/Card';
import Footer from '../Footer/Footer';
import Intelli_Img from '../../assets/Intelli_Img1.jpg'

const Home = () => {
  return (

    <>
      <div className='w-full min-h-screen bg-black flex flex-col md:flex-row text-white border-2 border-pink-300'>
        <div className='w-full mt-12 md:mt-24 flex flex-col-reverse md:flex-row justify-between border-pink-500 border-2 px-4 md:px-0'>
          <div className='border-2 border-purple-600 p-4 md:ml-32 md:w-1/2 flex flex-col items-center gap-2'>
            <h2 className='text-3xl md:text-8xl font-bold text-blue-300 mt-10 md:mt-40 '>
              AI Driven Quiz
            </h2>
            <p className='mt-5 text-pretty md:text-xl font-semibold '>
            Elevate your learning with AI-driven quizzes and multiplayer online modes, designed to make studying smarter and more engaging for students
            </p>
            
            <div className=' flex justify-center md:justify-start mt-28 mr-14'>
              <button className='bg-blue-700 p-4 px-8 md:px-16 rounded-md shadow-xl shadow-transparent'>
                Get Started
              </button>
            </div>
          </div>
          <div className='border-2 border-pink  flex justify-center md:justify-end md:w-1/2 '>
            <img className='h-fit w-10/12 mr-10 mt-20'   src={AIimage} alt='AI' />
          </div>
        </div>
      </div>

      {/* --------- NEW SECTION --------------- */}

      
      <div className='bg-black w-full min-h-screen border-pink-300 border-2'>


      <div className='border-2 border-x-pink-200 mt-10'>
        <p className='text-white text-7xl ml-8 mt-11 font-bold animate-appear'>Features</p>
      </div>
        

        <div className='border-2 border-orange-500 flex flex-col md:flex-row mt-28'>
          <div className='border-2 border-orange-500 w-full md:w-1/3'>
            <img className='w-full h-auto' src={AIimage} alt="" />
          </div>

          <div className='flex flex-col gap-5 my-7 border-2 border-orange-500 w-full md:w-2/3  items-center  animate-appear'>
            <Block name='Students Using Technology' />
            <Block name='A visual representation of an interactive quiz' />
            <Block name='Dashboard showing detailed quiz analytics' />
            <Block name='Adaptive difficulty based on user choices' />
            <Block name='User profile tracking by rating' />
            <Block name='Instant feedback on incorrect selections' />
          </div>
        </div>
      </div>


      <div className='bg-black w-full h-1/2 border-2 border-green-500 flex-1 '>

        <div className='border-2 border-x-pink-200 mt-14'>
        <p className='text-white text-7xl  mt-11 font-bold '>Features</p>
        </div>
      
         <div className='w-full min-h-full  py-24 border-2  border-blue-500 flex flex-col gap-3 md:flex-row justify-evenly items-center '>
          
          <Card image={AIimage}/>
          <Card image={AIimage}/>
          <Card image={AIimage} />


         

          

         </div>
        
      </div>

      <div className='bg-black w-full min-h-screen border-2 border-yellow-300'>

        <div className='mt-10'>
          <p className='text-7xl text-white text-center'>About Us</p>

          <div className='w-1/2 m-auto'>
          <p className='text-white mt-8'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum aliquid placeat possimus debitis fuga, maxime quos iure, dolore, et facilis sit voluptates ex minima at adipisci impedit ipsa natus illo fugiat quo.</p>

          </div>
          
        </div>
            
      </div>
      <Footer></Footer>
    </>
  );
};

export default Home;


