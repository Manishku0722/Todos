import React from "react";
function Todo_list({ todo, onDelete }) {
    return (
        <>
            <h4>{todo.title}</h4>
            <p>{todo.desc}</p>
            <button className="btn btn-sm btn-danger" onClick={() => {onDelete(todo) }}>Delete</button>
        </>
    )
}
export default Todo_list;