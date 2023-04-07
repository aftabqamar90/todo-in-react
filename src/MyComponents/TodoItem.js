import React from 'react'

function TodoItem(props) {
    return (
        <>
            <tr>
                <td>
                    {props.todo.sno}    
                </td>
                <td>
                    {props.todo.title}
                </td>
                <td>
                    {props.todo.desc}
                </td>
                <td>
                    <button className="btn btn-sm btn-danger" onClick={()=>{props.onDelete(props.todo)}} >Delete</button>
                </td>
            </tr>
        </>
    )
}

TodoItem.propTypes = {}

export default TodoItem
