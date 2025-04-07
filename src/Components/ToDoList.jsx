import { useState } from "react";
import ToDoItem from "./ToDoItem";
import "./index.css"

function ToDoList({todos, onAddTodo, onDeleteTodo, onEditTodo}){

   const [inputValue, setInputValue] = useState("");

    function handleAdd(){
        if(inputValue.trim() !== ""){
            onAddTodo(inputValue);
            setInputValue("") //clear input
        }
    }
  
    return (
        <>
          {todos.map((todo) => (
          <ToDoItem key={todo.id}
          todo={todo} 
          onDelete={() => onDeleteTodo(todo.id)}
          onEdit = {onEditTodo}
          />
          ))}
          <input type="text" 
          value={inputValue}
          className="todo-input"
          placeholder="Enter A Task Here...."
          onChange={(e) => (setInputValue(e.target.value))}
          />
          <button onClick={handleAdd} className="add-btn">Add</button>
        </>
    )
}

export default ToDoList;