import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="App-header">
      <Link to="/">Home</Link>
      <Link to="/random">Random</Link>
      <Link to="/effects">Effects</Link>
      <Link to="/localstorage">Localstorage</Link>
    </header>
  );
};

export default Header;
