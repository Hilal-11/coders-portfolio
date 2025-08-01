import { 
  SiHtml5, 
  SiCss3, 
  SiJavascript, 
  SiTypescript, 
  SiReact, 
  SiNextdotjs, 
  SiTailwindcss, 
  SiBootstrap, 
  SiFramer, 
  SiRedux, 
  SiNodedotjs, 
  SiExpress, 
  SiMongodb, 
  SiMysql, 
  SiPostgresql, 
  SiFirebase, 
  SiPrisma, 
  SiGraphql, 
  SiApollographql, 
  SiJest, 
  SiVercel, 
  SiNetlify, 
  SiGithub, 
  SiGit, 
  SiDocker 
} from "react-icons/si";

export interface Skills {
  id: number;
  title: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
}

export type SkillsConfig = Skills[];

export const techIcons: SkillsConfig = [
  { id: 1, title: "HTML5", icon: SiHtml5 },
  { id: 2, title: "CSS3", icon: SiCss3 },
  { id: 3, title: "JavaScript", icon: SiJavascript },
  { id: 4, title: "TypeScript", icon: SiTypescript },
  { id: 5, title: "React", icon: SiReact },
  { id: 6, title: "Next.js", icon: SiNextdotjs },
  { id: 7, title: "Tailwind CSS", icon: SiTailwindcss },
  { id: 8, title: "Bootstrap", icon: SiBootstrap },
  { id: 9, title: "Framer Motion", icon: SiFramer },
  { id: 10, title: "Redux", icon: SiRedux },
  { id: 11, title: "Node.js", icon: SiNodedotjs },
  { id: 12, title: "Express.js", icon: SiExpress },
  { id: 13, title: "MongoDB", icon: SiMongodb },
  { id: 14, title: "MySQL", icon: SiMysql },
  { id: 15, title: "PostgreSQL", icon: SiPostgresql },
  { id: 16, title: "Firebase", icon: SiFirebase },
  { id: 17, title: "Prisma ORM", icon: SiPrisma },
  { id: 18, title: "GraphQL", icon: SiGraphql },
  { id: 19, title: "Apollo", icon: SiApollographql },
  { id: 20, title: "Jest", icon: SiJest },
  { id: 21, title: "Vercel", icon: SiVercel },
  { id: 22, title: "Netlify", icon: SiNetlify },
  { id: 23, title: "GitHub", icon: SiGithub },
  { id: 24, title: "Git", icon: SiGit },
  { id: 25, title: "Docker", icon: SiDocker },
];