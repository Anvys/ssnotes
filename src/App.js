import React from 'react';
import './App.css';
import NoteListContainer from "./conponents/NoteList/NoteListContainer";
import SideBarContainer from "./conponents/SideBar/SideBarContainer";
import NavBar from "./conponents/NavBar/NavBar";


function App() {
    return (
        <div className="wrapper">
            <div className='column'>
                <NavBar/>
                <div className={'row'}>
                    <SideBarContainer/>
                    <div className="App">
                        <NoteListContainer/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
