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
} from "react-icons/fa";

const techStack = [
    { stack: "Git", icon: <FaGitAlt /> },
    { stack: "Github", icon: <FaGithub /> },
    { stack: "HTML", icon: <FaHtml5 /> },
    { stack: "CSS", icon: <FaCss3Alt /> },
    { stack: "Sass", icon: <FaSass /> },
    { stack: "JavaScript", icon: <FaJsSquare /> },
    { stack: "React", icon: <FaReact /> },
    { stack: "Java", icon: <FaJava /> },
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
