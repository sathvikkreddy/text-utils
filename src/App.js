import React, { useState } from "react";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import About from "./components/About";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [alert, setAlert] = useState(null);
  const [theme, setTheme] = useState({
    color: "default",
    mode: "light",
    light: "white",
    dark: "#e0e0e0",
  });

  const handleThemeChange = (color, mode) => {
    const color_mode = color + "_" + mode;
    switch (color_mode) {
      case "default_light":
        setTheme({
          ...theme,
          color: "default",
          light: "white",
          dark: "#e6e6e6",
          mode: "light",
        });
        document.body.style.backgroundColor = "white";
        break;
      case "blue_light":
        setTheme({
          ...theme,
          color: "blue",
          light: "#c7ecff",
          dark: "#4cb6fc",
          mode: "light",
        });
        document.body.style.backgroundColor = "#c7ecff";
        break;
      case "green_light":
        setTheme({
          ...theme,
          color: "green",
          light: "#d2faca",
          dark: "#76fc5b",
          mode: "light",
        });
        document.body.style.backgroundColor = "#d2faca";
        break;
      case "default_dark":
        setTheme({
          ...theme,
          color: "default",
          light: "#2b2b2b",
          dark: "black",
          mode: "dark",
        });
        document.body.style.backgroundColor = "#2b2b2b";
        break;
      case "blue_dark":
        setTheme({
          ...theme,
          color: "blue",
          light: "#365c70",
          dark: "#05496b",
          mode: "dark",
        });
        document.body.style.backgroundColor = "#365c70";
        break;
      case "green_dark":
        setTheme({
          ...theme,
          color: "green",
          light: "#425c43",
          dark: "#065c08",
          mode: "dark",
        });
        document.body.style.backgroundColor = "#425c43";
        break;
      default:
        break;
    }
    console.log(`color: ${color}, mode: ${mode}`);
    //raiseAlert(mode === "dark" ? "light mode enabled" : "dark mode enabled");
  };

  const raiseAlert = (message) => {
    const newAlert = { message };
    setAlert(newAlert);
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  return (
    <>
      <Router>
        <Navbar
          title="TextUtils"
          theme={theme}
          raiseAlert={raiseAlert}
          handleThemeChange={handleThemeChange}
        />
        <Alert alert={alert} />
        <div className="container">
          <Routes>
            <Route
              path="/"
              element={
                <TextForm
                  title="TextForm"
                  theme={theme}
                  raiseAlert={raiseAlert}
                />
              }
            />
            <Route path="/about" element={<About theme={theme} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
