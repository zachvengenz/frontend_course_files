import React from "react";

function Todotable(props: any) {
  return (
    <div className="Todotable">
      <table id="todotable" style={{ margin: "auto" }}>
        <tbody>
          {props.todos.map((todo: any, index: number) => (
            <tr key={index}>
              <td>{todo.desc}</td>
              <td>{todo.date}</td>
              <td>{todo.prio}</td>
              <td>
                <button onClick={() => props.deleteTodo(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default Todotable;
