import React, {Component} from 'react';
import ItemsList from '../components/ItemsList';
import ItemForm from "../components/ItemForm";

import {connect} from 'react-redux';
import {addItem, getHasError, getIsLoading, getItems, ITEMS_URL, itemsFetchData} from '../items/index';

class ItemsContainer extends Component {

    componentDidMount() {
        this.props.fetchData(ITEMS_URL);
    }

    render() {
        const {items, isLoading, hasError, handleSubmit} = this.props;

        if (isLoading) {
            return <span>Loading...</span>;
        }
        if (hasError) {
            return <span>Error</span>;
        }

        return <div className="row">
            <div className="col-3">
                <ItemForm onSubmit={handleSubmit}/>
            </div>
            <div className="col">
                <ItemsList items={items}/>
            </div>
        </div>;
    }
}

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
            console.log('*******************************\n');
            console.log(item.itemImg);
            console.log(item.itemImg);
            console.log('*******************************\n');
            var fd = new FormData();
            fd.append('file', item.itemImg);
            let req = {name: item.name};
            if (item.itemImg) {
                req.itemImg = item.itemImg;
            }

            dispatch(addItem(req));
        }
    };
};

const Connected = connect(
    mapStateToProps,
    mapDispatchToProps
)(ItemsContainer);

export default Connected;