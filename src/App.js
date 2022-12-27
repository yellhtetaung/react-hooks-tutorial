import { useState } from "react";
import Context from "./Context";
import Form from "./Form";
import List from "./List";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [lists, setLists] = useState([]);
  const [isEditMode, setIsEditMode] = useState(false);
  const [editLists, setEditLists] = useState("");

  return (
    <Context.Provider
      value={{
        inputValue,
        setInputValue,
        lists,
        setLists,
        isEditMode,
        setIsEditMode,
        editLists,
        setEditLists,
      }}
    >
      Context Api
      <Form />
      <List />
    </Context.Provider>
  );
}

export default App;
