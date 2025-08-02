import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { FaGithub, FaTwitter, FaLinkedin , FaFacebook } from "react-icons/fa";
import { RiArrowRightFill } from "react-icons/ri";
import { MdArrowOutward } from "react-icons/md";
import { techIcons } from "@/config/skillsIcon";

export default function DocsPage() {
  return (
    <div className="w-full px-4 lg:w-[80%] mx-auto h-full flex flex-col items-center justify-center">
      <div className="py-10">
        <h1 className="poppins-bold text-5xl lg:text-7xl">Who I am?</h1>
      </div>

      <div className="w-full h-auto grid grid-cols-1 lg:grid-cols-3">
        <div className="w-full lg:w-[400px] md:w-full  bg-white dark:bg-[#0a0a0a] shadow-sm shadow-slate-700 rounded-xl p-0 mx-auto">
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
              >
              <span className='text-2xl'><MdArrowOutward /></span>
                Contect me
              </button>
            </div>
          </div>
        </div>

        <div className="lg:col-span-2 w-full mx-auto relative z-50 overflow-hidden">

        <div className="flex justify-center gap-10 items-center absolute top-[100%] left-1/2 -z-10">
          <span className=" block w-[700px] h-[700px] rounded-full shadow-lg shadow-slate-950 dark:shadow-green-500 blur-[1px] absolute"></span>
          <span className=" block w-[600px] h-[600px] rounded-full shadow-lg shadow-slate-950 dark:shadow-green-500 blur-[1px] absolute"></span>
          <span className=" block w-[500px] h-[500px] rounded-full shadow-lg shadow-slate-950 dark:shadow-green-500 blur-[1px] absolute"></span>
          <span className=" block w-[400px] h-[400px] rounded-full shadow-lg shadow-slate-950 dark:shadow-green-500 blur-[1px] absolute"></span>
          <span className=" block w-[300px] h-[300px] rounded-full shadow-lg shadow-slate-950 dark:shadow-green-500 blur-[1px] absolute"></span>
          <span className=" block w-[200px] h-[200px] rounded-full shadow-lg shadow-slate-950 dark:shadow-green-500 blur-[1px] absolute"></span>
          <span className=" block w-[100px] h-[100px] rounded-full shadow-lg shadow-slate-950 dark:shadow-green-500 blur-[1px] absolute"></span>
        </div>

        <div className="py-10 px-2 lg:px-10 poppins-regular text-sm lg:text-lg">
              <p>I'm Bark Aten, a passionate Web Designer & Developer based in the dynamic city of Berlin, Germany. I blend creative design with precise technical execution to deliver outstanding digital experiences. Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>

            <div className="flex gap-3 lg:gap-5 justify-evenly flex-wrap lg:px-10 py-6 lg:h-auto h-[260px] overflow-hidden">
                  {techIcons.map((skill) => {
                    const IconComponent = skill.icon;
                    return (
                      <div key={skill.id}>
                        <div className="flex justify-center items-center rounded-md shadow-sm shadow-gray-300 dark:bg-neutral-900 dark:shadow-slate-600 w-[70px] h-[70px]"><span className="text-5xl"><IconComponent /></span></div>
                      </div>
                    );
                  })}
            </div>

            <div className="lg:px-10 flex gap-3 lg:gap-5 flex-wrap justify-evenly py-10">
                <div className="shadow-[inset_-12px_-8px_40px_rgba(230,200,200,0.125)] lg:px-12 px-8 lg:py-3 py-2 rounded-lg flex justify-center items-center dark:bg-neutral-950 bg-slate-100  poppins-regular lg:text-sm text-[12px]">
                  <p>Frontend Dev</p>
                </div>
                <div className="shadow-[inset_-12px_-8px_40px_#46464620] lg:px-12 px-8 lg:py-3 py-2 rounded-lg flex justify-center items-center dark:bg-neutral-950 bg-slate-100 poppins-regular lg:text-sm text-[12px]">
                  <p>Backend Dev</p>
                </div>
                <div className="shadow-[inset_-12px_-8px_40px_#46464620] lg:px-12 px-8 lg:py-3 py-2 rounded-lg flex justify-center items-center dark:bg-neutral-950 bg-slate-100 poppins-regular lg:text-sm text-[12px]">
                  <p>Devops</p>
                </div>
                <div className="shadow-[inset_-12px_-8px_40px_#46464620] lg:px-12 px-8 lg:py-3 py-2 rounded-lg flex justify-center items-center dark:bg-neutral-950 bg-slate-100 poppins-regular lg:text-sm text-[12px]">
                  <p>AI Integration</p>
                </div>
                <div className="shadow-[inset_-12px_-8px_40px_#46464620] lg:px-12 px-8 lg:py-3 py-2 rounded-lg flex justify-center items-center dark:bg-neutral-950 bg-slate-100 poppins-regular lg:text-sm text-[12px]">
                  <p>UI/UX Designer</p>
                </div>
                <div className="shadow-[inset_-12px_-8px_40px_#46464620] lg:px-12 px-8 lg:py-3 py-2 rounded-lg flex justify-center items-center dark:bg-neutral-950 bg-slate-100 poppins-regular lg:text-sm text-[12px]">
                  <p>Data Analytics</p>
                </div>
                <div className="shadow-[inset_-12px_-8px_40px_#46464620] lg:px-12 px-8 lg:py-3 py-2 rounded-lg flex justify-center items-center dark:bg-neutral-950 bg-slate-100 poppins-regular lg:text-sm text-[12px]">
                  <p>React Native Dev</p>
                </div>
            </div>

              


        </div>
      </div>
    </div>
  );
}
