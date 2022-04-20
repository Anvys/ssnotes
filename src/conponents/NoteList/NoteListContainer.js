import React from 'react';
import {connect} from "react-redux";
import NoteList from "./NoteList";
import {deleteNoteAC, showAddNoteModalAC, updateNoteDescAC} from "../../redux/reducers/notesReducer";

const mapStateToProps = state => ({notesArr:state.NotesPage.notes})
const mapDispatchToProps = dispatch => ({
    changeDesk: (desc,id) => dispatch(updateNoteDescAC(desc,id)),
    deleteDesk: id => dispatch(deleteNoteAC(id)),
    showAddNoteModal: () => dispatch(showAddNoteModalAC()),
});

export default connect(mapStateToProps,mapDispatchToProps)(NoteList);