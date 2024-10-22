import React from 'react';

const Button = ({ className, onClick, type = 'button', children }) => {
    return (
        <button className={className} onClick={onClick} type={type}>
            {children}
        </button>
    );
};

export default Button;
