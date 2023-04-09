import React from 'react'
import { useState } from 'react';
export default function AddToDo(props) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const submit = (e) => {
        e.preventDefault();
        if (!title || !description) {
            alert("Title or Description cannot be blank");
        }
        else {
            setTitle("");
            setDescription("");
            props.addTodo(title, description);
        }
    }

    return (
        <div>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <input type="text" placeholder='Title' className="form-control" value={title} onChange={(e) => setTitle(e.target
                        .value)} id="Title" name="Title" />
                </div>
                <div className="mb-3">
                    <input type="text" onChange={(e) => setDescription(e.target.value)} className="form-control" id="Description" value={description} placeholder='Description' />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}
