import React from 'react'

const Menu = () => {
  return (
    <div className='bg-blue-300 mt-2 flex flex-col justify-evenly items-center gap-2'>
        <div className=' hover:bg-black w-full text-center '>Home</div>
        <div className=' hover:bg-black w-full text-center'>About</div>
        <div className=' hover:bg-black w-full text-center'>Contact</div>
        <div className=' hover:bg-black w-full text-center'>Course</div>
        <div className=' hover:bg-black w-full text-center'>Login</div>
    </div>
  )
}

export default Menu