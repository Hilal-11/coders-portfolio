
import type { SVGProps } from "react";
import { MyIcon } from "*.svg";

export type IconSvgProps = MyIcon<SVGSVGElement> & {
  size?: number;
};