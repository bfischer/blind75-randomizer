import React from 'react';
import styles from './Navbar.module.css';
import { Link as RouterLink } from 'react-router-dom'

const Navbar = (props) => {
    return <>
        <header className={styles['navbar']}>
            <div className={styles['navbar-title']}>
                <RouterLink to='/'>
                    Blind75
                </RouterLink>
            </div>
            <div className={styles['navbar-item']}>
                <RouterLink to='/about'>
                    About
                </RouterLink>
            </div>
        </header>
    </>
}

export default Navbar;