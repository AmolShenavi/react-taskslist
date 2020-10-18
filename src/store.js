import { combineReducers, createStore, applyMiddleware } from 'redux';
import  MessageReducer from './reducer/message';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    message: MessageReducer,
});


export default createStore(rootReducer, applyMiddleware(thunk));