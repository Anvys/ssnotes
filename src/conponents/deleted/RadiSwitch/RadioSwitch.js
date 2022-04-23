import styles from "./RadioSwitch.module.css";
import PropTypes from "prop-types";
import React from "react";

function RadioSwitch(props) {
    return <div className={styles.radioDiv}>
        <div className={styles.radio}>
            <label className={styles.radioLabel} htmlFor={`radioHead-${props.note.id}`}>Заголовок
                <input className={styles.radioradio} id={`radioHead-${props.note.id}`}
                       name={`radio-${props.note.id}`} type={"radio"}
                       checked={props.note.editTarget === "header"} value={"header"}
                       onChange={props.onChange}/></label>

        </div>
        <div className={styles.radio}>
            <label className={styles.radioLabel} htmlFor={`radioDesc-${props.note.id}`}>Описание
                <input className={styles.radioradio} id={`radioDesc-${props.note.id}`}
                       name={`radio-${props.note.id}`} type={"radio"}
                       checked={props.note.editTarget === "description"} value={"description"}
                       onChange={props.onChange}/></label>

        </div>

    </div>;
}

RadioSwitch.propTypes = {
    note: PropTypes.any,
    onChange: PropTypes.func
};

export default RadioSwitch;