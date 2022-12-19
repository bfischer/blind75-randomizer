import React from 'react';
import styles from "./Navbar.module.css";

const Navbar = (props) => {
    return <>
        <header className={styles['navbar']}>
            <div className={styles['navbar-title']}>Blind75</div>
        </header>
    </>
}

export default Navbar;