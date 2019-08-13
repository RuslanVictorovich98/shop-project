export const EDIT_LIST = 'EDIT_LIST';
export const EDIT_CATEGORY = 'EDIT_CATEGORY';
export const CREATE_LIST = 'CREATE_LIST';
export const FIND_TO_NAME = 'FIND_TO_NAME';
export const FILTER_LIST = 'FIND_TO_NAME';
export const GETTING_PRODUCTS = 'GETTING_PRODUCTS' ;


export const create = (event) => {
    return {
        type: CREATE_LIST,
        payload: event
    }
}

export const edit = (event) => {
    return {
        type: EDIT_LIST,
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