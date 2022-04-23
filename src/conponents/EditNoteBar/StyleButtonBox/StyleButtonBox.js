import styles from "../EditNoteBar.module.css";
import StyleButton from "../StyleButton/StyleButton";
import ColorPicker from "../ColorPicker/ColorPicker";
import SizePicker from "../SizePicker/SizePicker";
import PropTypes from "prop-types";
import React from "react";

function StyleButtonBox(props) {
    return <div className={styles.fontChangeButtons}>
        <StyleButton cn={`${styles.bold} ${props.curFont.bold ? styles.styleBtnAct : styles.styleBtn}`}
                     onClick={props.onClick} text={"B"}/>
        <StyleButton cn={`${styles.italic} ${props.curFont.italic ? styles.styleBtnAct : styles.styleBtn}`}
                     onClick={props.onClick1} text={"I"}/>
        <StyleButton cn={`${styles.underline} ${props.curFont.underline ? styles.styleBtnAct : styles.styleBtn}`}
                     onClick={props.onClick2} text={"U"}/>
        <StyleButton cn={`${styles.lineThrough} ${props.curFont.lineThrough ? styles.styleBtnAct : styles.styleBtn}`}
                     onClick={props.onClick3} text={"U"}/>
        <ColorPicker curFont={props.curFont} note={props.note} updateFont={props.updateFont}/>
        <SizePicker curFont={props.curFont} note={props.note} updateFont={props.updateFont}/>
    </div>;
}

StyleButtonBox.propTypes = {
    curFont: PropTypes.any,
    onClick: PropTypes.func,
    onClick1: PropTypes.func,
    onClick2: PropTypes.func,
    onClick3: PropTypes.func,
    note: PropTypes.any,
    updateFont: PropTypes.any
};

export default StyleButtonBox;