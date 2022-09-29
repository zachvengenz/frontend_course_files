import React, {useState} from "react";
import TodoTable from'./TodoTable';


function Todolist() {
    const [todos, setTodos] = useState([]);
    const [todo, setTodo] = useState({
        description: "",
        date: ""
    });

    const addTodo = (e) => {
        e.preventDefault();
        setTodos([todo, ...todos]);
    }
    const deleteTodo = (row) => {
        setTodos(todos.filter((item, index) => row !== index))
        console.log("Button pressed in " + row)
    }

    const inputChanged = (e) => {
        setTodo({...todo, [e.target.name]: e.target.value});
    }

    return(
        <div><header>List of things to do</header>
            <form onSubmit={addTodo}>
            Description:
            <input
            type="text"
            name="description"
            value={todo.description}
            onChange={inputChanged}
            />
            Date:
            <input
            type="date"
            name="date"
            value={todo.date}
            onChange={inputChanged}
            />
            <input type="submit" value="Add"></input>
            </form>
            <TodoTable todos={todos} deleteTodo={deleteTodo}/>
        </div>
    );
}
export default Todolist;