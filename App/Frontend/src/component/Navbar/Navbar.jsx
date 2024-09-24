import React from 'react'
import { Link } from 'react-router-dom'
import PsychologyIcon from '@mui/icons-material/Psychology';
import Home from '../Home/Home';

const Navbar = () => {
  return (
    <div className='fixed  flex w-full h-28 bg-gray-900 justify-between z-50 items-center shadow-lg shadow-slate-700 text-white '>
        <div className="ml-10 flex">
              <PsychologyIcon sx={{fontSize:60}} className='mr-1'/>
              {/* <Icon></Icon> */}
              <h3 className='text-5xl font-bold mt-1'>IntelliQuiz</h3>
        </div>

        <div className='flex items-center list-none mr-52 gap-7 max-w-16'>
            <li className='hover:text-sky-400'><Link to='/'>Home</Link></li>
            <li className='hover:text-sky-400'><Link to='/main'>Enter</Link></li>
            <li className='hover:bg-purple-700 p-2 text-white bg-purple-800 rounded-md px-4'><Link to='/signup'>SignUp</Link></li>
            {/* <li><button className='hover:bg-purple-700 p-2 text-white bg-purple-800 rounded-md px-4'>Signup</button></li> */}
        </div>

        
            
        


    </div>
  )
}

export default Navbar