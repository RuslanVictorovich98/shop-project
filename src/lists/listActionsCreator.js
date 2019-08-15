import {FIND_TO_NAME, EDIT_CATEGORY, CREATE_LIST, GETTING_PRODUCTS, FETCH_USERS_REQUEST, FIRTS_RENDER_PUTHNAME, FIND_TO_NAME_PATHNAME} from './listActions';

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

export const fetchUsersRequest = () => {
    return {type: FETCH_USERS_REQUEST}
}

export const firstRenderPuthname = (event) => {
    return {
        type: FIRTS_RENDER_PUTHNAME,
        payload: event
    }
}

export const findToNamePathname = (event) => {
    return {
        type: FIND_TO_NAME_PATHNAME,
        payload: event
    }
}