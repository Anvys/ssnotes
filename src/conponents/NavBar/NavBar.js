import React from 'react';
import PropTypes from 'prop-types';
import styles from './NavBar.module.css';

const NavBar = (props) => {
    return (
        <div className={styles.navBar}>
           <div>
               <img className={styles.image} src={'https://cdn.worldvectorlogo.com/logos/react-1.svg'}/>
           </div>
            <div className={styles.github}>
                <a href="https://github.com/Anvys/ssnotes/tree/compNote">My GitHub</a>
            </div>
        </div>
    );
}

NavBar.propTypes = {};

export default NavBar;