import React from "react";
import Themes from "./Themes";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  const darkColor = props.theme.dark;
  const themeMode = props.theme.mode;

  return (
    <div>
      {/* <nav className="navbar navbar-expand-lg" data-bs-theme={props.mode}> */}
      <nav
        className="navbar navbar-expand-lg"
        style={{
          backgroundColor: darkColor,
        }}
      >
        <div className="container-fluid">
          <Link
            className="navbar-brand"
            to="/"
            style={{ color: themeMode === "light" ? "black" : "white" }}
          >
            {props.title}
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse"
            id="navbarSupportedContent"
            style={{ color: themeMode === "light" ? "black" : "white" }}
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/"
                  style={{ color: themeMode === "light" ? "black" : "white" }}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/about"
                  style={{ color: themeMode === "light" ? "black" : "white" }}
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Themes
                  mode={props.mode}
                  handleThemeChange={props.handleThemeChange}
                  handleModeChange={props.handleModeChange}
                  theme={props.theme}
                />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
