import React from 'react';
import PropTypes from 'prop-types';
import styles from './NoteAdd.module.css';
import addLogo from "./../../../assets/img/icons/add.svg"

const NoteAdd = (props) => {
    const activateModalHandler = () => props.editInProgress ? alert('Сохраните редактируемую заметку') : props.showAddNoteModal();
    return (
        <div className={styles.Note}>
            <div className={styles.header}>Добавить заметку</div>
            <div className={styles.addNewContent}>
                <div className={styles.addNewDiv} onClick={activateModalHandler}></div>
            </div>
        </div>
    );
}

NoteAdd.propTypes = {
    description: PropTypes.string

};

export default NoteAdd;