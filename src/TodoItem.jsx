import React from "react";
// A child component of the TodoItem

function TodoItem({title, description}){


    return ( 
        <div id="todoitem">
            <p>Title: {title} </p>
            <p>Description: {description}</p>
        </div>
    );
}
 
export default TodoItem;