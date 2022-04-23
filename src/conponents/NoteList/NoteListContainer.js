import React from 'react';
import {connect} from "react-redux";
import NoteList from "./NoteList";
import {
    deleteImgAC,
    deleteNoteAC,
    editNoteAC,
    saveEditedNoteAC,
    selectEditTargetAC,
    setImgAC,
    showAddNoteModalAC,
    updateFontsAC,
    updateNoteDescAC,
    updateNoteTitleAC,
} from "../../redux/reducers/notesReducer";

const mapStateToProps = state => ({notesArr: state.NotesPage.notes, editInProgress: state.NotesPage.editInProgress})
const mapDispatchToProps = dispatch => ({
    changeDesk: (desc, id) => dispatch(updateNoteDescAC(desc, id)),
    changeTitle: (title, id) => dispatch(updateNoteTitleAC(title, id)),
    deleteNote: id => dispatch(deleteNoteAC(id)),
    setImg: (img, id) => dispatch(setImgAC(img, id)),
    deleteImg: (id) => dispatch(deleteImgAC(id)),
    showAddNoteModal: () => dispatch(showAddNoteModalAC()),
    editNote: (id) => dispatch(editNoteAC(id)),
    saveEditedNote: (id) => dispatch(saveEditedNoteAC(id)),
    selectEditTarget: (target, id) => dispatch(selectEditTargetAC(target, id)),
    updateFont: (fonts, id, target) => dispatch(updateFontsAC(fonts, id, target)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NoteList);