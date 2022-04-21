const ADD_NOTE = 'ADD_NOTE'
const ADD_NOTE2 = 'ADD_NOTE2'
const HIDE_ADD_NOTE_MODAL = 'HIDE_ADD_NOTE_MODAL'
const SHOW_ADD_NOTE_MODAL = 'SHOW_ADD_NOTE_MODAL'
const UPDATE_NOTE_DESC = 'UPDATE_NOTE_DESC'
const UPDATE_NOTE_TITLE = 'UPDATE_NOTE_TITLE'
const UPDATE_NEW_NOTE_DESC = 'UPDATE_NEW_NOTE_DESC'
const UPDATE_NEW_NOTE_TITLE = 'UPDATE_NEW_NOTE_TITLE'

const DELETE_NOTE = 'DELETE_NOTE'
const EMPTY_DESC = 'EMPTY_DESC'
const EDIT_NOTE = 'EDIT_NOTE'
const SAVE_EDITED_NOTE = 'SAVE_EDITED_NOTE'
const SET_IMG = 'SET_IMG'
const UPDATE_DESC_FONTS = 'UPDATE_DESC_FONTS'
const UPDATE_TITLE_FONTS = 'UPDATE_TITLE_FONTS'


export const addNoteAC = () => {
    return {type: ADD_NOTE};
}
export const addNote2AC = () => {
    return {type: ADD_NOTE2};
}
export const editNoteAC = (id) => {
    return {type: EDIT_NOTE, id};
}
export const saveEditedNoteAC = (id) => {
    return {type: SAVE_EDITED_NOTE, id};
}
export const updateNoteDescAC = (description, id) => {
    return {type: UPDATE_NOTE_DESC, description, id};
}
export const updateNoteTitleAC = (title, id) => {
    return {type: UPDATE_NOTE_TITLE, title, id};
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
export const setImgAC = (img, id) => {
    return {type: SET_IMG, img, id};
}
export const updateDescFontsAC = (fonts, id) => {
    return {type: UPDATE_DESC_FONTS, fonts, id};
}
export const updateTitleFontsAC = (fonts, id) => {
    return {type: UPDATE_TITLE_FONTS, fonts, id};
}


const createNoteObj = (id, title, description, dateStart = new Date(), isDone = false, edit = false) => (
    {
        id, title, description, dateStart: dateStart.toLocaleString(), isDone, edit, img: null, titleFont: {
            bold: false,
            italic: true,
            underline: true,
            lineThrough: false,
            fontSize: 20,
            fontFamily: 'Arial'
        }, descFont: {
            bold: false,
            italic: false,
            underline: false,
            lineThrough: false,
            fontSize: 18,
            fontFamily: 'Arial'
        },
    }
);
const defNotesObj = {
    notes: [
        createNoteObj(1, 'купить', 'купить хлеб'),
        createNoteObj(2, 'тоже купить', 'купить молоко'),
        createNoteObj(3, 'работа', 'дописать это'),
        createNoteObj(4, 'так', 'вот'),
    ],
    editInProgress: false,
    newNoteDesc: '',
    newNoteTitle: '',
    addNoteModalActive: false
};
let initStorage = () => {
    localStorage.setItem('notes', JSON.stringify(defNotesObj));
    return {...defNotesObj}
}
let saveNotesToLS = (state) => {
    localStorage.setItem('notes', JSON.stringify(state));
}
let returnNewState = (newState) => {
    localStorage.setItem('notes', JSON.stringify(newState));
    return newState;
}

let defaultState = (localStorage.getItem('notes') === null ||
    localStorage.getItem('notes') === 'undefined') ?
    initStorage() : JSON.parse(localStorage.getItem('notes'))
// let defaultState = initStorage();

const notesReducer = (state = defaultState, action) => {
    // saveNotesToLS(state);
    switch (action.type) {
        case ADD_NOTE: {
            // return state.newNoteDesc.trim()===""? state : {
            // return state.editInProgress ? (state, alert('Сохраните редактируемую заметку') ) : {
            return returnNewState({
                ...state,
                notes: [
                    ...state.notes.map((note, id) => ({...note, id: id})),
                    createNoteObj(state.notes.length + 1, state.newNoteTitle, state.newNoteDesc)
                    // {id: state.notes.length + 1,title: state.newNoteTitle, description: state.newNoteDesc, isDone: false},
                ],
                newNoteDesc: "",
                newNoteTitle: "",
                addNoteModalActive: false,
            })
        }
        case ADD_NOTE2: {
            return returnNewState({
                ...state,
                notes: [
                    ...state.notes.map((note, id) => ({...note, id: id})),
                    {...createNoteObj(state.notes.length + 1, state.newNoteTitle, state.newNoteDesc), edit: true}
                    // {id: state.notes.length + 1,title: state.newNoteTitle, description: state.newNoteDesc, isDone: false},
                ],
                newNoteDesc: "",
                newNoteTitle: "",
                addNoteModalActive: false,
                editInProgress: true
            })
        }
        case EDIT_NOTE: {
            return returnNewState({
                ...state,
                notes: state.notes.map((note, id) => (action.id === note.id ?
                        {...note, edit: true} : note
                )),
                editInProgress: true
            })
        }
        case SAVE_EDITED_NOTE: {
            return returnNewState({
                ...state,
                notes: state.notes.map((note, id) => (action.id === note.id ?
                        {...note, edit: false} : note
                )),
                editInProgress: false
            })
        }
        case HIDE_ADD_NOTE_MODAL: {
            return returnNewState({...state, addNoteModalActive: false});
        }
        case SHOW_ADD_NOTE_MODAL: {
            return returnNewState({...state, addNoteModalActive: true});
        }
        case UPDATE_NOTE_DESC: {
            return returnNewState({
                ...state,
                notes: state.notes.map((note, id) => (action.id === note.id ?
                        {...note, description: action.description} : note
                ))
            });
        }
        case UPDATE_DESC_FONTS: {
            return returnNewState({
                ...state,
                notes: state.notes.map((note, id) => (action.id === note.id ?
                        {...note, descFont: {...action.fonts}} : note
                ))
            });
        }
        case UPDATE_TITLE_FONTS: {
            return returnNewState({
                ...state,
                notes: state.notes.map((note, id) => (action.id === note.id ?
                        {...note, titleFont: {...action.fonts}} : note
                ))
            });
        }
        case SET_IMG: {

            return returnNewState({
                ...state,
                notes: state.notes.map((note, id) => (action.id === note.id ?
                        {...note, img: action.img} : note
                ))
            });
        }
        case UPDATE_NOTE_TITLE: {
            return returnNewState({
                ...state,
                notes: state.notes.map((note, id) => (action.id === note.id ?
                        {...note, title: action.title} : note
                ))
            });
        }
        case UPDATE_NEW_NOTE_DESC: {
            return returnNewState({
                ...state,
                newNoteDesc: action.description
            });
        }
        case UPDATE_NEW_NOTE_TITLE: {
            return returnNewState({
                ...state,
                newNoteTitle: action.title
            });
        }
        case DELETE_NOTE: {
            return returnNewState({
                ...state,
                notes: state.notes.filter((note, id) => action.id !== note.id),
                editInProgress: state.notes.find(note => note.id === action.id).edit === true ? false : state.editInProgress
            });
        }
        default: {
            return state;
        }
    }
}

export default notesReducer;