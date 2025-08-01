export interface Project {
  uniqueID: string;
  image: string;
  name: string;
  description: string;
}

export type ProjectsConfig = Project[];

export const ProjectsConfig: ProjectsConfig = [
  {
    uniqueID: "proj-001",
    image: "https://bs-uploads.toptal.io/blackfish-uploads/components/blog_post_page/5912616/cover_image/retina_1708x683/1015_Next.js_vs._React-_A_Comparative_Tutorial_Illustration_Brief_Blog-e14319490440a98149fbda4e651f8526.png",
    name: "E-Commerce Platform",
    description: "A full-stack e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product management, shopping cart, payment integration, and admin dashboard."
  },
  {
    uniqueID: "proj-002",
    image: "https://framerusercontent.com/images/tWaZY7WBmJ3rT5y8Tc6cmJefJk.jpeg",
    name: "Task Management App",
    description: "A collaborative task management application with real-time updates, drag-and-drop functionality, team collaboration features, and progress tracking. Built with Vue.js and Firebase."
  },
  {
    uniqueID: "proj-003",
    image: "https://framerusercontent.com/images/luuFCS3wrDtTqDV4Kd1Adkkk.jpg",
    name: "AI Chat Assistant",
    description: "An intelligent chatbot powered by machine learning algorithms. Integrates with multiple messaging platforms and provides personalized responses based on user behavior and preferences."
  },
  {
    uniqueID: "proj-004",
    image: "https://framerusercontent.com/images/qaXP9CBTkpCNVvyTQ6Uxc8kN5ts.png?scale-down-to=2048",
    name: "Portfolio Website",
    description: "A modern, responsive portfolio website showcasing creative work and professional experience. Features smooth animations, dark/light theme toggle, and optimized for performance."
  },
  {
    uniqueID: "proj-005",
    image: "https://www.terasoltechnologies.com/hubfs/Terasol%20Blogs/Next%20Js%20framework%20for%20development.jpg",
    name: "Data Analytics Dashboard",
    description: "A comprehensive analytics dashboard that visualizes complex data sets with interactive charts and graphs. Built with D3.js, React, and integrates with multiple data sources."
  },
  {
    uniqueID: "proj-006",
    image: "https://framerusercontent.com/images/SG0ZbESc0TAkt6qXYHYpwhuuuME.png?scale-down-to=1024",
    name: "Mobile Fitness App",
    description: "A cross-platform mobile fitness application with workout tracking, nutrition planning, and social features. Built with React Native and includes offline functionality."
  },
  {
    uniqueID: "proj-007",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=500&h=300&fit=crop",
    name: "Real Estate Platform",
    description: "A comprehensive real estate platform with property listings, virtual tours, mortgage calculator, and agent management system. Features advanced search filters and map integration."
  }
];