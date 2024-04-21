import { useState } from 'react';
import './App.css';
import TodoList from './TodoList';

function App() {
  const [todoList, setTodoList] = useState([]);
  const [currentTodoName, setCurrentTodoName] = useState("");

  function addTodo() {
    if (!currentTodoName) return;

    const newTodo = {
      id: Math.random().toString(),
      checked: false,
      name: currentTodoName
    };

    setTodoList([...todoList, newTodo]);

    setCurrentTodoName("");
  }

  function setChecked(id) {
    const currentTodoList = [...todoList];

    const clickedTodo = currentTodoList.find(todo => todo.id === id);

    clickedTodo.checked = !clickedTodo.checked;

    setTodoList(currentTodoList);
  }

  function deleteTodo(id) {
    setTodoList(currentTodoList => currentTodoList.filter(todo => todo.id !== id));
  }

  return (
    <div className="App">
      <h2 className="name">Todo List</h2>
      <div className="main">
        <input type="text" value={currentTodoName} onChange={(e) => setCurrentTodoName(e.target.value)} className="add-todo-input" placeholder="Add Todo..." />
        <div className="button-container">
          <button onClick={addTodo} className="button add-todo-button" >Add</button>
        </div>
      </div>
      <TodoList todoList={todoList} setChecked={setChecked} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
