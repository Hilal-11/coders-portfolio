import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import {
  Navbar as HeroUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@heroui/navbar";
import { link as linkStyles } from "@heroui/theme";
import clsx from "clsx";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import { Logo } from "@/components/icons";

import { Link as ScrollLink } from 'react-scroll';
import { FaGithub } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { useNavigate } from 'react-router-dom'
import localhostIcon from '../../localhostLogo.svg'


export const Navbar = () => {

  const navigate = useNavigate('')

  return (
    <HeroUINavbar maxWidth="xl" position="sticky"  className="fixed z-50">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand className="gap-0 ">
          <ScrollLink
            className="flex justify-start items-center gap-0"
            color="foreground"
            
          >
            {/* <Logo /> */}
            <ScrollLink to="hero-section" smooth={true}
            duration={500}
            offset={-50}
            className=" lg:poppins-medium lg:text-2xl cursor-pointer flex justify-center items-center "><span onClick={() => navigate('/')} className="flex justify-center items-center relative -left-4"><img className="w-12 lg:w-16 relative lg:left-2" src={localhostIcon} alt="Err" />localhost</span></ScrollLink>
          </ScrollLink>
        </NavbarBrand>
        <div className="hidden lg:flex gap-6 px-5 justify-start ml-2 poppins-medium z-50">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.to}>
              <ScrollLink
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-primary data-[active=true]:font-medium cursor-pointer",
                )}
                color="foreground"
                to={item.to}
                smooth={true}
                duration={500}
                offset={-50}
                
              >
                {item.label}
              </ScrollLink>
            </NavbarItem>
          ))}
        </div>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full z-50"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex gap-2">
          <Link isExternal href={siteConfig.links.twitter} title="Twitter">
            <span className="text-gray-600 text-lg dark:text-white px-2 py-2 rounded-2xl hover:shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.2),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] "><RiTwitterXFill className=""/></span>
          </Link>
          <Link isExternal href={siteConfig.links.github} title="GitHub">
            <span className="text-gray-600 text-lg dark:text-white px-2 py-2 rounded-2xl hover:shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.2),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"><FaGithub className="" /></span>
          </Link>
          <ThemeSwitch className=" text-gray-600 text-lg dark:text-white px-[7px] py-[7px] rounded-2xl hover:shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.2),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]" />
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <Link isExternal href={siteConfig.links.github}>
          <FaGithub className="text-black text-lg dark:text-white rounded-2xl hover:shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.2),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]" />
        </Link>
        <ThemeSwitch className="text-black text-lg dark:text-white px-2 py-2 rounded-2xl hover:shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.2),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"/>
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2 poppins-medium z-50">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <ScrollLink
              
                color={
                  index === 2
                    ? "primary"
                    : index === siteConfig.navMenuItems.length - 1
                      ? "danger"
                      : "foreground"
                }
                to={item.to}
                smooth={true}
                duration={500}
                offset={-50}
                size="lg"
              >
                {item.label}
              </ScrollLink>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </HeroUINavbar>
  );
};
