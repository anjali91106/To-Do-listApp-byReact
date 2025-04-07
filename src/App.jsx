import Header from "./Components/Header"
import ToDoList from "./Components/ToDoList"
import { useState } from "react"
import "./Components/index.css"

function App() {
  const [todos, setTodos] = useState([]);
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
;  }

  const addTodo = (text) => {
     const newTodo = {
      id: Date.now(),
      text,
      completed: false
     };

     setTodos([...todos, newTodo])
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const editTodo = (id, newText) => {
    setTodos(todos.map(todo => (todo.id === id ? {...todo, text: newText} : todo)));
  };

  return (
    <div className={`app ${theme}`} >
      <Header onToggleTheme={toggleTheme} currentTheme={theme}/>
      <ToDoList todos={todos} 
      onAddTodo={addTodo}
      onDeleteTodo={deleteTodo}
      onEditTodo = {editTodo}
      />
    </div>
  )
}

export default App
