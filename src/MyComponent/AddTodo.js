import React, { useState } from "react";

function AddTodo(props) {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const submit = (e) => {
        e.preventDefault();
        if (!title || !desc) {
            alert("hiiiiiiii");
        }
        props.addTodo(title,desc);
    } 
    return (
        <div className="container my-3">
            <h3>Add a Todo</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title">Todo Title</label>
                    <input type="text" value={title} onChange={(e => { setTitle(e.target.value) })} className="form-control" id="title" aria-describedby="emailHelp" placeholder="Todo Title" />
                </div>

                <div className="mb-3">
                    <label htmlFor="desc">Todo Description</label>
                    <input type="text" value={desc} onChange={(e => { setDesc(e.target.value) })} className="form-control" id="desc" placeholder="Add Description" />
                </div>

                <button type="submit" className="btn btn-primary">Add Todo</button>
            </form>
        </div>
    )
}
export default AddTodo