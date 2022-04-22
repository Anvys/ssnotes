import styles from "../Note.module.css";
import fontStyles from "../../EditNoteBar/EditNoteBar.module.css";
import PropTypes from "prop-types";
import React from "react";

function NoteBody(props) {
    return <div style={{fontSize: props.note.descFont.fontSize}}
                className={`${props.descStyles.join(" ")} ${styles.content} ${fontStyles[props.note.descFont.color]}`}>
        {props.note.edit ?
            <textarea type="text"
                      className={`${styles.description} ${styles.descriptionEditing} ${props.descStyles.join(" ")} ${fontStyles[props.note.descFont.color]}`}
                      style={{fontSize: props.note.descFont.fontSize}}
                      value={props.note.description}
                      onChange={props.onChange}/> :
            <span className={styles.description}>{props.note.description}</span>
        }
    </div>;
}

NoteBody.propTypes = {
    note: PropTypes.object,
    descStyles: PropTypes.arrayOf(PropTypes.any),
    onChange: PropTypes.func
};

export default NoteBody;