import React from 'react';
import styles from './Navbar.module.css';
import { Link as RouterLink } from 'react-router-dom'

const Navbar = (props) => {
    return <>
        <header className={styles['navbar']}>
            <RouterLink to='/'>
                <div className={styles['navbar-title']}>Blind75</div>
            </RouterLink>
        </header>
    </>
}

export default Navbar;