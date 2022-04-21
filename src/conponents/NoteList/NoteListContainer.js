import React from 'react';
import {connect} from "react-redux";
import NoteList from "./NoteList";
import {
    deleteNoteAC,
    editNoteAC,
    saveEditedNoteAC,
    showAddNoteModalAC,
    updateNoteDescAC, updateNoteTitleAC
} from "../../redux/reducers/notesReducer";

const mapStateToProps = state => ({notesArr:state.NotesPage.notes, editInProgress: state.NotesPage.editInProgress})
const mapDispatchToProps = dispatch => ({
    changeDesk: (desc,id) => dispatch(updateNoteDescAC(desc,id)),
    changeTitle: (title,id) => dispatch(updateNoteTitleAC(title,id)),
    deleteNote: id => dispatch(deleteNoteAC(id)),
    showAddNoteModal: () => dispatch(showAddNoteModalAC()),
    editNote: (id) => dispatch(editNoteAC(id)),
    saveEditedNote: (id) => dispatch(saveEditedNoteAC(id)),
});

export default connect(mapStateToProps,mapDispatchToProps)(NoteList);