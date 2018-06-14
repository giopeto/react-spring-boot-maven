import React from 'react';
import { Field, reduxForm } from 'redux-form'

//let itemNameInput = '';
/*
let ItemsAdd = ({ handleClick }) => (
    <div>

        <label htmlFor="message">Name</label>
        <input type="text" name="name" ref={node=> {itemNameInput = node;}} />

        <button onClick={() => handleClick(itemNameInput)}>Add item</button>


    </div>
);*/


let ItemForm = props => {
    const { handleSubmit } = props
    return <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="firstName">Name</label>
            <Field name="name" component="input" type="text" />
        </div>
        <button type="submit">Add</button>
    </form>
}

ItemForm = reduxForm({
    // a unique name for the form
    form: 'item'
})(ItemForm)


export default ItemForm;