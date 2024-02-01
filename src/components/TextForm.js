import React, { useState } from "react";

export default function TextForm(props) {
  const [inputText, setInputText] = useState("");
  const [previewText, setPreviewText] = useState("");
  const [wordCount, setWordCount] = useState("0 words");

  const themeLightColor = props.theme.light;
  const darkColor = props.theme.dark;
  const themeMode = props.theme.mode;

  const countWords = (text) => {
    let words = text.split(/\s+/);
    words = words.filter((word) => {
      return !/^ *$/.test(word);
    });
    const count = words.length;
    return count;
  };

  const handleInputTextChange = (event) => {
    setInputText(event.target.value);
    setPreviewText(event.target.value);
    let wc = countWords(event.target.value);
    setWordCount(`${wc} words`);
  };

  const handleUpperCase = () => {
    let newText = inputText.toLocaleUpperCase();
    setPreviewText(newText);
    props.raiseAlert("converted to uppercase");
  };

  return (
    <div
      className={`my-3 text-${themeMode === "light" ? "black" : "white"}`}
      style={{ backgroundColor: themeLightColor }}
    >
      <h1>{props.title}</h1>
      <textarea
        className={`form-control  text-${
          themeMode === "light" ? "black" : "white"
        }`}
        style={{
          backgroundColor: themeLightColor,
        }}
        id="exampleFormControlTextarea1"
        rows="8"
        value={inputText}
        onChange={handleInputTextChange}
        placeholder="enter your text here"
      ></textarea>
      <button
        type="button"
        className="btn m-2"
        style={{
          color: themeMode === "light" ? "black" : "white",
          backgroundColor: darkColor,
        }}
        onClick={handleUpperCase}
      >
        Upper Case
      </button>

      <h1>Analyzed Text</h1>
      <p>{previewText}</p>
      <p>{wordCount}</p>
    </div>
  );
}
