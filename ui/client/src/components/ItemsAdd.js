import React from 'react';
import { connect } from 'react-redux';
import {addItem} from "../items/index";

let itemNameInput = '';

let ItemsAdd = ({ dispatch }) => (
    <div>

        <label htmlFor="message">Name</label>
        <input type="text" name="name" ref={node=> {itemNameInput = node;}} />

        <button onClick={()=> {
            if (!itemNameInput.value) return;

            console.log(addItem(itemNameInput.value));

            dispatch(addItem(itemNameInput.value));

            itemNameInput.value = '';
        }}>Add item</button>


    </div>
);

ItemsAdd = connect()(ItemsAdd);
export default ItemsAdd;