import { ProjectItem } from './experiancesJson';
import Experiance from '../pages/Experiance';


export interface ProjectItem {
  projectId: string;
  projectImage: string;
  projectLink: string;
}

export interface ExperianceItem {
  id: number;
  experianceSkillOption: string;
  experianceDiscaription: string;
  listOfSkills: string[];
  projectsList: ProjectItem[];
}
export type ExperianceConfig = ExperianceItem[];


 const experianceData: ExperianceItem[] = [
    {
        id: 1,
        experianceSkillOption: "Frontend Development",
        experianceDiscaription: "As a Frontend Developer, I focused on building modern, responsive, and user-centric web interfaces for a wide range of applications, including portfolio websites, blogs, and fitness platforms. I utilized cutting-edge technologies like React.js, Next.js, and Tailwind CSS to create clean, modular, and maintainable codebases. My work involved close collaboration with UI/UX designers to implement pixel-perfect designs and deliver seamless user experiences across different screen sizes and devices. I implemented accessibility best practices to ensure inclusivity, optimized loading performance for faster user interactions, and integrated dynamic animations using Framer Motion to enhance visual engagement. In addition, I ensured SEO-friendly architecture and followed modern frontend patterns like component-driven development, lazy loading, and server-side rendering where applicable.",
        listOfSkills: ["Javascript", "Typescript", "React.js" , "Next.js", "Tailwind Css" , "Framer Motion" , "Shadcn UI" , "Remix"],
        projectsList: [
            {
                projectId: "a",
                projectImage: "https://res.cloudinary.com/dou5rypdf/image/upload/v1754305561/Screenshot_2025-08-03_230537_cho01w.png",
                projectLink: "http://github.com/Hilal-11",
            },
            {
                projectId: "b",
                projectImage: "https://res.cloudinary.com/dou5rypdf/image/upload/v1754305562/Screenshot_2025-08-03_230551_lw86cw.png",
                projectLink: "http://github.com/Hilal-11",
            },
            {
                projectId: "c",
                projectImage: "https://res.cloudinary.com/dou5rypdf/image/upload/v1754305606/Screenshot_2025-08-03_230628_wtc5r1.png",
                projectLink: "http://github.com/Hilal-11",
            },
            {
                projectId: "d",
                projectImage: "https://framerusercontent.com/images/SG0ZbESc0TAkt6qXYHYpwhuuuME.png?scale-down-to=1024",
                projectLink: "http://github.com/Hilal-11",
            }
        ]
    },
    {
        "id": 2,
        experianceSkillOption: "Backend Development",
        experianceDiscaription: "As a Backend Developer, I focused on building scalable, secure, and efficient server-side applications. I worked extensively with Node.js, Express.js, and RESTful APIs to support frontend interfaces with fast and reliable data services. My responsibilities included designing databases using MongoDB and PostgreSQL, implementing robust authentication systems using JWT and OAuth, and managing server-side rendering with tools like Next.js. I prioritized clean architecture, data validation, and API performance optimization to ensure seamless communication between client and server applications.",
        listOfSkills: ["Node.js", "Express.js", "MongoDB", "PostgreSQL", "JWT", "REST API", "Prisma", "Mongoose"],
        projectsList: [
            {
                projectId: "e",
                projectImage: "https://res.cloudinary.com/dou5rypdf/image/upload/v1754305561/Screenshot_2025-08-03_230537_cho01w.png",
                projectLink: "http://github.com/Hilal-11"
            },
            {
                projectId: "f",
                projectImage: "https://res.cloudinary.com/dou5rypdf/image/upload/v1754305562/Screenshot_2025-08-03_230551_lw86cw.png",
                projectLink: "http://github.com/Hilal-11",
            },
            {
                projectId: "g",
                projectImage: "https://res.cloudinary.com/dou5rypdf/image/upload/v1754305606/Screenshot_2025-08-03_230628_wtc5r1.png",
                projectLink: "http://github.com/Hilal-11",
            },
            {
                projectId: "h",
                projectImage: "https://framerusercontent.com/images/SG0ZbESc0TAkt6qXYHYpwhuuuME.png?scale-down-to=1024",
                projectLink: "http://github.com/Hilal-11",
            }
        ]
    },

    {
        id: 3,
        experianceSkillOption: "DevOps",
        experianceDiscaription: "As a DevOps Engineer, I worked on automating development workflows, deployment pipelines, and infrastructure management. I used tools like Docker and GitHub Actions to build CI/CD pipelines for seamless and automated code integration and deployment. I also configured cloud infrastructure on platforms like AWS and Vercel for scalable and cost-effective app hosting. My work ensured faster development cycles, reduced manual errors, and improved team collaboration through continuous delivery practices.",
        listOfSkills: ["Docker", "GitHub Actions", "CI/CD", "AWS", "Vercel", "Netlify", "Nginx", "Linux"],
        projectsList: [
            {
                projectId: "i",
                projectImage: "https://res.cloudinary.com/dou5rypdf/image/upload/v1754305561/Screenshot_2025-08-03_230537_cho01w.png",
                projectLink: "http://github.com/Hilal-11"
            },
            {
                projectId: "j",
                projectImage: "https://res.cloudinary.com/dou5rypdf/image/upload/v1754305562/Screenshot_2025-08-03_230551_lw86cw.png",
                projectLink: "http://github.com/Hilal-11",
            },
            {
                projectId: "k",
                projectImage: "https://res.cloudinary.com/dou5rypdf/image/upload/v1754305606/Screenshot_2025-08-03_230628_wtc5r1.png",
                projectLink: "http://github.com/Hilal-11",
            },
            {
                projectId: "l",
                projectImage: "https://framerusercontent.com/images/SG0ZbESc0TAkt6qXYHYpwhuuuME.png?scale-down-to=1024",
                projectLink: "http://github.com/Hilal-11",
            }
        ]
    },
    {
        id: 4,
        experianceSkillOption: "AI Integration",
        experianceDiscaription: "As an AI Integration Engineer, I integrated cutting-edge AI features into web and mobile applications using models from OpenAI and other providers. My responsibilities included integrating chatbots, recommendation engines, and smart search capabilities using GPT, LangChain, and vector databases like Pinecone.",
        listOfSkills: ["OpenAI GPT", "LangChain", "Vector Databases", "Pinecone", "Chatbot Integration", "API Integration", "AI Prompts"],
        projectsList: [
{
                projectId: "aazx",
                projectImage: "https://res.cloudinary.com/dou5rypdf/image/upload/v1754305561/Screenshot_2025-08-03_230537_cho01w.png",
                projectLink: "http://github.com/Hilal-11",
            },
            {
                projectId: "bs098",
                projectImage: "https://res.cloudinary.com/dou5rypdf/image/upload/v1754305562/Screenshot_2025-08-03_230551_lw86cw.png",
                projectLink: "http://github.com/Hilal-11",
            },
            {
                projectId: "cd44",
                projectImage: "https://res.cloudinary.com/dou5rypdf/image/upload/v1754305606/Screenshot_2025-08-03_230628_wtc5r1.png",
                projectLink: "http://github.com/Hilal-11",
            },
            {
                projectId: "df",
                projectImage: "https://framerusercontent.com/images/SG0ZbESc0TAkt6qXYHYpwhuuuME.png?scale-down-to=1024",
                projectLink: "http://github.com/Hilal-11",
            }
        ]
    },

    {
        id: 5,
        experianceSkillOption: "Cross-Platform App Development",
        experianceDiscaription: "In my role as a Cross-Platform App Developer, I built mobile and desktop applications using frameworks like React Native and Flutter. These apps provided consistent performance and design across Android, iOS, and web platforms. I focused on writing reusable code components, handling platform-specific design adaptations, and integrating backend services to deliver seamless user experiences on multiple devices.",
        listOfSkills: ["React Native", "Flutter", "Expo", "Firebase", "Push Notifications", "Platform-Specific Styling", "Navigation"],
        projectsList: [
{
                projectId: "as",
                projectImage: "https://res.cloudinary.com/dou5rypdf/image/upload/v1754305561/Screenshot_2025-08-03_230537_cho01w.png",
                projectLink: "http://github.com/Hilal-11",
            },
            {
                projectId: "bcx",
                projectImage: "https://res.cloudinary.com/dou5rypdf/image/upload/v1754305562/Screenshot_2025-08-03_230551_lw86cw.png",
                projectLink: "http://github.com/Hilal-11",
            },
            {
                projectId: "cer",
                projectImage: "https://res.cloudinary.com/dou5rypdf/image/upload/v1754305606/Screenshot_2025-08-03_230628_wtc5r1.png",
                projectLink: "http://github.com/Hilal-11",
            },
            {
                projectId: "d55",
                projectImage: "https://framerusercontent.com/images/SG0ZbESc0TAkt6qXYHYpwhuuuME.png?scale-down-to=1024",
                projectLink: "http://github.com/Hilal-11",
            }
        ]
    },

    {
        id: 6,
        experianceSkillOption: "Data Science",
        experianceDiscaription: "As a Data Scientist, I extracted insights from large datasets to support decision-making and feature development. I used Python libraries like Pandas, NumPy, and Matplotlib for data analysis and visualization. I also applied machine learning techniques using Scikit-learn to create predictive models and conducted exploratory data analysis to uncover hidden patterns. My focus was on translating raw data into actionable intelligence for business and product teams.",
        listOfSkills: ["Python", "Pandas", "NumPy", "Matplotlib", "Scikit-learn", "EDA", "ML Models", "Jupyter Notebook"],
        projectsList: [
{
                projectId: "aae4",
                projectImage: "https://res.cloudinary.com/dou5rypdf/image/upload/v1754305561/Screenshot_2025-08-03_230537_cho01w.png",
                projectLink: "http://github.com/Hilal-11",
            },
            {
                projectId: "b84",
                projectImage: "https://res.cloudinary.com/dou5rypdf/image/upload/v1754305562/Screenshot_2025-08-03_230551_lw86cw.png",
                projectLink: "http://github.com/Hilal-11",
            },
            {
                projectId: "c10",
                projectImage: "https://res.cloudinary.com/dou5rypdf/image/upload/v1754305606/Screenshot_2025-08-03_230628_wtc5r1.png",
                projectLink: "http://github.com/Hilal-11",
            },
            {
                projectId: "d66",
                projectImage: "https://framerusercontent.com/images/SG0ZbESc0TAkt6qXYHYpwhuuuME.png?scale-down-to=1024",
                projectLink: "http://github.com/Hilal-11",
            }
        ]
    }



];

export default experianceData;