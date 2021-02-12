import { createStore, combineReducers } from 'redux';
import {reducer} from './reducers/reducers';
const rootReducer = combineReducers(
{ randomUser: reducer }
);
const configureStore = () => {
return createStore(rootReducer);
}
export default configureStore;