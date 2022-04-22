import React from 'react';
import PropTypes from 'prop-types';
import styles from './NoteAdd.module.css';


const NoteAdd = (props) => {
    const onAddNote = () => props.editInProgress ? alert('Сохраните редактируемую заметку') :props.addNote();
    return (
        <div className={styles.block}>
            <div className={styles.addButton}>
                <i className={styles.image} onClick={onAddNote}></i>
            </div>
        </div>
    );
}

NoteAdd.propTypes = {
    editInProgress: PropTypes.bool,
    noteAdd: PropTypes.func
};

export default NoteAdd;