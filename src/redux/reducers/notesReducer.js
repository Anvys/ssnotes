const ADD_NOTE = 'ADD_NOTE'
const ADD_NOTE2 = 'ADD_NOTE2'
const HIDE_ADD_NOTE_MODAL = 'HIDE_ADD_NOTE_MODAL'
const SHOW_ADD_NOTE_MODAL = 'SHOW_ADD_NOTE_MODAL'
const UPDATE_NOTE_DESC = 'UPDATE_NOTE_DESC'
const UPDATE_NOTE_TITLE = 'UPDATE_NOTE_TITLE'
const UPDATE_NEW_NOTE_DESC = 'UPDATE_NEW_NOTE_DESC'
const UPDATE_NEW_NOTE_TITLE = 'UPDATE_NEW_NOTE_TITLE'
const DELETE_NOTE = 'DELETE_NOTE'
const EDIT_NOTE = 'EDIT_NOTE'
const SAVE_EDITED_NOTE = 'SAVE_EDITED_NOTE'
const SET_IMG = 'SET_IMG'
const DELETE_IMG = 'DELETE_IMG'
const SET_IMG_IN_TEXT = 'SET_IMG_IN_TEXT'
const DELETE_IMG_IN_TEXT = 'DELETE_IMG_IN_TEXT'
const UPDATE_DESC_FONTS = 'UPDATE_DESC_FONTS'
const UPDATE_TITLE_FONTS = 'UPDATE_TITLE_FONTS'
const SELECT_EDIT_TARGET = 'SELECT_EDIT_TARGET'
const LOAD_FROM_FILE = 'LOAD_FROM_FILE'
const SAVE_FROM_FILE = 'SAVE_FROM_FILE'


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
export const deleteImgAC = (id) => {
    return {type: DELETE_IMG, id};
}
export const setImgInTextAC = (img, id) => {
    return {type: SET_IMG_IN_TEXT, img, id};
}
export const deleteImgInTextAC = (id) => {
    return {type: DELETE_IMG_IN_TEXT, id};
}
export const updateFontsAC = (fonts, id, target) => {
    switch (target) {
        case 'header':
            return {type: UPDATE_TITLE_FONTS, fonts, id};
        case 'description':
            return {type: UPDATE_DESC_FONTS, fonts, id};
    }
}
export const selectEditTargetAC = (target, id) => {
    return {type: SELECT_EDIT_TARGET, target, id};
}
export const loadDataFromFileAC = (data) => {
    return {type: LOAD_FROM_FILE, data};
}
export const saveDataToFileAC = () => {
    return {type: SAVE_FROM_FILE};
}


const createNoteObj = (id, title, description, dateStart = new Date(),
                       isDone = false, edit = false) => ({
    id,
    title,
    description,
    dateStart: dateStart.toLocaleString(),
    isDone,
    edit,
    img: null,
    imgInText: null,
    editTarget: 'header',
    titleFont: {
        bold: false,
        italic: true,
        underline: true,
        lineThrough: false,
        fontSize: 20,
        fontFamily: 'Arial',
        fontColor: 'black'
    },
    descFont: {
        bold: false,
        italic: false,
        underline: false,
        lineThrough: false,
        fontSize: 18,
        fontFamily: 'Arial',
        fontColor: 'black'
    },
});
const defNotesObj = {
    notes: [createNoteObj(1, 'купить', 'купить хлеб'), createNoteObj(2, 'тоже купить', 'купить молоко'), createNoteObj(3, 'работа', 'дописать это'), createNoteObj(4, 'так', 'вот'),],
    editInProgress: false,
    newNoteDesc: '',
    newNoteTitle: '',
    addNoteModalActive: false
};
let initStorage = () => {
    localStorage.setItem('notes', JSON.stringify(defNotesObj));
    return {...defNotesObj}
}
let returnNewState = (newState) => {
    localStorage.setItem('notes', JSON.stringify(newState));
    return newState;
}

