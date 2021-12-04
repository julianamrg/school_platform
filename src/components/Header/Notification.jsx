import React from "react";
import styles from "../Header/Header.module.css";
import { useState } from "react";
import notification_blue from "../../Assets/IMG/img/thumb-notification.png";
import notification from "../../Assets/IMG/img/Notification - Iconly---Bold.png";

const Notification = () => {
    const [isActive, setIsActive] = useState(false);
    return (
        <div className={styles.dropdownLogOut}>
            <div
                className={styles.dropdownBtn}
                onClick={(e) => setIsActive(!isActive)}
            >
                <img
                    src={notification}
                    alt="dropdown"
                    className={styles.dropdown}
                />
                <span className="fas fa-caret-down"></span>
            </div>
            {isActive && (
                <div className={styles.NotificationContent}>
                    <div className={styles.dropdownOptions}>
                        <img
                            src={notification_blue}
                            alt="notificacion"
                            className={styles.notification}
                        />
                        <h3> You have a new sesion to re...</h3>
                        <p>Today, 10:30AM</p>
                    </div>

                    <div className={styles.dropdownOptions}>
                        <img
                            src={notification_blue}
                            alt="notificacion"
                            className={styles.notification}
                        />
                        <h3> You have a virtual sesion...</h3>
                        <p>Yesterday, 09:45PM</p>
                    </div>

                    <div className={styles.dropdownOptions}>
                        <img
                            src={notification_blue}
                            alt="notificacion"
                            className={styles.notification}
                        />
                        <h3> You have a face to face sta...</h3>
                        <p>Yesterday, 10:00PM</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Notification;
