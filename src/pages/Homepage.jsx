import React from "react";
import Activity from "../components/Activity/Activity";
import Dashboard from "../components/Dashboard/Dashboard";
import Events from "../components/EventsSection/Events";
import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";
import Progress from "../components/Progress/Progress";

export const Homepage = () => {
    return (
        <div>
            <Header />

            <Dashboard />
            <Navbar />
            <Events />
            <Activity />

            <Progress />
        </div>
    );
};
