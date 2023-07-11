import { combineReducers } from 'redux';
import genresReducer from './reducer';

const rootReducer = combineReducers({
    genData : genresReducer
})

export default rootReducer;  