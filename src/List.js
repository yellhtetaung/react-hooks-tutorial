import { useContext } from "react";
import Context from "./Context";

function List() {
  const { lists, setLists, setIsEditMode, setEditLists, setInputValue } =
    useContext(Context);

  function deleteItem(id) {
    setLists(lists.filter((list) => list.id !== id));
  }

  function editItem(list) {
    setIsEditMode(true);
    setEditLists(list.id);
    setInputValue(list.item);
  }

  return (
    <div>
      <ul>
        {lists.map((list) => {
          return (
            <li key={list.id}>
              {list.item}
              <button onClick={() => editItem(list)}>edit</button>
              <button onClick={() => deleteItem(list.id)}>delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default List;
