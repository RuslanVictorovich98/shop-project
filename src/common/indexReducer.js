import {combineReducers} from 'redux';
import {listReducer, mainList, liftFilter, firstProductsPuthname, firstProductsPuthnameFind, saveFindData} from '../ducks/lists';

const allReducers = combineReducers ({
    list: listReducer,
    main: mainList,
    saveFindData: saveFindData,
    listFilter: liftFilter, 
    firstProductsPuthname: firstProductsPuthname,
    firstProductsPuthnameFind: firstProductsPuthnameFind,
});

export default allReducers;