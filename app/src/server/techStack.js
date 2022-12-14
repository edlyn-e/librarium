import {
    FaGitAlt,
    FaGithub,
    FaHtml5,
    FaCss3Alt,
    FaJsSquare,
    FaReact,
    FaJava,
    FaLinkedinIn,
    FaEnvelope,
    FaSass,
    FaAws,
} from "react-icons/fa";
import { SiFirebase, SiMysql, SiSpring, SiSpringboot } from "react-icons/si";

// AWS

const techStack = [
    { stack: "Git", icon: <FaGitAlt /> },
    { stack: "Github", icon: <FaGithub /> },
    { stack: "HTML", icon: <FaHtml5 /> },
    { stack: "CSS", icon: <FaCss3Alt /> },
    { stack: "Sass", icon: <FaSass /> },
    { stack: "JavaScript", icon: <FaJsSquare /> },
    { stack: "React", icon: <FaReact /> },
    { stack: "Firebase", icon: <SiFirebase /> },
    { stack: "Java", icon: <FaJava /> },
    { stack: "MySQL", icon: <SiMysql /> },
    { stack: "Spring", icon: <SiSpring /> },
    { stack: "SpringBoot", icon: <SiSpringboot /> },
    { stack: "AWS", icon: <FaAws /> },
];

export const contactStack = [
    {
        platform: "LinkedIn",
        icon: <FaLinkedinIn />,
        link: "https://www.linkedin.com/in/edlyn-evangelista/",
    },
    {
        platform: "Email",
        icon: <FaEnvelope />,
        link: "mailto:edlyn.evangelista@outlook.com",
    },
    {
        platform: "Github",
        icon: <FaGithub />,
        link: "https://github.com/edlyn-e",
    },
];

export default techStack;
