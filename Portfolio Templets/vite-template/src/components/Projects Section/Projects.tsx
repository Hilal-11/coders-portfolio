import React, { useState } from 'react'
import { IoCubeOutline } from "react-icons/io5";
import { ProjectsConfig } from '@/config/projectsData';
import { RiArrowRightFill, RiGithubFill } from "react-icons/ri";
import { motion, useInView } from "framer-motion";
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

function Projects() {
  const [isShowAllProjects, setIsShowAllProjects] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const navigate = useNavigate('')
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
        ease: "easeOut"
      }
    }
  };
  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      scale: 0.9,
      filter: "blur(4px)"
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };
  const buttonVariants = {
    hidden: { 
      opacity: 0, 
      y: 40,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      y: -5,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    },
    tap: {
      scale: 0.95,
      transition: {
        duration: 0.1
      }
    }
  };
  const glowVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: "easeOut"
      }
    }
  };

  return (  
    <motion.div 
      id='projects_section'
      ref={ref}
      className='w-full h-auto bg-slate-200 dark:bg-neutral-950 py-10 lg:py-20'
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
        <motion.div 
          className='text-center space-y-4'
          variants={itemVariants}
        >
            <motion.div 
              className='flex justify-center'
              variants={itemVariants}
            >
                <motion.button 
                  className='dark:bg-neutral-900 text-center px-8 py-2 rounded-full bg-white shadow-lg poppins-bold text-sm flex gap-3 justify-center items-center'
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  <span className='animate-spin text-xl'><IoCubeOutline/></span>Projects
                </motion.button>
            </motion.div>
            <motion.h1 
              className='poppins-bold text-4xl lg:text-7xl'
              variants={itemVariants}
            >
              I love building things
            </motion.h1>
            <motion.p 
              className='lg:w-1/2 px-6 poppins-regular text-xl text-center mx-auto'
              variants={itemVariants}
            >
              I'm a passionate software engineer dedicated to crafting elegant solutions for complex problems. With expertise in full-stack development, I enjoy building user-centric applications that make a difference.
            </motion.p>
        </motion.div>

        <div 
          id='bento-grid'
          className='grid lg:grid-cols-3 gap-3 lg:gap-6 mx-auto lg:w-[80%] py-10 px-6 relative'
        >
            <motion.span 
              className='lg:w-[300px] lg:h-[300px] rounded-full bg-cyan-500 absolute z-10 -top-10 -left-20 blur-[140px]'
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1,transition: { duration: 1.2, ease: "easeOut" }
              }}
              viewport={{ once: true, margin: "-50px" }}
              
            ></motion.span>
            
            <motion.div 
              className='col-span-2 bg-zinc-100 dark:bg-neutral-900 h-[320px] rounded-xl shadow-lg shadow-gray-400 dark:shadow-gray-950 z-20'
              initial={{ opacity: 0, y: 60, scale: 0.9, filter: "blur(4px)" }}
              whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)",transition: { duration: 0.8, ease: "easeOut" }
              }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ scale: 1.02,transition: { duration: 0.2 }
              }}
            >
              <div className='w-full h-full overflow-hidden' onClick={() => navigate(`/projects/${ProjectsConfig[0].uniqueID}`)}>
                  <img className='w-full h-full object-cover rounded-xl' src={ProjectsConfig[0].images[0]} alt="Error" />
              </div>
            </motion.div>
            <motion.div 
              className='bg-zinc-100 dark:bg-neutral-900 h-[320px] rounded-xl shadow-lg shadow-gray-400 dark:shadow-gray-950 z-20'
              initial={{ opacity: 0, y: 60, scale: 0.9, filter: "blur(4px)" }}
              whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)",transition: { duration: 0.8, ease: "easeOut", delay: 0.1 }
              }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ scale: 1.02,transition: { duration: 0.2 }
              }}
            >
              <div className='w-full h-full overflow-hidden' onClick={() => navigate(`/projects/${ProjectsConfig[1].uniqueID}`)}>
                  <img className='w-full h-full object-cover rounded-xl' src={ProjectsConfig[1].images[1]} alt="Error" />
              </div>
            </motion.div>
            <motion.div 
              className='bg-zinc-100 dark:bg-neutral-900 h-[320px] rounded-xl shadow-lg shadow-gray-400 dark:shadow-gray-950 z-20'
              initial={{ opacity: 0, y: 60, scale: 0.9, filter: "blur(4px)" }}
              whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)",transition: { duration: 0.8, ease: "easeOut", delay: 0.2 }
              }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ scale: 1.02,transition: { duration: 0.2 }
              }}
            >
              <div className='w-full h-full overflow-hidden' onClick={() => navigate(`/projects/${ProjectsConfig[2].uniqueID}`)}>
                  <img className='w-full h-full object-cover rounded-xl' src={ProjectsConfig[2].images[2]} alt="Error" />
              </div>
            </motion.div>
            <motion.div 
              className='col-span-2 bg-zinc-100 dark:bg-neutral-900 h-[320px] rounded-xl shadow-lg shadow-gray-400 dark:shadow-gray-950 z-20'
              initial={{ opacity: 0, y: 60, scale: 0.9, filter: "blur(4px)" }}
              whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)",transition: { duration: 0.8, ease: "easeOut", delay: 0.3 }
              }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ scale: 1.02,transition: { duration: 0.2 }
              }}
            >
              <div className='w-full h-full overflow-hidden' onClick={() => navigate(`/projects/${ProjectsConfig[3].uniqueID}`)}>
                  <img className='w-full h-full object-cover rounded-xl' src={ProjectsConfig[3].images[3]} alt="Error" />
              </div>
            </motion.div>

            <motion.span 
              className='lg:w-[300px] lg:h-[300px] rounded-full bg-orange-600 absolute -right-20 -bottom-10 z-10 blur-[140px]'
              style={{
                  background: "linear-gradient(90deg, hsla(276, 91%, 79%, 1) 0%, hsla(254, 74%, 65%, 1) 100%)",
                }}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1,transition: { duration: 1.2, ease: "easeOut", delay: 0.4 }
              }}
              viewport={{ once: true, margin: "-50px" }}
            ></motion.span>
        </div>
        {
          isShowAllProjects && (
            <div 
            id='bento-grid'
            className='grid lg:grid-cols-3 gap-3 lg:gap-6 mx-auto lg:w-[80%] py-0 px-6 relative'
          >
              <motion.span 
                className='lg:w-[300px] lg:h-[300px] rounded-full bg-cyan-500 absolute z-10 -top-10 -left-20 blur-[140px]'
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{  opacity: 1,  scale: 1, transition: { duration: 1.2, ease: "easeOut" }
                }}
                viewport={{ once: true, margin: "-50px" }}
              ></motion.span>
              
              <motion.div 
                className='col-span-2 bg-zinc-100 dark:bg-neutral-900 h-[320px] rounded-xl shadow-lg shadow-gray-400 dark:shadow-gray-950 z-20'
                initial={{ opacity: 0, y: 60, scale: 0.9, filter: "blur(4px)" }}
                whileInView={{  opacity: 1,  y: 0,  scale: 1,  filter: "blur(0px)", transition: { duration: 0.8, ease: "easeOut" }
                }}
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{  scale: 1.02, transition: { duration: 0.2 }
                }}
              >
              <div className='w-full h-full overflow-hidden' onClick={() => navigate(`/projects/${ProjectsConfig[4].uniqueID}`)}>
                  <img className='w-full h-full object-cover rounded-xl' src={ProjectsConfig[4].images[0]} alt="Error" />
              </div>
              </motion.div>



              <motion.div 
                className='lg:row-span-2 bg-zinc-100 dark:bg-neutral-900 h-auto rounded-xl shadow-lg shadow-gray-400 dark:shadow-gray-950 z-20'
                initial={{ opacity: 0, y: 60, scale: 0.9, filter: "blur(4px)" }}
                whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)",transition: { duration: 0.8, ease: "easeOut", delay: 0.1 }
                }}
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{  scale: 1.02, transition: { duration: 0.2 }
                }}
              >
              <div className='w-full h-full overflow-hidden' onClick={() => navigate(`/projects/${ProjectsConfig[5].uniqueID}`)}>
                  <img className='w-full h-full object-cover rounded-xl' src={ProjectsConfig[5].images[4]} alt="Error" />
              </div>
              </motion.div>
              <motion.div 
                className=' bg-zinc-100 dark:bg-neutral-900 h-[320px] rounded-xl shadow-lg shadow-gray-400 dark:shadow-gray-950 z-20'
                initial={{ opacity: 0, y: 60, scale: 0.9, filter: "blur(4px)" }}
                whileInView={{  opacity: 1,  y: 0,  scale: 1,  filter: "blur(0px)", transition: { duration: 0.8, ease: "easeOut", delay: 0.2 }
                }}
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{  scale: 1.02, transition: { duration: 0.2 }
                }}
              >
              <div className='w-full h-full overflow-hidden' onClick={() => navigate(`/projects/${ProjectsConfig[6].uniqueID}`)}>
                  <img className='w-full h-full object-cover rounded-xl' src={ProjectsConfig[6].images[2]} alt="Error" />
              </div>
              </motion.div>
              <motion.div 
                className='col-span-1 bg-zinc-100 dark:bg-neutral-900 h-[320px] rounded-xl shadow-lg shadow-gray-400 dark:shadow-gray-950 z-20'
                initial={{ opacity: 0, y: 60, scale: 0.9, filter: "blur(4px)" }}
                whileInView={{  opacity: 1,  y: 0,  scale: 1,  filter: "blur(0px)", transition: { duration: 0.8, ease: "easeOut", delay: 0.3 }
                }}
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{  scale: 1.02, transition: { duration: 0.2 }
                }}
              >
              <div className='w-full h-full overflow-hidden' onClick={() => navigate(`/projects/${ProjectsConfig[4].uniqueID}`)}>
                  <img className='w-full h-full object-cover rounded-xl' src={ProjectsConfig[7].images[0]} alt="Error" />
              </div>
              </motion.div>
  
              <motion.span 
                className='lg:w-[300px] lg:h-[300px] rounded-full bg-orange-600 absolute -right-20 -bottom-10 z-10 blur-[140px]'
                style={{
                    background: "linear-gradient(90deg, hsla(276, 91%, 79%, 1) 0%, hsla(254, 74%, 65%, 1) 100%)",
                  }}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{  opacity: 1,  scale: 1, transition: { duration: 1.2, ease: "easeOut", delay: 0.4 }
                }}
                viewport={{ once: true, margin: "-50px" }}
              ></motion.span>
            </div>
          )
        }
        
        {/* See all Projects button */}
        <motion.div 
          className='flex justify-center py-4 lg:py-10'
          variants={itemVariants}
        >
            <motion.button 
              onClick={() => setIsShowAllProjects(!isShowAllProjects)}
              className='dark:bg-neutral-900 ring-1 dark:ring-slate-800 ring-slate-300 cursor-pointer text-center px-16 py-4 rounded-full bg-white shadow-lg poppins-bold text-sm flex gap-3 justify-center items-center'
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <span className='text-2xl'><RiArrowRightFill /></span>
              {isShowAllProjects ? "See Less Projects" : "See All Projects"}
            </motion.button>
        </motion.div>
    </motion.div>
  )
}

export default Projects
