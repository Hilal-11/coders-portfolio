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
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
    name: "E-Commerce Platform",
    description: "A full-stack e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product management, shopping cart, payment integration, and admin dashboard."
  },
  {
    uniqueID: "proj-002",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=500&h=300&fit=crop",
    name: "Task Management App",
    description: "A collaborative task management application with real-time updates, drag-and-drop functionality, team collaboration features, and progress tracking. Built with Vue.js and Firebase."
  },
  {
    uniqueID: "proj-003",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=500&h=300&fit=crop",
    name: "AI Chat Assistant",
    description: "An intelligent chatbot powered by machine learning algorithms. Integrates with multiple messaging platforms and provides personalized responses based on user behavior and preferences."
  },
  {
    uniqueID: "proj-004",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500&h=300&fit=crop",
    name: "Portfolio Website",
    description: "A modern, responsive portfolio website showcasing creative work and professional experience. Features smooth animations, dark/light theme toggle, and optimized for performance."
  },
  {
    uniqueID: "proj-005",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
    name: "Data Analytics Dashboard",
    description: "A comprehensive analytics dashboard that visualizes complex data sets with interactive charts and graphs. Built with D3.js, React, and integrates with multiple data sources."
  },
  {
    uniqueID: "proj-006",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=500&h=300&fit=crop",
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