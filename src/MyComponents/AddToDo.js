import React from 'react'

export default function AddToDo() {
    return (
        <div>
            <form>
                <div className="mb-3">
                    <input type="text" placeholder='Title' className="form-control" id="Title" name="Title" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <input type="text" className="form-control" id="Description" placeholder='Description'/>
                </div>
                <button type="button" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}
