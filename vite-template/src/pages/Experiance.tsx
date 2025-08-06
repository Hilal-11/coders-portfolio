
// import {Tabs, Tab, Card, CardBody} from "@heroui/react";
import {Tabs, Tab} from "@heroui/tabs";
import {Card, CardBody} from "@heroui/card";


import experianceData from '@/config/experiancesJson';


import { useState } from "react";
function Experiance() {
    
    const [readmore , setReadmore] = useState(false)
 


  return (
    <div id='experiance-section' className='w-full lg:w-[70%] mx-auto h-auto py-10 px-2'>
        <div className="lg:py-20">
            <div className="">
                <h1 className='text-5xl lg:text-7xl poppins-bold text-center  '>Work Experience</h1>
                <p className='text-center text-lg inter-medium px-2 py-2 lg:px-28'>With hands-on experience across the full development stack, I've built robust, scalable, and modern web applications. Here's a breakdown of my key roles and contributions. I switch a lot of companies. It's mostly about the culture.</p>
            </div>
        {/* Vertical Tab View of experiances on doifferent companies and startups */}
            <div className="flex w-full flex-col my-6 mx-auto">
                <Tabs aria-label="Options" >
                    <Tab className="poppins-medium" key={experianceData[0].experianceSkillOption} title={experianceData[0].experianceSkillOption}>
                    <Card className="dark:bg-neutral-950">
                        <CardBody className="dark:bg-neutral-950 poppins-regular text-[15px]">
                            <div className="grid grid-cols-1 lg:grid-cols-2 ">
                                
                                <div className="col-span-1 lg:px-10 lg:py-6">
                                    <h1 className="poppins-bold text-2xl lg:text-4xl text-center">{experianceData[0].experianceSkillOption}</h1>
                                    <p className="poppins-regular text-[14px] lg:px-4 py-4">{readmore ? (experianceData[0].experianceDiscaription) : (experianceData[0].experianceDiscaription.split(" ").slice(0, 60).join(" ") + "...")} <span className="text-blue-400 inter-bold cursor-pointer" onClick={ () => setReadmore(!readmore) }>{ readmore ? ("read less") : ("read more")}</span> </p>
                                    <div className="flex justify-evenly items-center gap-2 flex-wrap py-2 lg:px-6">
                                        {
                                            experianceData[0].listOfSkills.map((skill , index) => (
                                                <span className="shadow-[inset_-12px_-8px_40px_rgba(230,200,200,0.125)] lg:px-8 px-3 lg:py-2 py-1 rounded-lg flex justify-center items-center dark:bg-neutral-950 bg-slate-100  poppins-regular lg:text-sm text-[10px]" key={index}>{skill}</span>
                                            ))
                                        }
                                    </div>
                                </div>
                                <div className="py-4 grid grid-cols-2 justify-evenly gap-2 lg:gap-4 object-fill">
                                    {
                                        experianceData[0].projectsList.map((item) => (
                                            <div key={item.projectId} className=" p-1 rounded-lg shadow inset-shadow-slate-900">
                                                <img className="w-full object-fill rounded-lg lg:max-h-[160px]" src={item.projectImage} alt="Error" />
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                    </Tab>

                <Tab className="poppins-medium" key={experianceData[1].experianceSkillOption} title={experianceData[1].experianceSkillOption}>
                    <Card className="dark:bg-neutral-950">
                        <CardBody className="dark:bg-neutral-950 poppins-regular text-[15px]">
                            <div className="grid grid-cols-1 lg:grid-cols-2 ">
                                
                                <div className="col-span-1 lg:px-10 lg:py-6">
                                    <h1 className="poppins-bold text-2xl lg:text-4xl text-center">{experianceData[1].experianceSkillOption}</h1>
                                    <p className="poppins-regular text-[14px] lg:px-4 py-4">{readmore ? (experianceData[1].experianceDiscaription) : (experianceData[1].experianceDiscaription.split(" ").slice(0, 60).join(" ") + "...")} <span className="text-blue-400 inter-bold cursor-pointer" onClick={ () => setReadmore(!readmore) }>{ readmore ? ("read less") : ("read more")}</span> </p>
                                    <div className="flex justify-evenly items-center gap-2 flex-wrap py-2 lg:px-6">
                                        {
                                            experianceData[1].listOfSkills.map((skill , index) => (
                                                <span className="shadow-[inset_-12px_-8px_40px_rgba(230,200,200,0.125)] lg:px-8 px-3 lg:py-2 py-1 rounded-lg flex justify-center items-center dark:bg-neutral-950 bg-slate-100  poppins-regular lg:text-sm text-[10px]" key={index}>{skill}</span>
                                            ))
                                        }
                                    </div>
                                </div>
                                <div className="py-4 grid grid-cols-2 justify-evenly gap-2 lg:gap-4 object-fill">
                                    {
                                        experianceData[1].projectsList.map((item) => (
                                            <div key={item.projectId} className=" p-1 rounded-lg shadow inset-shadow-slate-900">
                                                <img className="w-full object-fill rounded-lg lg:max-h-[160px]" src={item.projectImage} alt="Error" />
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                    </Tab>

                <Tab className="poppins-medium" key={experianceData[2].experianceSkillOption} title={experianceData[2].experianceSkillOption}>
                    <Card className="dark:bg-neutral-950">
                        <CardBody className="dark:bg-neutral-950 poppins-regular text-[15px]">
                            <div className="grid grid-cols-1 lg:grid-cols-2 ">
                                
                                <div className="col-span-1 lg:px-10 lg:py-6">
                                    <h1 className="poppins-bold text-2xl lg:text-4xl text-center">{experianceData[2].experianceSkillOption}</h1>
                                    <p className="poppins-regular text-[14px] lg:px-4 py-4">{readmore ? (experianceData[2].experianceDiscaription) : (experianceData[2].experianceDiscaription.split(" ").slice(0, 60).join(" ") + "...")} <span className="text-blue-400 inter-bold cursor-pointer" onClick={ () => setReadmore(!readmore) }>{ readmore ? ("read less") : ("read more")}</span> </p>
                                    <div className="flex justify-evenly items-center gap-2 flex-wrap py-2 lg:px-6">
                                        {
                                            experianceData[2].listOfSkills.map((skill , index) => (
                                                <span className="shadow-[inset_-12px_-8px_40px_rgba(230,200,200,0.125)] lg:px-8 px-3 lg:py-2 py-1 rounded-lg flex justify-center items-center dark:bg-neutral-950 bg-slate-100  poppins-regular lg:text-sm text-[10px]" key={index}>{skill}</span>
                                            ))
                                        }
                                    </div>
                                </div>
                                <div className="py-4 grid grid-cols-2 justify-evenly gap-2 lg:gap-4 object-fill">
                                    {
                                        experianceData[2].projectsList.map((item) => (
                                            <div key={item.projectId} className=" p-1 rounded-lg shadow inset-shadow-slate-900">
                                                <img className="w-full object-fill rounded-lg lg:max-h-[160px]" src={item.projectImage} alt="Error" />
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                    </Tab>


                    <Tab className="poppins-medium" key={experianceData[3].experianceSkillOption} title={experianceData[3].experianceSkillOption}>
                    <Card className="dark:bg-neutral-950">
                        <CardBody className="dark:bg-neutral-950 poppins-regular text-[15px]">
                            <div className="grid grid-cols-1 lg:grid-cols-2 ">
                                
                                <div className="col-span-1 lg:px-10 lg:py-6">
                                    <h1 className="poppins-bold text-2xl lg:text-4xl text-center">{experianceData[3].experianceSkillOption}</h1>
                                    <p className="poppins-regular text-[14px] lg:px-4 py-4">{readmore ? (experianceData[3].experianceDiscaription) : (experianceData[3].experianceDiscaription.split(" ").slice(0, 60).join(" ") + "...")} <span className="text-blue-400 inter-bold cursor-pointer" onClick={ () => setReadmore(!readmore) }>{ readmore ? ("read less") : ("read more")}</span> </p>
                                    <div className="flex justify-evenly items-center gap-2 flex-wrap py-2 lg:px-6">
                                        {
                                            experianceData[3].listOfSkills.map((skill , index) => (
                                                <span className="shadow-[inset_-12px_-8px_40px_rgba(230,200,200,0.125)] lg:px-8 px-3 lg:py-2 py-1 rounded-lg flex justify-center items-center dark:bg-neutral-950 bg-slate-100  poppins-regular lg:text-sm text-[10px]" key={index}>{skill}</span>
                                            ))
                                        }
                                    </div>
                                </div>
                                <div className="py-4 grid grid-cols-2 justify-evenly gap-2 lg:gap-4 object-fill">
                                    {
                                        experianceData[3].projectsList.map((item) => (
                                            <div key={item.projectId} className=" p-1 rounded-lg shadow inset-shadow-slate-900">
                                                <img className="w-full object-fill rounded-lg lg:max-h-[160px]" src={item.projectImage} alt="Error" />
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                    </Tab>

                <Tab className="poppins-medium" key={experianceData[4].experianceSkillOption} title={experianceData[4].experianceSkillOption}>
                    <Card className="dark:bg-neutral-950">
                        <CardBody className="dark:bg-neutral-950 poppins-regular text-[15px]">
                            <div className="grid grid-cols-1 lg:grid-cols-2 ">
                                
                                <div className="col-span-1 lg:px-10 lg:py-6">
                                    <h1 className="poppins-bold text-2xl lg:text-4xl text-center">{experianceData[4].experianceSkillOption}</h1>
                                    <p className="poppins-regular text-[14px] lg:px-4 py-4">{readmore ? (experianceData[4].experianceDiscaription) : (experianceData[4].experianceDiscaription.split(" ").slice(0, 60).join(" ") + "...")} <span className="text-blue-400 inter-bold cursor-pointer" onClick={ () => setReadmore(!readmore) }>{ readmore ? ("read less") : ("read more")}</span> </p>
                                    <div className="flex justify-evenly items-center gap-2 flex-wrap py-2 lg:px-6">
                                        {
                                            experianceData[4].listOfSkills.map((skill , index) => (
                                                <span className="shadow-[inset_-12px_-8px_40px_rgba(230,200,200,0.125)] lg:px-8 px-3 lg:py-2 py-1 rounded-lg flex justify-center items-center dark:bg-neutral-950 bg-slate-100  poppins-regular lg:text-sm text-[10px]" key={index}>{skill}</span>
                                            ))
                                        }
                                    </div>
                                </div>
                                <div className="py-4 grid grid-cols-2 justify-evenly gap-2 lg:gap-4 object-fill">
                                    {
                                        experianceData[4].projectsList.map((item) => (
                                            <div key={item.projectId} className=" p-1 rounded-lg shadow inset-shadow-slate-900">
                                                <img className="w-full object-fill rounded-lg lg:max-h-[160px]" src={item.projectImage} alt="Error" />
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                    </Tab>

                <Tab className="poppins-medium" key={experianceData[5].experianceSkillOption} title={experianceData[5].experianceSkillOption}>
                    <Card className="dark:bg-neutral-950">
                        <CardBody className="dark:bg-neutral-950 poppins-regular text-[15px]">
                            <div className="grid grid-cols-1 lg:grid-cols-2 ">
                                
                                <div className="col-span-1 lg:px-10 lg:py-6">
                                    <h1 className="poppins-bold text-2xl lg:text-4xl text-center">{experianceData[5].experianceSkillOption}</h1>
                                    <p className="poppins-regular text-[14px] lg:px-4 py-4">{readmore ? (experianceData[5].experianceDiscaription) : (experianceData[5].experianceDiscaription.split(" ").slice(0, 60).join(" ") + "...")} <span className="text-blue-400 inter-bold cursor-pointer" onClick={ () => setReadmore(!readmore) }>{ readmore ? ("read less") : ("read more")}</span> </p>
                                    <div className="flex justify-evenly items-center gap-2 flex-wrap py-2 lg:px-6">
                                        {
                                            experianceData[5].listOfSkills.map((skill , index) => (
                                                <span className="shadow-[inset_-12px_-8px_40px_rgba(230,200,200,0.125)] lg:px-8 px-3 lg:py-2 py-1 rounded-lg flex justify-center items-center dark:bg-neutral-950 bg-slate-100  poppins-regular lg:text-sm text-[10px]" key={index}>{skill}</span>
                                            ))
                                        }
                                    </div>
                                </div>
                                <div className="py-4 grid grid-cols-2 justify-evenly gap-2 lg:gap-4 object-fill">
                                    {
                                        experianceData[5].projectsList.map((item) => (
                                            <div key={item.projectId} className=" p-1 rounded-lg shadow inset-shadow-slate-900">
                                                <img className="w-full object-fill rounded-lg lg:max-h-[160px]" src={item.projectImage} alt="Error" />
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                    </Tab>

                </Tabs>
            </div>
        </div>
    </div>
  )
}

export default Experiance