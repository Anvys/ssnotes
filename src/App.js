import React from 'react';
import './App.css';
import NoteListContainer from "./conponents/NoteList/NoteListContainer";
import SideBarContainer from "./conponents/SideBar/SideBarContainer";


function App(props) {
    return (
        <div className="wrapper">
            <SideBarContainer/>
            <div className="App">
                <NoteListContainer/>
            </div>
        </div>
    );
}

export default App;
