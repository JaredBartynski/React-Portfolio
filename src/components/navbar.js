import React from "react";

function navbar() {
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
              <a class="nav-link" href="index.html">
                About
              </a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="portfolio.html">
                Portfolio <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="contact.html">
                Contact
              </a>
            </li>
          </ul>
        </section>
      </nav>
      ;
    </>
  );
}

export default navbar;
