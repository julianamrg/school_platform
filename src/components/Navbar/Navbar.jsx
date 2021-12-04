import React from "react";
import SideNav, { NavItem, NavIcon, NavText } from "@trendmicro/react-sidenav";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import styles from "./Navbar.module.css";
import "./react-sidenav.css";
import iconcopy from "../../Assets/IMG/menu/copyicon.png";
import iconhome from "../../Assets/IMG/menu/Home - Iconly---Bold.png";
import icondocument from "../../Assets/IMG/menu/document-icon.png";
import iconchart from "../../Assets/IMG/menu/chart-icon.png";
import iconmessage from "../../Assets/IMG/menu/message.png";

const Navbar = () => {
    return (
        <SideNav
            onSelect={(selected) => {
                // Add your code here
            }}
        >
            <SideNav.Toggle />
            <SideNav.Nav defaultSelected="home">
                <NavItem eventKey="home">
                    <NavIcon>
                        <i
                            className="fa fa-fw fa-home"
                            style={{ fontSize: "1.75em" }}
                        />
                        <img
                            src={iconhome}
                            alt="logogroup"
                            className={styles.copypage}
                        />
                    </NavIcon>
                    <NavText>Home</NavText>
                </NavItem>
                <NavItem eventKey="charts">
                    <NavIcon>
                        <i
                            className="fa fa-fw fa-line-chart"
                            style={{ fontSize: "1.75em" }}
                        />
                        <img
                            src={iconcopy}
                            alt="logogroup"
                            className={styles.copypage}
                        />
                    </NavIcon>
                    <NavText>Copy</NavText>
                </NavItem>

                <NavItem eventKey="icondocument">
                    <NavIcon>
                        <i
                            className="fa fa-fw fa-line-chart"
                            style={{ fontSize: "1.75em" }}
                        />
                        <img
                            src={icondocument}
                            alt="logogroup"
                            className={styles.icondocument}
                        />
                    </NavIcon>
                    <NavText>Documents</NavText>
                </NavItem>

                <NavItem eventKey="iconchart">
                    <NavIcon>
                        <i
                            className="fa fa-fw fa-line-chart"
                            style={{ fontSize: "1.75em" }}
                        />
                        <img
                            src={iconchart}
                            alt="logogroup"
                            className={styles.iconchart}
                        />
                    </NavIcon>
                    <NavText>Charts</NavText>
                </NavItem>

                <NavItem eventKey="message">
                    <NavIcon>
                        <i
                            className="fa fa-fw fa-line-chart"
                            style={{ fontSize: "1.75em" }}
                        />
                        <img
                            src={iconmessage}
                            alt="logogroup"
                            className={styles.iconmessage}
                        />
                    </NavIcon>
                    <NavText>Messages</NavText>
                </NavItem>
            </SideNav.Nav>
        </SideNav>
    );
};

export default Navbar;
