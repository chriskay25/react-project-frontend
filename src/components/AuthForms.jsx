import React from "react";
import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";
import { Route, Link, Switch, useLocation } from "react-router-dom";

const AuthForms = () => {
  let location = useLocation();

  return (
    <div className="auth-forms">
      <div className={location.pathname === "/auth" ? "form-links" : "hidden"}>
        <Link to="/auth/signup">Sign Up</Link>
        <Link to="/auth/login">Log In</Link>
      </div>
      <Switch>
        <Route exact path="/auth/signup" component={SignupForm} />
        <Route exact path="/auth/login" component={LoginForm} />
      </Switch>
    </div>
  );
};

export default AuthForms;
