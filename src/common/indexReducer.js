import {combineReducers} from 'redux';
import {listReducer, mainList} from '../list/listReducers';



const allReducers = combineReducers ({
    list: listReducer,
    main: mainList,
});

export default allReducers;