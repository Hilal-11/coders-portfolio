import React from 'react'
import { IoCubeOutline } from "react-icons/io5";
function Projects() {
  return (
    <div className='w-full h-[600px] bg-slate-200 dark:bg-neutral-950 rounded-t-[80px] py-10 lg:py-20'>
        <div className='text-center space-y-4 '>
            <div className='flex justify-center'>
                <button className='text-center px-8 py-2 rounded-full bg-white shadow-lg poppins-bold text-sm flex gap-3 justify-center items-center'><span className='animate-spin text-xl'><IoCubeOutline/></span>Projects</button>
            </div>
            <h1 className='poppins-bold text-4xl lg:text-7xl'>I love building things</h1>
            <p className='lg:w-1/2 px-6 poppins-regular text-xl text-center mx-auto'>I'm a passionate software engineer dedicated to crafting elegant solutions for complex problems. With expertise in full-stack development, I enjoy building user-centric applications that make a difference.</p>
        </div>
    </div>
  )
}

export default Projects
