import React from 'react';
import {connect} from "react-redux";
import SideBar from "./SideBar";
import {deleteNoteAC, showAddNoteModalAC, updateNoteDescAC} from "../../redux/reducers/notesReducer";


const mapStateToProps = state => ({
    notesArr:state.NotesPage.notes,
    editInProgress: state.NotesPage.editInProgress,
})
const mapDispatchToProps = dispatch => ({
    changeDesk: (desc,id) => dispatch(updateNoteDescAC(desc,id)),
    deleteDesk: id => dispatch(deleteNoteAC(id)),
    showAddNoteModal: () => dispatch(showAddNoteModalAC()),

});

export default connect(mapStateToProps,mapDispatchToProps)(SideBar);