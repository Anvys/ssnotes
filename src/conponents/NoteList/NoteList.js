import React from 'react';
import PropTypes from 'prop-types';
import styles from './NoteList.module.css';
import Note from "../Note/Note";


const NoteList = (props) => {
    // props.notesArr.map(item=>item.imgInText ? item : props.deleteImgInText(item.id))
    return (
        <div className={styles.block}>
            <div className={styles.noteList}>
                {
                    props.notesArr.map((note, id) => <Note {...props} note={note} key={id}/>)
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
    setImgInText: PropTypes.func,
    deleteImgInText: PropTypes.func,
    showAddNoteModal: PropTypes.func,
    editNote: PropTypes.func,
    saveEditedNote: PropTypes.func,
    selectEditTarget: PropTypes.func,
    updateFont: PropTypes.func,
};

export default NoteList;