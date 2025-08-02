import { 
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiBootstrap,
  SiRedux,
  SiSass,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiMysql,
  SiPostgresql,
  SiPrisma,
  SiGraphql,
  SiDocker,
  SiNetlify,
  SiVercel,
  SiVite,
  SiPostman,
  SiFramer,
  SiWebgl,
  SiUnity,
  SiBlender,
} from "react-icons/si";

export interface Skills {
  id: number;
  icon: React.ComponentType<{ size?: number; className?: string }>;
}

export type SkillsConfig = Skills[];

export const techIcons: SkillsConfig = [
  { id: 3 , icon: SiJavascript },
  { id: 4 , icon: SiTypescript },
  { id: 5 , icon: SiReact },
  { id: 6 , icon: SiNextdotjs },
  { id: 7 , icon: SiTailwindcss },
  { id: 8, icon: SiBootstrap },
  { id: 9 , icon: SiSass },
  { id: 10, icon: SiRedux },
  { id: 11 , icon: SiNodedotjs },
  { id: 12 , icon: SiExpress },
  { id: 13 , icon: SiMongodb },
  { id: 14 , icon: SiFirebase },
  { id: 15 , icon: SiMysql },
  { id: 16 , icon: SiPostgresql },
  { id: 17 , icon: SiPrisma },
  { id: 18 , icon: SiGraphql },
  { id: 19 , icon: SiDocker },

  { id: 25 , icon: SiNetlify },
  { id: 26 , icon: SiVercel },

  { id: 29 , icon: SiVite },
  { id: 30 , icon: SiPostman },
  { id: 31 , icon: SiFramer },
  { id: 32 , icon: SiWebgl },
  { id: 32 , icon: SiUnity },
  { id: 32 , icon: SiBlender },




];