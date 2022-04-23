import React from 'react';
import {connect} from "react-redux";
import SideBar from "./SideBar";
import {
    addNote2AC,
    deleteNoteAC, loadDataFromFileAC,
    saveDataToFileAC,
    showAddNoteModalAC,
    updateNoteDescAC
} from "../../redux/reducers/notesReducer";


const mapStateToProps = state => ({
    editInProgress: state.NotesPage.editInProgress,
})
const mapDispatchToProps = dispatch => ({
    changeDesk: (desc,id) => dispatch(updateNoteDescAC(desc,id)),
    deleteDesk: id => dispatch(deleteNoteAC(id)),
    showAddNoteModal: () => dispatch(showAddNoteModalAC()),
    addNote: () => dispatch(addNote2AC()),
    saveData: () => dispatch(saveDataToFileAC()),
    loadData: (data) => dispatch(loadDataFromFileAC(data)),
});

export default connect(mapStateToProps,mapDispatchToProps)(SideBar);