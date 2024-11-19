import ProjectCard from '@/components/ProjectCard'
import React from 'react'
import "../styles/globals.css";
import Navbar from '@/components/Navbar';

const about = () => {
  return (
    <div className='w-full h-full gap-5'>
      <div className='w-full h-20 bg-slate-400 items-center flex justify-between p-5 text-[20px]'>
      <p>Default</p>
      <p>Shared By Yogesh</p>
      </div>
      <div className='w-full h-full grid grid-cols-4 lg:grid-cols-4 bg-green-900 gap-10 p-10'>
      <ProjectCard/>
      <ProjectCard/>
      <ProjectCard/>
      <ProjectCard/>
    </div>
    </div>
  )
}

export default about