import { useEffect } from "react";
import { RiNextjsFill  , RiTailwindCssFill } from "react-icons/ri";
import { SiShadcnui } from "react-icons/si";
import { RiRemixRunLine } from "react-icons/ri";
import { TbBrandFramerMotion } from "react-icons/tb";
import { TbBrandReactNative } from "react-icons/tb";
import { useParams } from 'react-router-dom'
// import { ProjectsConfig } from '@/config/projectsData';
import { ProjectsConfig } from '../../config/projectsData'
function ProjectsPreview( ) {
    const { id } = useParams()

    useEffect(() => {
        window.scrollTo(0 , 0);
    }, [])

    const project = ProjectsConfig.find((project) => project.uniqueID === id)

  return (
    <div className='w-full h-auto py-2 lg:py-20'>
        <div className='grid grid-cols-1 lg:grid-cols-2 justify-between py-10'>
            <div className=' poppins-regular space-y-4'>
                <h1 className='poppins-bold text-4xl lg:text-6xl'>{project?.name}</h1>
                <p className='poppins-medium text-sm lg:text-lg'>{project?.description}</p>

            </div>

            <div className='py-10 flex flex-wrap items-end lg:justify-end justify-center gap-5'>
                <button className='w-full lg:w-[200px] bg-black dark:bg-white dark:text-black text-white poppins-bold text-sm lg:text-md shadow-sm shadow-slate-800  py-[9px] lg:rounded-xl rounded-xl cursor-pointer transition-all duration-300'>Live Preview</button>
                <button className='w-full lg:w-[200px] poppins-bold text-sm dark:bg-neutral-950 lg:text-md shadow-sm shadow-slate-800  py-[9px] lg:rounded-xl rounded-xl cursor-pointer transition-all duration-300'>Github Clone Project?</button>
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
                {
                    project?.images.map((image) => (
                        <div key={project?.uniqueID} className=' lg:rounded-2xl rounded-xl shadow-sm shadow-gray-400'>
                            <img className='h-full rounded-2xl object-cover hover:mask-none transition duration-500' src={image} alt="Error" />
                        </div>
                    ))
                }
            </div>
        </div>



    </div>
  )
}

export default ProjectsPreview
