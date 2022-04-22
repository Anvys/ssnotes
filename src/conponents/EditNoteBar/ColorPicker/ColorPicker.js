import React from 'react';
import PropTypes from 'prop-types';
import styles from './ColorPicker.module.css';
import colorIcon from "../../../assets/img/icons/color.svg";

const ColorPicker = (props) => {

    const onPickColorRed = () => props.updateFont({
        ...props.curFont,
        color: 'red'
    }, props.note.id, props.note.editTarget);
    const onPickColorBlack = () => props.updateFont({
        ...props.curFont,
        color: 'black'
    }, props.note.id, props.note.editTarget);
    const onPickColorGreen = () => props.updateFont({
        ...props.curFont,
        color: 'green'
    }, props.note.id, props.note.editTarget);
    return (
        <div className={styles.block}>
            {/*<div className={styles.curColor}></div>*/}
            <img className={styles.curColor} src={colorIcon}/>
            <div className={styles.colorList}>
                <div className={`${styles.itemColor} ${styles.red}`} onClick={onPickColorRed}></div>
                <div className={`${styles.itemColor} ${styles.green}`} onClick={onPickColorGreen}></div>
                <div className={`${styles.itemColor} ${styles.black}`} onClick={onPickColorBlack}></div>
            </div>
        </div>
    );
}

ColorPicker.propTypes = {};

export default ColorPicker;