import React, { useState, useRef } from "react";
import { AgGridReact } from "ag-grid-react";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-material.css";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import Stack from "@mui/material/Stack";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import Snackbar from "@mui/material/Snackbar";

// code formatted with Prettier

function Todolist() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState({
    description: "",
    date: "",
    priority: "",
  });
  const [open, setOpen] = useState(false);
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
      setOpen(true);
    } else {
      alert("No rows selected");
    }
  };

  const inputChanged = (e) => {
    setTodo({ ...todo, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h2>Todo list</h2>
      <Stack
        direction="row"
        spacing={2}
        alignItems="center"
        justifyContent="center"
      >
        Description:&nbsp;
        <TextField
          label="Todo"
          name="description"
          value={todo.description}
          onChange={inputChanged}
        />
        &nbsp; Date:&nbsp;
        <TextField
          label="Date"
          name="date"
          value={todo.date}
          onChange={inputChanged}
        />
        &nbsp; Priority:&nbsp;
        <TextField
          label="Priority"
          name="priority"
          value={todo.priority}
          onChange={inputChanged}
        />
        &nbsp;
        <Button
          type="button"
          variant="contained"
          color="success"
          onClick={addTodo}
          endIcon={<AddIcon />}
        >
          Add
        </Button>
        <Button
          type="button"
          variant="contained"
          color="error"
          onClick={deleteTodo}
          endIcon={<DeleteIcon />}
        >
          Delete
        </Button>
      </Stack>
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
      <Snackbar
        open={open}
        autoHideDuration={3000}
        message="Todo deleted"
        onClose={() => setOpen(false)}
      />
    </div>
  );
}
export default Todolist;
