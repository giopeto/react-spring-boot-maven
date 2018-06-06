import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {rootReducer} from '../../items';

const store = createStore(rootReducer, applyMiddleware(thunk));

store.subscribe(() => {
    console.log('store.getState: ', store.getState());
});

export default store;


