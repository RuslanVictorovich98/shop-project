import {FIND_TO_NAME, EDIT_CATEGORY, CREATE_LIST, GETTING_PRODUCTS} from './listActions';


const list =  {
    products: [],
    productsFilter: [],
    productsFind: []
};

export function mainList (state = list.products, action) {
    switch (action.type) {
        case CREATE_LIST:
            list.productsFilter = action.payload;
            return action.payload;

        default:
            return state;
    }
}

export function liftFilter  (state = list.productsFind, action) {
    switch (action.type) {

        case FIND_TO_NAME: 
            return action.payload;

        default:
            return state;
    }
}

export function listReducer (state = list.productsFilter, action) {
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
