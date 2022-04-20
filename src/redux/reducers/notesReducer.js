const ADD_NOTE = 'ADD_NOTE'
const HIDE_ADD_NOTE_MODAL = 'HIDE_ADD_NOTE_MODAL'
const SHOW_ADD_NOTE_MODAL = 'SHOW_ADD_NOTE_MODAL'
const UPDATE_NOTE_DESC = 'UPDATE_NOTE_DESC'
const UPDATE_NEW_NOTE_DESC = 'UPDATE_NEW_NOTE_DESC'
const UPDATE_NEW_NOTE_TITLE = 'UPDATE_NEW_NOTE_TITLE'
const DELETE_NOTE = 'DELETE_NOTE'
const EMPTY_DESC = 'EMPTY_DESC'


export const addNoteAC = () => {
    return {type: ADD_NOTE} ;
}
export const updateNoteDescAC = (description, id) => {
    return {type: UPDATE_NOTE_DESC, description, id};
}
export const updateNewNoteDescAC = (description) => {
    return {type: UPDATE_NEW_NOTE_DESC, description};
}
export const updateNewNoteTitleAC = (title) => {
    return {type: UPDATE_NEW_NOTE_TITLE, title};
}
export const deleteNoteAC = (id) => {
    return {type: DELETE_NOTE, id};
}
export const hideAddNoteModalAC = () => {
    return {type: HIDE_ADD_NOTE_MODAL};
}
export const showAddNoteModalAC = () => {
    return {type: SHOW_ADD_NOTE_MODAL};
}

const createNoteObj = (id, title, description, dateStart=new Date(), isDone=false, edit=false) => (
    {id, title, description, dateStart, isDone, edit}
);
let defaultState = {
    notes: [
        createNoteObj(1, 'купить', 'купить хлеб'),
        createNoteObj(2, 'тоже купить', 'купить молоко'),
        createNoteObj(3, 'работа', 'дописать это'),
        createNoteObj(4, 'так', 'вот'),
    ],
    newNoteDesc: '',
    newNoteTitle: '',
    addNoteModalActive: true
}
const notesReducer = (state = defaultState, action) => {

    switch (action.type) {
        case ADD_NOTE: {

            return state.newNoteDesc.trim()===""? state : {
                ...state,
                notes: [
                    ...state.notes.map((note, id) => ({...note, id: id})),
                    createNoteObj(state.notes.length + 1, state.newNoteTitle,state.newNoteDesc)
                    // {id: state.notes.length + 1,title: state.newNoteTitle, description: state.newNoteDesc, isDone: false},
                ],
                newNoteDesc: "",
                newNoteTitle: "",
                addNoteModalActive: false,
            }
        }
        case HIDE_ADD_NOTE_MODAL:{
            return {...state,addNoteModalActive: false}
        }
        case SHOW_ADD_NOTE_MODAL:{
            return {...state,addNoteModalActive: true}
        }
        case UPDATE_NOTE_DESC: {
            return {
                ...state,
                notes: state.notes.map((note, id) => (action.id === id ?
                        {...note, description: action.description} : note
                ))
            }
        }
        case UPDATE_NEW_NOTE_DESC: {
            return {
                ...state,
                newNoteDesc: action.description
            }
        }
        case UPDATE_NEW_NOTE_TITLE: {
            return {
                ...state,
                newNoteTitle: action.title
            }
        }
        case DELETE_NOTE: {
            return {
                ...state,
                notes: state.notes.filter((note, id) => action.id !== id)
            }
        }
        default: {
            return state;
        }
    }
}

export default notesReducer;