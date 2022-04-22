import React from 'react';
import PropTypes from 'prop-types';
import styles from './SideBar.module.css';
import NoteAdd from "../Note/AddNote/NoteAdd";


const SideBar = (props) => {
    return (
        <div className={styles.block}>
            <div className={styles.sideBar}>
                <NoteAdd addNote={props.addNote}  editInProgress={props.editInProgress}/>
            </div>
        </div>

    );
}

SideBar.propTypes = {
    editInProgress: PropTypes.bool
};

export default SideBar;