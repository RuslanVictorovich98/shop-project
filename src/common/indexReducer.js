import {combineReducers} from 'redux';
import {listReducer, mainList, liftFilter} from '../lists/listReducers';



const allReducers = combineReducers ({
    list: listReducer,
    main: mainList,
    listFilter: liftFilter
});

export default allReducers;