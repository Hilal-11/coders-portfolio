export interface Project {
  uniqueID: string;
  images: string[];
  name: string;
  description: string;
}

export type ProjectsConfig = Project[];

export const ProjectsConfig: ProjectsConfig = [
  {
    uniqueID: "proj-001",
    images: [
      "https://bs-uploads.toptal.io/blackfish-uploads/components/blog_post_page/5912616/cover_image/retina_1708x683/1015_Next.js_vs._React-_A_Comparative_Tutorial_Illustration_Brief_Blog-e14319490440a98149fbda4e651f8526.png" , 
      "https://res.cloudinary.com/dou5rypdf/image/upload/v1754305561/Screenshot_2025-08-03_230537_cho01w.png",
      "https://res.cloudinary.com/dou5rypdf/image/upload/v1754305606/Screenshot_2025-08-03_230628_wtc5r1.png",
      "https://res.cloudinary.com/dou5rypdf/image/upload/v1754305562/Screenshot_2025-08-03_230551_lw86cw.png",
      "https://res.cloudinary.com/dou5rypdf/image/upload/v1754305562/Screenshot_2025-08-03_230551_lw86cw.png"
  ],
    name: "E-Commerce Platform",
    description: "A full-stack e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product management, shopping cart, payment integration, and admin dashboard."
  },
  {
    uniqueID: "proj-002",
    images: [
      "https://framerusercontent.com/images/tWaZY7WBmJ3rT5y8Tc6cmJefJk.jpeg",
      "https://res.cloudinary.com/dou5rypdf/image/upload/v1754305561/Screenshot_2025-08-03_230537_cho01w.png",
      "https://res.cloudinary.com/dou5rypdf/image/upload/v1754305606/Screenshot_2025-08-03_230628_wtc5r1.png",
      "https://res.cloudinary.com/dou5rypdf/image/upload/v1754305562/Screenshot_2025-08-03_230551_lw86cw.png",
      "https://res.cloudinary.com/dou5rypdf/image/upload/v1754305562/Screenshot_2025-08-03_230551_lw86cw.png"
  ],
    name: "Task Management App",
    description: "A collaborative task management application with real-time updates, drag-and-drop functionality, team collaboration features, and progress tracking. Built with Vue.js and Firebase."
  },
  {
    uniqueID: "proj-003",
    images: [
      "https://framerusercontent.com/images/luuFCS3wrDtTqDV4Kd1Adkkk.jpg",
      "https://res.cloudinary.com/dou5rypdf/image/upload/v1754305561/Screenshot_2025-08-03_230537_cho01w.png",
      "https://res.cloudinary.com/dou5rypdf/image/upload/v1754305606/Screenshot_2025-08-03_230628_wtc5r1.png",
      "https://res.cloudinary.com/dou5rypdf/image/upload/v1754305562/Screenshot_2025-08-03_230551_lw86cw.png",
      "https://res.cloudinary.com/dou5rypdf/image/upload/v1754305562/Screenshot_2025-08-03_230551_lw86cw.png"
  ],
    name: "AI Chat Assistant",
    description: "An intelligent chatbot powered by machine learning algorithms. Integrates with multiple messaging platforms and provides personalized responses based on user behavior and preferences."
  },
  {
    uniqueID: "proj-004",
    images: [
      "https://framerusercontent.com/images/qaXP9CBTkpCNVvyTQ6Uxc8kN5ts.png?scale-down-to=2048",
      "https://res.cloudinary.com/dou5rypdf/image/upload/v1754305561/Screenshot_2025-08-03_230537_cho01w.png",
      "https://res.cloudinary.com/dou5rypdf/image/upload/v1754305606/Screenshot_2025-08-03_230628_wtc5r1.png",
      "https://res.cloudinary.com/dou5rypdf/image/upload/v1754305562/Screenshot_2025-08-03_230551_lw86cw.png",
      "https://res.cloudinary.com/dou5rypdf/image/upload/v1754305562/Screenshot_2025-08-03_230551_lw86cw.png"
  ],
    name: "Portfolio Website",
    description: "A modern, responsive portfolio website showcasing creative work and professional experience. Features smooth animations, dark/light theme toggle, and optimized for performance."
  },
  {
    uniqueID: "proj-005",
    images: [
      "https://www.terasoltechnologies.com/hubfs/Terasol%20Blogs/Next%20Js%20framework%20for%20development.jpg",
      "https://res.cloudinary.com/dou5rypdf/image/upload/v1754305561/Screenshot_2025-08-03_230537_cho01w.png",
      "https://res.cloudinary.com/dou5rypdf/image/upload/v1754305606/Screenshot_2025-08-03_230628_wtc5r1.png",
      "https://res.cloudinary.com/dou5rypdf/image/upload/v1754305562/Screenshot_2025-08-03_230551_lw86cw.png",
      "https://res.cloudinary.com/dou5rypdf/image/upload/v1754305562/Screenshot_2025-08-03_230551_lw86cw.png"
  ],
    name: "Data Analytics Dashboard",
    description: "A comprehensive analytics dashboard that visualizes complex data sets with interactive charts and graphs. Built with D3.js, React, and integrates with multiple data sources."
  },
  {
    uniqueID: "proj-006",
    images: [
      "https://framerusercontent.com/images/SG0ZbESc0TAkt6qXYHYpwhuuuME.png?scale-down-to=1024",
      "https://res.cloudinary.com/dou5rypdf/image/upload/v1754305561/Screenshot_2025-08-03_230537_cho01w.png",
      "https://res.cloudinary.com/dou5rypdf/image/upload/v1754305606/Screenshot_2025-08-03_230628_wtc5r1.png",
      "https://res.cloudinary.com/dou5rypdf/image/upload/v1754305562/Screenshot_2025-08-03_230551_lw86cw.png",
      "https://res.cloudinary.com/dou5rypdf/image/upload/v1754305562/Screenshot_2025-08-03_230551_lw86cw.png"
  ],
    name: "Mobile Fitness App",
    description: "A cross-platform mobile fitness application with workout tracking, nutrition planning, and social features. Built with React Native and includes offline functionality."
  },
  {
    uniqueID: "proj-007",
    images: [
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=500&h=300&fit=crop",
      "https://res.cloudinary.com/dou5rypdf/image/upload/v1754305561/Screenshot_2025-08-03_230537_cho01w.png",
      "https://res.cloudinary.com/dou5rypdf/image/upload/v1754305606/Screenshot_2025-08-03_230628_wtc5r1.png",
      "https://res.cloudinary.com/dou5rypdf/image/upload/v1754305562/Screenshot_2025-08-03_230551_lw86cw.png",
      "https://res.cloudinary.com/dou5rypdf/image/upload/v1754305562/Screenshot_2025-08-03_230551_lw86cw.png"
  ],
    name: "Real Estate Platform",
    description: "A comprehensive real estate platform with property listings, virtual tours, mortgage calculator, and agent management system. Features advanced search filters and map integration."
  },
  {
    uniqueID: "proj-008",
    images: [
      "https://res.cloudinary.com/dou5rypdf/image/upload/v1754305562/Screenshot_2025-08-03_230551_lw86cw.png",
      "https://res.cloudinary.com/dou5rypdf/image/upload/v1754305561/Screenshot_2025-08-03_230537_cho01w.png",
      "https://res.cloudinary.com/dou5rypdf/image/upload/v1754305606/Screenshot_2025-08-03_230628_wtc5r1.png",
      "https://res.cloudinary.com/dou5rypdf/image/upload/v1754305562/Screenshot_2025-08-03_230551_lw86cw.png"
  ],
    name: "Real Estate Platform",
    description: "A comprehensive real estate platform with property listings, virtual tours, mortgage calculator, and agent management system. Features advanced search filters and map integration."
  }
];