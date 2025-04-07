import { useState } from "react";
import "./index.css"


function ToDoItem({todo, onDelete, onEdit}){

  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleEdit = () => {
    if(editText.trim() !== "") {
      onEdit(todo.id, editText);
      setIsEditing(false);
    }
  }


  return (
      <div className="todo-item">
        {isEditing ? (
         <>
         <input 
         value={editText}
         onChange={(e) => setEditText(e.target.value)}
        />
        <button onClick={handleEdit}>Save</button>

         </>
        ) : (
        <>
         <input type="checkbox" id="checkbox" />
        <span>{todo.text}</span>
        <button onClick={() => setIsEditing(true)}>Edit</button>
        <button onClick={onDelete} className="delete-btn">Delete</button>
        </>
        )}
      </div>
  )
}

export default ToDoItem;