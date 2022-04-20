import React from 'react';
import PropTypes from 'prop-types';
import styles from './NoteList.module.css';
import Note from "../Note/Note";
import NoteAdd from "../Note/AddNote/NoteAdd";

const NoteList = (props) => {
    return (
        <div className={styles.noteList}>
            {
                props.notesArr.map((note, id) => <Note
                    description={note.description}
                    title={note.title}
                    dateStart={note.dateStart}
                    id={id}
                    key={id}
                    changeDesk={props.changeDesk}
                    deleteDesk={props.deleteDesk}
                    />
                )
            }
            <NoteAdd showAddNoteModal={props.showAddNoteModal}/>
        </div>
    );
}

NoteList.propTypes = {
    notesArr: PropTypes.arrayOf(PropTypes.object)
};

export default NoteList;