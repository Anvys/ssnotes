import React from 'react';
import PropTypes from 'prop-types';
import styles from './Note.module.css';
import fontStyles from '../EditNoteBar/EditNoteBar.module.css'
import EditNoteBar from "../EditNoteBar/EditNoteBar";
import NoteHeader from "./NoteHeader/NoteHeader";
import NoteBody from "./NoteBody/NoteBody";
import NoteFooter from "./NoteFooter/NoteFooter";

const Note = (props) => {
    const onDescChangeHandler = event => props.changeDesk(event.target.value, props.note.id);
    const onTitleChangeHandler = event => props.changeTitle(event.target.value, props.note.id);
    const onDeleteNoteHandler = () => props.deleteNote(props.note.id);
    const onSaveClickHandler = () => props.saveEditedNote(props.note.id);
    const onEditClickHandler = () => props.editNote(props.note.id);

    let descStyles = [];
    for (const [key, value] of Object.entries(props.note.descFont)) {
        if (value === true) descStyles.push(fontStyles[key]);
    }
    let titleStyles = [];
    for (const [key, value] of Object.entries(props.note.titleFont)) {
        if (value === true) titleStyles.push(fontStyles[key]);
    }
    return (
        <div style={{background: props.note.img !== null ? `url(${props.note.img}) center / cover no-repeat` : null}}
             className={props.note.edit ? `${styles.Note} ${styles.NoteEditing}` : styles.Note}>
            <NoteHeader note={props.note} titleStyles={titleStyles} onChange={onTitleChangeHandler}/>
            <NoteBody note={props.note} descStyles={descStyles} onChange={onDescChangeHandler}/>
            {
                props.note.edit && <EditNoteBar setImg={props.setImg}
                                                deleteImg={props.deleteImg}
                                                note={props.note}
                                                selectEditTarget={props.selectEditTarget}
                                                updateFont={props.updateFont}/>
            }
            <NoteFooter note={props.note}
                        onSaveClickHandler={onSaveClickHandler}
                        editInProgress={props.editInProgress}
                        onEditClickHandler={onEditClickHandler}
                        onDeleteNoteHandler={onDeleteNoteHandler}/>

        </div>
    );
}

Note.propTypes = {
    description: PropTypes.string,
    note: PropTypes.object
};

export default Note;