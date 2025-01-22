interface Projects {
  name: string;
  href: string;
  description: string;
  date: string;
  stack: string[];
}

//You can add as many tech stack icons here
export const techIcons: { [key: string]: string } = {
  "Next.js": "/Icons/next.svg",
  "React.js": "/Icons/react.svg",
  Typescript: "/Icons/typescript.svg",
  "Node.js": "/Icons/node.svg",
  PostgreSQL: "/Icons/PostgreSQL.svg",
  Firebase: "/Icons/firebase.svg",
  Python: "/Icons/python.svg",
  Javascript: "/Icons/javascript.svg",
};

// You can update and add as many experiences you would like
export const projects: Projects[] = [
  {
    name: "Todo App",
    href: "https://www.nanakofiokae.com/",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    date: "May 2022",
    //The array will show the list based on how it is typed, ensure what the techIcon text is is exactly the same as you have it in this stack array
    stack: ["Next.js", "React.js", "Typescript", "Node.js"],
  },
  {
    name: "Pokemon Database",
    href: "https://www.nanakofiokae.com/",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    date: "May 2023",
    stack: [
      "Next.js",
      "React.js",
      "Typescript",
      "Node.js",
      "PostgreSQL",
      "Firebase",
      "Python",
    ],
  },
  {
    name: "Calculator App",
    href: "https://www.nanakofiokae.com/",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    date: "May 2024",
    stack: ["Next.js", "Javascript", "Python"],
  },
];
