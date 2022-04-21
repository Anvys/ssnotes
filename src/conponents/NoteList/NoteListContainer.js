import React from 'react';
import {connect} from "react-redux";
import NoteList from "./NoteList";
import {
    addNote2AC,
    deleteNoteAC,
    editNoteAC,
    saveEditedNoteAC, setImgAC,
    showAddNoteModalAC, updateDescFontsAC,
    updateNoteDescAC, updateNoteTitleAC, updateTitleFontsAC
} from "../../redux/reducers/notesReducer";

const mapStateToProps = state => ({notesArr:state.NotesPage.notes, editInProgress: state.NotesPage.editInProgress})
const mapDispatchToProps = dispatch => ({
    changeDesk: (desc,id) => dispatch(updateNoteDescAC(desc,id)),
    changeTitle: (title,id) => dispatch(updateNoteTitleAC(title,id)),
    deleteNote: id => dispatch(deleteNoteAC(id)),
    setImg: (img, id) => dispatch(setImgAC(img, id)),
    showAddNoteModal: () => dispatch(showAddNoteModalAC()),
    editNote: (id) => dispatch(editNoteAC(id)),
    saveEditedNote: (id) => dispatch(saveEditedNoteAC(id)),
    updateDescFont: (fonts, id) => dispatch(updateDescFontsAC(fonts, id)),
    updateTitleFont: (fonts, id) => dispatch(updateTitleFontsAC(fonts, id)),
});

export default connect(mapStateToProps,mapDispatchToProps)(NoteList);