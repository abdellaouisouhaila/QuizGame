import React from 'react';
import './styles.css';
import google from './assets/google.png';
const signin = () => {
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
                <div className="form-group">
                    <label for="email">Email address*</label>
                    <input type="email" id="email" placeholder="Enter email address" />
                </div>

                <div className="form-group">
                    <label for="password">Enter password*</label>
                    <input type="password" id="password" placeholder="Password" />
                    <span className="show-password">show</span>
                </div>

                <div className="form-group checkbox">
                    <input type="checkbox" id="remember" />
                    <label for="remember">Remember my password</label>
                </div>

                <button className="login-btn">Login</button>

                <div className="separator">or</div>

                <button className="google-login-btn">
                    <img src={google} alt="Google icon" />
                    Login with Google
                </button>
            </form>
        </div>
    </div>
</div>

  )
}

export default signin
   
   
   
