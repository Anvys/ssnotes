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
    const parseFontStyles = (fontsData, fontStyles) => {
        let Styles = [];
        for (const [key, value] of Object.entries(fontsData)) {
            if (value === true) Styles.push(fontStyles[key]);
        }
        return Styles;
    }
    return (
        <div style={{background: props.note.img !== null ? `url(${props.note.img}) center / cover no-repeat` : null}}
             className={props.note.edit ? `${styles.Note} ${styles.NoteEditing}` : styles.Note}>
            {
                (props.note.edit || props.note.title !== "") &&
                <NoteHeader note={props.note} titleStyles={parseFontStyles(props.note.titleFont, fontStyles)}
                            onChange={onTitleChangeHandler}/>
            }

            {
                props.note.edit && <EditNoteBar setImg={props.setImg}
                                                deleteImg={props.deleteImg}
                                                note={props.note}
                                                editTarget={'header'}
                                                selectEditTarget={props.selectEditTarget}
                                                updateFont={props.updateFont}/>
            }
            <NoteBody note={props.note} descStyles={parseFontStyles(props.note.descFont, fontStyles)}
                      onChange={onDescChangeHandler}/>
            {
                props.note.edit && <EditNoteBar setImg={props.setImg}
                                                deleteImg={props.deleteImg}
                                                note={props.note}
                                                editTarget={'description'}
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
    note: PropTypes.object,
    notesArr: PropTypes.arrayOf(PropTypes.object),
    editInProgress: PropTypes.bool,
    changeDesk: PropTypes.func,
    changeTitle: PropTypes.func,
    deleteNote: PropTypes.func,
    setImg: PropTypes.func,
    deleteImg: PropTypes.func,
    showAddNoteModal: PropTypes.func,
    editNote: PropTypes.func,
    saveEditedNote: PropTypes.func,
    selectEditTarget: PropTypes.func,
    updateFont: PropTypes.func,
};

export default Note;