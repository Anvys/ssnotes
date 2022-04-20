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
    isActive:state.NotesPage.addNoteModalActive,
    title: state.NotesPage.newNoteTitle,
    desc: state.NotesPage.newNoteDesc,
})
const mapDispatchToProps = dispatch => ({
    hideModal: () => dispatch(hideAddNoteModalAC()),
    addNote: () => dispatch(addNoteAC()),
    updateDesc: desc => dispatch(updateNewNoteDescAC(desc)),
    updateTitle: title => dispatch(updateNewNoteTitleAC(title)),
});

export default connect(mapStateToProps,mapDispatchToProps)(AddNoteModal);