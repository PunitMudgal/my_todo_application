import { createContext, useContext, useState } from "react";

const TodoContext = createContext();

export const TodoContextProvider = ({ children }) => {
  // const [todo, setTodo] = useState([{ title: "", desc: "" }]);
  const [alert, setAlert] = useState({ type: null, msg: null });

  const handleAlert = (type, msg) => {
    setAlert({ type, msg });
    setTimeout(() => {
      setAlert({ type: null, msg: null });
    }, 3000);
  };

  return (
    <TodoContext.Provider value={{ handleAlert, alert }}>
      {children}
    </TodoContext.Provider>
  );
};

export const TodoContexetUser = () => {
  useContext(TodoContext);
};
