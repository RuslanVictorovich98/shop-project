import {combineReducers} from 'redux';
import {listReducer, mainList, liftFilter, firstProductsPuthname, firstProductsPuthnameFind} from '../lists/listReducers';

const allReducers = combineReducers ({
    list: listReducer,
    main: mainList,
    listFilter: liftFilter, 
    firstProductsPuthname: firstProductsPuthname,
    firstProductsPuthnameFind: firstProductsPuthnameFind,
});

export default allReducers;