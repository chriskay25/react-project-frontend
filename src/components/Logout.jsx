import React from "react";
import logoutIcon from "../assets/logout-1.png";

const Logout = ({ handleLogout }) => {
  return (
    <form className="user-logout" onSubmit={handleLogout}>
      <input type="submit" value="Logout" />
      <img src={logoutIcon} alt="logout-icon" />
    </form>
  );
};

export default Logout;
