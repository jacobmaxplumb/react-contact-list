export const REMOVE_CONTACT = "Remove Contact";
export const ADD_CONTACT = "Add Contact";
export const UPDATE_CONTACT_NAME = "Update Contact Name";
export const UPDATE_CONTACT_NUMBER = "Update Contact Number";
export const EDIT_CONTACT = "Edit Contact";

export const removeContactAction = index => {
    return ({type: REMOVE_CONTACT, index});
}

export const updateContactNumberAction = text => {
    return ({type: UPDATE_CONTACT_NUMBER, text});
}

export const updateContactNameAction = text => {
    return ({type: UPDATE_CONTACT_NAME, text});
}

export const addContactAction = () => {
    return ({type: ADD_CONTACT})
}

export const editContactAction = index => {
    return {type: EDIT_CONTACT, index};
}