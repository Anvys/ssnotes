import React from 'react';
import PropTypes from 'prop-types';
import styles from './NoteList.module.css';
import Note from "../Note/Note";


const NoteList = (props) => {
    return (
        <div className={styles.block}>
            <div className={styles.noteList}>
                {
                    props.notesArr.map((note, id) => <Note
                            {...props}
                            note={note}
                            key={id}
                            // editInProgress={props.editInProgress}
                            // changeDesk={props.changeDesk}
                            // changeTitle={props.changeTitle}
                            // deleteNote={props.deleteNote}
                            // editNote = {props.editNote}
                            // saveEditedNote = {props.saveEditedNote}
                            // setImg = {props.setImg}
                            // deleteImg = {props.deleteImg}
                            // selectEditTarget = {props.selectEditTarget}
                            // updateFont={props.updateFont}
                            // updateTitleFont={props.updateTitleFont}
                            // addNote = {props.addNote}
                        />
                    )
                }

            </div>
        </div>

    );
}

NoteList.propTypes = {
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

export default NoteList;