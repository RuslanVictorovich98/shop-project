import { call, put, takeLatest } from 'redux-saga/effects';

// ActionsType
export const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST';
export const LET_LIST = 'LET_LIST';
export const SET_CATEGORY = 'SET_CATEGORY';
export const SEARCH_DATA = 'SEARCH_DATA';
export const PATHNAME_DATA = 'PATHNAME_DATA';

// ActionsCreator
export const fetchUsersRequest = () => {
    return {type: FETCH_USERS_REQUEST}
}

export const create = (event) => {
    return {
        type: LET_LIST,
        payload: event
    }
}

export const category = (event) => {
    return {
        type: SET_CATEGORY,
        payload: event
    }
}

export const search = (event) => {
    return {
        type: SEARCH_DATA,
        payload: event
    }
}

export const pathname = (event) => {
    return {
        type: PATHNAME_DATA, 
        payload: event
    }
}

// Reducer 
const list =  {
    products: [],
    loading: true,
    firstRender: true,
    historySearch: '',
    category: '',
    search: ''
};

export function mainList (state = list, action){
    switch (action.type){
        case LET_LIST:
            return {...state,
                products: action.payload,
                loading: false,
                category: 'All category'
              };

        case SET_CATEGORY:
            return {
                    ...state, 
                    category: action.payload,
                    firstRender: false,
                };

        case SEARCH_DATA: 
            return {
                ...state,
                search: action.payload,
                firstRender: false,
            };

        case PATHNAME_DATA:
            let category = action.payload.pathname.slice(1).replace(/-/g," ");
            return {
                ...state,
                historySearch: action.payload.search,
                firstRender: true,
                category: category,
                search: action.payload.search,
            };

        default:
            return state;
    }
}

// Saga
export function* fetchUser() {
  const url = '/data.json';
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

 