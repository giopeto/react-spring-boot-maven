import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import items from '../../items';
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
    items,
    form: formReducer
})

const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    ));

store.subscribe(() => {
    console.log('store.getState: ', store.getState());
});

export default store;


