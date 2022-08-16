// styling
import styles from "./BurgerNav.module.scss";

// libary imports
import { NavLink } from "react-router-dom";

const BurgerNav = ({ handleClick }) => {
    return (
        <div className={styles.BurgerNav}>
            <NavLink
                to="/about-me"
                className={styles.BurgerNav__Links}
                onClick={handleClick}
            >
                About me
            </NavLink>
            <NavLink
                to="/tech-stacks"
                className={styles.BurgerNav__Links}
                onClick={handleClick}
            >
                Tech Stacks
            </NavLink>
            <NavLink
                to="/projects"
                className={styles.BurgerNav__Links}
                onClick={handleClick}
            >
                Projects
            </NavLink>
            <NavLink
                to="/resume"
                className={styles.BurgerNav__Links}
                onClick={handleClick}
            >
                Resume
            </NavLink>
            <NavLink
                to="/contact-me"
                className={styles.BurgerNav__Links}
                onClick={handleClick}
            >
                Contact
            </NavLink>
        </div>
    );
};

export default BurgerNav;
