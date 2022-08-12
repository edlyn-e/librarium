// styling
import styles from "./Projects.module.scss";

// local pages
import ProjectCard from "../../components/ProjectCard/ProjectCard";

const Projects = () => {
    return (
        <div className={styles.Projects}>
            <h1 className={styles.Projects__Header}>My Projects</h1>
            <section className={styles.Projects__Project_Tiles}>
                <ProjectCard />
            </section>
        </div>
    );
};

export default Projects;
