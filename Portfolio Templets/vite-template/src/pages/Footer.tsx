import { NavigationData , ServicesData } from "@/config/footerData";
import { FaGithub, FaTwitter, FaLinkedin , FaFacebook } from "react-icons/fa";
import { Link as ScrollLink } from 'react-scroll';
function Footer() {
  return (
    <div className=' w-full h-auto bg-slate-50 dark:bg-black lg:py-10 border-t border-slate-300 dark:border-neutral-700 py-16'>
        <div className='w-[80%] mx-auto lg:py-6'>
            {/* First */}
            <div className='text-center space-y-4'>
                <h1 className='text-7xl lg:text-9xl poppins-bold'>LET'S TALK</h1>
                <h2 className='text-3xl lg:text-7xl poppins-extrabold break-words text-neutral-700'>hellocodedev404@gmail.com</h2>
                <div className='py-6'>
                    <button className='dark:bg-neutral-900 text-center px-28 py-4 rounded-full bg-white shadow-sm shadow-slate-950 poppins-bold text-sm '>Contect Us</button>
                </div>
            </div>

          {/* Next box */}
          <div className='flex flex-wrap justify-between  lg:px-10 py-10'>
            <div>
              <h1 className='text-3xl poppins-medium '>About Us</h1>
              <div className='py-4'>
                <p className='text-[16px] poppins-medium lg:w-[300px]'>I'm a software developer focused on creating clean, fast, and responsive web templates. From portfolios to blogs and gym websites, I combine design and code to build beautiful, functional experiences.</p>
              </div>
              <div className="flex justify-evenly py-5">
                <span className="text-xl bg-slate-200 dark:bg-slate-800 p-2 rounded-full"><FaGithub /></span>
                <span className="text-xl bg-slate-200 dark:bg-slate-800 p-2 rounded-full"><FaTwitter /></span>
                <span className="text-xl bg-slate-200 dark:bg-slate-800 p-2 rounded-full"><FaLinkedin /></span>
                <span className="text-xl bg-slate-200 dark:bg-slate-800 p-2 rounded-full"><FaFacebook /></span>
                
              </div>

            </div>
            <div>
              <h1 className='text-3xl poppins-medium '>Navigation</h1>
              <div className='space-y-4  py-5'>
                {
                  NavigationData.items.map((items) => (
                    <li key={items.id} className='cursor-pointer hover:underline duration-500 poppins-medium text-sm list-none'>
                      <ScrollLink to={items.navigateTo} smooth={true}
                        duration={500}
                        offset={-50}>
                      {items.linkItem}</ScrollLink></li>
                  ))
                }
              </div>
            </div>
            <div>
              <h1 className='text-3xl poppins-medium '>Services</h1>
              <div className=' space-y-4 py-5 '>
                {
                ServicesData.items.map((items) => (
                  <li key={items.id} className='cursor-pointer hover:underline duration-500 poppins-medium text-sm list-none'>
                    <ScrollLink to="hero-section" smooth={true}
                        duration={500}
                        offset={-50}>
                      {items.linkItem}</ScrollLink>
                    </li>
                ))
              }
              </div>
            </div>
            <div>
              <h1 className='text-3xl poppins-medium '>Newslatter</h1>
              <div className='py-6 px-1'>
                <input className='border-b-1 border-b-primary-700 px-1 py-2 w-[300px] poppins-medium text-sm outline-none' type="text" placeholder='Enter your email:- ' />
              </div>
            </div>
          </div>
      {/* LAST */}

      <span className='hidden lg:visible block border-1-t w-[95%] border-b-danger-900 h-[1px] bg-gray-500 mx-auto'></span>

      <div className='py-2 flex justify-center items-center poppins-bold'>
          <h1 className='lg:text-[14rem] text-[7rem] '>Hilal</h1>
      </div>
        </div>
    </div>
  )
}

export default Footer