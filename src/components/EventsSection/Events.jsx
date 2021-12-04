import React from "react";
import styles from "../EventsSection/Events.module.css";
import orangeEvent from "../../Assets/IMG/img/3000434.png";
import Eventstoday from "./Eventstoday";

const Events = () => {
    return (
        <section className={styles.eventSection}>
            <div className={styles.eventContainer}>
                <h2>Events </h2>
                <div className={styles.eventSlider}>
                    {/* <Link to="/home"> */}
                    <img
                        src={orangeEvent}
                        alt="logogroup"
                        className={styles.imageEvent}
                    />
                </div>
                <div className={styles.eventToday}>
                    <h3>EVENTS TODAY </h3>
                    <div className={styles.eventCards}>
                        {/* {news.map((post) => ( */}
                        <Eventstoday />
                        {/*} key={post.id}
                    image_event={post.image}
                    
                
                    event_time={post.event_time}
                    event_name={post.event_name}
                   
                /> 
           ))} */}
                    </div>
                    <div className={styles.eventCards}>
                        <Eventstoday />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Events;
