import React from 'react';
import PropTypes from 'prop-types';
import styles from './EditNoteBar.module.css';
import note from "../Note/Note";

const EditNoteBar = (props) => {
    const setImgHandler = (e) => {
        console.log(URL.createObjectURL(e.target.files[0]))
        // props.setImg(e.target.files[0], props.note.id);
        props.setImg(URL.createObjectURL(e.target.files[0]), props.note.id);
    }
    const onDescFontBoldUpdate = () => props.updateDescFont({
        ...props.note.descFont,
        bold: !props.note.descFont.bold
    }, props.note.id);
    const onDescFontItalicUpdate = () => props.updateDescFont({
        ...props.note.descFont,
        italic: !props.note.descFont.italic
    }, props.note.id);
    const onDescFontUnderlineUpdate = () => props.updateDescFont({
        ...props.note.descFont,
        underline: !props.note.descFont.underline,
        lineThrough: !props.note.descFont.underline ? false : props.note.descFont.lineThrough
    }, props.note.id);
    const onDescFontLineTUpdate = () => props.updateDescFont({
        ...props.note.descFont,
        lineThrough: !props.note.descFont.lineThrough,
        underline: !props.note.descFont.lineThrough ? false : props.note.descFont.underline
    }, props.note.id);
    return (
        <div className={styles.bar}>
            <div>
                <label className={styles.imgLabel} htmlFor={`${styles.imgLabel}-${props.note.id}`}>IMG</label>
                <input id={`${styles.imgLabel}-${props.note.id}`}
                       className={styles.load_img_input}
                       type="file"
                       name="myImage"
                       onChange={setImgHandler}
                />
            </div>
            <div className={styles.radioDiv}>
                <div className={styles.radio}>
                    <label className={styles.radioLabel} htmlFor={`radioHead-${props.note.id}`}>H
                        <input className={styles.radioradio} id={`radioHead-${props.note.id}`}
                               name={`radio-${props.note.id}`} type={'radio'}/></label>

                </div>
                <div className={styles.radio}>
                    <label className={styles.radioLabel} htmlFor={`radioDesc-${props.note.id}`}>D
                        <input className={styles.radioradio}  id={`radioDesc-${props.note.id}`}
                               name={`radio-${props.note.id}`} type={'radio'}/></label>

                </div>

            </div>
            <div className={`${styles.bold} ${props.note.descFont.bold ? styles.styleBtnAct : styles.styleBtn}`}
                 onClick={onDescFontBoldUpdate}>B
            </div>
            <div className={`${styles.italic} ${props.note.descFont.italic ? styles.styleBtnAct : styles.styleBtn}`}
                 onClick={onDescFontItalicUpdate}>I
            </div>
            <div
                className={`${styles.underline} ${props.note.descFont.underline ? styles.styleBtnAct : styles.styleBtn}`}
                onClick={onDescFontUnderlineUpdate}>U
            </div>
            <div
                className={`${styles.lineThrough} ${props.note.descFont.lineThrough ? styles.styleBtnAct : styles.styleBtn}`}
                onClick={onDescFontLineTUpdate}>A
            </div>

        </div>
    );
}

EditNoteBar.propTypes = {
    note: PropTypes.object
};

export default EditNoteBar;