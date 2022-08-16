// styling
import styles from "./Footer.module.scss";

// library imports
import { FaGithub, FaLinkedin, FaRegEnvelope } from "react-icons/fa";

const Footer = () => {
    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    return (
        <div className={styles.Footer}>
            <section className={styles.Footer__Section}>
                <ul>
                    <li>Work History</li>
                    <li>_nology &#183; Junior Software Developer</li>
                    <li>kikki.K &#183; 3IC Team Member</li>
                    <li>Kick 'N' Box &#183; Fitness Instructor/Receptionist</li>
                    <li>Kmart &#183; Retail Assistant</li>
                    <li>Intern &#183; Tamago DB</li>
                </ul>
            </section>

            <section className={styles.Footer__Section}>
                <ul>
                    <li>My most recent projects</li>
                    <li>Calculator &#183; JavaScript Calculator</li>
                    <li>Morse Code Translator &#183; JavaScript Translator</li>
                    <li>Opus Invenire &#183; Google Books API</li>
                    <li>Shibui &#183; eCommerce Website</li>
                </ul>
            </section>

            <section className={styles.Footer__Section}>
                <ul>
                    <li>Games I'm loving right now</li>
                    <li>Final Fantasy XIV</li>
                    <li>Travellers' Rest</li>
                    <li>Dragon Age: Inquisition</li>
                </ul>
            </section>

            <section className={styles.Footer__Section}>
                <ul>
                    <li>Let's get connected!</li>

                    <a
                        href="https://github.com/edlyn-e"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FaGithub />
                    </a>

                    <a
                        href="mailto: edlyn.evangelista@outlook.com"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FaRegEnvelope />
                    </a>

                    <a
                        href="https://www.linkedin.com/in/edlyn-evangelista/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FaLinkedin />
                    </a>
                </ul>

                <ul>
                    <li>Today is: {`${day} / ${month} / ${year}`}</li>
                </ul>
            </section>
            <section className={styles.Footer__Footnote}>
                This project was built by Edlyn Evangelista with JavaScript
                React @ 2022.
            </section>
        </div>
    );
};

export default Footer;
