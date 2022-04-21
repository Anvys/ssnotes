import React from 'react';
import './App.css';
import NoteListContainer from "./conponents/NoteList/NoteListContainer";
import AddNoteModalContainer from "./conponents/AddNoteModal/AddNoteModalContainer";
import SideBarContainer from "./conponents/SideBar/SideBarContainer";


function App(props) {
    return (
        <div className="wrapper">
            <SideBarContainer/>
            <div className="App">
                <AddNoteModalContainer/>
                <NoteListContainer/>
            </div>
        </div>
    );
}

export default App;
