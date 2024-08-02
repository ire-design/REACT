import React from 'react';
// this is a child component of <TodoList />
function TodoItem({ todo }) {

  const handleDelete = () => {
    alert('i am to be deleted')
  }

  return (
    <div id='todoitem'>
      <p>Title: {todo.title} </p>
      <p>Description: {todo.description} </p>
      <>
        {todo.isComplete ? (
          <p>
            <s>task is complete</s>
          </p>
        ) : (
          <p>task is Incomplete</p>
        )}
        <button >Edit</button>
        <button onClick={handleDelete}>Delete</button>
      </>
    </div>
  );
}

export default TodoItem;