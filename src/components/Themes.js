import React from "react";

export default function Themes(props) {
  const themeColor = props.theme.color;
  const themeMode = props.theme.mode;
  const themeLightColor = props.theme.light;

  return (
    <div className="nav-item dropdown">
      <button
        className="nav-link dropdown-toggle"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        style={{ color: themeMode === "light" ? "black" : "white" }}
      >
        Themes
      </button>
      <ul
        className="dropdown-menu "
        style={{
          backgroundColor: themeLightColor,
        }}
      >
        <li>
          <div className="form-check form-switch mx-2 my-2">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onChange={() =>
                props.handleThemeChange(
                  themeColor,
                  themeMode === "dark" ? "light" : "dark"
                )
              }
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
              style={{ color: themeMode === "light" ? "black" : "white" }}
            >
              Dark Mode
            </label>
          </div>
        </li>
        <li>
          <button
            type="button"
            className="btn "
            onClick={() => props.handleThemeChange("default", themeMode)}
            style={{ color: themeMode === "light" ? "black" : "white" }}
          >
            Default
          </button>
        </li>
        <li>
          <button
            type="button"
            className="btn "
            onClick={() => {
              props.handleThemeChange("blue", themeMode);
            }}
            style={{ color: themeMode === "light" ? "black" : "white" }}
          >
            Blue
          </button>
        </li>
        <li>
          <button
            type="button"
            className="btn "
            onClick={() => props.handleThemeChange("green", themeMode)}
            style={{ color: themeMode === "light" ? "black" : "white" }}
          >
            Green
          </button>
        </li>
      </ul>
    </div>
  );
}
