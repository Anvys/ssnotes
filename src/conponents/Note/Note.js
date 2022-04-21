import React from 'react';
import PropTypes from 'prop-types';
import styles from './Note.module.css';

const Note = (props) => {
    const onDescChangeHandler = event => props.changeDesk(event.target.value, props.note.id);
    const onTitleChangeHandler = event => props.changeTitle(event.target.value, props.note.id);
    const onDeleteNoteHandler = () => props.deleteNote(props.note.id);
    const onSaveClickHandler = () => props.saveEditedNote(props.note.id);
    const onEditClickHandler = () => props.editNote(props.note.id);
    return (
        <div className={props.note.edit ? `${styles.Note} ${styles.NoteEditing}` : styles.Note}>
            {/*<div className={styles.header}>{props.note.title}</div>*/}

            <div className={styles.header}>
                <input type={"text"}
                       className={props.note.edit ? `${styles.header} ${styles.headerEditing}` : styles.header}
                       value={props.note.title}
                       onChange={onTitleChangeHandler}/>
            </div>
            <div className={styles.content}>
                <input type={"text"}
                       className={props.note.edit ? `${styles.description} ${styles.descriptionEditing}` : styles.description}
                       value={props.note.description}
                       onChange={onDescChangeHandler}/>
            </div>
            <div className={styles.footer}>
                <div className={styles.dateStart}>{props.note.dateStart}</div>
                {
                    props.note.edit ?
                        <button className={styles.editButton} onClick={onSaveClickHandler}>Save</button> :
                        props.editInProgress ? <button/> :
                            <button className={styles.editButton} onClick={onEditClickHandler}>
                                Edit
                            </button>

                }
                <button className={styles.delButton} onClick={onDeleteNoteHandler}>Delete</button>
            </div>

        </div>
    );
}

Note.propTypes = {
    description: PropTypes.string

};

export default Note;