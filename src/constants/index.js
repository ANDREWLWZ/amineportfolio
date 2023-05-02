import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  reactjs,
  tailwind,
  mongodb,
  meta,
  starbucks,
  tesla,
  shopify,
  tripguide,
  threejs,
  techshop,
  cryptowallet,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "System Enginner",
    icon: web,
  },
  {
    title: "Power Bi",
    icon: mobile,
  },
  {
    title: "IT help support",
    icon: backend,
  },
  {
    title: "Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
];

const experiences = [
  {
    title: "SUPPLY CHAIN MANAGER",
    company_name: "DEKKAKI ALLAL AGRICOLE",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - Oct 202",
    points: [
      "Managed Team And Transport",
      "Managed Supply Chain and Import- Export",
      "Applied Continuos Improvements on the company",
      "managed team of 20 person",
    ],
  },
  {
    title: "Transport Planner",
    company_name: "BPP",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - June 2021",
    points: [
      "Managed Team And Transport",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Management role",
      "Planning Transport",
    ],
  },
  {
    title: "IT HELP DESK AGENT",
    company_name: "HCL Technologies( Barclays Bank project )",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2021 - June 2021",
    points: [
      "Assisted Barclays bank employees for all technical.",
      "managed incidents and contact employees directly.",
      "Deal with complaints.",
      "Doing IT help and supports",
    ],
  },
  {
    title: "Continuos Improvement Engineer ( CI )",
    company_name: "McCain Foods",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "March 2023 - Present",
    points: [
      "Managed a team of almost 200 person",
      "created power Bi Reports to enhcance data vizualisation",
      "creating apps on power apps to avoid using papers",
      "used new ideas to imrove interior communications",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I had the pleasure of connecting with Amine and he is an intelligent person you would want to work with.",
    name: "Andrew Lim",
    designation: "Data Scientist",
    company: "MaskEX",
    image: "andrew.png",
  },
  {
    testimonial:
      "he was able to quickly identify and solve complex problems. He was always willing to go the extra mile to ensure that our project was a success.",
    name: "David Johnson",
    designation: "Data Analyst",
    company: "HCL Technologies",
    image: "https://randomuser.me/api/portraits/men/7.jpg",
  },
  {
    testimonial:
      "He is incredibly organized and detailed-oriented, which makes him an asset in any team environment",
    name: "Emma Williams",
    designation: "IT lead",
    company: "HCL Technologies",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
  },
];

const projects = [
  {
    name: "Simulation of AIP lorraine with Flexsim",
    description:
      "This project involves creating a simulation model of the AIP Lorraine manufacturing facility using the FlexSim software.",
    tags: [
      {
        name: "AIP Lorraine",
        color: "blue-text-gradient",
      },
    
    ],
    image: techshop,
    source_code_link: "#",
  },
  {
    name: "Autonomous felt supply system",
    description:
      "The Autonomous Felt Supply System is a project associated with UFR MIM (University Institute of Technology of Metz) and the Faculty of Science and Technology. The goal of the project is to develop a system that can automatically supply felt to industrial machines in order to optimize the production process and reduce labor costs.",
    tags: [
      {
        name: "Autonomous",
        color: "blue-text-gradient",
      },
      
    ],
    image: cryptowallet,
    source_code_link: "#",
  },
  {
    name: "Progress 4.0 Product Supply Management Project",
    description:
      "A comprehensive supply management system that helps the progress of 4.0 product.",
    tags: [
      {
        name: "Supply management",
        color: "blue-text-gradient",
      },
      
    ],
    image: tripguide,
    source_code_link: "#",
  },
];

export { services, technologies, experiences, testimonials, projects };
