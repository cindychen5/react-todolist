import React from "react"

export function TodoItem(props) {
    // console.log('props', props.item)
    return (
        <div className="todo-item">
            <input type="checkbox" checked={props.item.completed}/>
            <p>{props.item.text}</p>
        </div>
    )
}