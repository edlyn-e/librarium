import React from "react";
import styles from "./Contact.module.scss";
import Form from "../Form/Form";

const Contact = () => {
    return (
        <div className={styles.Contact}>
            <h1 className={styles.Contact__Header}>Form will go here... </h1>
            <Form />
        </div>
    );
};

export default Contact;
