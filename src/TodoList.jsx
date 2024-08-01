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
            Todo List Container
            <TodoItem title='This is my task 1' description='this is my description 1'/>
            <TodoItem title='This is my task 2' description='this is my description 2'/>
            <TodoItem title='This is my task 3' description='this is my description 3'/>
            <TodoItem title='This is my task 4' description='this is my description 4'/>
        </div>
    )
}

export default TodoList

