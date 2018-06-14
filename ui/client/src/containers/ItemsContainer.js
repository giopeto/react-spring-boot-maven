import React, {Component} from 'react';
import ItemsList from '../components/ItemsList';
import ItemForm from "../components/ItemForm";

import { connect } from 'react-redux';
import {addItem, getHasError, getIsLoading, getItems, ITEMS_URL, itemsFetchData} from '../items/index';

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
        },
        handleSubmit: (item) => {
            if (!item.name) return;
            dispatch(addItem(item.name));
            item.name = '';
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
        const {items, isLoading, hasError, handleSubmit} = this.props;

        if (isLoading) {
            return <span>Loading...</span>;
        }
        if (hasError) {
            return <span>Error</span>;
        }

        return <div className="row">
            <div className="col-3">
                <ItemForm onSubmit={handleSubmit} />
            </div>
            <div className="col">
                <ItemsList items={items} />
            </div>
        </div>;
    }
}

const Connected = connect(mapStateToProps, mapDispatchToProps)(ItemsContainer);
export default Connected;