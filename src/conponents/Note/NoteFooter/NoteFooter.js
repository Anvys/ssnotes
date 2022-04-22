import styles from "../Note.module.css";
import PropTypes from "prop-types";
import React from "react";


function NoteFooter(props) {
    return <div className={styles.footer}>
        <div className={styles.dateStart}>{props.note.dateStart}</div>
        {
            props.note.edit ? <button className={styles.editButton} onClick={props.onSaveClickHandler}>Save</button> :
                props.editInProgress ? null :
                    <button className={styles.editButton} onClick={props.onEditClickHandler}> Edit </button>
        }
        <button className={styles.delButton} onClick={props.onDeleteNoteHandler}>Delete</button>
    </div>;
}

NoteFooter.propTypes = {
    note: PropTypes.object,
    onSaveClickHandler: PropTypes.func,
    editInProgress: PropTypes.bool,
    onEditClickHandler: PropTypes.func,
    onDeleteNoteHandler: PropTypes.func
};

export default NoteFooter;