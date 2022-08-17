// styling
import { education, workExperience } from "../../server/resume";
import styles from "./Resume.module.scss";

const Resume = () => {
    return (
        <div className={styles.Resume}>
            <main className={styles.Resume__Work_Experience}>
                <section>
                    <h2>Work Experience</h2>

                    {workExperience.map((role) => {
                        return (
                            <article
                                className={styles.Resume__Experience}
                                key={role.id}
                            >
                                <img
                                    src={role.logo}
                                    alt={role.company}
                                    className={styles.Resume__Logo}
                                />

                                <section
                                    className={styles.Resume__Experience_Text}
                                >
                                    <h3>{role.position}</h3>
                                    <p>
                                        {role.company} &#183; {role.duration}
                                    </p>

                                    {role.responsibilities.map(
                                        (responsibility, index) => {
                                            return (
                                                <ul>
                                                    <li key={index}>
                                                        {responsibility}
                                                    </li>
                                                </ul>
                                            );
                                        },
                                    )}
                                </section>
                            </article>
                        );
                    })}
                </section>
                <section>
                    <h2>Education</h2>

                    {education.map((edu) => {
                        return (
                            <article
                                className={styles.Resume__Experience}
                                key={edu.id}
                            >
                                <img
                                    src={edu.logo}
                                    alt={edu.educationProvider}
                                    className={styles.Resume__Logo}
                                />
                                <section
                                    className={styles.Resume__Experience_Text}
                                >
                                    <h3>{edu.educationProvider}</h3>
                                    <p>
                                        {edu.degree} &#183; {edu.duration}
                                    </p>
                                </section>
                            </article>
                        );
                    })}
                </section>
            </main>
        </div>
    );
};

export default Resume;
