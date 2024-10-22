import React, { useState } from 'react';
import TextInput from './TextInput';

const PasswordInput = ({ id, label, placeholder }) => {
    const [isPasswordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible((prev) => !prev);
    };

    return (
        <div className="form-group">
            <TextInput
                id={id}
                label={label}
                type={isPasswordVisible ? 'text' : 'password'}
                placeholder={placeholder}
            />
            <span className="show-password" onClick={togglePasswordVisibility}>
                {isPasswordVisible ? 'Hide' : 'Show'}
            </span>
        </div>
    );
};

export default PasswordInput;
