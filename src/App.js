import { useState, useRef, useEffect } from "react";

export default function App() {
  const [text, setText] = useState("");
  const inputRef = useRef(null);

  function handleForm(e) {
    e.preventDefault();
    setText(inputRef.current.value);
  }

  return (
    <div>
      <h1>useRef</h1>
      <form onSubmit={handleForm}>
        <input type="text" ref={inputRef} placeholder="Enter your text" />
        <button type="submit">Submit</button>
        <h4>{text}</h4>
      </form>
    </div>
  );
}
