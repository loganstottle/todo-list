import Todo from './Todo';

function TodoList({ todoList, setChecked, deleteTodo }) {
  let result = <span className="error">No Todos</span>

  if (todoList.length > 0) {
    result = todoList.map(todo => {
      return <Todo key={todo.id} todo={todo} setChecked={setChecked} deleteTodo={deleteTodo} />
    })
  }

  return (
    <div className="todo-list">
      {result}
    </div>
  )
}

export default TodoList;