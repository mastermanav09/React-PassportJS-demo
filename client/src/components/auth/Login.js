import React from "react";
import classes from "./Login.module.scss";

const Login = () => {
  const googleAuthHandler = () => {
    window.open("http://localhost:5000/auth/google", "_self");
  };

  const githubAuthHandler = () => {
    window.open("http://localhost:5000/auth/github", "_self");
  };

  const facebookAuthHandler = () => {
    window.open("http://localhost:5000/auth/facebook", "_self");
  };

  return (
    <div className={classes.login}>
      <h1 className={classes.loginTitle}>Choose a Login Method</h1>
      <div className={classes.wrapper}>
        <div className={classes.left}>
          <div
            className={`${classes.loginButton} ${classes.google}`}
            onClick={googleAuthHandler}
          >
            <img
              src="/images/google.png"
              alt="google-icon"
              className={classes.icon}
            />
            Google
          </div>
          <div
            className={`${classes.loginButton} ${classes.facebook}`}
            onClick={facebookAuthHandler}
          >
            <img
              src="/images/facebook.png"
              alt="facebook-icon"
              className={classes.icon}
            />
            Facebook
          </div>
          <div
            onClick={githubAuthHandler}
            className={`${classes.loginButton} ${classes.github}`}
          >
            <img
              src="/images/github.png"
              alt="github-icon"
              className={classes.icon}
            />
            Github
          </div>
        </div>
        <div className={classes.center}>
          <div className={classes.line} />
          <div className={classes.or}>OR</div>
        </div>
        <div className={classes.right}>
          <input type="text" placeholder="Username" />
          <input type="text" placeholder="Password" />
          <button className={classes.submit}>Login</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
