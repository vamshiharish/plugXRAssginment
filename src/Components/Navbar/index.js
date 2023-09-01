import React from "react";
import "./index.css";

const Navbar = ({ onShowResizable }) => {
  const navbarButton = () => {
    onShowResizable()
  };

  return (
    <nav className="nav-container">
      <button type="button" className="nav-button" onClick={navbarButton}>
        Save
      </button>
    </nav>
  );
};

export default Navbar;
