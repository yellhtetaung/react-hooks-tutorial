import { useState, useReducer } from "react";

const intialValue = {
  people: [],
};

function reducer(person, action) {
  if (action.type === "INPUT_ADDED") {
    const newPeople = [...person.people, action.payload];
    return { ...person, people: newPeople };
  }
}

function App() {
  const [inputValue, setInputValue] = useState("");

  const [person, dispatch] = useReducer(reducer, intialValue);

  function submitHandler(e) {
    e.preventDefault();

    const newItem = { id: Math.random().toString(), name: inputValue };

    dispatch({ type: "INPUT_ADDED", payload: newItem });
    setInputValue("");
  }

  return (
    <div>
      <h1>Form</h1>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter your text"
        />
        <button type="submit">Submit</button>
      </form>
      <ul>
        {person.people.map((person) => {
          return <li key={person.id}>{person.name}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;
