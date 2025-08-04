import React from 'react'
import { RiNextjsFill  , RiTailwindCssFill } from "react-icons/ri";
import { SiShadcnui } from "react-icons/si";
import { RiRemixRunLine } from "react-icons/ri";
import { TbBrandFramerMotion } from "react-icons/tb";
import { TbBrandReactNative } from "react-icons/tb";

function ProjectsPreview() {
  return (
    <div className='w-full h-auto py-2 lg:py-20'>
        <div className='grid grid-cols-1 lg:grid-cols-2 justify-between py-10'>
            <div className=' poppins-regular space-y-4'>
                <h1 className='poppins-bold text-4xl lg:text-6xl'>AI SaaS Template</h1>
                <p className='poppins-medium text-sm lg:text-lg'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga reiciendis est quisquam ducimus assumenda omnis provident nulla, aut ullam blanditiis, mollitia dolores? Sit voluptatem ratione nihil tempore illo commodi minus nemo distinctio assumenda eum reprehenderit neque.</p>


            </div>

            <div className='py-10 flex flex-wrap items-end lg:justify-end justify-center gap-5'>
                <button className='w-full lg:w-[200px] bg-black dark:bg-white dark:text-black text-white poppins-bold text-sm lg:text-md shadow-sm shadow-slate-800  py-[9px] lg:rounded-xl rounded-xl cursor-pointer transition-all duration-300'>Live Preview</button>
                <button className='w-full lg:w-[200px] poppins-bold text-sm dark:bg-neutral-950 lg:text-md shadow-sm shadow-slate-800  py-[9px] lg:rounded-xl rounded-xl cursor-pointer transition-all duration-300'>Github Clone Project</button>
            </div>
        </div>
        <div className='flex flex-wrap justify-evenly lg:justify-center py-0 gap-4 lg:gap-6 poppins-medium text-neutral-600'>
                    <span className='flex gap-1 justify-center items-end text-[14px] lg:text-[15px] poppins-bold'> <span className='text-3xl lg:text-4xl'><RiNextjsFill/></span>Next.js</span>
                    <span className='flex gap-1 justify-center items-end text-[14px] lg:text-[15px] poppins-bold'> <span className='text-3xl lg:text-4xl'><TbBrandReactNative/></span>React</span>
                    <span className='flex gap-1 justify-center items-end text-[14px] lg:text-[15px] poppins-bold'> <span className='text-3xl lg:text-4xl'><RiTailwindCssFill/></span>Tailwind CSS</span>
                    <span className='flex gap-1 justify-center items-end text-[14px] lg:text-[15px] poppins-bold'> <span className='text-3xl lg:text-4xl'><TbBrandFramerMotion/></span>Motion</span>
                    <span className='flex gap-1 justify-center items-end text-[14px] lg:text-[15px] poppins-bold'> <span className='text-3xl lg:text-4xl'><RiRemixRunLine/></span>Remix</span>
                    <span className='flex gap-1 justify-center items-end text-[14px] lg:text-[15px] poppins-bold'> <span className='text-3xl lg:text-4xl'><SiShadcnui/></span>Shadcn</span>
        </div>

    {/* Prject Images */}

        <div className='flex justify-center items-center py-20'>
            <div className='grid lg:grid-cols-2 grid-cols-1 w-full lg:gap-4 gap-2 '>
                <div className=' rounded-2xl shadow-sm shadow-gray-400'>
                    <img className='rounded-2xl object-cover' src="https://res.cloudinary.com/dou5rypdf/image/upload/v1754305561/Screenshot_2025-08-03_230537_cho01w.png" alt="Error" />
                </div>
                <div className=' rounded-2xl shadow-sm shadow-gray-400'>
                    <img className='rounded-2xl object-contain' src="https://res.cloudinary.com/dou5rypdf/image/upload/v1754305606/Screenshot_2025-08-03_230628_wtc5r1.png" alt="Error" />
                </div>
                <div className=' rounded-2xl shadow-sm shadow-gray-400'>
                    <img className='rounded-2xl object-cover' src="https://res.cloudinary.com/dou5rypdf/image/upload/v1754305562/Screenshot_2025-08-03_230551_lw86cw.png" alt="Error" />
                </div>
                <div className=' rounded-2xl shadow-sm shadow-gray-400'>
                    <img className='rounded-2xl  object-cover' src="https://res.cloudinary.com/dou5rypdf/image/upload/v1754305562/Screenshot_2025-08-03_230551_lw86cw.png" alt="Error" />
                </div>
            </div>
        </div>



    </div>
  )
}

export default ProjectsPreview
