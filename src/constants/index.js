import {
  backend,
  creator,
  web,
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
    title: "React",
    desc: "(Context API, Redux)",
    icon: web,
  },
  {
    title: "Node.js",
    desc: "(Express, Nest.js)",
    icon: backend,
  },
  {
    title: "MongoDB",
    icon: backend,
  },
  {
    title: "AWS",
    desc: "(EC2, S3, ELB, EBS, VPC etc.)",
    icon: creator,
  },
  {
    title: "Material Design",
    icon: web,
  },
  {
    title: "Git",
    desc: "(git flow, version management)",
    icon: creator,
  },
  {
    title: "English",
    desc: "(B1)",
    icon: creator,
  },
];


const experiences = [
  {
    title: "Full-Stack Developer",
    company_name: "Unicorn Systems",
    date: "April 2021 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, system analysts, product managers, and other developers to create high-quality products.",
      "Writing unit tests",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Working closely with business analysts.",
      "Utilizing good design practices, code reuse and writing efficient source code",
      "Creating technical documentation."
    ],
  },
  {
    title: "Technical Lead",
    company_name: "Unicorn Systems",
    date: "April 2022 - Present",
    points: [
      "Identifying and addressing performance bottlenecks.",
      "Participation in the design of business logic and application architecture.",
      "Junior specialist mentoring. Code review/consultation",
      "Investigate problem areas.",
    ],
  },
];

const contacts = [
  "Mobile: +380501440746",
  "Skype: hevk92",
  "Telegram: https://t.me/zxcvvzcx",
  "Github: https://github.com/nyxeet"
]



export { services, experiences, contacts };
