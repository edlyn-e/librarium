import React from "react";
import styles from "./About.module.scss";
import image from "./../../assets/me.png";

const About = () => {
    return (
        <div className={styles.About}>
            <img src={image} alt="sketch of author" />
            <div className={styles.About__Section}>
                <h1 className={styles.About__Header}>Heya! My name is Edlyn</h1>
                <section className={styles.About__Text}>
                    <p>
                        I'm an Arts graduate from the University of South
                        Austrlia and a software developer in the making with
                        _nology!
                    </p>

                    <p>
                        I graduated in 2019 with a Bachelor of Arts (Languages)
                        and double majored in Sociology and Japanese. There's
                        just something about seeing and getting to know how
                        things work, coming to an understanding of why things
                        are the way they are that fascinate me to no end. The
                        tech world is bursting at the seams with incredible
                        potential as we move into the future, and I want to be a
                        part of it.
                    </p>
                </section>
            </div>
        </div>
    );
};

export default About;
