import React from "react";
import styles from "../Activity/Activity.module.css";
import followers from "../../Assets/IMG/img/ic-followers.png";
import newevent from "../../Assets/IMG/img/ic-events.png";
import assignments from "../../Assets/IMG/img/ic-assignments.png";
import arrowRight from "../../Assets/IMG/img/Arrow---Right-2 - Iconly---Bold.png";

const Activity = () => {
    return (
        <section className={styles.activitySection}>
            <div className={styles.activityContainer}>
                <h2> Activity </h2>
                <div className={styles.followers}>
                    <img
                        src={followers}
                        alt="logogroup"
                        className={styles.followers}
                    />
                    <p>
                        {" "}
                        You have new 5 followers including Kathryn Crawford and
                        Piper Shaw
                    </p>
                    <img
                        src={arrowRight}
                        alt="logogroup"
                        className={styles.arrowRight}
                    />
                </div>

                <div className={styles.new_events}>
                    <img
                        src={newevent}
                        alt="logogroup"
                        className={styles.newEvents}
                    />
                    <p> 3 new events were added to your calendar </p>
                    <img
                        src={arrowRight}
                        alt="logogroup"
                        className={styles.arrowRight}
                    />
                </div>

                <div className={styles.pending}>
                    <img
                        src={assignments}
                        alt="logogroup"
                        className={styles.pending_assigment}
                    />
                    <p>
                        {" "}
                        You have 3 pending readings to complete Hex: &#129299;
                    </p>
                    <img
                        src={arrowRight}
                        alt="logogroup"
                        className={styles.arrowRight}
                    />
                </div>
            </div>
        </section>
    );
};
export default Activity;
