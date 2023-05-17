import { FaRegEdit, FaTrash } from "react-icons/fa";
import { IoCheckboxOutline, IoCheckbox } from "react-icons/io5";
import "../styles/todo.css";
import { useState } from "react";

function Todo({ todo, handleDelete, toggleDone, updateTodo, handleEditBtn, updateTodoHandler,handleCancel }) {
  const [editedTitle, setEditedTitle] = useState(todo.title);
  const [editedDes, setEditedDes] = useState(todo.des);
  

  console.log(editedTitle);
  console.log(editedDes);

  const handleUpdate = () => {
    updateTodoHandler(editedTitle, editedDes, todo.id);
  };

  const todoDoneStyles = {
    textDecoration: "line-through",
    textDecorationColor: "red",
  };

  return (
    <>
      <div
        className="todoItem box-shadow3"
        style={{ backgroundColor: todo.done ? "#FADBD8" : "#82DBD8" }}
      >
        <p className="todo-isEdited">{todo.isUpdated ? "*Edited*" : "" }</p>
        <div className="todoItem-content-checkbox">
          {todo.done ? (
            <IoCheckbox onClick={() => toggleDone(todo)} size={22} />
          ) : (
            <IoCheckboxOutline size={22} onClick={() => toggleDone(todo)} />
          )}
          <div
            className="todoItem-content"
            style={todo.done ? todoDoneStyles : null}
          >
            {todo.edit ? (
              <>
                <input
                  type="text"
                  onChange={(e) => setEditedTitle(e.target.value)}
                  value={editedTitle}
                />{" "}
                {" "}
                <input
                  type="text"
                  onChange={(e) => setEditedDes(e.target.value)}
                  value={editedDes}
                />{" "}
                <div className="todo-editBtn">
                <button onClick={handleUpdate}>Update</button>
                <button onClick={() =>handleCancel(todo.id)}>Cancel</button>
                </div>
              </>
            ) : (
              <>
                {" "}
                <h5>{todo.title}</h5> <p>{todo.des}</p>{" "}
              </>
            )}
          </div>
        </div>
        <div className="todoItem-btn">
          <FaRegEdit size={22} onClick={() => handleEditBtn(todo.id)} />
          <FaTrash onClick={() => handleDelete(todo.id)} size={22} />
        </div>
        <p className="todo-dateTime">{todo.date + " " + todo.time}</p>
      </div>
    </>
  );
}

export default Todo;
