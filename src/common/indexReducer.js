import {combineReducers} from 'redux';
import {mainList} from '../ducks/lists';

const allReducers = combineReducers ({
    mainList,
});

export default allReducers;