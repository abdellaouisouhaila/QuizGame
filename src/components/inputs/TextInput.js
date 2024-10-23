import React from 'react';

const TextInput = ({ id, label, type, placeholder, value, onChange, error }) => {
    return (
        <div className="form-group">
            <label htmlFor={id}>{label}</label>
            <input 
                type={type} 
                id={id} 
                placeholder={placeholder} 
                value={value}
                onChange={onChange}
                className={`form-control ${error ? 'border-red' : ''}`} 
                autoComplete={id}
            />
            {error && <small className="text-danger">{error}</small>}
        </div>
    );
};


export default TextInput;
