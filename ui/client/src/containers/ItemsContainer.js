import React, {Component} from 'react';
import ItemsList from '../components/ItemsList';
import ItemsAdd from "../components/ItemsAdd";

import { connect } from 'react-redux';
import {getHasError, getIsLoading, getItems, itemsFetchData} from '../items/index';

const mapStateToProps = state => {
    console.log('\n ******** mapStateToProps ******** \n');
    console.log(state, Math.random());
    return {
        items: getItems(state),
        hasError: getHasError(state),
        isLoading: getIsLoading(state)
    };
};

const mapDispatchToProps = (dispatch) => {
    console.log('\n ******** mapDispatchToProps ******** \n');
    return {
        fetchData: (url) => {
            console.log('componentDidMount call this when component is created/updated');
            dispatch(itemsFetchData(url));
        }
    };
};

class ItemsContainer extends Component {

    componentDidMount() {
        console.log('\n componentDidMount')
        this.props.fetchData('http://localhost:8080/items');
    }

    render() {
        console.log('\n ******** ItemsContainer render ******** \n');
        console.log(this.props);
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