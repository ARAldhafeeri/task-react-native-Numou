import React from "react";
import { registerRootComponent } from 'expo';
import { createStore, applyMiddleware, combineReducers } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { reducer } from "./store/reducers/reducers"
import App from './App';
const store = createStore(reducer, applyMiddleware(thunk));
const app = () => (
    <Provider store={store}>
    <App />
    </Provider>
)
// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in the Expo client or in a native build,
// the environment is set up appropriately
registerRootComponent(app);
