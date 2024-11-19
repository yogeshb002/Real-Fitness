import React from 'react'
import "../styles/globals.css";

const Navbar = () => {
  return (
    <div className='h-20 w-full bg-slate-500 p-5 items-center flex flex-row justify-between'>
      <img src='images\anytime-fitness-logo-6.png' className='w-[180px] h-[50px]'></img>
      <button>Find a Gym</button>
      <button>Why Join</button>
      <button>Training</button>
      <button>Careers</button>
      <button>Blogs</button>
      <button className='text-blue-50 p-3 rounded-xl hover:bg-black transition-all duration-300 ease-in-out'>Try Us for Free</button>
    </div>
  )
}

export default Navbar