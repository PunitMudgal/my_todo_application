import { useState, useEffect } from "react";
import "./App.css";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import {
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
  updateDoc,
} from "firebase/firestore";
import { db } from "./firebase";

function App() {
  const [todos, setTodos] = useState([]);
  const [alert, setAlert] = useState({ type: null, msg: null });

  //Read todos from firebase
  useEffect(() => {
    const q = query(collection(db, "todos"), orderBy("date", "asc"));
    const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
      let todosArray = [];
      QuerySnapshot.forEach((doc) => {
        todosArray.push({ ...doc.data(), id: doc.id });
      });
      setTodos(todosArray);
    });
    return () => unsubscribe();
  }, []);

  // Notification funtion
  const handleAlert = (type, msg) => {
    setAlert({ type, msg });
    setTimeout(() => {
      setAlert({ type: null, msg: null });
    }, 3000);
  };

  // delete todo
  const deleteTodo = async (todoId) => {
    await deleteDoc(doc(db, "todos", todoId));
    handleAlert("success", "Task Deleted");
  };

  // update todo
  const toggleDone = async (todo) => {
    await updateDoc(doc(db, "todos", todo.id), {
      done: !todo.done,
    });
  };

  return (
    <>
      <div className="app">
        <AddTodo alert={alert} handleAlert={handleAlert} />
        <TodoList
          todos={todos}
          deleteTodo={deleteTodo}
          toggleDone={toggleDone}
        />
      </div>
    </>
  );
}

export default App;
