import {FIND_TO_NAME, EDIT_CATEGORY, CREATE_LIST, GETTING_PRODUCTS, FIRTS_RENDER_PUTHNAME, FIND_TO_NAME_PATHNAME} from './listActions';


const list =  {
    products: [],
    productsFilter: [],
    productsFind: [],
    productsPuthname: [],
    productsPuthnameFind: [],
};

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
