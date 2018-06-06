// Types

export const ADD_ITEM = 'ADD_ITEM';
export const ITEMS_HAS_ERROR = 'ITEMS_HAS_ERROR';
export const ITEMS_IS_LOADING = 'ITEMS_IS_LOADING';
export const ITEMS_FETCH_DATA_SUCCESS = 'ITEMS_FETCH_DATA_SUCCESS';


// Selectors

export const getItems = (state) => state.items;
export const getHasError = (state) => state.hasError;
export const getIsLoading = (state) => state.isLoading;

// Reducers

const initialState = {
    items: [],
    hasError: false,
    isLoading: true
};

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ITEMS_FETCH_DATA_SUCCESS:
            return Object.assign({}, state, action);
        case ITEMS_IS_LOADING:
            return Object.assign({}, state, action);
        case ITEMS_HAS_ERROR:
            return Object.assign({}, state, {... action, isLoading: false});
        case ADD_ITEM:
            return { ...state, items: [...state.items, action.payload] };
        default:
            return state;
    }
};


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


export function addItem(name) {
    return (dispatch, getState) => {
        return {
            type: ADD_ITEM,
            payload: {id: getItems(getState()).length + 1, name}
        };
    }
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