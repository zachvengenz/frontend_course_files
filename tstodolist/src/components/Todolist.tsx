import React, { useState } from "react";
import TodoTable from "./Todotable";
import { ITodo } from "./interfaces";

function Todolist() {
  const [todo, setTodo] = useState<ITodo>({
    desc: "",
    date: "",
    prio: "",
  } as ITodo);
  const [todos, setTodos] = useState<Array<ITodo>>([]);

  const addTodo = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTodos([todo, ...todos]);
  };

  const inputChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo({ ...todo, [e.target.name]: e.target.value });
  };

  const deleteTodo = (row: number) => {
    setTodos(todos.filter((_, i) => row !== i));
  };

  return (
    <div className="Todolist">
      <form onSubmit={addTodo}>
        <input
          type="text"
          placeholder="Description"
          name="desc"
          value={todo.desc}
          onChange={inputChanged}
        />
        <input
          type="text"
          placeholder="Date"
          name="date"
          value={todo.date}
          onChange={inputChanged}
        />
        <input
          type="text"
          placeholder="Priority"
          name="prio"
          value={todo.prio}
          onChange={inputChanged}
        />
        <button value="submit">Add</button>
      </form>
      <TodoTable todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
}

export default Todolist;
