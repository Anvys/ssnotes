import {combineReducers, legacy_createStore as createStore} from "redux";
import notesReducer from "./reducers/notesReducer";


let reducers = combineReducers({
    NotesPage: notesReducer,
})
let store = createStore(reducers);

export default store;

window.store = store;