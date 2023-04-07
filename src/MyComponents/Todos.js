import React from 'react'
import TodoItem from './TodoItem';
import AddToDo from './AddToDo';
function Todos(props) {
    return (
        <div>
            <AddToDo></AddToDo>
            <br />
            {props.todos.length===0? "No todos to display": <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>
                            S.No
                        </th>
                        <th>
                            Title
                        </th>
                        <th>
                            Description
                        </th>
                        <th>
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {props.todos.map((todo) => {
                        return  (
                            <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} />
                        )
                    })}
                </tbody>
            </table>}
        </div>
    )
}

export default Todos
