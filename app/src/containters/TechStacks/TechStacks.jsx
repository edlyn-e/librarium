import React from "react";
import styles from "./TechStacks.module.scss";

export const TechStacks = () => {
    return (
        <div className={styles.TechStacks}>
            <h1 className={styles.TechStacks__Header}>My multilingual stack</h1>

            <ul className={styles.TechStacks__Stack}>
                <li>Git</li>
                <li>Markdown</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>Sass</li>
                <li>JavaScript</li>
                <li>React</li>
                {/* <li>Java</li> */}
            </ul>
        </div>
    );
};
