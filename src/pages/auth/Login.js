import React, { useState } from 'react';
import googleIcon from '../../assets/google-icon.svg';
import '../../styles/auth/Login.css';
import { TextInput, PasswordInput, Button, Checkbox } from 'components';


const Login = () => {

    const [rememberMe, setRememberMe] = useState(false);

    const handleCheckboxChange = () => {
        setRememberMe(!rememberMe);
    };

    return (
        <div className="container">

            <div className="left-section">
                <div className="quote-container">
                    <p className="quote-text">Those people who develop the ability to continuously acquire new and better forms of knowledge that they can apply to their work and to their lives will be the movers and shakers in our society for the indefinite future.</p>
                    <span className="quote-author"> Brian Tracy</span>
                </div>
            </div>

            <div className="right-section">
                <div className="login-container">
                    <h2>Login to your Account</h2>
                    <p>with your registered Email Address</p>

                    <form>
                        <TextInput
                            id="email"
                            label="Email address*"
                            type="email"
                            placeholder="Enter email address"
                        />

                        <PasswordInput
                            id="password"
                            label="Enter password*"
                            placeholder="Password"
                        />

                        <Checkbox
                            id="remember"
                            label="Remember my password"
                            checked={rememberMe}
                            onChange={handleCheckboxChange}
                        />

                        <Button className="login-btn" type="submit">Login</Button>

                        <div className="separator">or</div>

                        <Button className="google-login-btn" type="button">
                            <img src={googleIcon} className="google-icon" />
                            <span className="google-text">Login with Google</span>
                        </Button>
                    </form>
                </div>
            </div>
        </div>

    )
};

export default Login;
