import React from 'react';
import PropTypes from 'prop-types';
import styles from './EditNoteBar.module.css';
import ColorPicker from "./ColorPicker/ColorPicker";
import SizePicker from "./SizePicker/SizePicker";
import StyleButton from "./StyleButton/StyleButton";
import deletePicIcon from "../../assets/img/icons/fileRemove.svg";
import FontTypePicker from "./FontTypePicker/FontTypePicker";


const EditNoteBar = (props) => {

    let curFont = props.editTarget === 'header' ? props.note.titleFont : props.note.descFont;
    const setImgHandler = e => {
        const reader = new FileReader();
        reader.addEventListener('load', () => props.setImg(reader.result, props.note.id));
        reader.readAsDataURL(e.target.files[0]);
    }
    const deleteImageHandler = () => props.deleteImg(props.note.id);
    const onDescFontBoldUpdate = () => props.updateFont({
        ...curFont,
        bold: !curFont.bold
    }, props.note.id, props.editTarget);
    const onDescFontItalicUpdate = () => props.updateFont({
        ...curFont,
        italic: !curFont.italic
    }, props.note.id, props.editTarget);
    const onDescFontUnderlineUpdate = () => props.updateFont({
        ...curFont,
        underline: !curFont.underline,
        lineThrough: !curFont.underline ? false : curFont.lineThrough
    }, props.note.id, props.editTarget);
    const onDescFontLineTUpdate = () => props.updateFont({
        ...curFont,
        lineThrough: !curFont.lineThrough,
        underline: !curFont.lineThrough ? false : curFont.underline
    }, props.note.id, props.editTarget);

    return (
        <div className={styles.bar}>
            {
                props.editTarget === 'description' ?
                props.note.img === null ?
                    <div>
                        <label
                            className={styles.imgLabel} htmlFor={`${styles.imgLabel}-${props.note.id}`}/>
                        <input id={`${styles.imgLabel}-${props.note.id}`}
                               className={styles.load_img_input}
                               type="file"
                               name="myImage"
                               onChange={setImgHandler}
                        />

                    </div> :
                    <img src={deletePicIcon} className={styles.imgLabelLoaded} onClick={deleteImageHandler} alt={'Delete pic'}/> : <div/>
            }
            <div className={styles.fontChangeButtons}>
                <FontTypePicker curFont={curFont} note={props.note} updateFont={props.updateFont} editTarget={props.editTarget}/>
                <StyleButton cn={`${styles.bold} ${curFont.bold ? styles.styleBtnAct : styles.styleBtn}`}
                             onClick={onDescFontBoldUpdate} text={'B'}/>
                <StyleButton cn={`${styles.italic} ${curFont.italic ? styles.styleBtnAct : styles.styleBtn}`}
                             onClick={onDescFontItalicUpdate} text={'I'}/>
                <StyleButton cn={`${styles.underline} ${curFont.underline ? styles.styleBtnAct : styles.styleBtn}`}
                             onClick={onDescFontUnderlineUpdate} text={'U'}/>
                <StyleButton cn={`${styles.lineThrough} ${curFont.lineThrough ? styles.styleBtnAct : styles.styleBtn}`}
                             onClick={onDescFontLineTUpdate} text={'U'}/>
                <ColorPicker curFont={curFont} note={props.note} updateFont={props.updateFont} editTarget={props.editTarget}/>
                <SizePicker curFont={curFont} note={props.note} updateFont={props.updateFont} editTarget={props.editTarget}/>

            </div>
        </div>
    );
}

EditNoteBar.propTypes = {
    note: PropTypes.object,
    editTarget: PropTypes.string
};

export default EditNoteBar;