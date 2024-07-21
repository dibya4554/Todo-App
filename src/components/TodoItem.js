import React, { useState } from 'react';

const TodoItem = ({ todo, updateTodo, deleteTodo, toggleComplete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(todo.title);

  const handleUpdate = (e) => {
    e.preventDefault();
    updateTodo({ ...todo, title: newTitle });
    setIsEditing(false);
  };

  return (
    <div className="todo-item">
      {isEditing ? (
        <form onSubmit={handleUpdate}>
          <input 
            type="text" 
            value={newTitle} 
            onChange={(e) => setNewTitle(e.target.value)} 
          />
          <button type="submit">Save</button>
        </form>
      ) : (
        <div>
          <input 
            type="checkbox" 
            checked={todo.completed} 
            onChange={() => toggleComplete(todo.id)} 
          />
          <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
            {todo.title}
          </span>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        </div>
      )}
    </div>
  );
};

export default TodoItem;
