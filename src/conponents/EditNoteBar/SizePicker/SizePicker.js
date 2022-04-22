import React from 'react';
import PropTypes from 'prop-types';
import styles from './SizePicker.module.css';


const SizePicker = (props) => {

    const onPickSizeSmall = () => props.updateFont({
        ...props.curFont,
        fontSize: 14
    }, props.note.id, props.note.editTarget);
    const onPickSizeNormal = () => props.updateFont({
        ...props.curFont,
        fontSize: 20
    }, props.note.id, props.note.editTarget);
    const onPickSizeBig = () => props.updateFont({
        ...props.curFont,
        fontSize: 24
    }, props.note.id, props.note.editTarget);
    const onPickSizeBig28 = () => props.updateFont({
        ...props.curFont,
        fontSize: 28
    }, props.note.id, props.note.editTarget);
    const onPickSizeBig32 = () => props.updateFont({
        ...props.curFont,
        fontSize: 32
    }, props.note.id, props.note.editTarget);
    const onPickSizeBig36 = () => props.updateFont({
        ...props.curFont,
        fontSize: 36
    }, props.note.id, props.note.editTarget);
    return (
        <div className={styles.block}>
            <div className={styles.curColor}>{props.curFont.fontSize}</div>

            <div className={styles.colorList}>
                <div className={`${styles.itemColor} ${styles.small}`} onClick={onPickSizeSmall}>14</div>
                <div className={`${styles.itemColor} ${styles.normal}`} onClick={onPickSizeNormal}>20</div>
                <div className={`${styles.itemColor} ${styles.big}`} onClick={onPickSizeBig}>24</div>
                <div className={`${styles.itemColor} ${styles.big}`} onClick={onPickSizeBig28}>28</div>
                <div className={`${styles.itemColor} ${styles.big}`} onClick={onPickSizeBig32}>32</div>
                <div className={`${styles.itemColor} ${styles.big}`} onClick={onPickSizeBig36}>36</div>
            </div>
        </div>
    );
}

SizePicker.propTypes = {};

export default SizePicker;