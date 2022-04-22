import styles from "../Note.module.css";
import fontStyles from "../../EditNoteBar/EditNoteBar.module.css";
import PropTypes from "prop-types";
import React from "react";

function NoteHeader(props) {
    return <div style={{fontSize: props.note.titleFont.fontSize}}
                className={`${styles.header} ${props.titleStyles.join(" ")} ${fontStyles[props.note.titleFont.color]}`}>
        {props.note.edit ?
            <textarea type="text"
                      className={`${styles.headerEditing}  ${props.titleStyles.join(" ")} ${fontStyles[props.note.titleFont.color]}`}
                      style={{fontSize: props.note.titleFont.fontSize}}
                      value={props.note.title}
                      onChange={props.onChange}/> :
            <p className={""}>{props.note.title}</p>
        }
    </div>;
}

NoteHeader.propTypes = {
    note: PropTypes.object,
    titleStyles: PropTypes.arrayOf(PropTypes.any),
    onChange: PropTypes.func
};

export default NoteHeader