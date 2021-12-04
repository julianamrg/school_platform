import React from "react";
import "../Progress/Progress.module.css";
import { CircularProgressbar } from "react-circular-progressbar";
/*import "react-circular-progressbar / dist / styles.css"; */

const ProgressCircularChart = () => {
    return (
        <div style={{ width: 200, height: 200 }}>
            <CircularProgressbar
                value={40}
                text={"40%"}
                styles={{
                    // Customize the root svg element
                    root: {},
                    // Customize the path, i.e. the "completed progress"
                    path: {
                        // Path color
                        stroke: `#FED200`,
                        // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                        strokeLinecap: "butt",
                        // Customize transition animation
                        transition: "stroke-dashoffset 0.5s ease 0s",
                        // Rotate the path
                        transform: "rotate(0.25 turn)",
                        transformOrigin: "center center",
                    },
                    // Customize the circle behind the path, i.e. the "total progress"
                    trail: {
                        // Trail color
                        stroke: "#FF794F",
                        // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                        strokeLinecap: "butt",
                        // Rotate the trail
                        transform: "rotate(0.25 turn)",
                        transformOrigin: "center center",
                    },
                    // Customize the text
                    text: {
                        // Text color
                        fill: "#ffff",
                        // Text size
                        fontSize: "16px",
                    },
                    // Customize background - only used when the `background` prop is true
                    background: {
                        fill: "#3e98c7",
                    },
                }}
            />
        </div>
    );
};

export default ProgressCircularChart;
