import React from "react";
import Logout from "./Logout";
import Logo from "./Logo";
import Menu from "./Menu";
import { userLogout } from "../actions/userLogout";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

const NavBar = ({ currentUser }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const handleLogout = (event) => {
    event.preventDefault();
    history.push("/");
    dispatch(userLogout());
  };

  return (
    <nav className="nav-bar">
      {currentUser && <Menu />}
      <Logo currentUser={currentUser} />
      {currentUser && <Logout handleLogout={handleLogout} />}
    </nav>
  );
};

export default NavBar;
