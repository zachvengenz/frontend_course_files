import React, { useState, useRef } from "react";
import { AgGridReact } from "ag-grid-react";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-material.css";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
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
    date: null,
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
      cellStyle: { color: "black", background: "white" },
    },
    {
      field: "date",
      sortable: true,
      filter: true,
      floatingFilter: true,
      cellStyle: { color: "black", background: "lightgray" },
    },
    {
      field: "priority",
      sortable: true,
      filter: true,
      floatingFilter: true,
      cellStyle: (params) =>
        params.value.toLowerCase() === "high"
          ? { color: "black", background: "red" }
          : params.value.toLowerCase() === "mid"
          ? { color: "black", background: "yellow" }
          : { color: "black", background: "white" },
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

  const handleChange = (newValue) => {
    setTodo({ ...todo, date: newValue.format("ll") });
  };

  return (
    <div>
      <LocalizationProvider dateAdapter={AdapterMoment}>
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
          <DesktopDatePicker
            label="dd/mm/yyyy"
            inputFormat="DD/MM/YYYY"
            value={todo.date}
            onChange={handleChange}
            renderInput={(date) => <TextField {...date} />}
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
      </LocalizationProvider>
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
        autoHideDuration={5000}
        message="Todo deleted"
        onClose={() => setOpen(false)}
      />
    </div>
  );
}
export default Todolist;
