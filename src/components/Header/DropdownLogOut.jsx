import React from "react";
import styles from "../Header/Header.module.css";
import { useState } from "react";
import dropdown from "../../Assets/IMG/img/Arrow---Down-2 - Iconly---Bold.png";

const DropdownLogOut = () => {
    const [isActive, setIsActive] = useState(false);
    return (
        <div className={styles.dropdownLogOut}>
            <div
                className={styles.dropdownBtn}
                onClick={(e) => setIsActive(!isActive)}
            >
                <img
                    src={dropdown}
                    alt="dropdown"
                    className={styles.dropdown}
                />
                <span className="fas fa-caret-down"></span>
            </div>
            {isActive && (
                <div className={styles.dropdownContent}>
                    <div className={styles.dropdownOptions}>Profile</div>

                    <div className={styles.dropdownOptions}>Log out</div>
                </div>
            )}
        </div>
    );
};

export default DropdownLogOut;
