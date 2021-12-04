import React from "react";
import styles from "../Header/Header.module.css";
/*import { BiSearchAlt2 } from "react-icons/bi"; */

function Search() {
    return (
        <div>
            <input
                className={styles.Search}
                placeholder="Search and Find"
                /* value={searchValue}
            onChange={onSearchValueChange} */
            />
        </div>
    );
}

export { Search };
