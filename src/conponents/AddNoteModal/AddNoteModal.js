import React from 'react';
import PropTypes from 'prop-types';
import styles from './AddNoteModal.module.css';

const AddNoteModal = (props) => {
    const addNoneHandler = e => props.addNote();
    const onTitleChangeHandler = e => props.updateTitle(e.target.value);
    const onDescChangeHandler = e => props.updateDesc(e.target.value);
    // debugger
    console.log(`${styles.modalHide} ${styles.modalHide}`);
    console.log(`${styles.contentHide} ${styles.contentHide}`);
    return (
        <div className={props.isActive?styles.modal:`${styles.modal} ${styles.modalHide}`} onClick={props.hideModal}>
            <div className={styles.modHeader}>Добавляем новую заметку!</div>
            <div className={props.isActive?styles.content:`${styles.content} ${styles.contentHide}`} onClick={e=>e.stopPropagation()}>
                <div className={styles.title}>
                    {/*<label htmlFor={styles.inputHeader}>Введите заголовок</label>*/}
                    <input id={styles.inputHeader}
                           className={styles.inputHeader}
                           placeholder={"Заголовок"}
                           value={props.title}
                           onChange={onTitleChangeHandler}/>
                </div>
                <div className={styles.desc}>
                    {/*<label htmlFor={styles.inputDesc}>Введите описание</label>*/}
                    {/*<input id={styles.inputDesc}*/}
                    {/*       placeholder={"текст заметки"}*/}
                    {/*       value={props.desc}*/}
                    {/*       onChange={onDescChangeHandler}/>*/}
                    <textarea id={styles.inputDesc}
                              className={styles.inputDesc}
                           placeholder={"текст заметки"}
                           value={props.desc}
                           onChange={onDescChangeHandler}/>
                </div>
                <button onClick={addNoneHandler}>ADD</button>

            </div>
        </div>
    );
}

AddNoteModal.propTypes = {};

export default AddNoteModal;