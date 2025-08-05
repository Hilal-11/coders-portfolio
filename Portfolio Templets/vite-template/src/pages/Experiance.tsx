import React from "react";
// import {Tabs, Tab, Card, CardBody} from "@heroui/react";
import {Tabs, Tab} from "@heroui/tabs";
import {Card, CardBody} from "@heroui/card";

function Experiance() {
    const [isVertical, setIsVertical] = React.useState(true);

  return (
    <div id='experiance-section' className='w-full lg:w-[70%] mx-auto h-auto py-20 px-2'>
        <div className="lg:py-20">
            <div className="">
                <h1 className='text-5xl lg:text-7xl poppins-bold text-center  '>Work Experience</h1>
                <p className='text-center text-lg poppins-regular px-4 py-2 lg:px-28'>With hands-on experience across the full development stack, I've built robust, scalable, and modern web applications. Here's a breakdown of my key roles and contributions. I switch a lot of companies. It's mostly about the culture.</p>
            </div>
        {/* Vertical Tab View of experiances on doifferent companies and startups */}
        <div className="mx-auto py-10 flex justify-center flex-col px-0 my-6 ">
                <div className="flex w-full flex-col">
                    <Tabs aria-label="Options" isVertical={isVertical}>
                    <Tab key="Frontend Development" title="Frontend Development">
                        <Card>
                        <CardBody>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </CardBody>
                        </Card>
                    </Tab>
                    <Tab key="Backend Development" title="Backend Development">
                        <Card>
                        <CardBody>
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                            esse cillum dolore eu fugiat nulla pariatur.
                        </CardBody>
                        </Card>
                    </Tab>
                    <Tab key="Cross-paltfrom App Developement" title="Cross-paltfrom App Developement">
                        <Card>
                        <CardBody>
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                            mollit anim id est laborum.
                        </CardBody>
                        </Card>
                    </Tab>

                    <Tab key="AI Integration in AApplications" title="AI Integration in AApplications">
                        <Card>
                        <CardBody>
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                            mollit anim id est laborum.
                        </CardBody>
                        </Card>
                    </Tab>

                    <Tab key="Data Science and Machine Learning" title="Data Science and Machine Learning">
                        <Card>
                        <CardBody>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam illo, vero nisi molestias rem error debitis aliquid dolore officiis excepturi corporis quia culpa incidunt accusantium vitae magni pariatur temporibus voluptatibus et sint. Fugit doloremque repellendus fugiat cum facilis! Maxime, laborum optio! Dignissimos cumque beatae sed laudantium molestias. Officia odio iste vitae voluptate modi! Obcaecati eligendi molestiae quo accusantium iste beatae a minima magnam fugit. Quis consequuntur, inventore ducimus totam aut quisquam ratione magnam, omnis blanditiis eveniet excepturi eaque impedit similique ea nisi optio culpa tempora labore obcaecati explicabo tempore. Repudiandae laudantium non sit, provident aperiam cupiditate reprehenderit odit similique dicta possimus vero vitae autem vel quia sapiente. Ipsa, qui eos odio ex sint sed in minima explicabo at rem dicta corporis ipsam? Doloribus, modi voluptate sit accusamus voluptates ratione ducimus natus illo non unde incidunt, veritatis cumque beatae magni soluta animi alias maiores vitae? Provident ab reprehenderit in, beatae consequatur, dolores nobis modi, placeat fugit voluptatem quasi obcaecati molestiae laudantium?
                        </CardBody>
                        </Card>
                    </Tab>

                    </Tabs>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Experiance