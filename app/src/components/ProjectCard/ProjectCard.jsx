import React from "react";
import styles from "./ProjectCard.module.scss";

const ProjectCard = () => {
    return (
        <div className={styles.ProjectCard}>
            <h1 className={styles.ProjectCard__Header}>
                My Projects will go here
            </h1>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur incidunt ducimus laudantium iure dolorem, itaque,
                et, praesentium asperiores porro suscipit id commodi? Libero
                accusantium suscipit perspiciatis minus, commodi nihil laborum.
            </p>
            <a href="#">code</a>
            <a href="#">live</a>
        </div>
    );
};

export default ProjectCard;
