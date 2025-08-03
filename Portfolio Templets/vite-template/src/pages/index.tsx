
import DefaultLayout from "@/layouts/default";
import { motion } from "framer-motion";
import { HiDownload } from "react-icons/hi";
import { GrFormNextLink } from "react-icons/gr";
import HorizentalMoveSkills from "@/components/HorizentalMoveSkills";
import Projects from "@/components/Projects Section/Projects";
import myCv from '../../public/cv.pdf'
export default function IndexPage() {
  // Page transition variants
  const pageVariants = {
    initial: {
      opacity: 0,
      y: 60,
      scale: 0.98
    },
    in: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 1.8,
        ease: "easeInOut"
      }
    },
    out: {
      opacity: 0,
      y: -20,
      scale: 0.98,
      transition: {
        duration: 0.3
      }
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
        ease: "easeInOut"
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
      scale: 0.8,
      rotateX: -15
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        duration: 0.1,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      y: -8,
      rotateX: 5,
      transition: {
        duration: 0.1,
        ease: "easeInOut"
      }
    },
    tap: {
      scale: 0.95,
      y: -2,
      transition: {
        duration: 0.1
      }
    }
  };

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
    >

      <div className="absolute">
          <motion.span 
            initial={{
              opacity: 0,
              y: -100,
            }}
            animate={{
              opacity: 1,
              y: 1,
              scale: 1,
              
            }}
            transition={{
              duration: 1.9,
              delay: 2,
            }}
          className="hidden lg:block relative -top-20 left-60 block w-[200px] h-[600px] lg:h-[800px] bg-gray-300 blur-3xl rounded-full -rotate-45"></motion.span>
      </div>
      <DefaultLayout>
        
        <motion.div  
          id="hero-section"
          className="lg:my-20 relative"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        
        >

        {/* ICONS */}

          <motion.div 
            className="my-4 lg:text-center space-y-2"
            variants={itemVariants}
          >
            <motion.h1 
              className="text-3xl text-center lg:text-7xl poppins-bold lg:poppins-extrabold"
              style={{
                textShadow: "0 10px 20px rgba(0,0,0,0.4)"
              }}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02,
                textShadow: "0 10px 20px rgba(0,0,0,0.3)",
                transition: { duration: 0.3 }
              }}
            >
              Hi there welcome, this is Bark Aten, the full stack developer with AI Integrations
            </motion.h1>
            <motion.p 
              className="lg:px-34 poppins-medium text-lg lg:text-lg text-center py-6"
              variants={itemVariants}
            >
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque quasi vel harum natus, blanditiis quae a dignissimos laboriosam dicta commodi et. Mollitia illum deleniti facere porro blanditiis similique dolores, quisquam magnam est illo reiciendis harum nemo.
            </motion.p>
          </motion.div>
          <motion.div 
            className="flex flex-wrap gap-4 lg:gap-6 justify-center items-center poppins-medium my-6 lg:my-10"
            variants={itemVariants}
          >
            <motion.a 
              className="w-full lg:w-[230px] poppins-bold text-md  shadow-sm shadow-black bg-black text-white dark:bg-white dark:text-black py-[9px] lg:rounded-xl rounded-xl cursor-pointer transition-all duration-300  flex justify-center items-center gap-4"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              href={myCv} target="_blank"
              
            >
              Download cv <span className="text-lg"><HiDownload /></span>
            </motion.a>
            <motion.button 
              className=" w-full lg:w-[230px] poppins-bold text-md shadow-sm shadow-slate-800  py-[9px] lg:rounded-xl rounded-xl cursor-pointer transition-all duration-300  flex justify-center items-center gap-4"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"

            >
              See Projects <span className="text-lg"><GrFormNextLink/></span>
            </motion.button>
          </motion.div>

        </motion.div>


        <div className="w-full my-10 p-3 flex justify-center">
          <HorizentalMoveSkills />
        </div>
      </DefaultLayout>
      
    </motion.div>
  );
}