let defaultState = (
    localStorage.getItem('notes') === null || localStorage.getItem('notes') === 'undefined')
    ? initStorage()
    : JSON.parse(localStorage.getItem('notes'))


const saveDataToFile = (data) => {
    const fileData = JSON.stringify(data);
    const blob = new Blob([fileData], {type: "text/plain"});
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.download = 'savedNotes.json';
    link.href = url;
    link.click();
}
const notesReducer = (state = defaultState, action) => {
    // saveNotesToLS(state);
    switch (action.type) {
        case ADD_NOTE: {
            // return state.newNoteDesc.trim()===""? state : {
            // return state.editInProgress ? (state, alert('Сохраните редактируемую заметку') ) : {
            return returnNewState({
                ...state,
                notes: [...state.notes.map((note, id) => ({
                    ...note,
                    id: id
                })), createNoteObj(state.notes.length + 1, state.newNoteTitle, state.newNoteDesc)
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
                notes: [...state.notes.map((note, id) => ({
                    ...note,
                    id: id
                })), {...createNoteObj(state.notes.length + 1, state.newNoteTitle, state.newNoteDesc), edit: true}
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
                notes: state.notes.map(note => (action.id === note.id ? {...note, edit: true} : note)),
                editInProgress: true
            })
        }
        case SAVE_EDITED_NOTE: {
            return returnNewState({
                ...state,
                notes: state.notes.map(note => (action.id === note.id ? {...note, edit: false} : note)),
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
                notes: state.notes.map(note => (action.id === note.id ? {
                    ...note,
                    description: action.description
                } : note))
            });
        }
        case SELECT_EDIT_TARGET: {
            return returnNewState({
                ...state,
                notes: state.notes.map(note => (action.id === note.id ? {...note, editTarget: action.target} : note))
            });
        }
        case UPDATE_DESC_FONTS: {
            return returnNewState({
                ...state,
                notes: state.notes.map(note => (action.id === note.id ? {...note, descFont: {...action.fonts}} : note))
            });
        }
        case UPDATE_TITLE_FONTS: {
            return returnNewState({
                ...state,
                notes: state.notes.map(note => (action.id === note.id ? {...note, titleFont: {...action.fonts}} : note))
            });
        }
        case SET_IMG: {
            // imgToState(action.img);
            return returnNewState({
                ...state, notes: state.notes.map(note => (action.id === note.id ? {...note, img: action.img} : note))
            });
        }
        case DELETE_IMG: {
            return returnNewState({
                ...state, notes: state.notes.map(note => (action.id === note.id ? {...note, img: null} : note))
            });
        }
        case SET_IMG_IN_TEXT: {
            return returnNewState({
                ...state, notes: state.notes.map(note => (action.id === note.id ? {...note, imgInText: action.img} : note))
            });
        }
        case DELETE_IMG_IN_TEXT: {
            return returnNewState({
                ...state, notes: state.notes.map(note => (action.id === note.id ? {...note, imgInText: null} : note))
            });
        }
        case UPDATE_NOTE_TITLE: {
            return returnNewState({
                ...state,
                notes: state.notes.map(note => (action.id === note.id ? {...note, title: action.title} : note))
            });
        }
        case UPDATE_NEW_NOTE_DESC: {
            return returnNewState({
                ...state, newNoteDesc: action.description
            });
        }
        case UPDATE_NEW_NOTE_TITLE: {
            return returnNewState({
                ...state, newNoteTitle: action.title
            });
        }
        case DELETE_NOTE: {
            return returnNewState({
                ...state,
                notes: state.notes.filter(note => action.id !== note.id),
                editInProgress: state.notes.find(note => note.id === action.id).edit === true ? false : state.editInProgress
            });
        }
        case LOAD_FROM_FILE: {
            return returnNewState({
                ...state, ...action.data
            });
        }
        case SAVE_FROM_FILE: {
            saveDataToFile(state);
            return state;
        }
        default: {
            return state;
            // return {...state, notes:state.notes.map(item=>({...item,imgInText: null}))};
        }
    }
}

export default notesReducer;