import React, {useState} from "react";


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

    const inputChanged = (e) => {
        setTodo({...todo, [e.target.name]: e.target.value});
    }

    return(
        <div>
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
            <table>
                <tbody>
                    <tr>
                        <th>Description</th>
                        <th>Date</th>
                    </tr>
                    {
                        todos.map((todo, index) =>
                            <tr key={index}>
                                <td>
                                    {todo.description}
                                </td>
                                <td>
                                    {todo.date}
                                </td>
                            </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
}
export default Todolist;