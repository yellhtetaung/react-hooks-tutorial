import { memo } from "react";

const ToDo = memo(({ todo, deleteItem }) => {
  console.log("component is render");

  return (
    <div>
      <h1>To Do List</h1>
      <ul>
        {todo.map((item) => {
          return (
            <li key={item.id}>
              {item.title}
              <button onClick={() => deleteItem(item.id)}>delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
});

export default ToDo;
