import styles from "./NoteBody.module.css";
import fontStyles from "../../EditNoteBar/EditNoteBar.module.css";
import PropTypes from "prop-types";
import React from "react";

function NoteBody(props) {
    let inStyle = {fontSize: props.note.descFont.fontSize, fontFamily: `"${props.note.descFont.fontFamily}", serif`};
    return <div style={inStyle}
                className={`${props.descStyles.join(" ")} ${styles.content} ${fontStyles[props.note.descFont.color]}`}>
        {props.note.edit ?
            <textarea type="text"
                      className={`${styles.description} ${styles.descriptionEditing} ${props.descStyles.join(" ")} ${fontStyles[props.note.descFont.color]}`}
                      style={inStyle}
                      value={props.note.description}
                      onChange={props.onChange}/> :
            <div className={styles.description}>{props.note.description}</div>
        }
    </div>;
}

NoteBody.propTypes = {
    note: PropTypes.object,
    descStyles: PropTypes.arrayOf(PropTypes.any),
    onChange: PropTypes.func
};

export default NoteBody;