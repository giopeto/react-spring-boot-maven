import React from 'react';
import { Field, reduxForm } from 'redux-form'
import InputField from './InputField';
import FileFileInput from "./FileInputField";

const validate = values => {
    const errors = {};

    if (!values.name) {
        errors.name = 'Name is required';
    }

    return errors;
};

let ItemForm = props => {

    const { handleSubmit, onSubmit } = props;

    return <form onSubmit={ handleSubmit(onSubmit) } encType="multipart/form-data">
        <div className="form-group">
            <Field type="text" name="name" component={InputField} label="Item name" placeholder="Add name" id="item" />
        </div>
        <div className="form-group">
            <Field type="file" name="itemImg" component={FileFileInput} />

        </div>
        <button type="submit" className="btn btn-secondary">Add</button>
    </form>
};

ItemForm = reduxForm({
    form: 'itemForm',
    validate
})(ItemForm);


export default ItemForm;