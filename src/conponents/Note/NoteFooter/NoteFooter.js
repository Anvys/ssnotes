import styles from "./NoteFooter.module.css";
import PropTypes from "prop-types";
import React from "react";
import editIcon from "../../../assets/img/icons/edit.svg";
import deleteIcon from "../../../assets/img/icons/trash.svg";
import saveIcon from "../../../assets/img/icons/check.svg";


function NoteFooter(props) {
    return <div className={styles.footer}>
        <div className={styles.dateStart}>{props.note.dateStart}</div>
        <div>
            {
                props.note.edit ?
                    // Показать кнопку "сохратить только когда редактируется
                    <img alt={'saveIcon'} src={saveIcon} className={styles.editButtonSave}
                         onClick={props.onSaveClickHandler}/> :
                    // Не показывать кнопки у других если чтото редактируется
                    props.editInProgress ? null :
                        // Показывать кнопки [ ] если ничего не редактируется
                        [
                            <img alt={'editIcon'} src={editIcon} className={styles.editButton}
                              onClick={props.onEditClickHandler} key={'1'}/>,
                            <img alt={'deleteIcon'} src={deleteIcon} className={styles.delButton}
                                 onClick={props.onDeleteNoteHandler} key={'2'}/>
                        ]
            }
        </div>
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