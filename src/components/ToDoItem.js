import React from "react";
import "../index.css"

export function ToDoItem() {
    const styles = {
        color: 'orange',
        backgroundColor: 'blue',
        display: 'inline-flex',
        flexDirection: 'column',
        margin: 5
    }


    return (
        <div className="todo-item">

            <input type="checkbox"/>
            <p>to do list item</p>
       </div>
    )
}