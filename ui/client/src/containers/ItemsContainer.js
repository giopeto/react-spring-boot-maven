import React, {Component} from 'react';
import ItemsList from '../components/ItemsList';
import ItemsAdd from "../components/ItemsAdd";

import { connect } from 'react-redux';
import {getHasError, getIsLoading, getItems, ITEMS_URL, itemsFetchData} from '../items/index';

const mapStateToProps = state => {
    return {
        items: getItems(state),
        hasError: getHasError(state),
        isLoading: getIsLoading(state)
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => {
            dispatch(itemsFetchData(url));
        }
    };
};

class ItemsContainer extends Component {

    componentDidMount() {
        this.props.fetchData(ITEMS_URL);
    }

    render() {
        console.log('\n ******** ItemsContainer render ******** \n');
        console.log(this.props);
        console.log(this.state);
        const {items, isLoading, hasError} = this.props;

        if (isLoading) {
            return <span>Loading...</span>;
        }
        if (hasError) {
            return <span>Error</span>;
        }

        return <div>
            <ItemsList items={items} />
            <ItemsAdd />
        </div>;
    }
}

const Connected = connect(mapStateToProps, mapDispatchToProps)(ItemsContainer);
export default Connected;