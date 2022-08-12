// styling
import styles from "./TechStacks.module.scss";

// library imports

// local imports
import techStack from "../../server/techStack";

export const TechStacks = () => {
    return (
        <div className={styles.TechStacks}>
            <h1 className={styles.TechStacks__Header}>My multilingual stack</h1>

            <div className={styles.TechStacks__Stack}>
                {techStack.map((stackItem) => {
                    return (
                        <section
                            className={styles.TechStacks__Stack_item}
                            key={stackItem.stack}
                        >
                            <h1>{stackItem.icon}</h1>
                            <p>{stackItem.stack}</p>
                        </section>
                    );
                })}
            </div>
        </div>
    );
};
