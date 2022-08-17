// styling
import styles from "./ProjectCard.module.scss";

// server
import projectList from "../../server/projects";

// library imports
import { FaCode, FaRocket } from "react-icons/fa";

const ProjectCard = () => {
    return (
        <>
            {projectList.map((project) => {
                const placeholder =
                    "https://www.cera.org.au/wp-content/uploads/2021/06/placeholder-images-image_large.png";

                return (
                    <div className={styles.ProjectCard} key={project.title}>
                        <h1 className={styles.ProjectCard__Header}>
                            {project.title}
                        </h1>
                        <img
                            className={styles.ProjectCard__Image}
                            src={project.image ? project.image : placeholder}
                            alt={`${project.title}`}
                        />
                        <p className={styles.ProjectCard__Description}>
                            {project.description}
                        </p>
                        <section>
                            <p>
                                Tech Stack: <br />
                                {project.techStacks.join(" ")}
                            </p>
                        </section>

                        <section className={styles.ProjectCard__Links}>
                            <a href={project.links.code} target="#blank">
                                <FaCode />
                            </a>

                            {/* This will be replaced with the live version once the projects have been deployed */}
                            <a href={project.links.code} target="#blank">
                                <FaRocket />
                            </a>
                        </section>
                    </div>
                );
            })}
        </>
    );
};

export default ProjectCard;
