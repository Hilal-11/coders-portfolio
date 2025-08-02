
interface LinkItem {
  id: number;
  linkItem: string;
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
    { id: 1, linkItem: "Home" },
    { id: 2, linkItem: "About" },
    { id: 3, linkItem: "Projects" },
    { id: 4, linkItem: "Services" },
    { id: 5, linkItem: "Contact us" },
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