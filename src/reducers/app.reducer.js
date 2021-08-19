import { createStore } from "redux";
import { ADD_CONTACT, EDIT_CONTACT, REMOVE_CONTACT, UPDATE_CONTACT_NAME, UPDATE_CONTACT_NUMBER } from "../actions/contact-list.actions";

const initialState = {
    contacts: [{name: 'Jacob Plumb', number: '734-344-9098'}],
    contact: {name: '', number: ''},
    isEditing: false,
    editIndex: -1
}

const addContact = (state, action) => {
    if (state.isEditing) {
        const contacts = [...state.contacts];
        contacts[state.editIndex] = state.contact;
        return {
            ...state,
            contacts,
            contact: {name: '', number: ''},
            isEditing: false,
            editIndex: -1
        }
    } else {
        return {
            ...state, 
            contacts: [...state.contacts, {...state.contact}],
            contact: {name: '', number: ''}
        };
    }
}

const reducer = (state = initialState, action) => {
    const contacts = [...state.contacts];
    switch(action.type) {
        case REMOVE_CONTACT:
            contacts.splice(action.index, 1);
            return {...state, contacts: contacts};
        case UPDATE_CONTACT_NAME:
            return {...state, contact: {...state.contact, name: action.text}};
        case UPDATE_CONTACT_NUMBER:
            return {...state, contact: {...state.contact, number: action.text}};
        case ADD_CONTACT:
            return addContact(state, action);
        case EDIT_CONTACT:
            return {...state, contact: state.contacts[action.index], editIndex: action.index, isEditing: true};
        default:
            return state;
    }
}

export const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());