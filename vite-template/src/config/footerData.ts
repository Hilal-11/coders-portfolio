
interface LinkItem {
  id: number;
  linkItem: string;
  navigateTo?: string;
  
}

// Navigation interface
export interface NavigationType {
  uniqueID: string;
  navigationLinks: LinkItem[];
}

// Services interface
export interface ServicesType {
  uniqueID: string;
  servicesOptions: LinkItem[];
}

export interface GenericListType {
  uniqueID: string;
  items: LinkItem[];
}

export const NavigationData: GenericListType = {
  uniqueID: "1",
  items: [
    { id: 1, linkItem: "Home" , navigateTo: "hero-section" },
    { id: 2, linkItem: "About" , navigateTo: "about_section" },
    { id: 3, linkItem: "Projects" , navigateTo: "projects_section" },
    { id: 4, linkItem: "Experiance" , navigateTo: "experiance-section" },
    { id: 5, linkItem: "Contact us" , navigateTo: "contact_section" },
  ]
};

export const ServicesData: GenericListType = {
  uniqueID: "2",
  items: [
    { id: 1, linkItem: "Frontend" },
    { id: 2, linkItem: "Backend" },
    { id: 3, linkItem: "UI/UX" },
    { id: 4, linkItem: "AI Integration" },
    { id: 5, linkItem: "Data Analyst" }, 
    { id: 6, linkItem: "Mobile App" },
  ]
};