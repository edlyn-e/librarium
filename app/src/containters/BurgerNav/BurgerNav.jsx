// styling
import styles from "./BurgerNav.module.scss";

// libary imports
import { NavLink } from "react-router-dom";

const BurgerNav = () => {
    return (
        <div className={styles.BurgerNav}>
            <NavLink to="/about-me" className={styles.BurgerNav__Links}>
                About me
            </NavLink>
            <NavLink to="/tech-stacks" className={styles.BurgerNav__Links}>
                Tech Stacks
            </NavLink>
            <NavLink to="/projects" className={styles.BurgerNav__Links}>
                Projects
            </NavLink>
            <NavLink to="/resume" className={styles.BurgerNav__Links}>
                Resume
            </NavLink>
            <NavLink to="/contact-me" className={styles.BurgerNav__Links}>
                Contact
            </NavLink>
        </div>
    );
};

export default BurgerNav;
