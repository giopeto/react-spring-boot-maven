import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {rootReducer} from '../../items';

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


