import React from 'react';
import PropTypes from 'prop-types';
import styles from './NoteList.module.css';
import Note from "../Note/Note";
import NoteAdd from "../Note/AddNote/NoteAdd";

const NoteList = (props) => {
    return (
        <div className={styles.block}>
            <div className={styles.noteList}>
                {
                    props.notesArr.map((note, id) => <Note
                            note={note}
                            key={id}
                            editInProgress={props.editInProgress}
                            changeDesk={props.changeDesk}
                            changeTitle={props.changeTitle}
                            deleteNote={props.deleteNote}
                            editNote = {props.editNote}
                            saveEditedNote = {props.saveEditedNote}
                            setImg = {props.setImg}
                            deleteImg = {props.deleteImg}
                            selectEditTarget = {props.selectEditTarget}
                            updateFont={props.updateFont}
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
    notesArr: PropTypes.arrayOf(PropTypes.object)
};

export default NoteList;