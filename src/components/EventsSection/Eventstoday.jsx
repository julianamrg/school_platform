import React from "react";
import blueEvent from "../../Assets/IMG/img/thumbnail.png";
import styles from "../../components/EventsSection/Events.module.css";

/*This is the father component of the events cards */
const Eventstoday = () => {
    return (
        <div className={styles.eventCard}>
            {/*---From here is the part when you can see the photo, the time of the event and the event  */}

            <div className={styles.imageEvent}>
                <img src={blueEvent} alt="event" />
            </div>
            <div className={styles.user}>
                <h3 className={styles.eventTime}>2:30 pm </h3>
                <h3 className={styles.eventName}>Webinar </h3>
            </div>
        </div>
    );
};

export default Eventstoday;
