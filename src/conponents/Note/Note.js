import React from 'react';
import PropTypes from 'prop-types';
import styles from './Note.module.css';
import fontStyles from '../EditNoteBar/EditNoteBar.module.css'
import homelander from './testimg.PNG'
import EditNoteBar from "../EditNoteBar/EditNoteBar";

const Note = (props) => {
    const onDescChangeHandler = event => props.changeDesk(event.target.value, props.note.id);
    const onTitleChangeHandler = event => props.changeTitle(event.target.value, props.note.id);
    const onDeleteNoteHandler = () => props.deleteNote(props.note.id);
    const onSaveClickHandler = () => props.saveEditedNote(props.note.id);
    const onEditClickHandler = () => props.editNote(props.note.id);
    const setImgHandler = (e) => {
        console.log(URL.createObjectURL(e.target.files[0]))
        // props.setImg(e.target.files[0], props.note.id);
        props.setImg(URL.createObjectURL(e.target.files[0]), props.note.id);
    }
    let descStyles=[];
    for (const [key, value] of Object.entries(props.note.descFont)) {
        if(value===true)descStyles.push(fontStyles[key]);
    }
    window.s1 = fontStyles;
    console.log(descStyles)
    return (
        <div className={props.note.edit ? `${styles.Note} ${styles.NoteEditing}` : styles.Note}>
            {/*<div className={styles.header}>{props.note.title}</div>*/}

            <div className={styles.header}>
                {props.note.edit ?
                    <textarea type={"text"}
                              className={`${styles.headerEditing}`}
                              value={props.note.title}
                              onChange={onTitleChangeHandler}/> :
                    <p className={""}>{props.note.title}</p>
                }
            </div>
            <div className={`${descStyles.join(' ')} ${styles.content}`}>
                {props.note.edit ?
                    <textarea type={"text"}
                              className={`${styles.description} ${styles.descriptionEditing} ${descStyles.join(' ')}`}
                              value={props.note.description}
                              onChange={onDescChangeHandler}/> :
                    <p className={styles.description}>{props.note.description}</p>
                }

            </div>
            {/*<img alt="not fount" width={"250px"} src={URL.createObjectURL()} />*/}
            {

                props.note.img !== null &&
                    // <img  alt="not fount" width={"250px"} src={'https://cdn.pixabay.com/photo/2014/03/24/13/44/sticky-note-294230_640.png'} /> :
                    // <img alt="not fount" width={"250px"} src={URL.createObjectURL(props.note.img)} />
                    <img alt="not fount" width={"250px"} src={props.note.img} />

            }

            <EditNoteBar setImg={props.setImg}
                         note={props.note}
                         updateTitleFont={props.updateTitleFont}
                         updateDescFont={props.updateDescFont}/>
            <div className={styles.footer}>
                <div className={styles.dateStart}>{props.note.dateStart}</div>
                {
                    props.note.edit ?
                        <button className={styles.editButton} onClick={onSaveClickHandler}>Save</button> :
                        props.editInProgress ? <button/> :
                            <button className={styles.editButton} onClick={onEditClickHandler}>
                                Edit
                            </button>

                }
                <button className={styles.delButton} onClick={onDeleteNoteHandler}>Delete</button>
            </div>

        </div>
    );
}

Note.propTypes = {
    description: PropTypes.string

};

export default Note;