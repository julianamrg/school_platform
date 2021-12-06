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
                <div className={styles.charInformation}>
                    <div className={styles.completed}>
                        <h4> &#x1f7e3; Completed </h4>
                        <p>
                            {" "}
                            <b>20</b> hours{" "}
                        </p>
                    </div>
                    <div className={styles.leftToGo}>
                        <h4> &#x1f7e2; Left to go </h4>
                        <p>
                            {" "}
                            <b>30</b> hours{" "}
                        </p>
                    </div>
                </div>
            </div>
            <div className={styles.containerTwo}>
                <div className={styles.progressTitle}>
                    <h2>Progress </h2>
                </div>
                <div className={styles.progressCardsContainer}>
                    <div className={styles.cards}>
                        <p>Total Webinars </p>
                        <h3>9 </h3>
                    </div>
                    <div className={styles.cards}>
                        <p>Pending assignments </p> <h3>0 </h3>
                    </div>

                    <div className={styles.cards}>
                        <p>Total units </p> <h3>5 </h3>
                    </div>

                    <div className={styles.cards}>
                        <p>Total readings </p> <h3>14 </h3>
                    </div>
                    <div className={styles.cardsTotal}>
                        <p>Total videos 5 </p>{" "}
                    </div>
                </div>
                <div className={styles.progressConfirm}>
                    <img
                        src={orangeImage}
                        alt="logogroup"
                        className={styles.arrowRight}
                    />
                    <p>
                        {" "}
                        Confirm your account details. Please confirm your emain
                        and account number &#x1f630;
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Progress;
