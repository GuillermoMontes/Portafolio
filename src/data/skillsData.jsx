import { DiJavascript1, DiMsqlServer, DiVisualstudio } from "react-icons/di";
import {
  FaCss3Alt,
  FaGithub,
  FaHtml5,
  FaReact,
  FaBootstrap,
} from "react-icons/fa";

import {  SiFramer, SiTailwindcss, SiSqlite } from "react-icons/si";

import { IoLogoFirebase } from "react-icons/io5";

export const SkillsData = [
  {
    name: "HTML",
    icon: < FaHtml5 />,
  },
  {
    name: "CSS",
    icon: < FaCss3Alt />,
  },
  {
    name: "Javascript",
    icon: < DiJavascript1 />,
  },

  {
    name: "React Js",
    icon: < FaReact />,
  },

  {
    name: "Visual Studio Code",
    icon: < DiVisualstudio />,
  },
  {
    name: "Bootstrap",
    icon: < FaBootstrap />,
  },
  {
    name: "Tailwind",
    icon: < SiTailwindcss />,
  },
  {
    name: "SQL Server",
    icon: < DiMsqlServer />,
  },
  {
    name: "SQLite",
    icon: < SiSqlite />,
  },

  {
    name: "Firebase",
    icon: < IoLogoFirebase />,
  },

  {
    name: "Framer Motion",
    icon: < SiFramer />,
  },
  {
    name: "Git",
    icon: < FaGithub />,
  },
];
