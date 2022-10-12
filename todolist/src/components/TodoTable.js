import React from "react";

// code formatted with Prettier

function TodoTable(props) {
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <th>Description</th>
            <th>Date</th>
          </tr>
          {props.todos.map((todo, index) => (
            <tr key={index}>
              <td>{todo.description}</td>
              <td>{todo.date}</td>
              <td>
                <button onClick={() => props.deleteTodo(index)}>Delete</button>
              </td>
              <td>{todo.priority}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default TodoTable;
