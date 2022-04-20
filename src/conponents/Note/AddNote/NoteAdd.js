import React from 'react';
import PropTypes from 'prop-types';
import styles from './NoteAdd.module.css';
import addLogo from "./../../../assets/img/icons/add.svg"

const Note = (props) => {
    const activateModalHandler = () => props.showAddNoteModal();
    return (
        <div className={styles.Note}>
            <div className={styles.header}>Добавить заметку</div>
            <div className={styles.addNewContent}>
                <div className={styles.addNewDiv} onClick={activateModalHandler}></div>
            </div>
        </div>
    );
}

Note.propTypes = {
    description: PropTypes.string

};

export default Note;