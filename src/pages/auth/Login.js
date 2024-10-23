import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import googleIcon from "../../assets/google-icon.svg";
import { useAuth } from "../../contexts/AuthContext";
import { TextInput, PasswordInput, Button, Checkbox } from "components";
import "styles/auth/Login.css";


const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState('devilgirl@genius.com');
  const [password, setPassword] = useState('madewithlove');
  const [rememberMe, setRememberMe] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleCheckboxChange = () => {
    setRememberMe(prev => !prev);
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validatePassword = (password) => password.length >= 6;

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmailError("");
    setPasswordError("");

    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address.");
      return;
    }

    if (!validatePassword(password)) {
      setPasswordError("Password must be at least 6 characters long.");
      return;
    }

    const success = login(email, password);
    if (success) {
      navigate("/dashboard");
    } else {
      alert("Invalid email or password. Please try again.");
    }
  };

  return (
    <div className="container">
      <div className="left-section">
        <div className="quote-container">
          <p className="quote-text">
            Those people who develop the ability to continuously acquire new and
            better forms of knowledge that they can apply to their work and to
            their lives will be the movers and shakers in our society for the
            indefinite future.
          </p>
          <span className="quote-author">- Brian Tracy</span>
        </div>
      </div>

      <div className="right-section">
        <div className="login-container">
          <h2>Login to your Account</h2>
          <p>with your registered Email Address</p>

          <form onSubmit={handleSubmit}>
            <TextInput
              id="email"
              label="Email address*"
              type="email"
              placeholder="Enter email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={emailError}
            />
            <PasswordInput
              id="password"
              label="Enter password*"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              error={passwordError} // Pass error message
            />
            <Checkbox
              id="remember"
              label="Remember my password"
              checked={rememberMe}
              onChange={handleCheckboxChange}
            />
            <Button className="login-btn" type="submit">
              Login
            </Button>
            <div className="separator">or</div>
            <Button className="google-login-btn" type="button">
              <img src={googleIcon} alt="Google icon" className="google-icon" />
              <span className="google-text">Login with Google</span>
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
