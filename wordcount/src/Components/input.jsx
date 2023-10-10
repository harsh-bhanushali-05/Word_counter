import { useState } from "react";
import "./Input.css"; // Import the CSS file

function Input() {
  const [words, setWord] = useState("");

  function change(value) {
    console.log(value);
    setWord(value);
  }

  return (
    <div className="input-container"> 
      <textarea
        type="textArea"
        onChange={(e) => {
          change(e.target.value);
        }}
        value={words}
        className="input-field"
      />
      <p>Number of characters : {words.length}</p>
      <p>Number of words : {words.split(" ").length - 1}</p>
      <p>Reading Time  : {Math.round((words.split(" ").length - 1) / 225 )} Sec </p>
      <p>Speaking Time  : {Math.round((words.split(" ").length - 1) / 150 )} Sec </p>
    </div>
  );
}

export default Input;
