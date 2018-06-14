export const ITEMS_URL = 'http://localhost:8090/items';


// Types
export const ADD_ITEM = 'ADD_ITEM';
export const ITEMS_HAS_ERROR = 'ITEMS_HAS_ERROR';
export const ITEMS_IS_LOADING = 'ITEMS_IS_LOADING';
export const ITEMS_FETCH_DATA_SUCCESS = 'ITEMS_FETCH_DATA_SUCCESS';


// Selectors
export const getItems = (state) => state.items.items;
export const getHasError = (state) => state.items.hasError;
export const getIsLoading = (state) => state.items.isLoading;


// Reducers
const initialState = {
    items: [],
    hasError: false,
    isLoading: true
};

const itemReducers = (state = initialState, action) => {
    console.log('rootReducer type: ', action);
    switch (action.type) {
        case ITEMS_FETCH_DATA_SUCCESS:
            console.log('ITEMS_FETCH_DATA_SUCCESS');
            return Object.assign({}, state, action);
        case ITEMS_IS_LOADING:
            return Object.assign({}, state, action);
        case ITEMS_HAS_ERROR:
            return Object.assign({}, state, {...action, isLoading: false});
        case ADD_ITEM:
            console.log('ADD_ITEM: ', state);
            console.log('ADD_ITEM: ', { ...state, items: [...state.items, action.payload] });
            return {...state, items: [...state.items, action.payload]};
        default:
            return state;
    }
};

export default itemReducers;

// Actions
export function itemsHasError (bool) {
    return {
        type: ITEMS_HAS_ERROR,
        hasError: bool
    };
}

export function itemsIsLoading (bool) {
    return {
        type: ITEMS_IS_LOADING,
        isLoading: bool
    };
}

export function itemsFetchDataSuccess (items) {
    return {
        type: ITEMS_FETCH_DATA_SUCCESS,
        items
    };
}

export function itemAdd (payload) {
    return {
        type: ADD_ITEM,
        payload
    };
}

export function addItem(name) {
    return (dispatch, getState) => {
        let item = {id: getItems(getState()).length + 1, name};

        fetch(ITEMS_URL, {
            method: 'POST',
            body: JSON.stringify(item),
            headers:{
                'Content-Type': 'application/json'
            }
        })
            .then((response) => {
                if (!response.ok) {
                    console.log(response);
                    throw Error(response.statusText);
                }

                dispatch(itemAdd(item));
                return response;
            })
            .then((response) => response.json())
            .catch(() => dispatch(itemsHasError(true)));
    };

}


export function itemsFetchData (url) {
    return (dispatch) => {
        dispatch(itemsIsLoading(true));

        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    console.log(response);
                    throw Error(response.statusText);
                }

                dispatch(itemsIsLoading(false));
                return response;
            })
            .then((response) => response.json())
            .then((items) => dispatch(itemsFetchDataSuccess(items)))
            .catch(() => dispatch(itemsHasError(true)));
    };
}