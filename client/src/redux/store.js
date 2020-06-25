import {createStore, combineReducers} from 'redux';
import { applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import viewReducer from "./reducer/view-reducer";
import {compose} from 'redux';


let reducers = combineReducers({
    view:viewReducer
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;




export default store; 