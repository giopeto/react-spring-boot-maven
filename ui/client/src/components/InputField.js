import React from 'react';

const InputField = ({input, label, type, placeholder='', meta: { touched, error, warning }}) =>
    <div>
        {/*Render input*/}
        <label>{label}</label>
        <div className="input-group">
            <input {...input} type={type} placeholder={placeholder} />
        </div>
        {/*Render error*/}
        {touched && error &&
        <div className="alert alert-danger" role="alert">
            {error}
        </div>}

    </div>;

export default InputField;