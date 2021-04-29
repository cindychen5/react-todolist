import React from "react";
import todosData from './toDoData';
import {TodoItem} from "./components/ToDoItem";

export function ToDo() {

    const todoItems = todosData.map(item => <TodoItem key={item.id} item={item}/>)


    return (
        <div className="todo-list">
            {todoItems}

        </div>
    )
}