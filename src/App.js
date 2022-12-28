import { useState, useMemo } from "react";

const calculation = (number) => {
  console.log("Render Count");
  for (let i = 0; i < 1000000; i++) {
    number += 1;
  }

  return number;
};

export default function App() {
  const [count, setCount] = useState(0);
  const [todo, setTodo] = useState([]);
  const heavyCalculation = useMemo(() => calculation(count), [count]);

  const increase = () => {
    setCount((preCount) => preCount + 1);
  };

  const addToDo = () => {
    setTodo((todo) => {
      return [...todo, { item: "New List added" }];
    });
  };

  return (
    <div>
      <h1>useMemo</h1>
      <h4>Count:{count}</h4>
      <button onClick={increase}>Increase</button>
      <hr />
      <h2>Expensie/heavy Calculation</h2>
      <button onClick={addToDo}>Add</button>
      {todo.map((t, index) => {
        return <p key={index}>{`${t.item} - ${index}`}</p>;
      })}

      <h1>{heavyCalculation}</h1>
    </div>
  );
}
