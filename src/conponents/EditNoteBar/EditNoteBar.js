import React from 'react';
import PropTypes from 'prop-types';
import styles from './EditNoteBar.module.css';
import note from "../Note/Note";
import ColorPicker from "./ColorPicker/ColorPicker";
import SizePicker from "./SizePicker/SizePicker";

const EditNoteBar = (props) => {
    let curFont = props.note.editTarget === 'header' ? props.note.titleFont : props.note.descFont;
    const setImgHandler = (e) => {
        const reader = new FileReader();
        reader.addEventListener('load', () => {
            // console.log(reader.result);
            props.setImg(reader.result, props.note.id);
        })
        reader.readAsDataURL(e.target.files[0]);
        // console.log(URL.createObjectURL(e.target.files[0]))
        // props.setImg(e.target.files[0], props.note.id);
        // props.setImg(URL.createObjectURL(e.target.files[0]), props.note.id);

    }
    const deleteImageHandler = () => props.deleteImg(props.note.id);
    const onDescFontBoldUpdate = () => props.updateFont({
        ...curFont,
        bold: !curFont.bold
    }, props.note.id, props.note.editTarget);
    const onDescFontItalicUpdate = () => props.updateFont({
        ...curFont,
        italic: !curFont.italic
    }, props.note.id, props.note.editTarget);
    const onDescFontUnderlineUpdate = () => props.updateFont({
        ...curFont,
        underline: !curFont.underline,
        lineThrough: !curFont.underline ? false : curFont.lineThrough
    }, props.note.id, props.note.editTarget);
    const onDescFontLineTUpdate = () => props.updateFont({
        ...curFont,
        lineThrough: !curFont.lineThrough,
        underline: !curFont.lineThrough ? false : curFont.underline
    }, props.note.id, props.note.editTarget);
    const onChangeEditTarget = (e) => {
        props.selectEditTarget(e.target.value, props.note.id)
    }
    return (
        <div className={styles.bar}>
            {
                props.note.img === null ?
                    <div>
                        <label className={styles.imgLabel} htmlFor={`${styles.imgLabel}-${props.note.id}`}>IMG</label>
                        <input id={`${styles.imgLabel}-${props.note.id}`}
                               className={styles.load_img_input}
                               type="file"
                               name="myImage"
                               onChange={setImgHandler}
                        />
                    </div> :
                    <div className={styles.imgLabel} onClick={deleteImageHandler}>del</div>
            }

            <div className={styles.radioDiv}>
                <div className={styles.radio}>
                    <label className={styles.radioLabel} htmlFor={`radioHead-${props.note.id}`}>H
                        <input className={styles.radioradio} id={`radioHead-${props.note.id}`}
                               name={`radio-${props.note.id}`} type={'radio'}
                               checked={props.note.editTarget === 'header' ? true : false} value={'header'}
                               onChange={onChangeEditTarget}/></label>

                </div>
                <div className={styles.radio}>
                    <label className={styles.radioLabel} htmlFor={`radioDesc-${props.note.id}`}>D
                        <input className={styles.radioradio} id={`radioDesc-${props.note.id}`}
                               name={`radio-${props.note.id}`} type={'radio'}
                               checked={props.note.editTarget === 'description' ? true : false} value={'description'}
                               onChange={onChangeEditTarget}/></label>

                </div>

            </div>
            <div className={`${styles.bold} ${curFont.bold ? styles.styleBtnAct : styles.styleBtn}`}
                 onClick={onDescFontBoldUpdate}>B
            </div>
            <div className={`${styles.italic} ${curFont.italic ? styles.styleBtnAct : styles.styleBtn}`}
                 onClick={onDescFontItalicUpdate}>I
            </div>
            <div
                className={`${styles.underline} ${curFont.underline ? styles.styleBtnAct : styles.styleBtn}`}
                onClick={onDescFontUnderlineUpdate}>U
            </div>
            <div
                className={`${styles.lineThrough} ${curFont.lineThrough ? styles.styleBtnAct : styles.styleBtn}`}
                onClick={onDescFontLineTUpdate}>A
            </div>
            {/*<div*/}
            {/*    className={`${styles.colorBtn}`}*/}
            {/*    >C*/}
            {/*</div>*/}
            <ColorPicker curFont={curFont} note={props.note} updateFont={props.updateFont}/>
            <SizePicker curFont={curFont} note={props.note} updateFont={props.updateFont}/>
        </div>
    );
}

EditNoteBar.propTypes = {
    note: PropTypes.object
};

export default EditNoteBar;