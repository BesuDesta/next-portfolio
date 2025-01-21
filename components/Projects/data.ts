interface Projects {
  name: string;
  href: string;
  description: string;
  date: string;
  stack: string[];
}

// You can update and add as many experiences you would like
export const projects: Projects[] = [
  {
    name: "Todo App",
    href: "/",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    date: "May 2022",
    stack: ["Next.js", "React.js", "Typescript", "Node.js"],
  },
  {
    name: "Pokemon database",
    href: "/",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    date: "May 2023",
    stack: [
      "Next.js",
      "React.js",
      "Typescript",
      "Node.js",
      "SQL",
      "Firebase",
      "Python",
    ],
  },
  {
    name: "Ai chat App",
    href: "/",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    date: "May 2024",
    stack: [
      "Next.js",
      "Typescript",
      "Flask",
      "Redux",
      "Python",
      "GraphQL",
      "OpenAI",
      "AWS",
      "Clerk",
    ],
  },
];
