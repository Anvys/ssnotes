import React from 'react';
import PropTypes from 'prop-types';
import styles from './EditNoteBar.module.css';
import ColorPicker from "./ColorPicker/ColorPicker";
import SizePicker from "./SizePicker/SizePicker";
import StyleButton from "./StyleButton/StyleButton";
import FontTypePicker from "./FontTypePicker/FontTypePicker";
import deletePicInTextIcon from "../../assets/img/icons/imageSolid.svg";
import deletePicIcon from "../../assets/img/icons/fileImage.svg";


const EditNoteBar = (props) => {

    let curFont = props.editTarget === 'header' ? props.note.titleFont : props.note.descFont;
    const setImgHandler = e => {
        if (e.target.files[0].size > 10485760) {
            alert("File is too big!");
            e.target.value = null;
        } else {
            const reader = new FileReader();
            reader.addEventListener('load', () => props.setImg(reader.result, props.note.id));
            reader.readAsDataURL(e.target.files[0]);
        }
    }
    const deleteImageHandler = () => props.deleteImg(props.note.id);
    const setImgInTextHandler = e => {
        if (e.target.files[0].size > 10485760) {
            alert("File is too big!");
            e.target.value = null;
        } else {
            const reader = new FileReader();
            reader.addEventListener('load', () => props.setImgInText(reader.result, props.note.id));
            reader.readAsDataURL(e.target.files[0]);
        }
    }
    const deleteImageInTextHandler = () => props.deleteImgInText(props.note.id);
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
            <div className={styles.imgLoaderDiv}>
                {// ???????????????? ???????????????? ??????????????????????
                    props.editTarget === 'description' ?
                        props.note.img === null ?
                            <div>
                                <label title={'???????????????? ?????????????? ??????????????????????(< 10mb)'}
                                       className={styles.imgLabel} htmlFor={`${styles.imgLabel}-${props.note.id}`}/>
                                <input id={`${styles.imgLabel}-${props.note.id}`}
                                       className={styles.load_img_input}
                                       type="file"
                                       name="myImage"
                                       accept={'image/jpeg, image/jpg,image/svg,'}
                                       onChange={setImgHandler}
                                />

                            </div> :
                            <img title={'?????????????? ?????????????? ??????????????????????'} src={deletePicIcon}
                                 className={styles.imgLabelLoaded} onClick={deleteImageHandler}
                                 alt={'Delete pic'}/> : <div/>
                }
                {// ???????????????? ?????????????????????? ?????? ????????????
                    props.editTarget === 'description'
                        ? props.note.imgInText === null
                            ? <div>
                                <label title={'???????????????? ?????????????????????? ?? ?????????? ???????????? (< 10mb)'}
                                       className={styles.imgLabelInText}
                                       htmlFor={`${styles.imgLabel}-InText-${props.note.id}`}/>
                                <input id={`${styles.imgLabel}-InText-${props.note.id}`}
                                       className={styles.load_img_input}
                                       type="file"
                                       name="myImageInText"
                                       accept={'image/jpeg, image/jpg,image/svg,'}
                                       onChange={setImgInTextHandler}
                                />
                            </div>
                            : <img title={'?????????????? ?????????????????????? ???? ????????????'} src={deletePicInTextIcon}
                                   className={styles.imgLabelLoaded}
                                   onClick={deleteImageInTextHandler} alt={'Delete pic'}/>
                        : <div/>
                }
            </div>
            <div className={styles.fontChangeButtons}>
                <FontTypePicker curFont={curFont} note={props.note} updateFont={props.updateFont}
                                editTarget={props.editTarget}/>
                <StyleButton titleHint={'????????????'}
                             cn={`${styles.bold} ${curFont.bold ? styles.styleBtnAct : styles.styleBtn}`}
                             onClick={onDescFontBoldUpdate} text={'B'}/>
                <StyleButton titleHint={'????????????'}
                             cn={`${styles.italic} ${curFont.italic ? styles.styleBtnAct : styles.styleBtn}`}
                             onClick={onDescFontItalicUpdate} text={'I'}/>
                <StyleButton titleHint={'??????????????????????'}
                             cn={`${styles.underline} ${curFont.underline ? styles.styleBtnAct : styles.styleBtn}`}
                             onClick={onDescFontUnderlineUpdate} text={'U'}/>
                <StyleButton titleHint={'????????????????????'}
                             cn={`${styles.lineThrough} ${curFont.lineThrough ? styles.styleBtnAct : styles.styleBtn}`}
                             onClick={onDescFontLineTUpdate} text={'U'}/>
                <ColorPicker curFont={curFont} note={props.note} updateFont={props.updateFont}
                             editTarget={props.editTarget}/>
                <SizePicker curFont={curFont} note={props.note} updateFont={props.updateFont}
                            editTarget={props.editTarget}/>

            </div>
        </div>
    );
}

EditNoteBar.propTypes = {
    note: PropTypes.object,
    editTarget: PropTypes.string
};

export default EditNoteBar;