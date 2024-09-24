import React from 'react'
import AiImage from '../../assets/AI-Image.png'
import { BorderBeam } from '../magicui/border-beam'

const Card = (props) => {
  return (
    <div className='w-1/4 border-2 border-red-600 bg-cyan-200 '>
     
        <img className='flex justify-center items-center' src={props.image} alt="" />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate corporis aspernatur magni molestias quidem enim eos quis esse assumenda doloremque omnis vero illum pariatur aperiam, iusto minima recusandae dolore ea explicabo corrupti.</p>
      
    </div>
  )
}

export default Card