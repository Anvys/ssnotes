import styles from "./NoteHeader.module.css";
import fontStyles from "../../EditNoteBar/EditNoteBar.module.css";
import PropTypes from "prop-types";
import React from "react";

function NoteHeader(props) {
    let inStyle = {fontSize: props.note.titleFont.fontSize, fontFamily: `"${props.note.titleFont.fontFamily}", serif`};
    return <div style={inStyle}
                className={`${props.titleStyles.join(" ")} ${fontStyles[props.note.titleFont.color]}`}>
        {props.note.edit ?
            <textarea type="text"
                      className={`${styles.headerEditing}  ${props.titleStyles.join(" ")} ${fontStyles[props.note.titleFont.color]}`}
                      style={inStyle}
                      value={props.note.title}
                      onChange={props.onChange}/> :
            <p className={styles.header}>{props.note.title}</p>
        }
    </div>;
}

NoteHeader.propTypes = {
    note: PropTypes.object,
    titleStyles: PropTypes.arrayOf(PropTypes.any),
    onChange: PropTypes.func
};

export default NoteHeader