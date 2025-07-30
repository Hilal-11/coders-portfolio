import React from 'react'
import { IoCubeOutline } from "react-icons/io5";
import { ProjectsConfig } from '@/config/projectsData';
function Projects() {
  return (
    <div className='w-full h-auto bg-slate-200 dark:bg-neutral-950 rounded-t-[80px] py-10 lg:py-20'>
        <div className='text-center space-y-4 '>
            <div className='flex justify-center'>
                <button className='text-center px-8 py-2 rounded-full bg-white shadow-lg poppins-bold text-sm flex gap-3 justify-center items-center'><span className='animate-spin text-xl'><IoCubeOutline/></span>Projects</button>
            </div>
            <h1 className='poppins-bold text-4xl lg:text-7xl'>I love building things</h1>
            <p className='lg:w-1/2 px-6 poppins-regular text-xl text-center mx-auto'>I'm a passionate software engineer dedicated to crafting elegant solutions for complex problems. With expertise in full-stack development, I enjoy building user-centric applications that make a difference.</p>
        </div>


        <div className='grid grid-cols-3 gap-6 mx-auto w-[70%] py-10'>
            <div className='col-span-2 bg-zinc-100 h-[350px] rounded-xl shadow-lg shadow-gray-400'></div>
            <div className='bg-zinc-100 h-[350px] rounded-xl shadow-lg shadow-gray-400'></div>
            <div className=' bg-zinc-100 h-[350px] rounded-xl shadow-lg shadow-gray-400'></div>
            <div className='col-span-2 bg-zinc-100 h-[350px] rounded-xl shadow-lg shadow-gray-400'></div>
        </div>


    </div>


//<div className='lg:w-[80%] grid grid-cols-2s justify-evenly mx-auto gap-10 py-20 px-10'>
//<div className='w-[70%] h-[300px] bg-white shadow-lg shadow-zinc-300 rounded-xl'></div>
//<div className='w-[30%] h-[300px] bg-white shadow-lg shadow-zinc-300 rounded-xl'></div></div>

  )
}

export default Projects
