import "../styles/todoList.css";
import Todo from "./Todo";

export default function TodoList({
  todos,
  deleteTodo,
  toggleDone,
  // updateTodo,
  handleEditBtn,
  updateTodoHandler,
  handleCancel
}) {
  // const {todos} = TodoContexetUser();
  // const [savedTodos, setSavedTodos] = useState([]);

  return (
    <div className="todoList">
      <div className="todoList-content">
        <h1>TODO LIST</h1>
        <div className="todoList-list">
          {todos.length >= 1 ? (
            todos.map((todo) => (
              <Todo
                updateTodoHandler={updateTodoHandler}
                handleEditBtn={handleEditBtn}
                // updateTodo={updateTodo}
                todo={todo}
                key={todo.id}
                handleDelete={deleteTodo}
                toggleDone={toggleDone}
                handleCancel={handleCancel}
              />
            ))
          ) : (
            <p className="NoTodo">No todos to display</p>
          )}
        </div>
      </div>
    </div>
  );
}
