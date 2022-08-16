// styling
import styles from "./Contact.module.scss";

// local imports
import paperplane from "./../../assets/paperplane.png";
import { contactStack } from "../../server/techStack";

const Contact = () => {
    return (
        <div main className={styles.Contact}>
            <img
                src={paperplane}
                alt="paper plane banner"
                className={styles.Contact__Banner}
            />

            <h1 className={styles.Contact__Header}>Let's get in touch!</h1>

            <p>You can find me on these platforms.</p>

            <section className={styles.Contact__Stack}>
                {contactStack.map((contact) => {
                    return (
                        <section
                            className={styles.Contact__Stack_item}
                            key={contact.platform}
                        >
                            <a href={contact.link} target="#blank">
                                <h1>{contact.icon}</h1>
                                <p>{contact.platform}</p>
                            </a>
                        </section>
                    );
                })}
            </section>
        </div>
    );
};

export default Contact;
