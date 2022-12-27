import { useContext } from "react";
import Context from "./Context";
import "./App.css";

function Form() {
  const { inputValue, setInputValue, lists, setLists, isEditMode, editLists } =
    useContext(Context);

  function submitHandler(e) {
    e.preventDefault();

    setLists([...lists, { id: Math.random().toString(), item: inputValue }]);
    setInputValue("");
  }

  function editSubmitHandler(e) {
    e.preventDefault();
    setLists(
      lists.map((list) => {
        if (list.id === editLists) {
          return { ...list, item: inputValue };
        }
        return list;
      })
    );
    setInputValue("");
  }

  return (
    <div>
      {isEditMode ? (
        <form onSubmit={editSubmitHandler}>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="form-control"
          />
          <button type="submit" className="btn">
            Update
          </button>
        </form>
      ) : (
        <form onSubmit={submitHandler}>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="form-control"
          />
          <button type="submit" className="btn">
            Submit
          </button>
        </form>
      )}
    </div>
  );
}

export default Form;
