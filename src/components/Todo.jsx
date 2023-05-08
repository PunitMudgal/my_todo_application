import { FaRegEdit, FaTrash } from "react-icons/fa";
import { IoCheckboxOutline, IoCheckbox } from "react-icons/io5";
import "../styles/todo.css";

function Todo({ todo, handleDelete, toggleDone }) {

 const todoDoneStyles = {
  textDecoration: 'line-through',
  textDecorationColor: 'red',
 }

//  console.log(fullDate)

  return (
    <>
      <div className="todoItem box-shadow3" style={{backgroundColor: todo.done? '#FADBD8' : '#82DBD8'}} >
        <div className="todoItem-content-checkbox">
          {todo.done ? (
            <IoCheckbox onClick={() => toggleDone(todo)} size={22} />
          ) : (
            <IoCheckboxOutline
              size={22}
              onClick={() => toggleDone(todo)}
            />
          )}
          <div className="todoItem-content" style={todo.done? todoDoneStyles : null}>
            <h5>{todo.title}</h5>
            <p>{todo.des}</p>
          </div>
        </div>
        <div className="todoItem-btn">
          <FaRegEdit size={22} />
          <FaTrash onClick={() => handleDelete(todo.id)} size={22} />
        </div>
        <p className="todo-dateTime">{todo.date +" "+ todo.time}</p>
      </div>
    </>
  );
}

export default Todo;
