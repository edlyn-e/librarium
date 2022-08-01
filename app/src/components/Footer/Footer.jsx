import React from "react";
import styles from "./Footer.module.scss";

const Footer = () => {
    return (
        <div className={styles.Footer}>
            <section className={styles.Footer__Section}>
                <ul>
                    <li>Work History</li>
                    <li>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Corporis, nisi officia. Earum qui reprehenderit
                        voluptatem eos, minima ut nam est.
                    </li>
                </ul>
            </section>
            <section className={styles.Footer__Section}>
                <ul>
                    <li>Random stuff</li>
                    <li>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Corporis, nisi officia. Earum qui reprehenderit
                        voluptatem eos, minima ut nam est.
                    </li>
                </ul>
            </section>
            <section className={styles.Footer__Section}>
                {/* TODO: put actual icons in this section */}
                <ul>
                    <li>My favourite projects: </li>
                    <li>Project 1</li>
                    <li>Project 2</li>
                    <li>Project 3</li>
                </ul>
            </section>
            <section className={styles.Footer__Section}>
                <ul>
                    <li>Let's get connected!</li>
                    <li>
                        <a
                            href="https://github.com/edlyn-e"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Github
                        </a>
                    </li>
                    <li>
                        <a
                            href="mailto: edlyn.evangelista@outlook.com"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Email
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.linkedin.com/in/edlyn-evangelista/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            LinkedIn
                        </a>
                    </li>
                </ul>
            </section>
            <section className={styles.Footer__Footnote}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam
                accusantium ut perferendis, cum deserunt adipisci, minima maxime
                voluptatem iusto aperiam id cumque. Rerum, esse enim. Sed ea
                fugiat iure odio.
            </section>
        </div>
    );
};

export default Footer;
