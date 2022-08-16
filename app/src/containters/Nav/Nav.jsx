// styling
import styles from "./Nav.module.scss";

// library imports
import * as React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import BurgerNav from "../BurgerNav/BurgerNav";
import { FaBars } from "react-icons/fa";

const Nav = () => {
    const [isDisplayed, setIsDisplayed] = useState(false);

    const handleClick = () => {
        console.log("has been clicked");
        setIsDisplayed(!isDisplayed);
    };

    const displayMenu = () => {
        if (isDisplayed) return <Nav />;
        return;
    };

    return (
        <>
            <div className={styles.Nav}>
                <NavLink to="/librarium" className={styles.Nav__Logo}>
                    edlyn-e
                </NavLink>

                <span className={styles.Nav__BurgerMenu} onClick={handleClick}>
                    <FaBars />
                </span>
            </div>
            <nav className={styles.Nav__Menu}>
                {isDisplayed ? <BurgerNav handleClick={handleClick} /> : ""}
            </nav>
        </>
    );
};

export default Nav;
