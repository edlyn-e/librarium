// styling
import styles from "./Resume.module.scss";

const Resume = () => {
    return (
        <div className={styles.Resume}>
            <h1 className={styles.Resume__Header}>Edlyn Evangelista</h1>
            <main className={styles.Resume__Work_Experience}>
                <section>
                    <h2>Work Experience</h2>
                    <article className={styles.Resume__Experience}>
                        <img
                            src="https://avatars.githubusercontent.com/u/43138473?s=200&v=4"
                            alt="logo"
                            className={styles.Resume__Logo}
                        />
                        <section className={styles.Resume__Experience_Text}>
                            <h3>Junior Software Developer</h3>
                            <p>Full time &#183; Jun 2022 to present</p>
                            <p>
                                Full-time training with expert coaches covering
                                key areas of programming including concepts in
                                the following languages: HTML, CSS, SCSS,
                                JavaScript, React, Java, Microservices, Google
                                Cloud Platform, Testing strategy, and Agile
                                projects.
                            </p>
                        </section>
                    </article>
                </section>
                <section>
                    <h2>Education</h2>

                    <article className={styles.Resume__Experience}>
                        <img
                            src="https://cdn.cdnlogo.com/logos/u/95/university-of-south-australia.svg"
                            alt="logo"
                            className={styles.Resume__Logo}
                        />
                        <section className={styles.Resume__Experience_Text}>
                            <h3>University of South Australia</h3>
                            <p>
                                Bachelor of Arts (Languages) &#183; Mar 2016 to
                                Apr 2019
                            </p>
                        </section>
                    </article>
                </section>
                <section>
                    <h2>Certification & Licenses</h2>
                </section>
            </main>
        </div>
    );
};

export default Resume;
