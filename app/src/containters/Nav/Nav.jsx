import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Nav.module.scss";

const Nav = () => {
    return (
        <div className={styles.Nav}>
            <NavLink to="/" className={styles.Nav__Logo}>
                edlyn-e
            </NavLink>

            <nav className={styles.Nav__Menu}>
                <NavLink to="/about-me" className={styles.Nav__Links}>
                    About me
                </NavLink>
                <NavLink to="/tech-stacks" className={styles.Nav__Links}>
                    Tech Stacks
                </NavLink>
                <NavLink to="/projects" className={styles.Nav__Links}>
                    Projects
                </NavLink>
                {/* <NavLink to="/resume" className={styles.Nav__Links}>
                    Resume
                </NavLink> */}
                <NavLink to="/contact-me" className={styles.Nav__Links}>
                    Contact
                </NavLink>
            </nav>
        </div>
    );
};

export default Nav;
