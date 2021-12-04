import React from "react";
import styles from "../Header/Header.module.css";
/* import iconoEducamas from "../../assets/images/iconoEducamas.png"; */
import logogroup from "../../Assets/IMG/img/Group.png";
import photoProfile from "../../Assets/IMG/Profile/Picture@3x.png";
import chaticonly from "../../Assets/IMG/img/Chat - Iconly---Bold@2x.png";
import { Search } from "./Search";
import DropdownLogOut from "./DropdownLogOut";
import Notification from "./Notification";
/*import { BiGroup, BiMessageRoundedAdd } from "react-icons/bi";
import { BiHomeAlt } from "react-icons/bi"; */
/* import { MdOutlineForum } from "react-icons/md" */
/*import { Link } from "react-router-dom"; */
/*import DropdownLogOut from "./DropdownLogOut"; */

const Header = () => {
    return (
        <header className={styles.globalNav}>
            <div className={styles.globalNavContent}>
                <nav className={styles.navBar}>
                    {/* <Link to="/home"> */}
                    <img
                        src={logogroup}
                        alt="logogroup"
                        className={styles.iconoEducamas}
                    />
                    {/*  </Link> */}

                    {/*   <Link to="/home"> */}
                    <div className={styles.containerPhoto}>
                        {/* <BiHomeAlt size="30" /> */}
                        <Search />
                    </div>
                    <ul className={styles.navList}>
                        <li className={styles.navListItem}>
                            {/* Add Search component  <BiSearchAlt2 size="24" /> */}
                            <button className={styles.btn__question}>
                                +ADD {/* Filtro <BiFilterAlt /> */}
                            </button>
                        </li>
                        {/*   </Link> */}
                        {/*  <Link to="/community"> */}
                        <li className={styles.navListItem}>
                            {/*  <BiGroup size="30" /> */}

                            <Notification />
                        </li>
                        <li className={styles.navListItem}>
                            {/*  <BiGroup size="30" /> */}
                            <img
                                src={chaticonly}
                                alt="chaticonly"
                                className={styles.chaticonly}
                            />
                        </li>
                        {/*   </Link> */}
                        {/*  <Link to="/questions"> */}
                        <li className={styles.navListItem}>
                            {/* <BiMessageRoundedAdd size="30" /> */}
                            <p>Clarence Rusell</p>
                        </li>
                        {/*  </Link> */}
                    </ul>
                    <div className={styles.containerPhoto}>
                        <img
                            src={photoProfile}
                            alt="photoprofile"
                            className={styles.photoProfile}
                        />

                        {/* <DropdownLogOut /> */}
                    </div>
                    <div className={styles.containerPhoto}>
                        <DropdownLogOut />
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;
