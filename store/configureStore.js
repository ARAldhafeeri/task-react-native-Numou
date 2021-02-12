import { createStore, combineReducers } from 'redux';
import {reducer} from './reducers/reducer';

// ue use combineReducers if we have multiple reducers like this
// combineReducers({ reducer2: rducer1, reducer2: reducer2})
const rootReducer = combineReducers(
{ randomUser: reducer }
);

export default rootReducer;