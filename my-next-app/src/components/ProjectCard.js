import React from 'react'
import "../styles/globals.css";

const ProjectCard = () => {
    return (
        <div className='w-full h-full max-w-[295px] flex flex-col gap-3 justify-center items-center rounded-[8px] shadow-lg overflow-hidden'>
            <div className='w-full h-[120px]'>
                <img src='images\builder_floor.jpg' className='w-full h-full ' />

            </div>
            <div className='w-full flex flex-col justify-start items-start gap-2 px-2'>
                <p>Gurgaon</p>
                <p>2 BHK</p>
                <p>300 sq ft</p>
            </div>

        </div>
    )
}

export default ProjectCard