import React from 'react';
import './App.css';
import Note from "./conponents/Note/Note";
import NoteListContainer from "./conponents/NoteList/NoteListContainer";
import AddNoteModalContainer from "./conponents/AddNoteModal/AddNoteModalContainer";


function App(props) {
    return (
        <div className="wrapper">
            <div className="App">
                <AddNoteModalContainer/>
                <NoteListContainer/>
            </div>
        </div>
    );
}

export default App;
