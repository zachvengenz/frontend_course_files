import React, { useState, useRef } from "react";
import { AgGridReact } from "ag-grid-react";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-material.css";

// code formatted with Prettier

function Todolist() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState({
    description: "",
    date: "",
    priority: "",
  });
  const gridRef = useRef();

  const [columnDefs] = useState([
    {
      field: "description",
      sortable: true,
      filter: true,
      floatingFilter: true,
      cellStyle: { color: "white", background: "black" },
    },
    { field: "date", sortable: true, filter: true, floatingFilter: true },
    {
      field: "priority",
      sortable: true,
      filter: true,
      floatingFilter: true,
      cellStyle: (params) =>
        params.value.toLowerCase() === "high"
          ? { color: "red", background: "black" }
          : { color: "white", background: "black" },
    },
  ]);

  const addTodo = (e) => {
    e.preventDefault();
    setTodos([todo, ...todos]);
  };
  const deleteTodo = () => {
    if (gridRef.current.getSelectedNodes().length > 0) {
      setTodos(
        todos.filter(
          (todo, index) =>
            index !== gridRef.current.getSelectedNodes()[0].childIndex
        )
      );
    } else {
      alert("No rows selected");
    }
  };

  const inputChanged = (e) => {
    setTodo({ ...todo, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <header>List of things to do</header>
      <form onSubmit={addTodo}>
        Description:&nbsp;
        <input
          type="text"
          name="description"
          value={todo.description}
          onChange={inputChanged}
        />
        &nbsp; Date:&nbsp;
        <input
          type="date"
          name="date"
          value={todo.date}
          onChange={inputChanged}
        />
        &nbsp; Priority:&nbsp;
        <input
          type="text"
          name="priority"
          value={todo.priority}
          onChange={inputChanged}
        />
        &nbsp;
        <input type="submit" value="Add"></input>
        <input type="button" value="Delete" onClick={deleteTodo}></input>
      </form>
      <div
        className="ag-theme-material"
        style={{ margin: "auto", width: "50%", height: 600 }}
      >
        <AgGridReact
          ref={gridRef}
          onGridReady={(params) => (gridRef.current = params.api)}
          rowSelection="single"
          rowData={todos}
          columnDefs={columnDefs}
          animateRows={true}
        />
      </div>
    </div>
  );
}
export default Todolist;
