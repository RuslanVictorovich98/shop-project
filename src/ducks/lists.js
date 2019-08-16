import { call, put, takeLatest } from 'redux-saga/effects';

// ActionsType
export const EDIT_LIST = 'EDIT_LIST';
export const EDIT_CATEGORY = 'EDIT_CATEGORY';
export const CREATE_LIST = 'CREATE_LIST';
export const FIND_TO_NAME = 'FIND_TO_NAME';
export const SAVE_FIND_DATA = 'SAVE_FIND_DATA';
export const FILTER_LIST = 'FIND_TO_NAME';
export const GETTING_PRODUCTS = 'GETTING_PRODUCTS' ;
export const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST';
export const FIRTS_RENDER_PUTHNAME = 'FIRTS_RENDER_PUTHNAME';
export const FIND_TO_NAME_PATHNAME = 'FIND_TO_NAME_PATHNAME';

// ActionsCreator
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

export const saveFindToName = (event) => {
    return {
        type: SAVE_FIND_DATA,
        payload: event
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

// Reducer 
const list =  {
    products: [],
    productsFilter: [],
    productsFind: [],
    productsPuthname: [],
    productsPuthnameFind: [],
    findData: ''
};

export function saveFindData (state = list.findData, action) {
    switch (action.type) {
        case SAVE_FIND_DATA:
            // console.log(action.payload);

            return action.payload;

        default: 
            return state;
    }
}

export function mainList (state = list.products, action) { // main
    switch (action.type) {
        case CREATE_LIST:
            list.productsFilter = action.payload;
            return action.payload;

        default:
            return state;
    }
}

export function listReducer (state = list.productsFilter, action) { // list data
    switch (action.type){

        case CREATE_LIST:
            list.productsFilter = action.payload;
            return action.payload;

        case GETTING_PRODUCTS: 
            return action.payload;
            

        case EDIT_CATEGORY:
            return list.productsFilter.filter(num => num.bsr_category.toLowerCase() === action.payload.toLowerCase());

        default:
            return state;
    }
}

export function liftFilter  (state = list.productsFind, action) { // list data after filter
    switch (action.type) {

        case FIND_TO_NAME: 
            return action.payload;

        default:
            return state;
    }
}

export function firstProductsPuthname (state = list.productsPuthname, action) { // data at first load page by category
    switch (action.type) {
        
        case FIRTS_RENDER_PUTHNAME:
            console.log(action.payload);
            
            return list.productsFilter.filter(num => num.bsr_category.toLowerCase() === action.payload.toLowerCase());

        default:
            return state;
    }
}

export function firstProductsPuthnameFind (state = list.productsPuthnameFind, action) { // data at first load page by find
    switch(action.type) {

        case FIND_TO_NAME_PATHNAME: 
            return action.payload;

        default: 
            return state;
    }
    
}

// Saga
export function* fetchUser() {
  const url = 'http://localhost:3000/data.json';
  try {
    const data = yield call(() => {
              return fetch(url)
                      .then(res => res.json())
              })
    yield put (create(data.products));
  } catch (error) {
    console.error('fetchUsers return erros: ' + error);
  }        
 }
 
 export default function* GetProduct() {
    yield takeLatest(FETCH_USERS_REQUEST, fetchUser);
  }

