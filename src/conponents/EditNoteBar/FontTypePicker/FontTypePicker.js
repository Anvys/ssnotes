import React from 'react';
import PropTypes from 'prop-types';
import styles from './FontTypePicker.module.css';
import fontIcon from "../../../assets/img/icons/fontf.svg"


const FontTypePicker = (props) => {
    const onPickArial = () => props.updateFont({
        ...props.curFont,
        fontFamily: 'Arial'
    }, props.note.id, props.editTarget);
    const onPickTimes = () => props.updateFont({
        ...props.curFont,
        fontFamily: "Times New Roman"
    }, props.note.id, props.editTarget);
    const onPickCalibri = () => props.updateFont({
        ...props.curFont,
        fontFamily: 'Caveat'
    }, props.note.id, props.editTarget);
    const onPickJetBrains = () => props.updateFont({
        ...props.curFont,
        fontFamily: 'Rubik Moonrocks'
    }, props.note.id, props.editTarget);
    const onPickJavanese = () => props.updateFont({
        ...props.curFont,
        fontFamily: 'Pacifico'
    }, props.note.id, props.editTarget);
    return (
        <div className={styles.block}>
            <img className={styles.curFont} src={fontIcon}/>
            <div className={styles.fontList}>
                <div className={`${styles.item} ${styles.Arial}`} onClick={onPickArial}>Arial</div>
                <div className={`${styles.item} ${styles.Times}`} onClick={onPickTimes}>Times</div>
                <div className={`${styles.item} ${styles.Caveat}`} onClick={onPickCalibri}>Caveat</div>
                <div className={`${styles.item} ${styles.Rubik}`} onClick={onPickJetBrains}>Rubik</div>
                <div className={`${styles.item} ${styles.Pacifico}`} onClick={onPickJavanese}>Pacifico</div>
            </div>
        </div>
    );
}

FontTypePicker.propTypes = {
    curFont: PropTypes.object,
    note: PropTypes.object,
    updateFont: PropTypes.func,
    editTarget: PropTypes.string,
};

export default FontTypePicker;