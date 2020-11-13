import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <h4>Jared Bartynski</h4>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <section class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <Link to="/about">About</Link>
              {/* <a class="nav-link">
              </a> */}
            </li>
            <li class="nav-item active">
              <Link to="/portfolio">
                Portfolio <span class="sr-only">(current)</span>
              </Link>
              {/* <a class="nav-link">
              </a> */}
            </li>
            <li class="nav-item">
              <Link to="/contact">Contact</Link>
              {/* <a class="nav-link">
              </a> */}
            </li>
          </ul>
        </section>
      </nav>
      ;
    </>
  );
}

export default Navbar;
