import React from 'react'

const Block = (props) => {
  return (
    <div className='w-2/3 h-16 bg-blue-300 rounded-md p-1 md:p-4'>
         <p className='text-xl text-center'>{props.name}</p>
    </div>
  )
}

export default Block