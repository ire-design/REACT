import React from "react"
import TodoItem from "./TodoItem"

const TodoList = () => {

    const todos = [
        {id: 1,title: "todo one",description: "lorem ipsum lorem"},
        {id: 1,title: "todo one",description: "lorem ipsum lorem"}, 
        {id: 1,title: "todo one",description: "lorem ipsum lorem"}, 
        {id: 1,title: "todo one",description: "lorem ipsum lorem"} 
    ];

    return(
        <div id="todolist">
            <div>Todo List Container</div>
            <TodoItem/>
            <TodoItem/>
            <TodoItem/>
            <TodoItem/>
        </div>
    )
}

export default TodoList

