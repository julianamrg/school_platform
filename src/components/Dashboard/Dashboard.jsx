import React from "react";
import styles from "./Dashboard.module.css";
import blueSquare from "../../Assets/IMG/Headers/header-4@2x.png";
import studentGroup9 from "../../Assets/IMG/img/Group 9@3x.png";
import UsFlag from "../../Assets/IMG/img/Screen Shot 2020-09-24 at 3.34.23 PM@3x.png";

const Dashboard = () => {
    return (
        <section className={styles.dashboardSection}>
            <div className={styles.dashboardContainer}>
                <div className={styles.firstSection}>
                    <div className={styles.title}>
                        <h2> Dashboard </h2>
                    </div>

                    <div className={styles.english}>
                        <div className={styles.englishLearning}>
                            <p>Currently Learning</p>
                        </div>
                        <div className={styles.englishFlag}>
                            <img
                                src={UsFlag}
                                alt="UsFlag"
                                className={styles.UsFlag}
                            />
                            <h3>English</h3>
                        </div>
                    </div>
                </div>
                <div className={styles.dashboardImage}>
                    <img
                        src={blueSquare}
                        alt="blueSquare"
                        className={styles.blueSquare}
                    />
                    <h2> Welcome back, Clarence</h2>
                    <p>Ta-da! You're up to date &#x1F973; </p>
                    <img
                        src={studentGroup9}
                        alt="studentGroup9"
                        className={styles.studentGroup9}
                    />
                </div>
            </div>
        </section>
    );
};

export default Dashboard;
