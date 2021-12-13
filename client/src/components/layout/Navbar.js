import React from "react";
import { Link } from "react-router-dom";
import classes from "./Navbar.module.scss";

const Navbar = (props) => {
  const { user } = props;

  const logoutHandler = () => {
    window.open("http://localhost:5000/auth/logout", "_self");
  };

  return (
    <header className={classes["main-header"]}>
      <span>
        <Link className={classes.title} to="/">
          Passport-demo
        </Link>
      </span>

      <nav className={classes.navbar}>
        {user && (
          <span className={classes.avatar}>
            <img src={user.photos[0].value} alt="avatar" />
          </span>
        )}

        <ul className={classes.navlist}>
          {user ? (
            <>
              <li>{user.displayName}</li>
              <Link className={classes.logout} to="/" onClick={logoutHandler}>
                Logout
              </Link>
            </>
          ) : (
            <>
              <Link className={classes.login} to="/login">
                Login
              </Link>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
