import React from "react";
import { Switch, Route } from "react-router-dom";
import { Homepage } from "../pages/Homepage";
import { Document } from "../pages/Document";
import { Copypage } from "../pages/Copypage";
import { Chart } from "../pages/Chart";
import { Message } from "../pages/Message";

export const Pageroutes = () => {
    return (
        <section>
            <Switch>
                <Route path="/" exact component={Homepage} />

                <Route path="/document">
                    <Document />
                </Route>
                <Route path="/copy">
                    <Copypage />
                </Route>
                <Route path="/chart">
                    <Chart />
                </Route>
                <Route path="/message">
                    <Message />
                </Route>
            </Switch>
        </section>
    );
};
