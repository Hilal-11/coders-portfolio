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
import {
  TwitterIcon,
  GithubIcon,
  DiscordIcon,
 } from "@/components/icons";
import { Logo } from "@/components/icons";

import { Link as ScrollLink } from 'react-scroll';


export const Navbar = () => {

  return (
    <HeroUINavbar maxWidth="xl" position="sticky"  className="fixed z-50">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand className="gap-0 max-w-fit">
          <ScrollLink
            className="flex justify-start items-center gap-0"
            color="foreground"
            
          >
            <Logo />
            <ScrollLink to="hero-section" smooth={true}
            duration={500}
            offset={-50} className="poppins-medium lg:text-xl">helloCode404</ScrollLink>
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
            <TwitterIcon className="text-default-500" />
          </Link>
          <Link isExternal href={siteConfig.links.discord} title="Discord">
            <DiscordIcon className="text-default-500" />
          </Link>
          <Link isExternal href={siteConfig.links.github} title="GitHub">
            <GithubIcon className="text-default-500" />
          </Link>
          <ThemeSwitch />
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <Link isExternal href={siteConfig.links.github}>
          <GithubIcon className="text-default-500" />
        </Link>
        <ThemeSwitch />
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
