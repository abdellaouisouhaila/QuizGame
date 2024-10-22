import React from 'react';

const TextInput = ({ id, label, type, placeholder }) => {
    return (
        <div className="form-group">
            <label htmlFor={id}>{label}</label>
            <input type={type} id={id} placeholder={placeholder} className="form-control" />
        </div>
    );
};

export default TextInput;
