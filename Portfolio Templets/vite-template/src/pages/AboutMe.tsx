import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { FaGithub, FaTwitter, FaLinkedin , FaFacebook } from "react-icons/fa";
import { RiArrowRightFill } from "react-icons/ri";
import { MdArrowOutward } from "react-icons/md";

export default function DocsPage() {
  return (
    <div className="w-full px-4 lg:w-[80%] mx-auto h-full flex flex-col items-center justify-center">
      <div className="py-10">
        <h1 className="poppins-bold text-5xl lg:text-7xl">Who I am?</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 w-full h-auto">
        <div className="w-full  bg-white dark:bg-black shadow-sm shadow-slate-400 rounded-xl p-2">
          <div>
            <img className="w-full h-[300px] object-cover rounded-lg " src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2R-T0SSwXIKnS8aO--DS4x4LXAuCl3oeBzbBJNjmy10CRGyd-rDvoQI0iZWcXQGC5e94&usqp=CAUg" alt="" />
          </div>
          <div className="py-4">
            <p className="text-center poppins-bold text-sm">Avalable for work</p>
            <h1 className="text-4xl poppins-bold text-center py-2">Bark Aten</h1>
            <p className="text-center poppins-medium py-1">Frontend/Backend Developer and UI/UX Interaction Designer Based in Turkey.</p>

            <div className="flex justify-evenly py-5">
              <span className="text-xl bg-slate-200 dark:bg-slate-800 p-2 rounded-full"><FaGithub /></span>
              <span className="text-xl bg-slate-200 dark:bg-slate-800 p-2 rounded-full"><FaTwitter /></span>
              <span className="text-xl bg-slate-200 dark:bg-slate-800 p-2 rounded-full"><FaLinkedin /></span>
              <span className="text-xl bg-slate-200 dark:bg-slate-800 p-2 rounded-full"><FaFacebook /></span>

            </div>

            <div className="flex justify-center items-center py-4 px-5">
              <button 
                className='dark:bg-neutral-900 ring-1 dark:ring-slate-800 ring-slate-400 cursor-pointer text-center w-full py-3 rounded-full bg-white shadow-lg poppins-bold text-sm flex gap-3 justify-center items-center'
                // variants={buttonVariants}
                // whileHover="hover"
                // whileTap="tap"
              >
                <span className='text-2xl'><MdArrowOutward /></span>
                Contect me
              </button>
            </div>
          </div>
        </div>

        <div className="col-span-2 bg-white dark:bg-black shadow-sm shadow-slate-400 rounded-xl p-2">

        </div>
      </div>
    <br /><br /><br /><br /><br />
    </div>
  );
}
