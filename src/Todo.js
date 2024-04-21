function Todo({ todo, setChecked, deleteTodo }) {
  return (
    <div className="todo">
      <input id={todo.id} className="checkbox" type="checkbox" onChange={() => setChecked(todo.id)} checked={todo.checked} />
      <label className="todo-label" htmlFor={todo.id}>{todo.name}</label>
      <div className="delete-button-container">
        <button onClick={() => deleteTodo(todo.id)} className="button delete-todo-button" >Delete</button>
      </div>
    </div>
  )
}

export default Todo;