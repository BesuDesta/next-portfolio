interface Experience {
  title: string;
  company: string;
  date: string;
  description: string;
  logo: string;
}

// You can update and add as many experiences you would like
// If you want to have the current badge, please add the (date - Current) to activate
export const experiences: Experience[] = [
  {
    title: "Software Engineering Extern",
    company: "FactSet",
    logo: "/company-logos/logo-2.png",
    date: " May 2025 - Jun 2025",
    description:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    title: "Computer Science Teaching Assistant",
    company: "Acme",
    logo: "/company-logos/logo-2.png",
    date: " Jan 2025 - Current",
    description:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    title: "Teaching Assistant",
    company: "Acme",
    logo: "/company-logos/logo-3.png",
    date: "Feb 2024 - Aug 2024",
    description:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
];
