import React from 'react';
import PropTypes from 'prop-types';
import styles from './SideBar.module.css';
import NoteAdd from "../Note/AddNote/NoteAdd";
import fileDownloadIcon from "../../assets/img/icons/download.svg"
import fileUploadIcon from "../../assets/img/icons/upload.svg"


const SideBar = (props) => {
    const handleSaveToPC = () => {
        props.saveData()
    }
    const handleLoadFromPC = e => {
        const reader = new FileReader();
        reader.readAsText(e.target.files[0], "UTF-8");
        reader.onload = e => props.loadData(JSON.parse(e.target.result));
    }
    const clearLoaded = e => e.target.value=null;
    return (
        <div className={styles.block}>
            <div className={styles.sideBar}>
                <NoteAdd addNote={props.addNote} editInProgress={props.editInProgress}/>
            </div>
            <div className={styles.fileBlock}>
                <div className={styles.fileBlockItems}>
                    <div>Save</div>
                    <img className={styles.download} title={'Сохранить все данные в файл'} src={fileDownloadIcon}
                         onClick={handleSaveToPC}/>
                </div>
                <div className={styles.fileBlockItems}>
                    <div>Load</div>
                    <label
                        title={'Загрузить данные из ранее сохраненного файла. НЕТ ПРОВЕРКИ НА ПОСТОРОННИЕ И ПОВРЕЖДЕННЫЕ ФАЙЛЫ'}
                        style={{background: `url(${fileUploadIcon}) center / cover no-repeat`}}
                        htmlFor={'loader54938SDJDNWUE'} className={styles.labelUpload}/>
                    <input
                        id={'loader54938SDJDNWUE'}
                        className={styles.upload}
                        type="file"
                        name="dataUploader_loader54938SDJDNWUE"
                        onClick={clearLoaded}
                        onChange={handleLoadFromPC}
                    />
                </div>


            </div>
        </div>
    );
}

SideBar.propTypes = {
    editInProgress: PropTypes.bool
};

export default SideBar;