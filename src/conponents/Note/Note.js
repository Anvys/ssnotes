import React from 'react';
import PropTypes from 'prop-types';
import styles from './Note.module.css';

const Note = (props) => {
    const onDescChangeHandler = event => props.changeDesk(event.target.value, props.id);
    const onDeleteNoteHandler = () => props.deleteDesk(props.id);
    return (
        <div className={styles.Note}>
            <div className={styles.header}>{props.title}</div>
            <div className={styles.content}>
                <input type={"text"} className={styles.description} value={props.description} onChange={onDescChangeHandler}/>
            </div>
            <div className={styles.edit}>
                <div className={styles.dateStart}>{props.dateStart.toLocaleString()}</div>
                <button className={styles.editButton} >Edit</button>
                <button className={styles.delButton} onClick={onDeleteNoteHandler}>Delete</button>
            </div>

        </div>
    );
}

Note.propTypes = {
    description: PropTypes.string

};

export default Note;