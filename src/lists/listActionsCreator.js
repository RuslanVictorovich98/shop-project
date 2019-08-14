import {FIND_TO_NAME, EDIT_CATEGORY, CREATE_LIST, GETTING_PRODUCTS,} from './listActions';

export const create = (event) => {
    return {
        type: CREATE_LIST,
        payload: event
    }
}

export const category = (event) => {
    return {
        type: EDIT_CATEGORY,
        payload: event,
    }
}

export const findToName = (event) => {
    return {
        type: FIND_TO_NAME,
        payload: event,
    }
}

export const gettingProducts = (event) => {
    return {
        type: GETTING_PRODUCTS,
        payload: event,
    }
}