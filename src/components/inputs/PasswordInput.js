import React, { useState } from "react";

const PasswordInput = ({ id, label, placeholder, value, onChange, error }) => {
  const [isPasswordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible((prev) => !prev);
  };

  return (
    <div className="form-group">
      <label htmlFor={id}>{label}</label>
      <input
        type={isPasswordVisible ? "text" : "password"}
        id={id}
        placeholder={placeholder}
        value={value} // Controlled input
        onChange={onChange} // Handle change
        className={`form-control ${error ? "border-red" : ""}`} // Add red border if there's an error
        autoComplete="current-password"
      />
      {error && <small className="text-danger">{error}</small>}{" "}
      {/* Show error message */}
      <span className="show-password" onClick={togglePasswordVisibility}>
        {isPasswordVisible ? "Hide" : "Show"}
      </span>
    </div>
  );
};

export default PasswordInput;
