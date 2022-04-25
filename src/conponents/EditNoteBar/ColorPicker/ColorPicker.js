import React from 'react';
import PropTypes from 'prop-types';
import styles from './ColorPicker.module.css';
import colorIcon from "../../../assets/img/icons/formatColor.svg";


const ColorPicker = (props) => {
    const onPickColorRed = () => props.updateFont({
        ...props.curFont,
        color: 'red'
    }, props.note.id, props.editTarget);
    const onPickColorBlack = () => props.updateFont({
        ...props.curFont,
        color: 'black'
    }, props.note.id, props.editTarget);
    const onPickColorGreen = () => props.updateFont({
        ...props.curFont,
        color: 'green'
    }, props.note.id, props.editTarget);
    return (
        <div className={styles.block}>
            <img className={styles.curColor} src={colorIcon}/>
            <div className={styles.colorList}>
                <div className={`${styles.itemColor} ${styles.red}`} onClick={onPickColorRed}></div>
                <div className={`${styles.itemColor} ${styles.green}`} onClick={onPickColorGreen}></div>
                <div className={`${styles.itemColor} ${styles.black}`} onClick={onPickColorBlack}></div>
            </div>
        </div>
    );
}

ColorPicker.propTypes = {
    curFont: PropTypes.object,
    note: PropTypes.object,
    updateFont: PropTypes.func,
    editTarget: PropTypes.string,
};

export default ColorPicker;