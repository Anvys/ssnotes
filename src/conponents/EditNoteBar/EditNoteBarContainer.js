import React from 'react';
import {connect} from "react-redux";
import {
    addNoteAC,
    deleteNoteAC, hideAddNoteModalAC,
    updateNewNoteDescAC,
    updateNewNoteTitleAC,
    updateNoteDescAC
} from "../../redux/reducers/notesReducer";
import AddNoteModal from "./AddNoteModal";

const mapStateToProps = state => ({
    note: state.NotesPage.notes,
    title: state.NotesPage.newNoteTitle,
    desc: state.NotesPage.newNoteDesc,

})
const mapDispatchToProps = dispatch => ({
    setImg: () => dispatch(hideAddNoteModalAC()),
    setFont: () => dispatch(addNoteAC()),
});

export default connect(mapStateToProps,mapDispatchToProps)(AddNoteModal);