// import type { SVGProps } from "react";
// import  MyIcon  from '../assets/localhost.svg';
import type { SVGProps } from "react";
import { ReactComponent as MyIcon } from "../assets/localhost.svg";

export type IconSvgProps = MyIcon<SVGSVGElement> & {
  size?: number;
};