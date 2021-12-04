import React from "react";
import styles from "./Progress.module.css";
import orangeImage from "../../Assets/IMG/img/Oval + Oval + Oval Mask.png";
import ProgressCircularChart from "./ProgressCircularChart";

const Progress = () => {
    return (
        <section className={styles.progressSection}>
            <div className={styles.progressOverview}>
                <div className={styles.circularChart}>
                    <h2>Progress Overview</h2>
                    <ProgressCircularChart />
                </div>
                <div className={styles.completed}>
                    <h4>Completed </h4>
                    <p> 20 hours </p>
                </div>
                <div className={styles.leftToGo}>
                    <h4>Left to go </h4>
                    <p> 30 hours </p>
                </div>
            </div>
            <div className={styles.progressTitle}>
                <h2>Progress </h2>
            </div>
            <div className={styles.progressCardsContainer}>
                <p>Total Webinars 9 </p>
                <p>Pending assignments 0</p>
                <p>Total units 5 </p>
                <p>Total readings 14 </p>
                <p>Total videos 5 </p>
            </div>
            <div className={styles.progressConfirm}>
                <img
                    src={orangeImage}
                    alt="logogroup"
                    className={styles.arrowRight}
                />
                <p>
                    {" "}
                    Confirm your account details. Please confirm your emain and
                    account number Hex: &#x1f630;
                </p>
            </div>
        </section>
    );
};

export default Progress;
