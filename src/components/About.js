import React from "react";

export default function About(props) {
  let mode = props.theme.mode;
  return (
    <div className="my-3">
      <h1 style={{ color: mode === "light" ? "black" : "white" }}>
        This is About
      </h1>
    </div>
  );
}
