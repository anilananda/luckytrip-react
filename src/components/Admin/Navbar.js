import React from "react";
import { Bs2Square } from "react-icons/bs";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success text-info">
      <Bs2Square className="me-2 m-3" />
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo02"
        aria-controls="navbarTogglerDemo02"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
          <li className="nav-item active">
            <span className="text-dark p-3"> Hello, Mr.Anil</span>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
