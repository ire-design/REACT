import React from "react"
import TodoItem from "./TodoItem"

const TodoList = () => {

    const todos = [
        {
            id: 1,
            title: "todo one",
            description: "lorem ipsum lorem",
            isComplete: true,
        },
        {
            id: 1,
            title: "todo one",
            description: "lorem ipsum lorem",
            isComplete: false,
        }, 
        {
            id: 1,
            title: "todo one",
            description: "lorem ipsum lorem"
        }, 
        {
            id: 1,
            title: "todo one",
            description: "lorem ipsum lorem",
            isComplete: true,
        } 
    ];

    const todoItemsToRender  = todos.map(
        //todoItems 
    )

    return(
        <div id="todolist">
            <h2>Todo List Container</h2>
        </div>
    )
}

export default TodoList

