import { useState } from "react";
import "../styles/addTodo.css";
import Notification from "./Notification";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";

function AddTodo({ alert, handleAlert }) {
  const [todo, setTodo] = useState({ title: "", desc: "" });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setTodo((preVal) => {
      if (name === "title") {
        return { title: value, desc: preVal.desc };
      } else if (name === "description") {
        return {
          title: preVal.title,
          desc: value,
        };
      }
    });
  };

  // date & time
const fullDate = new Date();
const date = fullDate.getDate() + '/' + fullDate.getMonth() + '/' + fullDate.getFullYear();
const time = fullDate.getHours() + ':' + fullDate.getMinutes()

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      handleAlert("success", "Added to List");
      await addDoc(collection(db, "todos"), {
        title: todo.title,
        des: todo.desc,
        done: false,
        time: time,
        date: date,
      });
      setTodo({ title: "", desc: "" });
    } catch (err) {
      handleAlert("failed", err.message);
      console.log(err);
    }
  };

  return (
    <div className="todo box-shadow3">
      <h1>TODO APP</h1>
      <Notification alert={alert} />
      <div className="todo-content">
        <span>Title</span>
        <input
          onChange={handleChange}
          type="text"
          required
          name="title"
          placeholder="Title"
          value={todo.title}
        />
        <span>Description</span>
        <input
          required
          onChange={handleChange}
          type="text"
          name="description"
          placeholder="Description..."
          value={todo.desc}
        />
        <button onClick={handleSubmit} className="box-shadow3">
          Add Todo
        </button>
      </div>
    </div>
  );
}

export default AddTodo;
