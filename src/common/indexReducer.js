import {combineReducers} from 'redux';
// import {listReducer, mainList, liftFilter, firstProductsPuthname,  firstProductsPuthnameFind, saveFindData} from '../ducks/lists';
import {mainList} from '../ducks/lists';

const allReducers = combineReducers ({
    mainList,
});

export default allReducers;